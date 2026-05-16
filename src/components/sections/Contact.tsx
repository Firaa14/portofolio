import Section from '../layout/Section';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" title="Hubungi Saya" subtitle="Mari berdiskusi tentang proyek, peluang, atau sekadar berbagi inspirasi!">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Intro */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Saya sedang mencari wadah untuk bertumbuh melalui program magang atau kolaborasi menarik. Jika Anda memiliki proyek interesting, peluang kolaborasi, atau sekadar ingin berbagi inspirasi, pintu saya selalu terbuka! Mari kita ciptakan sesuatu yang amazing bersama.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <motion.a
              href="mailto:syafirafirdausi5@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="group glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-indigo-500/30 group-hover:to-sky-500/30 transition-all">
                  <Mail size={24} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors">syafirafirdausi5@gmail.com</p>
                </div>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+628575541265"
              whileHover={{ scale: 1.02 }}
              className="group glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-emerald-500/30 group-hover:to-green-500/30 transition-all">
                  <MessageSquare size={24} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1">Telepon</p>
                  <p className="text-lg font-medium text-white group-hover:text-emerald-300 transition-colors">+62 857-5541-0265</p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Ikuti Saya</p>
            <div className="flex gap-4 flex-wrap">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'from-blue-500/20 to-blue-600/10 hover:from-blue-500/30 hover:to-blue-600/20 text-blue-400' },
                { icon: Twitter, label: 'Twitter', href: '#', color: 'from-sky-500/20 to-sky-600/10 hover:from-sky-500/30 hover:to-sky-600/20 text-sky-400' },
                { icon: Github, label: 'GitHub', href: '#', color: 'from-slate-500/20 to-slate-600/10 hover:from-slate-500/30 hover:to-slate-600/20 text-slate-300' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 glass rounded-xl border border-white/10 transition-all duration-300 group hover:border-white/20 bg-gradient-to-br ${social.color}`}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-24 md:mt-32 pt-12 border-t border-white/5 text-center"
      >
        <p className="text-slate-500 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
          © {new Date().getFullYear()} Syafira Firdausi Nuzulla — Portfolio Design
        </p>
        <p className="text-slate-600 text-xs mt-2">Crafted with passion • Built with React & TypeScript</p>
      </motion.footer>
    </Section>
  );
}
