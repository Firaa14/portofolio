import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { generateResumePdf } from '@/src/utils/generateResumePdf';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 md:pt-36 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#381013]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#830000]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7"
          >

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I'm <br />
                <span className="text-[#830000]">Syafira Firdausi Nuzulla</span>
              </h1>
            </div>

            {/* Subtitle / Intro */}
            <p className="text-sm md:text-base text-[#C9C7C8] leading-relaxed max-w-xl">
              Information Technology student at Universitas Brawijaya. Focus on Full stack development and IoT systems.
            </p>
            <p className="text-sm md:text-base text-[#C9C7C8] leading-relaxed max-w-xl">
               System Owner (IT) Intern at PT PLN Nusantara Power | Bank Indonesia Scholarship Awardee (GenBI).
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#830000] hover:bg-[#660000] text-white font-display font-bold text-sm transition-all duration-200 shadow-[0_0_25px_-5px_rgba(131,0,0,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>

              <button
                type="button"
                onClick={generateResumePdf}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#242225] hover:bg-[#30282A] border border-white/10 hover:border-[#830000]/30 text-white font-medium text-sm transition-all duration-200"
              >
                <Download size={15} className="text-[#830000]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-3 sm:gap-6 pt-8 border-t border-white/10 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-white">5+</div>
                <p className="text-[11px] sm:text-xs text-[#A9A5A7] mt-1 font-medium">Projects Delivered</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-white">2+</div>
                <p className="text-[11px] sm:text-xs text-[#A9A5A7] mt-1 font-medium">Years Study</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-white">10+</div>
                <p className="text-[11px] sm:text-xs text-[#A9A5A7] mt-1 font-medium">Tech Skills</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-[#830000]">100%</div>
                <p className="text-[11px] sm:text-xs text-[#A9A5A7] mt-1 font-medium">Commitment</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Hero Image & Accents) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px]">
              
              {/* Floating Code Snippet Card */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-6 -right-2 sm:-right-4 z-20 bg-[#1C1A1B]/90 backdrop-blur-md border border-[#4A3A3D] rounded-2xl p-4 shadow-2xl text-[11px] font-mono leading-relaxed text-[#C9C7C8] max-w-[210px] hidden sm:block"
              >
                <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-white/5">
                  <span className="w-2 h-2 rounded-full bg-maroon-700/80" />
                  <span className="w-2 h-2 rounded-full bg-[#830000]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#830000]/80" />
                </div>
                <p className="text-[#830000] font-semibold">const engineer = &#123;</p>
                <p className="pl-2">name: <span className="text-white">"Syafira"</span>,</p>
                <p className="pl-2">focus: <span className="text-[#830000]">"IoT & Web"</span>,</p>
                <p className="pl-2">status: <span className="text-[#B85C68]">"Active"</span></p>
                <p className="text-[#830000] font-semibold">&#125;;</p>
              </motion.div>

              {/* Floating Script / Handwritten Accent */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -left-6 sm:-left-10 z-20 hidden sm:block text-left"
              >
                <p className="font-handwriting text-2xl sm:text-3xl text-[#830000] leading-tight select-none rotate-[-6deg]">
                  Ideas<br />
                  Hardware<br />
                  Systems<br />
                  <span className="text-white underline decoration-[#830000]">Impact</span>
                </p>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#30282A] to-[#1C1A1B] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[4/5] group">
                <img
                  src="/images/fira-unformal.png"
                  alt="Syafira Firdausi Nuzulla"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Bottom gradient fade for seamless integration */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#171719] via-[#171719]/60 to-transparent pointer-events-none" />
                
                {/* Subtle corner badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-3 rounded-2xl bg-[#171719]/80 backdrop-blur-md border border-white/10">
                  <div>
                    <p className="text-xs font-bold text-white">Syafira Firdausi Nuzulla</p>
                    <p className="text-[10px] text-[#830000] font-mono">Information Technology • UB</p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#830000] animate-ping" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
