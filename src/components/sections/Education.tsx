import Section from '../layout/Section';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Diploma Teknologi Informasi",
    school: "Universitas Brawijaya",
    period: "2024 - Sekarang",
    description: "Teknologi Informasi merupakan disiplin ilmu yang memadukan penguasaan perangkat lunak, infrastruktur jaringan, dan keamanan siber untuk mendukung transformasi digital. Fokus utama dari bidang ini adalah bagaimana mengintegrasikan teknologi ke dalam proses bisnis atau kehidupan sehari-hari, mulai dari pengembangan aplikasi web dan mobile, pengelolaan basis data yang masif (Big Data), hingga penerapan kecerdasan buatan (AI). Di sini, saya dilatih untuk tidak hanya memahami teknis pemrograman, tetapi juga memiliki kemampuan analitis dalam merancang arsitektur sistem yang aman, efisien, dan solutif.",
    image: "/images/fira foto1.jpeg"
  },
  {
    degree: "MIPA",
    school: "SMA Negeri 1 Sumberpucung",
    period: "2021 - 2024",
    description: "MIPA adalah bidang studi eksakta yang mendalami fenomena alam melalui logika matematika dan pendekatan ilmiah yang sistematis. Fokus utama jurusan ini adalah pengembangan kemampuan analisis, observasi data, dan penyelesaian masalah secara presisi. Melalui disiplin ilmu ini, saya mengasah pola pikir saintifik dan fundamental logika yang kuat untuk menghadapi tantangan teknis yang kompleks.",
    image: "/images/Fira-SMA.jpeg"
  }
];

export default function Education() {
  return (
    <Section id="education" title="Riwayat Pendidikan" subtitle="Riwayat dan pendidikan yang sedang saya tempuh.">
      <div className="space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            className="group glass p-6 md:p-10 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center">
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-1/3 flex-shrink-0"
              >
                <div className="aspect-[4/3] md:aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img 
                    src={edu.image} 
                    alt={edu.school} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-3 uppercase tracking-widest text-xs">
                  <GraduationCap size={16} className="flex-shrink-0" />
                  <span>{edu.school}</span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 text-white leading-tight">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 font-semibold">
                  <Calendar size={16} className="flex-shrink-0" />
                  <span>{edu.period}</span>
                </div>

                <p className="text-slate-300 text-base leading-relaxed">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
