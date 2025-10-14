export type TeamProfile = {
  name: string;
  role: string;
  email: string;
  vcard: string;
  linkedin?: string;
  qr?: string;
};

export const team: Record<string, TeamProfile> = {
  amaidana: {
    name: "Alejandro Maidana",
    role: "QA Manager",
    email: "amaidana@kiusys.com",
    vcard: "/Alejandro_Maidana.vcf",
    linkedin: "https://www.linkedin.com/in/alejandro-maidana-601b724/",
    qr: "/qrs/QR_AlejandroMaidana.png",
  },
  jmarek: {
    name: "Juan Manuel Marek",
    role: "DEV Manager",
    email: "jmarek@kiusys.com",
    vcard: "/Juanma_Marek.vcf",
    linkedin: "https://www.linkedin.com/in/juanmanuelmarek/",
    qr: "/qrs/QR_JuanManuelMarek.png",
  },
  lsanchez: {
    name: "Leandro Sanchez",
    role: "CTO",
    email: "lsanchez@kiusys.com",
    vcard: "/Leandro_Sanchez.vcf",
    linkedin: "https://www.linkedin.com/in/lxsanchez/",
    qr: "/qrs/QR_LeandroSanchez.png",
  },
  anardi: {
    name: "Alejandro Nardi",
    role: "COO",
    email: "anardi@kiusys.com",
    vcard: "/Alejandro_Nardi.vcf",
    linkedin: "https://www.linkedin.com/in/alejandro-nardi/",
    qr: "/qrs/QR_AlejandroNardi.png",
  },
  erozenberg: {
    name: "Ezequiel Rozenberg",
    role: "Operations Manager",
    email: "erozenberg@kiusys.com",
    vcard: "/Ezequiel_Rozenberg.vcf",
    linkedin: "https://www.linkedin.com/in/ezequielrozenberg/",
    qr: "/qrs/QR_EzequielRozenberg.png",
  },
  adesimone: {
    name: "Alberto Desimone",
    role: "CEO",
    email: "adesimone@kiusys.com",
    vcard: "/Alberto_Desimone.vcf",
    linkedin: "https://www.linkedin.com/in/alberto-desimone-71441313b/",
    qr: "/qrs/QR_AlbertoDesimone.png",
  },
  wprocofio: {
    name: "Walter Procofio",
    role: "CIO",
    email: "wprocofio@kiusys.com",
    vcard: "/Walter_Procofio.vcf",
    linkedin: "https://www.linkedin.com/in/walter-procofio-5826b9b/",
    qr: "/qrs/QR_WalterProcofio.png",
  },
  fsanchez: {
    name: "Facundo Sanchez",
    role: "Tech Lead",
    email: "fsanchez@kiusys.com",
    vcard: "/Facundo_Sanchez.vcf",
    linkedin: "https://www.linkedin.com/in/facundohsanchez/",
    qr: "/qrs/QR_FacundoSanchez.png",
  },
  dspinosa: {
    name: "Damián Spinosa",
    role: "Software Architect",
    email: "dspinosa@kiusys.com",
    vcard: "/Damina_Spinosa.vcf",
    linkedin: "https://www.linkedin.com/in/damian-spinosa/",
    qr: "/qrs/QR_DamianSpinosa.png",
  },
  crotenberg: {
    name: "Carlos Rotenberg",
    role: "DevOps Manager",
    email: "crotenberg@kiusys.com",
    vcard: "/Carlos_Rotenberg.vcf",
    linkedin: "https://www.linkedin.com/in/crotenberg/",
    qr: "/qrs/QR_CarlosRotenberg.png",
  },
  msanchez: {
    name: "Martín Sanchez",
    role: "InfoSec Specialist",
    email: "msanchez@kiusys.com",
    vcard: "/Martin_Sanchez.vcf",
    linkedin: "https://www.linkedin.com/in/martin-sanchez-hirsch/",
    qr: "/qrs/QR_MartinSanchez.png",
  },
  mcastilla: {
    name: "Matías Castilla",
    role: "Tech Lead",
    email: "mcastilla@kiusys.com",
    vcard: "/Matias_Castilla.vcf",
    linkedin: "https://www.linkedin.com/in/matias-castilla-2282447/",
    qr: "/qrs/QR_MatiasCastilla.png",
  },
};
