import { motion } from 'motion/react';
import { Cpu, Code2, Eye, BarChart3, ArrowRight } from 'lucide-react';

const expertiseList = [
  {
    icon: Cpu,
    title: 'IoT & Embedded Systems',
    description: 'Hardware-to-cloud integration, automated physical mitigation, real-time sensing, and microcontroller development.',
  },
  {
    icon: Code2,
    title: 'Web & Back-End Development',
    description: 'Scalable modern web applications and robust REST APIs built with Laravel, PHP, React, and Node.js.',
  },
  {
    icon: Eye,
    title: 'AI & Computer Vision',
    description: 'Automated defect detection using YOLOv8, end-to-end dataset curation, model training, and optimization.',
  },
  {
    icon: BarChart3,
    title: 'Asset & Data Management',
    description: 'Relational database schema design (MySQL), power plant health mapping, and asset reliability monitoring.',
  },
];

export default function CoreExpertise() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Heading & Narrative) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#A9A5A7]">
              CORE EXPERTISE
            </p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
              From Ideas to <br className="hidden sm:inline" />
              Impactful Products
            </h2>

            <p className="text-sm md:text-base text-[#C9C7C8] leading-relaxed">
              I combine analytical thinking, clean code, and a deep understanding of connected systems to build digital solutions that bridge physical hardware and web applications.
            </p>

            <div className="pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#830000] hover:text-[#660000] transition-colors group"
              >
                <span>Learn More About Me</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column (2x2 Grid of Expertise Cards) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {expertiseList.map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-[#242225] hover:bg-[#383033] border border-white/10 hover:border-[#830000]/40 rounded-2xl p-6 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#30282A] border border-white/5 group-hover:border-[#830000]/30 flex items-center justify-center text-[#830000] mb-5 transition-colors">
                      <IconComp size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-[#830000] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#A9A5A7] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
