import Section from '../layout/Section';
import { motion } from 'motion/react';
import { User, Code, Coffee, Music, Camera, Leaf, Gamepad2 } from 'lucide-react';

const interests = [
  { icon: Code, name: 'Coding', detail: 'Back-end & IoT' },
  { icon: Coffee, name: 'Coffee', detail: 'Focus fuel' },
  { icon: Music, name: 'Music', detail: 'Creative rhythm' },
  { icon: Camera, name: 'Photography', detail: 'Capturing moments' },
  { icon: Leaf, name: 'Nature', detail: 'Bromo & outdoors' },
  { icon: Gamepad2, name: 'Gaming', detail: 'Strategy & chill' },
];

export default function About() {
  return (
    <Section 
      id="about" 
      tag="BIOGRAPHY & PASSION"
      title="About Me" 
      subtitle="The motivation, background, and personal principles driving my journey in Information Technology."
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-[#242225] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#30282A] border border-[#830000]/20 flex items-center justify-center text-[#830000]">
              <User size={22} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                This is Fira
              </h3>
              <p className="text-xs text-[#830000] font-mono">Syafira Firdausi Nuzulla</p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#C9C7C8] leading-relaxed">
            <p>
              I'm an Information Technology student at Universitas Brawijaya with a strong focus on Back-End Development, IoT systems, and building scalable web applications. I have hands-on experience with Java, PHP, and C++, and have developed web-based systems using Node js and Laravel framework.
            </p>
            <p>
              I believe technology is a powerful tool for solving real-world problems. I am always eager to learn, explore new ideas, and contribute to building meaningful digital solutions that create real impact through connected systems and data-driven intelligence.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#30282A] text-[#ECEAEC] border border-white/5">
              🎓 Universitas Brawijaya
            </span>
            <span className="px-3 py-1 rounded-full bg-[#30282A] text-[#ECEAEC] border border-white/5">
              ⚡ PT PLN NP Intern
            </span>
            <span className="px-3 py-1 rounded-full bg-[#30282A] text-[#830000] border border-[#830000]/20">
              🌟 GenBI Awardee
            </span>
          </div>
        </motion.div>

        {/* Right Column: Interests & Passions (Preserving Interests.tsx) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 bg-[#242225] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl"
        >
          <div>
            <p className="text-[11px] font-bold text-[#A9A5A7] uppercase tracking-wider">Personal Interests</p>
            <h3 className="text-xl font-display font-bold text-white mt-1">Beyond The Code</h3>
            <p className="text-xs text-[#A9A5A7] mt-1">Activities and pursuits that bring balance, focus, and energy.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {interests.map((interest) => {
              const IconComp = interest.icon;
              return (
                <div
                  key={interest.name}
                  className="p-3.5 rounded-2xl bg-[#1C1A1B] border border-white/5 hover:border-[#830000]/30 transition-all flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-xl bg-[#30282A] text-[#830000] group-hover:scale-110 transition-transform">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white group-hover:text-[#830000] transition-colors">
                      {interest.name}
                    </p>
                    <p className="text-[10px] text-[#858184]">
                      {interest.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
