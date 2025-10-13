import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Play, Info, Mail, ArrowLeft, Download } from "lucide-react";
import { useState } from "react";

export default function KiuHub() {
  const [view, setView] = useState("home");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const goBack = () => {
    setView("home");
    setContactSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2C1A63] to-[#120C33] text-white flex flex-col items-center justify-center p-6 space-y-6">
      {/* HOME SCREEN */}
      {view === "home" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-sm space-y-6 text-center"
        >
          {/* Intro */}
          <div>
            <img src="/kiu-logo.svg" alt="KIU Logo" className="mx-auto w-40 mb-4" />
            <h1 className="text-2xl font-bold">Alejandro Maidana</h1>
            <p className="text-lg text-gray-300">QA Manager | KIU System Solutions</p>
            <p className="mt-3 text-sm text-gray-400 italic">
              Empowering aviation with intelligent technology
            </p>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <Card onClick={() => setView("demo")} className="cursor-pointer hover:opacity-90">
              <CardContent className="flex items-center p-4 space-x-4">
                <Play className="w-6 h-6 text-[#FFD700]" />
                <div>
                  <h2 className="font-semibold text-lg">Watch AI Bot Demo</h2>
                  <p className="text-sm text-gray-300">
                    Experience KIUT, our conversational AI assistant.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card onClick={() => setView("about")} className="cursor-pointer hover:opacity-90">
              <CardContent className="flex items-center p-4 space-x-4">
                <Info className="w-6 h-6 text-[#00BFFF]" />
                <div>
                  <h2 className="font-semibold text-lg">About KIU & Solutions</h2>
                  <p className="text-sm text-gray-300">
                    Learn more about our platform and services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card onClick={() => setView("contact")} className="cursor-pointer hover:opacity-90">
              <CardContent className="flex items-center p-4 space-x-4">
                <Mail className="w-6 h-6 text-[#7CFC00]" />
                <div>
                  <h2 className="font-semibold text-lg">Contact & Connect</h2>
                  <p className="text-sm text-gray-300">
                    Share your details with KIU's team.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <footer className="text-center text-xs text-gray-500 mt-8">
            © 2025 KIU System Solutions. All rights reserved.
          </footer>
        </motion.div>
      )}

      {/* AI BOT DEMO */}
      {view === "demo" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm text-center"
        >
          <Button onClick={goBack} className="mb-4 bg-[#3B257A] text-white">
            <ArrowLeft className="inline w-4 h-4 mr-1" /> Back
          </Button>
          <h2 className="text-xl font-semibold mb-2">KIUT – AI Concierge Demo</h2>
          <p className="text-sm text-gray-300 mb-4">
            Watch how our AI bot handles real-time customer interactions and sales assistance.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/E1_iYb7N-VU"
              title="KIU AI Bot Demo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      )}

      {/* ABOUT KIU */}
      {view === "about" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm text-left"
        >
          <Button onClick={goBack} className="mb-4 bg-[#3B257A] text-white">
            <ArrowLeft className="inline w-4 h-4 mr-1" /> Back
          </Button>
          <h2 className="text-xl font-semibold mb-2 text-center">About KIU System Solutions</h2>
          <p className="text-sm text-gray-300 mb-4 text-center italic">
            Empowering aviation with intelligent technology
          </p>
          <p className="text-sm text-gray-300 mb-4">
            KIU provides integrated technological solutions for the aviation and travel industries,
            offering PSS, GDS, e-commerce, and management tools tailored for airlines, travel
            agencies, and tourism companies worldwide.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>
              <strong>KIU GDS / Multi-hosting:</strong> Airline content distribution to 45,000+
              agencies in 80+ countries.
            </li>
            <li>
              <strong>KIUT (AI Concierge):</strong> Conversational AI for sales and customer service
              across digital channels.
            </li>
            <li>
              <strong>Post-Booking RMS:</strong> Revenue management and optimization tools.
            </li>
            <li>
              <strong>E-commerce & Cargo Solutions:</strong> Streamlining airline sales and
              logistics.
            </li>
            <li>
              <strong>Analytics & BI:</strong> Business intelligence for smarter decision-making.
            </li>
          </ul>
          <div className="mt-6 text-center">
            <a
              href="https://www.kiusys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00BFFF] underline text-sm"
            >
              Visit KIU Website
            </a>
          </div>
        </motion.div>
      )}

      {/* CONTACT & CONNECT */}
      {view === "contact" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <Button onClick={goBack} className="mb-4 bg-[#3B257A] text-white">
            <ArrowLeft className="inline w-4 h-4 mr-1" /> Back
          </Button>
          <h2 className="text-xl font-semibold mb-2 text-center">Contact & Connect</h2>
          <p className="text-sm text-gray-300 mb-4 text-center">
            Share your details and our team will reach out.
          </p>

          {!contactSubmitted ? (
            <form
              onSubmit={() => setContactSubmitted(true)}
              action="https://formspree.io/f/xldpowaa"
              method="POST"
              className="space-y-3"
            >
              <input type="text" name="_gotcha" className="hidden" />
              <input type="hidden" name="_subject" value="AWS Vegas Lead - KIU Hub" />

              <input
                required
                className="w-full px-3 py-2 rounded-lg bg-[#241350] text-white placeholder-gray-400"
                placeholder="Full name"
                name="name"
              />
              <input
                className="w-full px-3 py-2 rounded-lg bg-[#241350] text-white placeholder-gray-400"
                placeholder="Company"
                name="company"
              />
              <input
                required
                type="email"
                className="w-full px-3 py-2 rounded-lg bg-[#241350] text-white placeholder-gray-400"
                placeholder="Email"
                name="email"
              />
              <input
                className="w-full px-3 py-2 rounded-lg bg-[#241350] text-white placeholder-gray-400"
                placeholder="Country"
                name="country"
              />
              <select
                name="interest"
                className="w-full px-3 py-2 rounded-lg bg-[#241350] text-white outline-none"
              >
                <option>AI Solutions</option>
                <option>GDS / Distribution</option>
                <option>E-commerce</option>
                <option>Operations</option>
                <option>Partnerships</option>
              </select>
              <textarea
                rows={3}
                className="w-full px-3 py-2 rounded-lg bg-[#241350] text-white placeholder-gray-400"
                placeholder="Message (optional)"
                name="message"
              />
              <Button
                type="submit"
                className="w-full bg-[#00BFFF] text-[#0B0B28] hover:opacity-90"
              >
                Send to KIU
              </Button>
              <p className="text-[11px] text-gray-500 text-center">
                Submissions will be sent to <span className="text-gray-300">amaidana@kiusys.com</span> (testing)
              </p>
            </form>
          ) : (
            <div className="text-center bg-[#1C0F45] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">Thanks for connecting!</h3>
              <p className="text-sm text-gray-300 mb-4">
                Your details have been received. Our team will get back to you soon.
              </p>
              <a
                href="/Alejandro_Maidana.vcf"
                download="Alejandro_Maidana.vcf"
                className="inline-flex items-center justify-center bg-[#00BFFF] text-[#0B0B28] font-semibold px-4 py-2 rounded-lg hover:opacity-90"
              >
                <Download className="w-4 h-4 mr-2" /> Download my vCard
              </a>
              <div className="mt-4">
                <Button onClick={goBack} className="bg-[#3B257A] text-white hover:opacity-90">
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
