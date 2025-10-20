import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { headers } from "next/headers";

export const metadata = {
  title: "KIU Hub",
  description: "Interactive KIU Hub profile – empowering aviation with intelligent technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🔹 Detectamos idioma desde el header del navegador (SSR-safe)
  const headersList = headers();
  const acceptLang = headersList.get("accept-language") || "";
  const isSpanish = acceptLang.toLowerCase().startsWith("es");
  const lang = isSpanish ? "es" : "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="antialiased bg-[#0C0E2B] text-white">
        {/* Contenido principal */}
        {children}

        {/* 📊 Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
