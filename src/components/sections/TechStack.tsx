import { motion } from 'motion/react';
import Section from '../layout/Section';
import { 
  SiLaravel, 
  SiReact, 
  SiNodedotjs, 
  SiMysql, 
  SiArduino, 
  SiPython,
  SiJavascript,
  SiLinux,
  SiFirebase,
  SiTypescript
} from 'react-icons/si';
import { BsMicrosoft } from 'react-icons/bs';

const techStack = [
  { name: 'Laravel', role: 'Backend Framework', icon: SiLaravel, color: '#830000' },
  { name: 'React', role: 'Frontend UI', icon: SiReact, color: '#B85C68' },
  { name: 'Node.js', role: 'Backend Runtime', icon: SiNodedotjs, color: '#660000' },
  { name: 'Python', role: 'AI & Scripting', icon: SiPython, color: '#C99199' },
  { name: 'MySQL', role: 'Relational DB', icon: SiMysql, color: '#830000' },
  { name: 'Arduino', role: 'IoT & Embedded', icon: SiArduino, color: '#B85C68' },
  { name: 'Linux', role: 'Virtual Systems', icon: SiLinux, color: '#C99199' },
  { name: 'JavaScript', role: 'Web Language', icon: SiJavascript, color: '#830000' },
  { name: 'TypeScript', role: 'Typed Code', icon: SiTypescript, color: '#660000' },
  { name: 'Firebase', role: 'Cloud Backend', icon: SiFirebase, color: '#C99199' },
  { name: 'Microsoft 365', role: 'Data Analysis', icon: BsMicrosoft, color: '#830000' },
];

export default function TechStack() {
  return (
    <Section 
      id="techstack" 
      tag="TECHNOLOGIES & CAPABILITIES"
      title="Tools I Use to Build Great Products" 
      subtitle="A curated toolset for end-to-end software development, physical IoT prototyping, and telemetry data processing."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {techStack.map((tech, i) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ y: -4, borderColor: 'rgba(131, 0, 0, 0.4)' }}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#242225] border border-white/5 hover:bg-[#383033] transition-all duration-300 group cursor-default shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-[#30282A] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-[#830000]/30">
                <IconComponent 
                  size={26} 
                  color={tech.color}
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white text-center group-hover:text-[#830000] transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] text-[#858184] text-center mt-0.5">
                {tech.role}
              </span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
