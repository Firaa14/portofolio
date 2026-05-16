import Section from '../layout/Section';
import { motion } from 'motion/react';
import { User, Coffee, Rocket, MapPin, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function About() {
  return (
    <Section id="about" title="Tentang Saya" subtitle="Saya biasa dipanggil Fira. Dan ini sedikit tentang saya.">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 flex items-center gap-3 text-white">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-500/20 flex items-center justify-center">
              <User className="text-indigo-400" size={24} />
            </div>
            Tentang Saya
          </h3>
          <div className="space-y-6 text-slate-300">
            <p className="text-base md:text-lg leading-relaxed">
              Saya adalah mahasiswa Teknologi Informasi yang bersemangat tentang pemrograman dan machine learning. Dengan latar belakang strong dalam problem-solving dan innovative thinking, saya telah mengembangkan berbagai proyek di bidang web development, AI tools, dan Internet of Things yang terintegrasi.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Saya percaya bahwa teknologi adalah alat powerful untuk memecahkan masalah dunia nyata. Saya selalu eager untuk belajar, berinovasi, dan berkontribusi dalam menciptakan solusi digital yang meaningful dan impactful untuk industri teknologi.
            </p>

            {/* Tech Stack */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Tech Stack & Skills</p>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'Generative AI', 'Prompt Engineering', 'IoT', 'Python', 'JavaScript', 'Linux', 'Claude', 'Docker', 'C++', 'Tailwind CSS'].map(tech => (
                  <motion.span 
                    key={tech}
                    whileHover={{ y: -2, backgroundColor: 'rgba(165, 120, 255, 0.2)' }}
                    className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs md:text-sm font-semibold text-indigo-300 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          {[
            { icon: Coffee, label: 'Coffee Addict', color: 'text-amber-400', bgColor: 'from-amber-500/20 to-amber-600/10' },
            { icon: Rocket, label: 'Career Starter', color: 'text-emerald-400', bgColor: 'from-emerald-500/20 to-emerald-600/10' },
            { icon: MapPin, label: 'Location Fluid', color: 'text-sky-400', bgColor: 'from-sky-500/20 to-sky-600/10' },
            { icon: Sparkles, label: 'Creative Mind', color: 'text-violet-400', bgColor: 'from-violet-500/20 to-violet-600/10' },
          ].map((trait, i) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              className={cn("p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center glass transition-all duration-300 border border-white/10 hover:border-white/20", `bg-gradient-to-br ${trait.bgColor}`)}
            >
              <div className={cn("p-3 bg-white/5 rounded-xl", trait.color)}>
                <trait.icon size={28} />
              </div>
              <div>
                <p className="font-sans font-bold text-white text-sm md:text-base">{trait.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

