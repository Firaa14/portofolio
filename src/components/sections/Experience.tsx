import Section from '../layout/Section';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Trophy } from 'lucide-react';

const experiences = [
  {
    title: "Technology Coordinator",
    company: "HMTI (Himpunan Mahasiswa Teknologi Informasi)",
    period: "2024 - Present",
    description: "Memimpin inisiatif teknologi dan mengorganisir program pendidikan untuk mahasiswa TI, termasuk workshop coding, seminar industri, dan project showcase.",
    tags: ["Leadership", "Event Coordination", "Community Building"],
    icon: Trophy
  },
  {
    title: "Field Research Participant",
    company: "Desa Ngadas - Cultural Heritage Project",
    period: "2023 - 2024",
    description: "Melakukan riset lapangan mendalam tentang pelestarian tradisi adat Unan-Unan, menganalisis nilai-nilai kearifan lokal dan dampaknya terhadap integrasi sosial masyarakat.",
    tags: ["Research", "Cultural Studies", "Data Analysis"],
    icon: Briefcase
  },
  {
    title: "Campus Expo Organizer",
    company: "University Alumni Network",
    period: "2023",
    description: "Memfasilitasi event pameran pendidikan untuk membantu siswa SMA menentukan jenjang studi lanjut, mengkoordinasikan presentasi program studi dan sesi sharing.",
    tags: ["Event Management", "Communication", "Education"],
    icon: Trophy
  },
  {
    title: "Technology Enthusiast & Self-Learner",
    company: "Independent Projects",
    period: "2021 - Present",
    description: "Secara aktif mengembangkan berbagai proyek personal mencakup web development, AI/ML implementation, IoT systems, dan cryptography solutions dengan fokus pada practical problem-solving.",
    tags: ["Full-Stack Development", "AI/ML", "IoT"],
    icon: Briefcase
  }
];

export default function Experience() {
  return (
    <Section 
      id="experience" 
      title="Pengalaman & Aktivitas" 
      subtitle="Perjalanan pembelajaran dan kontribusi di berbagai bidang."
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                className="group glass p-6 md:p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-indigo-500/30"
              >
                <div className="flex gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-sky-500/30 transition-all">
                      <IconComponent size={24} className="text-indigo-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 leading-tight">{exp.title}</h3>
                        <p className="text-indigo-400 font-semibold text-sm">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm whitespace-nowrap">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full text-xs font-medium transition-all group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
