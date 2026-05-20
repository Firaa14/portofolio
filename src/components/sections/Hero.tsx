import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm"
            >
              <Sparkles size={14} className="text-indigo-400" />
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Welcome</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                Syafira 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-sky-400">
                  Firdausi
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-200">
                  Nuzulla
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
              Information Technology Student
            </p>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-md">
              Backend Web Developer, IoT, and Machine Learning Enthusiast</p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl md:rounded-2xl font-bold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300"
              >
                Project Experiences
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-400">5+</div>
                <p className="text-sm text-slate-400 mt-1">Project</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-400">2+</div>
                <p className="text-sm text-slate-400 mt-1">Years of Study</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-400">10+</div>
                <p className="text-sm text-slate-400 mt-1">Tech Skills</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-sky-500/20 rounded-3xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative z-10 p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="/images/fira formal.jpeg"
                    alt="Syafira"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-sky-500/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
