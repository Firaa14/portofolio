import Section from '../layout/Section';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Calendar, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const education = [
  {
    degree: "Diploma Teknologi Informasi",
    school: "Universitas Brawijaya",
    period: "ongoing (2024 - now)",
    description: "The Information Technology major focuses on the study of computing systems, software development, data management, and networked technologies to solve real-world problems. This field combines programming, system design, databases, networking, and emerging technologies such as Internet of Things (IoT) and machine learning to build efficient, intelligent, and connected digital solutions.",
    image: "/images/fira foto1.jpeg",
    experiences: [
      {
        year: "December 2025",
        title: "AI Trainer — Egg Quality Detection System",
        description: "Developed a computer vision system using YOLO to monitor egg quality by classifying shell conditions such as cracked shells, abnormal markings, and perfect eggs. Responsible for the full pipeline including dataset collection, image labeling, model training, evaluation, and optimization for real-world monitoring implementation.",
        image: "/images/ai kelompok.jpeg"
      },
      {
        year: "May - July 2025",
        title: "Backend Developer — Olimpiade Vokasi Indonesia",
        description: "As a Backend Web Developer in an IoT competition project that reached the Top 7 Finalists, building a system for food quality detection using IoT, AI, and web integration to support MBG (makan bergizi gratis) program.",
        image: "/images/foto tim.jpg"
      },
      {
        year: "May 2025",
        title: "Instructor — Basic Programming Logic Training with Scratch at SMPN 4 Batu",
        description: "Introduced fundamental programming concepts such as logic, sequencing, and problem-solving through interactive visual coding activities, while guiding students step by step to build simple projects in an engaging and easy-to-understand learning environment.",
        image: "/images/smpn4.png"
      }
    ]
  },
  {
    degree: "MIPA",
    school: "SMA Negeri 1 Sumberpucung",
    period: "2021 - 2024",
    description: "Focused on strengthening analytical thinking, logical reasoning, and problem-solving skills through subjects such as mathematics, physics, chemistry, and biology. This academic background built a strong foundation in structured thinking and scientific approaches that support further studies in technology and computing.",
    image: "/images/Fira-SMA.jpeg",
    experiences: [
      {
        year: "January 2025",
        title: "Treasurer — Campus Expo Committee",
        description: "Served as Treasurer 1 in the Campus Expo committee, responsible for managing the event’s financial planning, budgeting, expense tracking, and financial reporting. Ensured transparent fund allocation, monitored cash flow throughout the event preparation and execution, and coordinated with other divisions to maintain efficient and accountable financial management.",
        image: "/images/bendahara expo.jpeg"
      },
    ]
  }
];

// Text truncation detector component
function DescriptionWithReadMore({ text, maxLines = 3 }: { text: string; maxLines?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLPElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        const element = textRef.current;
        const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
        const maxHeight = lineHeight * maxLines;
        setIsTruncated(element.scrollHeight > maxHeight + 5);
      }
    };

    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [maxLines]);

  return (
    <div>
      <p
        ref={textRef}
        className={`text-slate-300 text-sm md:text-base leading-relaxed transition-all duration-300 ${
          isExpanded ? '' : `line-clamp-${maxLines}`
        }`}
      >
        {text}
      </p>
      {isTruncated && (
        <motion.button
          whileHover={{ color: '#818cf8' }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center gap-1 transition-colors"
        >
          {isExpanded ? (
            <>
              Show less
              <ChevronDown size={14} className="rotate-180 transition-transform" />
            </>
          ) : (
            <>
              Show more
              <ChevronDown size={14} className="transition-transform" />
            </>
          )}
        </motion.button>
      )}
    </div>
  );
}

function ExperienceDescriptionWithReadMore({ text, maxLines = 2 }: { text: string; maxLines?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLPElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        const element = textRef.current;
        const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
        const maxHeight = lineHeight * maxLines;
        setIsTruncated(element.scrollHeight > maxHeight + 5);
      }
    };

    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [maxLines]);

  return (
    <div>
      <p
        ref={textRef}
        className={`text-xs md:text-sm text-slate-400 leading-relaxed transition-all duration-300 ${
          isExpanded ? '' : `line-clamp-${maxLines}`
        }`}
      >
        {text}
      </p>
      {isTruncated && (
        <motion.button
          whileHover={{ color: '#818cf8' }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-1 text-indigo-400 hover:text-indigo-300 text-xs font-semibold flex items-center gap-1 transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronDown size={12} className="rotate-180 transition-transform" />
            </>
          ) : (
            <>
              Show More
              <ChevronDown size={12} className="transition-transform" />
            </>
          )}
        </motion.button>
      )}
    </div>
  );
}

export default function Education() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    if (selectedImage) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [selectedImage]);

  return (
    <Section id="education" title="Education & Experiences" subtitle="">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500/30 via-indigo-500/20 to-transparent md:transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-20 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-6 w-12 h-12 md:left-1/2 md:transform md:-translate-x-1/2 md:top-0">
                <motion.div
                  whileInView={{ scale: [0.8, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 border-4 border-[#0F172A] flex items-center justify-center"
                >
                  <div className="w-4 h-4 rounded-full bg-white" />
                </motion.div>
              </div>

              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
                className="group glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 cursor-pointer"
                    onClick={() => setSelectedImage({ url: edu.image, alt: edu.school })}
                  >
                    <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all hover:border-indigo-500/30">
                      <img 
                        src={edu.image} 
                        alt={edu.school} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-2 uppercase tracking-widest text-xs">
                      <GraduationCap size={14} className="flex-shrink-0" />
                      <span>{edu.school}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-white leading-tight">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4 font-semibold">
                      <Calendar size={14} className="flex-shrink-0" />
                      <span>{edu.period}</span>
                    </div>

                    <DescriptionWithReadMore text={edu.description} maxLines={3} />
                  </div>
                </div>

                {/* Experiences List */}
                {edu.experiences && edu.experiences.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 pt-6 border-t border-white/10 space-y-4"
                  >
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Highlights</p>
                    
                    <div className="space-y-3">
                      {edu.experiences.map((exp, expIdx) => (
                        <motion.div
                          key={exp.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: expIdx * 0.1 }}
                          className="flex gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all group/exp"
                        >
                          {/* Experience Image */}
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/30 transition-all"
                            onClick={() => setSelectedImage({ url: exp.image, alt: exp.title })}
                          >
                            <img 
                              src={exp.image} 
                              alt={exp.title}
                              className="w-full h-full object-cover group-hover/exp:scale-110 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>

                          {/* Experience Content */}
                          <div className="flex-1 min-w-0">
                            <div className="text-indigo-400 text-xs font-semibold mb-1">{exp.year}</div>
                            <h4 className="text-sm md:text-base font-bold text-white mb-1 group-hover/exp:text-indigo-300 transition-colors">
                              {exp.title}
                            </h4>
                            <ExperienceDescriptionWithReadMore text={exp.description} maxLines={2} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all"
              >
                <X size={24} />
              </motion.button>

              {/* Info Bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl text-center text-white text-sm"
              >
                <p className="font-semibold">{selectedImage.alt}</p>
                <p className="text-xs text-slate-400 mt-1">Tekan ESC atau klik di luar untuk menutup</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
