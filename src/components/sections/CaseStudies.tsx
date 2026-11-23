import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Calendar, MapPin, Building2, Trophy } from 'lucide-react';
import { useState } from 'react';
import Section from '../layout/Section';

const caseStudies = [
  {
    id: "pln",
    badge: "Case Study",
    title: "Web-Based Asset Health Mapping for Hydroelectric Power Plants",
    organization: "PT PLN Nusantara Power Unit Pembangkitan Brantas",
    role: "IT Intern - System Owner",
    period: "August - December 2026",
    location: "Malang / Karangkates, East Java",
    summary: "How we monitored asset reliability, analyzed telemetry data, and developed a digital condition assessment system to minimize operational downtime in hydro power units.",
    image: "/images/fira-foto-pln.jpeg",
    fullStory: [
      "During my internship as System Owner (IT) at PT PLN Nusantara Power Unit Pembangkitan Brantas, I took ownership of developing and maintaining a web-based health mapping system for hydroelectric power plant machinery and assets.",
      "The system monitors key parameters and condition indicators across generating units. I organized, processed, and analyzed large operational telemetry datasets using structured methods and Microsoft Excel, converting raw equipment metrics into actionable health indices.",
      "This web platform empowers maintenance engineers to quickly identify sub-optimal operating conditions, prioritize preventative servicing, and ensure consistent electricity generation across regional power grids."
    ],
    highlights: ["Real-time Asset Health Scoring", "Preventative Maintenance Tracking", "Operational Data Analytics"]
  },
  {
    id: "olivia",
    badge: "Case Study",
    title: "EYIP: Smart IoT Food Safety Detection (OLIVIA X UB Finalist)",
    organization: "Universitas Brawijaya & Forum Pendidikan Tinggi Vokasi Indonesia",
    role: "IoT System Developer & Team Lead",
    period: "August 2025",
    location: "National Competition, Indonesia",
    summary: "Engineered an IoT embedded system for detecting biological contamination in food, achieving Top 7 National Finalist among 1,303 teams from 94 universities nationwide.",
    image: "/images/foto tim.jpg",
    fullStory: [
      "To support the national Makan Bergizi Gratis (Free Nutritious Meals) program, our team designed EYIP (Eyes on Your Ideal Plate) — an automated device that detects food freshness, cleanliness, and biological contaminants before meals are distributed to schools.",
      "The device incorporates specialized optical and chemical sensors connected to an embedded microcontroller, running threshold detection algorithms that instantly classify food safety levels.",
      "Representing Universitas Brawijaya at the prestigious Olimpiade Vokasi Indonesia (OLIVIA X UB), the project advanced through multiple rigorous judging rounds to become a Top 7 National Finalist among 1,303 competing teams from 94 universities across Indonesia."
    ],
    highlights: ["Top 7 National Finalist", "1,303 Teams Competed", "Embedded IoT Sensing"]
  }
];

export default function CaseStudies() {
  const [activeModal, setActiveModal] = useState<typeof caseStudies[0] | null>(null);

  return (
    <Section
      id="case-studies"
      tag="SELECTED CASE STUDIES"
      title="In-Depth Product Stories"
      actionText="Read All Case Studies"
      actionHref="#case-studies"
      subtitle="Deep-dive stories on real-world engineering challenges, from hydroelectric telemetry to national IoT competitions."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-[#242225] hover:bg-[#383033] rounded-2xl border border-white/10 hover:border-[#830000]/40 overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            {/* Card Content with Image & Description */}
            <div className="flex flex-col sm:flex-row">
              {/* Image side */}
              <div className="sm:w-5/12 relative aspect-[16/10] sm:aspect-auto overflow-hidden bg-[#1C1A1B]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                
                {/* Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#171719]/90 text-[#830000] border border-[#830000]/30">
                    {study.badge}
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="sm:w-7/12 p-5 sm:p-6 flex flex-col justify-between space-y-3">
                <div>
                  <p className="text-[11px] font-semibold text-[#A9A5A7] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Building2 size={12} className="text-[#830000]" />
                    <span className="truncate">{study.organization}</span>
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#830000] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs text-[#C9C7C8] leading-relaxed mt-2 line-clamp-3">
                    {study.summary}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(study)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#830000] hover:underline"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#202022] border border-[#830000]/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div>
                <span className="badge-maroon text-[11px] mb-2">{activeModal.badge}</span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-2 leading-tight">
                  {activeModal.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-xs text-[#A9A5A7] mt-3 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Building2 size={13} className="text-[#830000]" />
                    <span>{activeModal.organization}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#830000]" />
                    <span>{activeModal.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#830000]" />
                    <span>{activeModal.location}</span>
                  </div>
                </div>
              </div>

              {/* Modal Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-black">
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Story Narrative */}
              <div className="space-y-3 text-sm text-[#ECEAEC] leading-relaxed">
                {activeModal.fullStory.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Highlights Pill Badges */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider font-bold text-[#A9A5A7] mb-3">Key Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {activeModal.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#30282A] text-[#830000] border border-[#830000]/20"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
