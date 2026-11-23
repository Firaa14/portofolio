import { motion, AnimatePresence } from 'motion/react';
import Section from '../layout/Section';
import { GraduationCap, Calendar, X, MapPin, ChevronDown, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const education = [
  {
    degree: "Diploma Teknologi Informasi",
    school: "Universitas Brawijaya",
    location: "Malang, Indonesia",
    period: "2024 — Present (Ongoing)",
    description: "The Information Technology major focuses on the study of computing systems, software development, data management, and networked technologies to solve real-world problems. This field combines programming, system design, databases, networking, and emerging technologies such as Internet of Things (IoT) and machine learning to build efficient, intelligent, and connected digital solutions.",
    image: "/images/fira foto1.jpeg",
    experiences: [
      {
        year: "August — December 2026",
        title: "IT Intern - System Owner at PT PLN Nusantara Power Unit Pembangkitan Brantas",
        description: "Developed and maintained a web-based health mapping system for hydroelectric power plant units, focusing on asset reliability monitoring. Processed, analyzed, and organized asset reliability data using Microsoft Excel to support equipment condition assessment and maintenance monitoring.",
        image: "/images/fira-foto-pln.jpeg"
      },
      {
        year: "July 2026 — July 2027",
        title: "Bank Indonesia Scholarship Awardee",
        description: "Awarded the Bank Indonesia Scholarship in recognition of academic performance, leadership potential, and commitment to personal and professional development.",
        image: "/images/fira-genbi.png"
      },
      {
        year: "July — August 2025",
        title: "National Finalist - Olimpiade Vokasi Indonesia (OLIVIA X Universitas Brawijaya)",
        description: "Developed an IoT-based food safety device for detecting biological contaminants for Free Nutritious Meals Program (MBG) and represented Universitas Brawijaya as a national finalist among 1,303 teams from 94 universities across Indonesia.",
        image: "/images/foto tim.jpg"
      }
    ]
  },
  {
    degree: "MIPA (Mathematics & Natural Sciences)",
    school: "SMA Negeri 1 Sumberpucung",
    location: "Malang, Indonesia",
    period: "2021 — 2024",
    description: "Focused on strengthening analytical thinking, logical reasoning, and problem-solving skills through subjects such as mathematics, physics, chemistry, and biology. This academic background built a strong foundation in structured thinking and scientific approaches that support further studies in technology and computing.",
    image: "/images/Fira-SMA.jpeg",
    experiences: [
      {
        year: "January 2025",
        title: "Treasurer 1 - Campus Expo Committee",
        description: "Served as Treasurer 1 in the Campus Expo committee, responsible for managing the event’s financial planning, budgeting, expense tracking, and financial reporting. Ensured transparent fund allocation, monitored cash flow throughout the event preparation and execution, and coordinated with other divisions to maintain efficient and accountable financial management.",
        image: "/images/bendahara expo.jpeg"
      }
    ]
  }
];

export default function Education() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [selectedImage]);

  return (
    <Section
      id="education"
      tag="ACADEMIC BACKGROUND"
      title="Education & Academic Journey"
      subtitle="Foundational learning in Information Technology and scientific reasoning, supplemented by student leadership and industry internships."
    >
      <div className="space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#242225] hover:bg-[#383033] rounded-3xl border border-white/10 hover:border-[#830000]/35 p-6 md:p-8 transition-all duration-300 shadow-xl space-y-6"
          >
            {/* Top Academic Card */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Photo */}
              <div 
                className="w-full sm:w-56 h-56 flex-shrink-0 rounded-2xl overflow-hidden bg-[#1C1A1B] border border-white/10 cursor-pointer group/img relative"
                onClick={() => setSelectedImage({ url: edu.image, alt: edu.school })}
              >
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors" />
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-[#171719]/80 text-[10px] text-[#830000] font-mono">
                  Click to enlarge
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#830000] uppercase tracking-wider">
                  <GraduationCap size={15} />
                  <span>{edu.school}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white leading-tight">
                  {edu.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#A9A5A7]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar size={13} className="text-[#830000]" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin size={13} className="text-[#830000]" />
                    <span>{edu.location}</span>
                  </span>
                </div>

                <p className="text-xs md:text-sm text-[#C9C7C8] leading-relaxed pt-1">
                  {edu.description}
                </p>
              </div>
            </div>

            {/* Highlights List */}
            {edu.experiences && edu.experiences.length > 0 && (
              <div className="pt-6 border-t border-white/5 space-y-3">
                <p className="text-[11px] font-bold text-[#A9A5A7] uppercase tracking-wider">
                  Key Experiences & Roles During This Period
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {edu.experiences.map((exp) => (
                    <div
                      key={exp.title}
                      className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-[#1C1A1B] border border-white/5 hover:border-white/10 transition-all group/sub"
                    >
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-black/40 border border-white/10 flex-shrink-0 cursor-pointer"
                        onClick={() => setSelectedImage({ url: exp.image, alt: exp.title })}
                      >
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <span className="text-[11px] font-semibold text-[#830000]">
                          {exp.year}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover/sub:text-[#830000] transition-colors leading-snug">
                          {exp.title}
                        </h4>
                        <p className="text-xs text-[#A9A5A7] leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-2 rounded-full bg-[#171719]/80 text-white hover:text-[#830000] border border-white/20 transition-all"
              >
                <X size={20} />
              </button>
              <p className="text-xs text-[#C9C7C8] mt-3 font-medium text-center">
                {selectedImage.alt} — Click outside or press ESC to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
