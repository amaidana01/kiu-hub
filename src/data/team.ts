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
    linkedin: "https://www.linkedin.com/in/leandrosanchez/",
    qr: "/qrs/QR_LeandroSanchez.png",
  },
  anardi: {
    name: "Alejandro Nardi",
    role: "COO",
    email: "anardi@kiusys.com",
    vcard: "/Alejandro_Nardi.vcf",
    linkedin: "https://www.linkedin.com/in/alejandro-nardi/",
    qr: "/qrs/QR_AlejdnroNardi.png",
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
};
