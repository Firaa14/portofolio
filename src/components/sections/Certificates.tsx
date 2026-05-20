import Section from '../layout/Section';
import { motion } from 'motion/react';
import FlipCard from '../ui/FlipCard';

const certificates = 
  [
  {
    "title": "Microsoft Office Desktop Application",
    "issuer": "Trust Training Partners with Universitas Brawijaya",
    "date": "February 2026",
    "description": "Validates professional proficiency in Microsoft Office applications, establishing essential administrative and documentation skills required in the Information Technology industry.",
    "imageUrl": "/images/ms office ub.png"
  },
  {
    "title": "Building Virtual Labs & Linux Fundamentals",
    "issuer": "Ministry of Communication and Digital Affairs (Komdigi)",
    "date": "February 2026",
    "description": "Covers foundational concepts of virtual environment configuration and core Linux operating system commands, serving as a critical infrastructure baseline for IT roles.",
    "imageUrl": "/images/dasar linux kondigi.png"
  },
  {
    "title": "Introduction to Cloud Computing",
    "issuer": "Ministry of Communication and Digital Affairs (Komdigi)",
    "date": "February 2026",
    "description": "Provides a comprehensive understanding of cloud computing core concepts, architecture, and deployment models tailored for modern cloud-based application management.",
    "imageUrl": "/images/fondasi clous computing komdigi.png"
  },
  {
    "title": "Introduction to Cyber Security",
    "issuer": "Cisco Networking Academy",
    "date": "February 2026",
    "description": "Demonstrates a foundational understanding of cybersecurity principles, focusing on threat identification, data protection, and securing digital systems.",
    "imageUrl": "/images/(BTCMP) Introduce to CyberSecurity - Cisco.png"
  },
  {
    "title": "Introduction to Cybersecurity and Career Awareness",
    "issuer": "Ministry of Communication and Digital Affairs (Komdigi)",
    "date": "August 2025",
    "description": "Acquired insights into cybersecurity landscapes, risk management, and strategic career path mapping within the rapidly growing digital security industry.",
    "imageUrl": "/images/cyber.png"
  },
  {
    "title": "Belajar Dasar Structured Query Language (SQL)",
    "issuer": "Dicoding Indonesia",
    "date": "April 2025",
    "description": "Mastered fundamental relational database management concepts, data manipulation, and querying techniques essential for back-end development and data analysis.",
    "imageUrl": "/images/belajar dasar sql.png"
  },
  {
    "title": "Foundational C# with Microsoft",
    "issuer": "freeCodeCamp in partnership with Microsoft",
    "date": "March 2025",
    "description": "Certified in core C# programming concepts, covering object-oriented programming (OOP), data types, and logical structures under Microsoft's curriculum standard.",
    "imageUrl": "/images/(BTCMP) freeCodeCamp - Microsoft.png"
  },
  {
    "title": "Belajar Dasar AI",
    "issuer": "Dicoding Indonesia",
    "date": "March 2025",
    "description": "Explored the fundamental pillars of Artificial Intelligence, including machine learning basics and smart technology concepts, to build a future-ready tech career.",
    "imageUrl": "/images/belajar dasar ai dicoding.png"
  },
  {
    "title": "Samsung Innovation Campus",
    "issuer": "Samsung & Hacktiv8 Indonesia",
    "date": "December 2024",
    "description": "Completed intensive training that evaluated logical reasoning, critical thinking, and problem-solving skills focused on future tech and AI implementation.",
    "imageUrl": "/images/(BTCMP) Sertifikat SIC6.png"
  }
];

export default function Certificates() {
  return (
    <Section 
      id="certificates" 
      title="Certificates" 
      subtitle="Click or hover to view certificates."
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto"
      >
        {certificates.map((cert) => (
          <div key={cert.title}>
            <FlipCard
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
              imageUrl={cert.imageUrl}
            />
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
