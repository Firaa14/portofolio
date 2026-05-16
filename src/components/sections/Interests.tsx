import Section from '../layout/Section';
import { motion } from 'motion/react';
import { Code, Wifi, BookOpen, Utensils, Music, Heart } from 'lucide-react';

const interests = [
  { icon: Code, name: 'Coding', description: 'Vibe coding dan eksplorasi teknologi yangs serba cepat dan berkembang.', color: 'text-indigo-400', glassColor: 'bg-indigo-500/10' },
  { icon: Wifi, name: 'IoT & Networking', description: 'Mempelajari teknologi otomatisasi dan jaringan serta keamanannya.', color: 'text-sky-400', glassColor: 'bg-sky-500/10' },
  { icon: BookOpen, name: 'Reading', description: 'Membaca bisa memperluas wawasan dan pemahaman kan? membaca juga bisa ngubah cara kita berpikir dan bertindak. ', color: 'text-emerald-400', glassColor: 'bg-emerald-500/10' },
  { icon: Utensils, name: 'Cooking', description: 'Masak bagi saya seperti healing walaupun dirumah.', color: 'text-orange-400', glassColor: 'bg-orange-500/10' },
  { icon: Music, name: 'Music', description: 'Apapun aktivitasnya, musik itu bikin momen jadi lebih menyenangkan.', color: 'text-amber-400', glassColor: 'bg-amber-500/10' },
  { icon: Heart, name: 'Vibing', description: 'Sekedar duduk diteras atau tiduran di kamar sama makan dan minuman favorit buat boost energi.', color: 'text-rose-400', glassColor: 'bg-rose-500/10' },
];

export default function Interests() {
  return (
    <Section 
      id="interests" 
      title="Yang Saya Sukai" 
      subtitle="Hal-hal yang aku sukai dan kerjakan di waktu luang."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, i) => (
          <motion.div
            key={interest.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            className="group glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${interest.glassColor} ${interest.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all`}
            >
              <interest.icon size={28} />
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">{interest.name}</h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base flex-grow">{interest.description}</p>

            {/* Bottom accent */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="inline-block w-8 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full group-hover:w-12 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
