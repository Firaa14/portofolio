import Section from '../layout/Section';
import { motion } from 'motion/react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <Section id="about" title="About" subtitle="">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
            This is Fira
          </h3>
          <div className="space-y-6 text-slate-300">
            <p className="text-base md:text-lg leading-relaxed">
              I'm an Information Technology student at Universitas Brawijaya with a strong focus on Back-End Development, IoT systems, and building scalable web applications. I have hands-on experience with Java, PHP, and C++, and have developed web-based systems using Node js and Laravel framework.</p>
            <p className="text-base md:text-lg leading-relaxed">
              I believe technology is a powerful tool for solving real-world problems. I am always eager to learn, explore new ideas, and contribute to building meaningful digital solutions that create real impact through connected systems and data-driven intelligence.</p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}

