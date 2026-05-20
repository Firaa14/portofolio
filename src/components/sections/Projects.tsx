import Section from '../layout/Section';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "Basic Programming Logic Training with Scratch for Students of SMPN 4 Batu",
    category: "Educational and Technology",
    description: "A field observation project aimed at introducing computational thinking concepts to students of SMPN 4 Batu through the visual programming platform Scratch. This program focused on developing fundamental logic and problem-solving skills using an interactive and engaging learning approach.",
    image: "/images/SMPN 4 Batu.jpeg",
    link: "https://drive.google.com/file/d/19Toy8toxQauqiW4Zb2msJxDSwvJz7-2n/view?usp=drive_link",
    tags: ["Scratch", "Technology", "Programming Logic"]
  },
  {
    title: "EYIP: Eyes on Your Ideal Plate",
    category: "IoT and Embedded Systems",
    description: "An innovative IoT-based food quality detection system designed to support the national Makan Bergizi Gratis (Free Nutritious Meals) program. The project integrates embedded sensors and machine learning algorithms to assess food cleanliness and nutritional quality, ensuring safe and healthy meals for the community.",
    image: "/images/eyip.png",
    link: "https://drive.google.com/file/d/1-Gcuj0SsWeF7uY-EMztnFVAnXPwuyMwl/view?usp=sharing",
    tags: ["IoT", "Embedded Systems", "Food Quality"]
  },
  {
    title: "Unan-Unan Tradition of Ngadas Village",
    category: "Cultural Research",
    description: "This field research investigates the preservation of local wisdom through the Unan-Unan tradition in Ngadas Village. The study aims to provide a deeper understanding of how this indigenous custom functions to reinforce social integration and sustain the cultural identity of the local community.",
    image: "/images/ngadas.png",
    link: "https://youtu.be/l-NUDTVrGSg?si=u4JBLe-ZeWQs62M3",
    tags: ["Cultural", "Bromo", "Research"]
  },
  {
    title: "Malang Raya Travel Platform Development",
    category: "Web Development",
    description: "Developed a responsive travel platform to promote tourism in Greater Malang using Laravel and Tailwind CSS. The project prioritizes seamless user experience (UX) and clean design, providing comprehensive information on tourist attractions, accommodations, and local activities.",
    image: "/images/travio preview.png",
    link: "https://www.figma.com/proto/QfStr29kmbjUCMBdGGpf5j/UI-UX-SMT-3?node-id=823-806&p=f&t=dNoeoO9O9aoZWNrS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=823%3A806",
    github: "https://github.com/Firaa14/TRAVIO-WEBSITE.git",
    tags: ["Web Development", "UI/UX Design", "Information Technology"]
  },
  {
    title: "YOLO - Based Egg Quality Detection System",
    category: "Artificial Intelligence",
    description: "Developed a computer vision system leveraging YOLOv8 to automate quality control by classifying egg shell conditions (cracked, abnormal markings, and defect-free). Responsible for the end-to-end pipeline, encompassing dataset collection, image labeling, model training, evaluation, and optimization for real-world deployment.",
    image: "/images/ai.png",
    github: "https://github.com/Firaa14/egg-detection.git",
    tags: ["Machine Learning", "Computer Vision", "Image Processing"]
  },
  {
    title: "Hash Generator & Encryptor",
    category: "Cryptography",
    description: "A web-based security tool designed to generate cryptographic hashes and perform data encryption using various algorithms. The platform focuses on delivering an intuitive user experience while providing efficient and reliable data security solutions.",
    image: "/images/hash.png",
    link: "https://cyber-sec-kel5.vercel.app",
    tags: ["Cryptography", "Security", "Data Protection"]
  },
  {
    title: "Smart IoT Fire Detection and Automated Suppression System",
    category: "Internet of Things",
    description: "An IoT-based fire detection and automated mitigation system that utilizes temperature and flame sensors for early warning hazards. Featuring an interactive dashboard with real-time data and automated alerts, the system triggers an immediate response via an automated water sprinkler upon flame detection to prevent fire spread and enhance warehouse safety.",
    image: "/images/coming soon.png",
    link: "#",
    github: "#",
    tags: ["IoT", "Embedded Systems", "Real-time Data"]
  }
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 140;
  const isLong = project.description.length > maxLength;
  const truncated = project.description.substring(0, maxLength);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl overflow-hidden transition-all duration-500 border border-white/10 hover:border-indigo-500/30 flex flex-col h-full bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05]"
    >
      {/* Image Section with Overlay Icons */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-slate-700 to-slate-600">
        <motion.img 
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.7 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover brightness-110 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Hover Action Icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.github && project.github !== '#' && (
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-indigo-500/40 hover:border-indigo-400 transition-all"
              title="Lihat Kode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </motion.a>
          )}
          {project.link && project.link !== '#' && (
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.15, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-sky-500/40 hover:border-sky-400 transition-all"
              title="Lihat Demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={24} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="inline-block text-xs font-bold text-indigo-300 uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 mb-3">
            {project.category}
          </span>
          <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
            {project.title}
          </h3>
        </div>
        
        {/* Description with Expand */}
        <div className="flex-grow mb-4">
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
            {expanded ? project.description : (isLong ? truncated + '...' : project.description)}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-indigo-400 hover:text-indigo-300 text-xs font-semibold transition-colors"
            >
              {expanded ? 'Show Less' : 'Show More '}
            </button>
          )}
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full text-xs font-medium transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Project" subtitle="">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </motion.div>
    </Section>
  );
}
