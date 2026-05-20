import Section from '../layout/Section';
import { motion } from 'motion/react';
import { Linkedin, Github } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

export default function Contact() {
  return (
    <Section id="contact" title="Find Me On" subtitle="">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto space-y-8"
      >
          {/* Intro */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            I am actively seeking opportunities to grow through internship programs or exciting technical collaborations. If you have an interesting project, collaboration offers, or simply want to exchange innovative ideas, my door is always open. Let’s build something amazing together!</p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/syafira-firdausi-nuzulla-4b7127315"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all">
                  <Linkedin size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">LinkedIn</p>
                  <p className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors">Connect</p>
                </div>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Firaa14"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-slate-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500/20 to-slate-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-slate-500/30 group-hover:to-slate-600/30 transition-all">
                  <Github size={24} className="text-slate-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-1">GitHub</p>
                  <p className="text-lg font-medium text-white group-hover:text-slate-300 transition-colors">Portfolio</p>
                </div>
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/syfra_f"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-pink-500/30 group-hover:to-rose-600/30 transition-all">
                  <SiInstagram size={24} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-pink-300 uppercase tracking-widest mb-1">Instagram</p>
                  <p className="text-lg font-medium text-white group-hover:text-pink-300 transition-colors">Follow</p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
           </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-24 md:mt-32 pt-12 border-t border-white/5 text-center"
      >
        <p className="text-slate-500 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
          © {new Date().getFullYear()} Syafira Firdausi Nuzulla — Portfolio
        </p>
        <p className="text-slate-600 text-xs mt-2">2026</p>
      </motion.footer>
    </Section>
  );
}
