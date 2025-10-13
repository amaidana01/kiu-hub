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
    <div className="min-h-screen bg-gradient-to-b from-[#180B3A] via-[#2E0E73] to-[#0C0E2B] text-white flex flex-col items-center p-4 sm:p-6">
      {/* container */}
      {view === "home" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xs sm:max-w-sm text-center"
        >
          {/* Brand header */}
          <div className="rounded-[20px] bg-gradient-to-r from-[#4E1CA7] via-[#7A00D1] to-[#E3479F] p-4 sm:p-6 shadow-lg mb-4 sm:mb-6">
            <img src="/kiu-logo.svg" alt="KIU Logo" className="w-24 sm:w-28 mx-auto" />
          </div>

          {/* Profile */}
          <div className="text-center mb-5 sm:mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Alejandro Maidana</h1>
            <p className="text-sm text-gray-300">QA Manager | KIU System Solutions</p>
            <p className="text-xs text-gray-400 mt-1">Empowering aviation with intelligent technology</p>

            {/* vCard always visible */}
            <a
              href="/Alejandro_Maidana.vcf"
              download="Alejandro_Maidana.vcf"
              className="inline-flex items-center justify-center gap-2 mt-4 text-[#0B0B28] bg-[#00BFFF] px-4 py-2 rounded-xl font-medium shadow hover:opacity-90 text-sm sm:text-base"
            >
              <Download className="w-4 h-4" /> Download my vCard
            </a>
          </div>

          {/* Menu */}
          <div className="space-y-3">
            <Card onClick={() => setView("demo")} className="cursor-pointer bg-[#1B1346] hover:bg-[#241763] transition-all">
              <CardContent className="flex items-center p-3 sm:p-4 gap-4">
                <div className="rounded-xl bg-[#3A2A8C] p-2"><Play className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700]" /></div>
                <div className="text-left">
                  <h2 className="font-medium text-sm sm:text-base">Watch AI Bot Demo</h2>
                  <p className="text-xs text-gray-300">Experience KIUT, our conversational AI assistant.</p>
                </div>
              </CardContent>
            </Card>

            <Card onClick={() => setView("about")} className="cursor-pointer bg-[#1B1346] hover:bg-[#241763] transition-all">
              <CardContent className="flex items-center p-3 sm:p-4 gap-4">
                <div className="rounded-xl bg-[#3A2A8C] p-2"><Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" /></div>
                <div className="text-left">
                  <h2 className="font-medium text-sm sm:text-base">About KIU & Solutions</h2>
                  <p className="text-xs text-gray-300">Learn more about our platform and services.</p>
                </div>
              </CardContent>
            </Card>

            <Card onClick={() => setView("contact")} className="cursor-pointer bg-[#1B1346] hover:bg-[#241763] transition-all">
              <CardContent className="flex items-center p-3 sm:p-4 gap-4">
                <div className="rounded-xl bg-[#3A2A8C] p-2"><Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#7CFC00]" /></div>
                <div className="text-left">
                  <h2 className="font-medium text-sm sm:text-base">Contact & Connect</h2>
                  <p className="text-xs text-gray-300">Share your details with KIU's team.</p>
                </div>
              </CardContent>
            </Card>

            <p className="text-[10px] text-gray-500 text-center mt-2">© 2025 KIU System Solutions. All rights reserved.</p>
          </div>
        </motion.div>
      )}

      {/* DEMO */}
      {view === "demo" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full max-w-xs sm:max-w-sm">
          <Button onClick={goBack} className="mb-4 bg-[#3B257A] text-white text-sm"><ArrowLeft className="w-4 h-4 mr-2"/>Back</Button>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">KIUT – AI Concierge Demo</h2>
          <p className="text-sm text-gray-300 mb-4">Watch how our AI bot handles real-time customer interactions and sales assistance.</p>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
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

      {/* ABOUT */}
      {view === "about" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full max-w-xs sm:max-w-sm text-left">
          <Button onClick={goBack} className="mb-4 bg-[#3B257A] text-white text-sm"><ArrowLeft className="w-4 h-4 mr-2"/>Back</Button>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">About KIU System Solutions</h2>
          <p className="text-sm text-gray-300 mb-3 italic">Empowering aviation with intelligent technology</p>
          <p className="text-sm text-gray-300 mb-4">KIU provides integrated technological solutions for the aviation and travel industries, offering PSS, GDS, e-commerce, and management tools tailored for airlines, travel agencies, and tourism companies worldwide.</p>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li><strong>KIU GDS / Multi-hosting:</strong> Airline content distribution to 45,000+ agencies in 80+ countries.</li>
            <li><strong>KIUT (AI Concierge):</strong> Conversational AI for sales and customer service across digital channels.</li>
            <li><strong>Post-Booking RMS:</strong> Revenue management and optimization tools.</li>
            <li><strong>E‑commerce & Cargo Solutions:</strong> Streamlining airline sales and logistics.</li>
            <li><strong>Analytics & BI:</strong> Business intelligence for smarter decision-making.</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="https://www.kiusys.com" target="_blank" rel="noopener noreferrer" className="text-[#00BFFF] underline text-sm">Visit KIU Website</a>
          </div>
        </motion.div>
      )}

      {/* CONTACT */}
      {view === "contact" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full max-w-xs sm:max-w-sm">
          <Button onClick={goBack} className="mb-4 bg-[#3B257A] text-white text-sm"><ArrowLeft className="w-4 h-4 mr-2"/>Back</Button>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Contact & Connect</h2>
          <p className="text-sm text-gray-300 mb-4">Share your details and our team will reach out.</p>

          {!contactSubmitted ? (
            <form
              onSubmit={() => setContactSubmitted(true)}
              action="https://formspree.io/f/your-endpoint-id"
              method="POST"
              className="space-y-3"
            >
              <input type="text" name="_gotcha" className="hidden" />
              <input type="hidden" name="_subject" value="AWS Vegas Lead - KIU Hub" />

              <input required className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm" placeholder="Full name" name="name" />
              <input className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm" placeholder="Company" name="company" />
              <input required type="email" className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm" placeholder="Email" name="email" />
              <input className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm" placeholder="Country" name="country" />
              <select name="interest" className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white outline-none text-sm">
                <option>AI Solutions</option>
                <option>GDS / Distribution</option>
                <option>E-commerce</option>
                <option>Operations</option>
                <option>Partnerships</option>
              </select>
              <textarea rows={3} className="w-full px-3 py-2 rounded-xl bg-[#160D3A] ring-1 ring-white/10 text-white placeholder-gray-400 text-sm" placeholder="Message (optional)" name="message" />

              <Button type="submit" className="w-full bg-[#00BFFF] text-[#0B0B28] hover:opacity-90 text-sm">Send to KIU</Button>
              <p className="text-[10px] text-gray-500 text-center">Submissions will be sent to <span className="text-gray-300">amaidana@kiusys.com</span> (testing)</p>
            </form>
          ) : (
            <div className="text-center bg-[#14103A] rounded-2xl p-6 ring-1 ring-white/10">
              <h3 className="text-lg font-semibold mb-2">Thanks for connecting!</h3>
              <p className="text-sm text-gray-300 mb-4">Your details have been received. Our team will get back to you soon.</p>
              <a href="/Alejandro_Maidana.vcf" download="Alejandro_Maidana.vcf" className="inline-flex items-center justify-center bg-[#00BFFF] text-[#0B0B28] font-semibold px-4 py-2 rounded-xl hover:opacity-90 text-sm">
                <Download className="w-4 h-4 mr-2" /> Download my vCard
              </a>
              <div className="mt-4">
                <Button onClick={goBack} className="bg-[#3B257A] text-white hover:opacity-90 text-sm">Back to Hub</Button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
