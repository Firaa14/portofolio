import Section from '../layout/Section';
import { motion } from 'motion/react';
import { Code, Music, Camera, Gamepad2, Leaf, Coffee } from 'lucide-react';

const interests = [
  { icon: Code, name: 'Coding', color: 'text-[#B85C68]', bgColor: 'from-[#830000]/20 to-[#660000]/10' },
  { icon: Coffee, name: 'Coffee', color: 'text-[#B85C68]', bgColor: 'from-[#830000]/20 to-[#660000]/10' },
  { icon: Music, name: 'Music', color: 'text-[#B85C68]', bgColor: 'from-[#830000]/20 to-[#660000]/10' },
  { icon: Camera, name: 'Photography', color: 'text-[#B85C68]', bgColor: 'from-[#830000]/20 to-[#660000]/10' },
  { icon: Leaf, name: 'Nature', color: 'text-[#B85C68]', bgColor: 'from-[#830000]/20 to-[#660000]/10' },
  { icon: Gamepad2, name: 'Gaming', color: 'text-[#B85C68]', bgColor: 'from-[#830000]/20 to-[#660000]/10' },
];

export default function Interests() {
  return (
    <Section 
      id="interests" 
      title="Yang Saya Sukai" 
      subtitle="Hal-hal yang membuat hidup lebih bermakna dan menyenangkan."
    >
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl w-full">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className={`flex flex-col items-center justify-center gap-2 p-4 md:p-6 rounded-2xl border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 bg-gradient-to-br ${interest.bgColor} group cursor-pointer`}
            >
              <div className={`p-2 md:p-3 rounded-lg ${interest.color}`}>
                <interest.icon size={24} className="md:w-[28px] md:h-[28px]" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-stone-200 text-center group-hover:text-white transition-colors">
                {interest.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
