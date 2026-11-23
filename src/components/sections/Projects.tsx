import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Section from '../layout/Section';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Smart IoT Fire Detection & Automated Suppression System",
    category: "IoT System",
    description: "An IoT-based fire detection and automated mitigation system that utilizes temperature and flame sensors for early hazard warnings. Features an interactive real-time dashboard and automated water sprinkler response upon flame detection to prevent fire spread and enhance warehouse safety.",
    image: "/images/iot4.jpeg",
    link: "https://drive.google.com/file/d/1K-oh08xg8TNtf1F6THTY74M0V_FUVkf9/view?usp=sharing",
    github: "https://github.com/Firaa14/iot-sfd-fix.git",
    tags: ["IoT", "Embedded", "Sensors", "Telemetry"]
  },
  {
    title: "YOLO-Based Egg Quality Detection System",
    category: "Computer Vision",
    description: "Computer vision system leveraging YOLOv8 to automate egg quality control by classifying shell conditions (cracked, abnormal markings, defect-free). Managed the complete pipeline: dataset collection, image labeling, model training, evaluation, and optimization.",
    image: "/images/ai.png",
    github: "https://github.com/Firaa14/egg-detection.git",
    tags: ["YOLOv8", "Python", "AI", "Machine Learning"]
  },
  {
    title: "Malang Raya Travel Platform (TRAVIO)",
    category: "Web Platform",
    description: "Responsive travel platform to promote tourism in Greater Malang built with Laravel and Tailwind CSS. Prioritizes seamless UX, comprehensive tourist attraction listings, accommodations, and itinerary planning.",
    image: "/images/travio preview.png",
    link: "https://www.figma.com/proto/QfStr29kmbjUCMBdGGpf5j/UI-UX-SMT-3?node-id=823-806&p=f&t=dNoeoO9O9aoZWNrS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=823%3A806",
    github: "https://github.com/Firaa14/TRAVIO-WEBSITE.git",
    tags: ["Laravel", "Tailwind CSS", "UI/UX", "PHP"]
  },
  {
    title: "EYIP: Eyes on Your Ideal Plate",
    category: "IoT & Health",
    description: "An innovative IoT-based food cleanliness and nutrition safety device to support the national Free Nutritious Meals (MBG) program. Integrates embedded sensors and algorithms to verify meal safety for students.",
    image: "/images/eyip.png",
    link: "https://drive.google.com/file/d/1-Gcuj0SsWeF7uY-EMztnFVAnXPwuyMwl/view?usp=sharing",
    tags: ["IoT", "Food Safety", "Hardware", "Analytics"]
  },
  {
    title: "Hash Generator & Encryptor Security Tool",
    category: "Security",
    description: "A web-based security utility designed to generate cryptographic hashes and perform secure encryption across various algorithms with an intuitive and responsive interface.",
    image: "/images/hash.png",
    link: "https://cyber-sec-kel5.vercel.app",
    tags: ["Cryptography", "Web Security", "JavaScript"]
  },
  {
    title: "Unan-Unan Tradition of Ngadas Village",
    category: "Cultural Research",
    description: "Field research investigating the preservation of indigenous wisdom and social integration through the sacred Unan-Unan tradition in Ngadas Village, Mount Bromo.",
    image: "/images/ngadas.png",
    link: "https://youtu.be/39DKM7dDKb4",
    tags: ["Field Research", "Culture", "Bromo"]
  },
  {
    title: "Basic Programming Logic Training with Scratch (SMPN 4 Batu)",
    category: "Education",
    description: "A technology community outreach project introducing computational thinking and algorithm concepts to junior high school students using interactive visual programming in Scratch.",
    image: "/images/SMPN 4 Batu.jpeg",
    link: "https://drive.google.com/file/d/19Toy8toxQauqiW4Zb2msJxDSwvJz7-2n/view?usp=drive_link",
    tags: ["Scratch", "Community Service", "Algorithms"]
  }
];

function ProjectCard({ project, index }: { project: Project; index: number; key?: string }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 110;
  const isLong = project.description.length > maxLength;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-[#242225] hover:bg-[#383033] rounded-2xl border border-white/10 hover:border-[#830000]/40 flex flex-col justify-between overflow-hidden transition-all duration-300 group shadow-lg"
    >
      <div>
        {/* Project Thumbnail Image with Category Pill Badge */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1A1B]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#242225] via-transparent to-black/20" />
          
          {/* Top Pill Category Tag (as shown in reference image) */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#1C1A1B]/90 backdrop-blur-md text-[#830000] border border-[#830000]/30 shadow-md">
              {project.category}
            </span>
          </div>

          {/* Top Right Quick Link Icons */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-[#1C1A1B]/80 backdrop-blur-md text-white hover:text-[#830000] border border-white/10 transition-colors"
                title="View GitHub Repository"
              >
                <Github size={14} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-[#1C1A1B]/80 backdrop-blur-md text-white hover:text-[#830000] border border-white/10 transition-colors"
                title="Open Project Demo / Link"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-2.5">
          <h3 className="text-base font-display font-bold text-white group-hover:text-[#830000] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs md:text-sm text-[#A9A5A7] leading-relaxed">
            {expanded ? project.description : (isLong ? project.description.slice(0, maxLength) + '...' : project.description)}
          </p>

          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="text-[11px] font-semibold text-[#830000] hover:underline"
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>

      {/* Footer / Bottom Actions */}
      <div className="px-5 pb-5 pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
        <a
          href={project.link || project.github || "#projects"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#830000] transition-colors"
        >
          <span>View Project</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {/* Tech tags preview */}
        <div className="flex flex-wrap gap-1 justify-end max-w-[55%]">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#30282A] text-[#C9C7C8] border border-white/5 whitespace-nowrap"
            >
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
    <Section
      id="projects"
      tag="FEATURED PROJECTS"
      title="Recent Work"
      actionText="View All Projects"
      actionHref="https://github.com/Firaa14"
      subtitle="Selected hardware, back-end systems, computer vision models, and web applications I've engineered."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <ProjectCard key={proj.title} project={proj} index={idx} />
        ))}
      </div>
    </Section>
  );
}
