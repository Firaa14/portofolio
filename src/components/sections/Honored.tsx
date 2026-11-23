import { motion, AnimatePresence } from 'motion/react';
import Section from '../layout/Section';
import FlipCard from '../ui/FlipCard';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const honors = [
  {
    title: "Top 7 National Finalist in Smart Systems — OLIVIA X Universitas Brawijaya",
    issuer: "Forum Pendidikan Tinggi Vokasi Indonesia",
    date: "Aug 2025",
    description: "Achieved Top 7 National Finalist out of 1,303 teams from 94 universities across Indonesia. Developed an innovative IoT embedded system for food cleanliness and biological contaminant detection to support the national Free Nutritious Meals (MBG) program.",
    imageUrl: "/images/olivia foto.png"
  },
  {
    title: "Bank Indonesia Scholarship Awardee",
    issuer: "Bank Indonesia (GenBI)",
    date: "July 2026",
    description: "Selected as a Bank Indonesia Scholarship recipient based on outstanding academic achievement and potential for leadership and professional development. Active member of GenBI executing community empowerment programs.",
    imageUrl: "/images/genbi-awardee.jpeg"
  }
];

export default function Honored() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImage(null);
    };
    if (modalImage) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [modalImage]);

  return (
    <Section 
      id="honored" 
      tag="RECOGNITION & AWARDS"
      title="Honors & Achievements" 
      subtitle="Accolades earned through competitive national innovation contests and prestigious institutional scholarship selections."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {honors.map((honor) => (
          <div key={honor.title}>
            <FlipCard
              title={honor.title}
              issuer={honor.issuer}
              date={honor.date}
              description={honor.description}
              imageUrl={honor.imageUrl}
              onImageClick={() => setModalImage(honor.imageUrl)}
            />
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImage}
                alt="Award preview"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
              />
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="absolute top-2 right-2 p-2 rounded-full bg-[#171719]/90 text-white hover:text-[#830000] border border-white/20"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
