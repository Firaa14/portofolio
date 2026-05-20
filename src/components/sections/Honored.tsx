import Section from '../layout/Section';
import { motion } from 'motion/react';
import FlipCard from '../ui/FlipCard';

const honors = [
  {
    title: "Top 7 National Finalist in IoT Embedded Systems – OLIVIA X 2025",
    issuer: "Forum Pendidikan Tinggi Vokasi Indonesia",
    date: "Aug 2025",
    description: "Achieved Top 7 National Finalist out of 1,000+ participants. Developed an innovative IoT embedded system for food cleanliness and quality detection to support the national Makan Bergizi Gratis (Free Nutritious Meals) program.",
    imageUrl: "/images/olivia foto.png"
  }
];

export default function Honored() {
  return (
    <Section 
      id="honored" 
      title="Honors & Awards" 
      subtitle=""
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto"
      >
        {honors.map((honor) => (
          <div key={honor.title}>
            <FlipCard
              title={honor.title}
              issuer={honor.issuer}
              date={honor.date}
              description={honor.description}
              imageUrl={honor.imageUrl}
            />
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
