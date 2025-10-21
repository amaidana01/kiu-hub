## KIU Hub

Perfil interactivo de miembros de KIU con descarga de vCard, contenido informativo, video demo y formulario de contacto integrado.

### Índice
- [Qué es](#qué-es)
- [Stack y arquitectura](#stack-y-arquitectura)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Rutas y flujo de la app](#rutas-y-flujo-de-la-app)
- [Datos del equipo](#datos-del-equipo)
- [Descarga de vCard](#descarga-de-vcard)
- [Formulario de contacto (email)](#formulario-de-contacto-email)
- [Internacionalización](#internacionalización)
- [UI/UX y estilos](#uiux-y-estilos)
- [Configuración y ejecución](#configuración-y-ejecución)
- [Variables de entorno](#variables-de-entorno)
- [Agregar un nuevo perfil](#agregar-un-nuevo-perfil)
- [Notas de seguridad](#notas-de-seguridad)
- [Troubleshooting](#troubleshooting)
- [Licencia](#licencia)

---

## Qué es
Un micro-sitio por-perfil que:
- Muestra nombre, rol, QR y acciones.
- Permite descargar la vCard del perfil.
- Explica productos de KIU (About).
- Muestra un video demo del asistente KIUT (Demo).
- Incluye formulario de contacto con envío de email.

Se accede por ruta dinámica: `/{user}` (ej.: `/amaidana`).

## Stack y arquitectura
- **Next.js 14 (App Router + Pages API)** con TypeScript.
- **TailwindCSS 3** para estilos.
- **Framer Motion** para animaciones.
- **Vercel Analytics** para métricas.
- **Nodemailer** para envío de correos vía SMTP.
- Mezcla de:
  - App Router para UI y API de vCard: `src/app/**`
  - Pages Router para API de email: `pages/api/send-email.ts`

## Estructura del proyecto
```
src/
  app/
    [user]/page.tsx          # Página dinámica por usuario (carga perfil y renderiza UI)
    api/vcard/route.ts       # API para servir archivos .vcf desde /public
    layout.tsx               # Layout raíz, setea <html lang> por headers
  components/
    KiuHub.tsx               # Componente principal con vistas Home / About / Demo / Contact
    ui/
      button.tsx             # UI básica (Button)
      card.tsx               # UI básica (Card, CardContent)
  data/
    team.ts                  # Fuente de verdad de perfiles (slug -> datos)
  styles/
    globals.css              # Estilos globales + gradiente y ajustes mobile
  translations/
    en.ts, es.ts             # Textos en inglés y español

public/
  *.vcf                      # vCards por usuario
  qrs/*.png                  # QR por usuario
  kiu-logo.svg               # Logotipo
  KIU_Website_QR.png         # QR del sitio
```

## Rutas y flujo de la app
- `/{user}` (`src/app/[user]/page.tsx`)
  - Busca el perfil en `team.ts` por `params.user`.
  - Si existe, renderiza `KiuHub` con el `profile`.
  - Si no existe, muestra “User not found”.

- Vistas dentro de `KiuHub`:
  - **Home**: nombre, rol, botón para descargar vCard y 3 tarjetas: About, Demo, Contact.
  - **About**: 3 párrafos informativos y enlace al sitio corporativo.
  - **Demo**: iframe de YouTube con el video de KIUT.
  - **Contact**: formulario y, tras enviar, pantalla de agradecimiento con acceso a vCard.

## Datos del equipo
- Fuente de verdad: `src/data/team.ts`.
- Clave del objeto = `slug` de la ruta (ej.: `amaidana`).
- Campos:
  - `name`, `role`, `email`, `vcard` (ruta en `public`), `linkedin?`, `qr?`.

## Descarga de vCard
- Endpoint: `GET /api/vcard?user=<Nombre_Archivo_Sin_Extensión>`
- Implementación: `src/app/api/vcard/route.ts`.
- Lee el `.vcf` desde `public/` y lo entrega con `Content-Type: text/vcard` y `Content-Disposition: inline` (previsualizable en navegador).

Ejemplo:
- `profile.vcard = "/Alejandro_Maidana.vcf"`
- El componente genera el link a: `/api/vcard?user=Alejandro_Maidana`

## Formulario de contacto (email)
- Frontend: vista Contact en `src/components/KiuHub.tsx`.
- POST a `/api/send-email` con JSON:
  - `name` (required), `email` (required), `company?`, `country?`, `interest?`, `message?`.
- Backend (SMTP): `pages/api/send-email.ts` con **Nodemailer** (Gmail/Google Workspace).
- Requiere variables `MAIL_USER` y `MAIL_PASS` (app password).
- Destinatarios configurados en el archivo (puedes agregar más).

## Internacionalización
- **SSR**: `src/app/layout.tsx` detecta `accept-language` y setea `<html lang="es|en">`.
- **CSR**: `KiuHub` detecta `navigator.language` en `useEffect` y:
  - Ajusta idioma (en/es) del contenido traducido.
  - Evita problemas de hydration con un flag `isClient`.

Conmutador manual ES/EN en la UI (botón superior derecho).

## UI/UX y estilos
- Estilos base y gradiente corporativo en `src/styles/globals.css`.
- Tailwind con tema extendido (colores KIU y gradiente).
- Componentes `Button`, `Card`, `CardContent` con estilos consistentes.
- Animaciones sutiles con **Framer Motion**.
- Optimizaciones mobile:
  - Ajustes de scroll y overscroll.
  - Prevención de zoom en inputs iOS.
  - Safe areas y smooth scroll.

## Configuración y ejecución
Requisitos:
- Node.js 18+ y npm.

Instalación:
```bash
npm install
```

Desarrollo:
```bash
npm run dev
```

Build y producción:
```bash
npm run build
npm start
```

## Variables de entorno
Crear `.env.local` en la raíz:
```bash
MAIL_USER="usuario@kiusys.com"
MAIL_PASS="contraseña_de_aplicación_de_gmail"
```

- `MAIL_PASS` debe ser una “App Password” de Google (no la contraseña normal).

## Agregar un nuevo perfil
1. Agregar entrada en `src/data/team.ts` con el `slug` deseado:
   - `name`, `role`, `email`, `vcard`, `linkedin?`, `qr?`.
2. Copiar el archivo `.vcf` a `public/` (el nombre debe coincidir con `vcard`).
3. (Opcional) Agregar QR a `public/qrs/` y referenciarlo en `team.ts`.
4. Acceder con `/{slug}` (ej.: `/fsanchez`).

## Notas de seguridad
- No commitear `.env.local`.
- Usar contraseñas de aplicación (Gmail) para `MAIL_PASS`.
- Validar/limitar destinatarios en `pages/api/send-email.ts`.
- Sanitizar inputs si se agregan más campos complejos.

## Troubleshooting
- “User not found”: verificar `slug` y que exista en `team.ts`.
- vCard 404: confirmar que el `.vcf` existe en `public/` y que el parámetro `user` llega sin extensión.
- Email 500:
  - Revisar `MAIL_USER`/`MAIL_PASS`.
  - Verificar que la cuenta permita SMTP (Gmail Workspace).
- Mismatch de idioma: el SSR setea `<html lang>` por headers y el cliente ajusta luego; esto es esperado.

## Licencia
© 2025 KIU System Solutions. Todos los derechos reservados.
