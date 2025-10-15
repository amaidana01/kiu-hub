"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Info, Play, Mail, ArrowLeft, Download } from "lucide-react";

export default function KiuHub({ profile }: { profile: any }) {
  const [view, setView] = useState("home");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const goBack = () => {
    setView("home");
    setContactSubmitted(false);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#180B3A] via-[#2E0E73] to-[#0C0E2B]
                 text-white flex flex-col items-center p-4 sm:p-6 text-[1rem] sm:text-[1.05rem]
                 overflow-y-auto overscroll-contain"
    >
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
            <p className="text-xs text-gray-400">
              Empowering aviation with intelligent technology
            </p>
            <a
              href={profile.vcard}
              download
              className="flex items-center justify-center gap-2 text-[#00BFFF] text-xs hover:underline mt-2"
            >
              <Download className="w-3 h-3" />
              Download my vCard
            </a>
          </div>

          {/* MAIN CARDS */}
          <div className="space-y-3">
            {/* ABOUT FIRST */}
            <Card
              onClick={() => setView("about")}
              className="cursor-pointer bg-[#1B1346] hover:bg-[#241763] transition-all"
            >
              <CardContent className="flex items-center p-3 sm:p-4 gap-4">
                <div className="rounded-xl bg-[#3A2A8C] p-2">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                </div>
                <div className="text-left">
                  <h2 className="font-medium text-sm sm:text-base">
                    About KIU & Solutions
                  </h2>
                  <p className="text-xs text-gray-300">
                    KIU is a global technology company specializing in digital
                    transformation for the aviation and travel industry. We
                    deliver cloud-based, AI-powered solutions that empower
                    airlines and travel businesses to operate smarter, faster,
                    and more efficiently.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AI BOT SECOND */}
            <Card
              onClick={() => setView("demo")}
              className="cursor-pointer bg-[#1B1346] hover:bg-[#241763] transition-all"
            >
              <CardContent className="flex items-center p-3 sm:p-4 gap-4">
                <div className="rounded-xl bg-[#3A2A8C] p-2">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700]" />
                </div>
                <div className="text-left">
                  <h2 className="font-medium text-sm sm:text-base">
                    Watch our flagship AI Bot — KIUT
                  </h2>
                  <p className="text-xs text-gray-300">
                    Experience how KIU revolutionizes customer interaction
                    through artificial intelligence, enabling seamless,
                    multilingual, and personalized communication.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CONTACT THIRD */}
            <Card
              onClick={() => setView("contact")}
              className="cursor-pointer bg-[#1B1346] hover:bg-[#241763] transition-all"
            >
              <CardContent className="flex items-center p-3 sm:p-4 gap-4">
                <div className="rounded-xl bg-[#3A2A8C] p-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#7CFC00]" />
                </div>
                <div className="text-left">
                  <h2 className="font-medium text-sm sm:text-base">
                    Contact & Connect
                  </h2>
                  <p className="text-xs text-gray-300">
                    Share your details with KIU’s team and discover how we can
                    collaborate to shape the future of air travel.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FOOTER */}
            <p className="text-[10px] text-gray-500 text-center mt-2">
              © 2025 KIU System Solutions. All rights reserved.
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
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>

          <h2 className="text-lg font-semibold text-white">
            About KIU & Solutions
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            KIU System Solutions is a global technology company dedicated to
            empowering the aviation and travel industries through digital
            innovation. With more than two decades of experience, KIU provides
            end-to-end, cloud-based solutions designed to enhance operational
            efficiency, customer experience, and revenue optimization for
            airlines and travel businesses worldwide.
          </p>

          <p className="text-sm text-gray-300 leading-relaxed">
            Our suite of products covers Passenger Service Systems (PSS),
            e-commerce, distribution, operations, and AI-powered automation.
            KIU’s technology is scalable, accessible, and future-ready —
            enabling our partners to grow seamlessly in an evolving digital
            landscape.
          </p>

          <p className="text-sm text-gray-300 leading-relaxed">
            At the forefront of this innovation stands{" "}
            <strong className="text-white">KIUT</strong>, our flagship
            conversational AI assistant, delivering intelligent, multilingual
            interactions that transform how airlines and passengers connect.
          </p>

          <div className="pt-4">
            <a
              href="https://www.kiusys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00BFFF] text-sm hover:underline"
            >
              Visit our official website
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
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>

          <h2 className="text-lg font-semibold text-white mb-2">
            KIUT — Our Flagship AI Bot
          </h2>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            KIUT is KIU’s AI-powered virtual assistant, designed to redefine how
            airlines and travel companies engage with their customers. Through
            conversational intelligence, it provides real-time support, sales,
            and service across multiple digital channels — from booking to
            post-flight interactions.
          </p>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/E1_iYb7N-VU"
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
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>

          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Contact & Connect
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Share your details and our team will reach out shortly.
          </p>

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
                placeholder="Full name"
                name="name"
              />
              <input
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm"
                placeholder="Company"
                name="company"
              />
              <input
                required
                type="email"
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm"
                placeholder="Email"
                name="email"
              />
              <input
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm"
                placeholder="Country"
                name="country"
              />
              <select
                name="interest"
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white outline-none text-sm"
              >
                <option>AI Solutions</option>
                <option>GDS / Distribution</option>
                <option>E-commerce</option>
                <option>Operations</option>
                <option>Partnerships</option>
              </select>
              <textarea
                rows={3}
                className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm"
                placeholder="Message (optional)"
                name="message"
              />

              <Button
                type="submit"
                className="w-full bg-[#00BFFF] text-[#0B0B28] hover:opacity-90 text-sm"
              >
                Send to KIU
              </Button>
              <p className="text-[10px] text-gray-500 text-center">
                Message will be sent directly to{" "}
                <span className="text-gray-300 font-medium">
                  Commercial Team
                </span>
                .
              </p>
            </form>
          ) : (
            <div className="text-center bg-[#14103A] rounded-2xl p-6 ring-1 ring-white/10">
              <h3 className="text-lg font-semibold mb-2">
                Thanks for connecting!
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Your message has been received. Our Commercial team will get
                back to you shortly.
              </p>
              <a
                href={profile.vcard}
                download
                className="inline-flex items-center justify-center bg-[#00BFFF] text-[#0B0B28] font-semibold px-4 py-2 rounded-xl hover:opacity-90 text-sm"
              >
                <Download className="w-4 h-4 mr-2" /> Download my vCard
              </a>
              <div className="mt-4">
                <Button
                  onClick={goBack}
                  className="bg-[#3B257A] text-white hover:opacity-90 text-sm"
                >
                  Back to Hub
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
