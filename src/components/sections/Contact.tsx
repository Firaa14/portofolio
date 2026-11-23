import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, ArrowRight, Check, Copy } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "syafiranuzulla@student.ub.ac.id";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#830000]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-[#242225] border border-white/10 hover:border-[#830000]/30 rounded-3xl p-8 sm:p-12 transition-all duration-300 shadow-2xl">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#A9A5A7]">
                LET'S WORK TOGETHER
              </p>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
                Have a Project <br className="hidden sm:inline" />
                in Mind?
              </h2>

              <p className="text-xs sm:text-sm text-[#C9C7C8] leading-relaxed max-w-md pt-1">
                I am actively seeking opportunities to grow through internship programs, technical collaborations, or innovative projects. Let's discuss new opportunities and build something meaningful.
              </p>
            </div>

            {/* Right Buttons / Actions matching reference layout */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-end gap-3">
              
              {/* Email Pill Box */}
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#1C1A1B] border border-white/10 hover:border-[#830000]/40 transition-all text-left group"
                title="Click to copy email address"
              >
                <div className="w-10 h-10 rounded-xl bg-[#30282A] flex items-center justify-center text-[#830000] group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                    <span>Email Me</span>
                    {copied && <span className="text-[10px] text-[#830000] font-normal">(Copied!)</span>}
                  </p>
                  <p className="text-[11px] text-[#A9A5A7] font-mono truncate max-w-[140px]">
                    {email}
                  </p>
                </div>
              </button>

              {/* LinkedIn Pill Box */}
              <a
                href="https://www.linkedin.com/in/syafirafn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#1C1A1B] border border-white/10 hover:border-[#830000]/40 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#30282A] flex items-center justify-center text-[#B85C68] group-hover:scale-105 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">LinkedIn</p>
                  <p className="text-[11px] text-[#A9A5A7]">Let's connect</p>
                </div>
              </a>

              {/* Primary Call to Action Button */}
              <a
                href={`mailto:${email}?subject=Collaboration%20Inquiry%20-%20Portfolio`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#830000] hover:bg-[#660000] text-white font-display font-bold text-sm transition-all duration-200 shadow-[0_0_25px_-5px_rgba(131,0,0,0.35)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Send a Message</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>

            </div>
          </div>

          {/* Social Icons row */}
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-[#A9A5A7]">
              Direct connections:
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Firaa14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#1C1A1B] border border-white/10 text-[#ECEAEC] hover:text-[#830000] hover:border-[#830000]/30 transition-colors"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/syafirafn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#1C1A1B] border border-white/10 text-[#ECEAEC] hover:text-[#830000] hover:border-[#830000]/30 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/syfra_f"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#1C1A1B] border border-white/10 text-[#ECEAEC] hover:text-[#830000] hover:border-[#830000]/30 transition-colors"
                title="Instagram"
              >
                <SiInstagram size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
