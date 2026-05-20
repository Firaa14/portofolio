import Section from '../layout/Section';
import { motion } from 'motion/react';
import { 
  SiLaravel, 
  SiReact, 
  SiNodedotjs, 
  SiMysql, 
  SiArduino, 
  SiPython,
  SiJavascript,
  SiTailwindcss,
  SiLinux,
  SiGit,
  SiTypescript,
  SiVite,
  SiFirebase
} from 'react-icons/si';
import { Zap } from 'lucide-react';

const techStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'MySQL', icon: SiMysql, color: '#00758F' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Arduino', icon: SiArduino, color: '#00979D' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Git', icon: SiGit, color: '#F1502F' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Claude AI', icon: Zap, color: '#9B59B6' },
];

export default function TechStack() {
  return (
    <Section 
      id="techstack" 
      title="Tech Stack" 
      subtitle=""
    >
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {techStack.map((tech, i) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center justify-center gap-3 p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-indigo-500/30 backdrop-blur-sm transition-all duration-300 group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/15 group-hover:to-white/10 transition-all">
                <IconComponent 
                  size={32} 
                  style={{ color: tech.color }}
                  className="transition-transform duration-300"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-slate-300 text-center group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
