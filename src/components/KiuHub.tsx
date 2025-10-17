"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Info, Play, Mail, ArrowLeft, Download } from "lucide-react";
import { en } from "../translations/en";
import { es } from "../translations/es";

export default function KiuHub({ profile }: { profile: any }) {
  // --- Fix Hydration ---
  const [isClient, setIsClient] = useState(false);
  const [view, setView] = useState("home");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [lang, setLang] = useState<"en" | "es">("en");

  useEffect(() => {
    setIsClient(true);
    const userLang = navigator.language.startsWith("es") ? "es" : "en";
    setLang(userLang);
  }, []);
  // ----------------------

  if (!isClient) return null;
  const t = lang === "es" ? es : en;

  const goBack = () => {
    setView("home");
    setContactSubmitted(false);
  };

  return (
    <div className="relative h-[100dvh] overflow-y-auto overscroll-none bg-gradient-to-b from-[#180B3A] via-[#2E0E73] to-[#0C0E2B] text-white flex flex-col items-center p-4 sm:p-6 text-[1rem] sm:text-[1.05rem]">
      
      {/* 🌐 Selector de idioma arriba a la derecha */}
<div className="absolute top-4 right-4">
  <button
    onClick={() => setLang(lang === "en" ? "es" : "en")}
    className="text-xs sm:text-sm font-medium bg-[#3B257A] text-white px-3 py-1.5 rounded-full hover:bg-[#4A2CA2] transition shadow-[0_0_8px_#3B257A55]"
  >
    {lang === "en" ? "ES" : "EN"}
  </button>
</div>
      {/* HOME */}
      {view === "home" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-sm space-y-6 text-center"
        >
          {/* HEADER */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src="/kiu-logo.svg"
              alt="KIU Logo"
              className="w-48 sm:w-60 mx-auto mb-4"
            />

            <h1 className="text-lg sm:text-xl font-semibold text-white">
              {profile.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300">
              {profile.role} | KIU System Solutions
            </p>
            <p className="text-xs text-gray-400">{t.tagline}</p>
            <a
              href={`/api/vcard?user=${profile.vcard
                .replace("/", "")
                .replace(".vcf", "")}`}
              className="inline-flex items-center justify-center bg-[#9E64FF] text-[#0B0B28] font-semibold px-4 py-2 rounded-xl hover:opacity-90 text-sm"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/api/vcard?user=${profile.vcard
                  .replace("/", "")
                  .replace(".vcf", "")}`;
              }}
            >
              <Download className="w-4 h-4 mr-2" /> {t.downloadVcard}
            </a>
          </div>

          {/* MAIN CARDS */}
          <div className="space-y-3">
            {/* ABOUT FIRST */}
            <Card
              onClick={() => setView("about")}
              className="cursor-pointer bg-[#1B1346] hover:bg-[#2D1A7A] shadow-[0_0_10px_#00BFFF33] transition-all duration-300"
            >
              <CardContent className="flex items-center p-3 sm:p-4 gap-4">
                <div className="rounded-xl bg-[#3A2A8C] p-2">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                </div>
                <div className="text-left">
                  <h2 className="font-medium text-sm sm:text-base">
                    {t.aboutTitle}
                  </h2>
                  <p className="text-xs text-gray-300">{t.aboutText}</p>
                  <p className="text-[12px] text-[#BF98FF] mt-1">
                    {t.tapExplore}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AI BOT SECOND */}
            <Card
              onClick={() => setView("demo")}
              className="cursor-pointer bg-[#1B1346] hover:bg-[#2D1A7A] shadow-[0_0_10px_#FFD70033] transition-all duration-300"
            >
              <CardContent className="flex items-center p-3 sm:p-4 gap-4">
                <div className="rounded-xl bg-[#3A2A8C] p-2">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700]" />
                </div>
                <div className="text-left">
                  <h2 className="font-medium text-sm sm:text-base">
                    {t.aiTitle}
                  </h2>
                  <p className="text-xs text-gray-300">{t.aiText}</p>
                  <p className="text-[12px] text-[#BF98FF] mt-1">
                    {t.tapExplore}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CONTACT THIRD */}
            <Card
              onClick={() => setView("contact")}
              className="cursor-pointer bg-[#1B1346] hover:bg-[#2D1A7A] shadow-[0_0_10px_#7CFC0033] transition-all duration-300"
            >
              <CardContent className="flex items-center p-3 sm:p-4 gap-4">
                <div className="rounded-xl bg-[#3A2A8C] p-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#7CFC00]" />
                </div>
                <div className="text-left">
                  <h2 className="font-medium text-sm sm:text-base">
                    {t.contactTitle}
                  </h2>
                  <p className="text-xs text-gray-300">{t.contactSubtitle}</p>
                  <p className="text-[12px] text-[#BF98FF] mt-1">
                    {t.tapExplore}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FOOTER */}
            <p className="text-[10px] text-gray-500 text-center mt-2">
              {t.footer}
            </p>
          </div>
        </motion.div>
      )}

      {/* ABOUT VIEW */}
      {view === "about" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-4 max-w-sm"
        >
          <Button
            onClick={() => setView("home")}
            className="mb-4 bg-[#3B257A] text-white hover:opacity-90 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {t.back}
          </Button>

          <h2 className="text-lg font-semibold text-white">{t.aboutTitle}</h2>

          <p className="text-sm text-gray-300 leading-relaxed">{t.aboutBody1}</p>
          <p className="text-sm text-gray-300 leading-relaxed">{t.aboutBody2}</p>
          <p className="text-sm text-gray-300 leading-relaxed">{t.aboutBody3}</p>


          <div className="pt-4">
            <a
              href="https://www.kiusys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#BF98FF] text-sm hover:underline"
            >
              {t.website}
            </a>
          </div>
        </motion.div>
      )}

      {/* DEMO VIEW */}
      {view === "demo" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left max-w-sm"
        >
          <Button
            onClick={() => setView("home")}
            className="mb-4 bg-[#3B257A] text-white hover:opacity-90 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {t.back}
          </Button>

          <h2 className="text-lg font-semibold text-white mb-2">
            {t.aiTitle}
          </h2>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            {t.aiBody}
          </p>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YBQ9MWszCIM"
              title="KIUT AI Demo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      )}

      {/* CONTACT VIEW */}
      {view === "contact" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm pb-10"
        >
          <Button
            className="mb-4 bg-[#3B257A] text-white text-sm"
            onClick={goBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {t.back}
          </Button>

          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            {t.contactTitle}
          </h2>
          <p className="text-sm text-gray-300 mb-4">{t.contactSubtitle}</p>

          {!contactSubmitted ? (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = Object.fromEntries(new FormData(form).entries());

                try {
                  const response = await fetch("/api/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  if (response.ok) {
                    setContactSubmitted(true);
                    form.reset();
                  } else {
                    alert("Error sending email, please try again.");
                  }
                } catch (error) {
                  alert("Network error while sending message.");
                }
              }}
              className="space-y-3"
            >
              <input
                required
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm"
                placeholder={t.formName}
                name="name"
              />
              <input
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm"
                placeholder={t.formCompany}
                name="company"
              />
              <input
                required
                type="email"
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm"
                placeholder={t.formEmail}
                name="email"
              />
              <input
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm"
                placeholder={t.formCountry}
                name="country"
              />
              <textarea
                rows={3}
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm"
                placeholder={t.formMessage}
                name="message"
              />

              <Button
                type="submit"
                className="w-full bg-[#00BFFF] hover:opacity-90 text-sm"
              >
                {t.send}
              </Button>
            </form>
          ) : (
            <div className="text-center bg-[#14103A] rounded-2xl p-6 ring-1 ring-white/10">
              <h3 className="text-lg font-semibold mb-2">{t.thanksTitle}</h3>
              <p className="text-sm text-gray-300 mb-4">{t.thanksBody}</p>
              <a
                href={`/api/vcard?user=${profile.vcard
                  .replace("/", "")
                  .replace(".vcf", "")}`}
                className="inline-flex items-center justify-center bg-[#9E64FF] text-[#0B0B28] font-semibold px-4 py-2 rounded-xl hover:opacity-90 text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/api/vcard?user=${profile.vcard
                    .replace("/", "")
                    .replace(".vcf", "")}`;
                }}
              >
                <Download className="w-4 h-4 mr-2" /> {t.downloadVcard}
              </a>

              <div className="mt-4">
                <Button
                  onClick={goBack}
                  className="bg-[#3B257A] text-white hover:opacity-90 text-sm"
                >
                  {t.backToHub}
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
