import Section from '../layout/Section';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "Pelatihan Logika Pemrograman Dasar dengan Scratch untuk Siswa SMPN 4 Batu",
    category: "Pendidikan dan Teknologi",
    description: "Proyek observasi lapangan yang bertujuan memperkenalkan konsep computational thinking kepada siswa SMPN 4 Kota Batu menggunakan platform visual Scratch. Program ini fokus pada pengembangan logika dasar dan pemecahan masalah melalui pendekatan pembelajaran interaktif.",
    image: "/images/SMPN 4 Batu.jpeg",
    tags: ["Scratch", "Teknologi", "Logika Pemrograman"]
  },
  {
    title: "Studi Tradisi Unan-Unan Desa Ngadas",
    category: "Penelitian Budaya",
    description: "Penelitian lapangan mengenai pelestarian nilai-nilai kearifan lokal melalui tradisi Unan-Unan di Desa Ngadas. Proyek ini menganalisis peran tradisi adat dalam memperkuat integrasi sosial dan identitas masyarakat lokal.",
    image: "/images/ngadas.png",
    tags: ["Tradisi", "Bromo", "Kebudayaan"]
  },
  {
    title: "Sosialisasi Perguruan Tinggi: Campus Expo SMA",
    category: "Event Management",
    description: "Menginisiasi dan menyelenggarakan pameran pendidikan untuk membantu siswa menentukan jenjang studi lanjut. Mencakup koordinasi alumni, presentasi program studi, dan sesi konsultasi pemilihan jurusan.",
    image: "/images/campex.jpeg",
    tags: ["Komunikasi", "Relasi", "Event Planning"]
  },  
  {
    title: "Pengembangan Website Travel Malang Raya",
    category: "Web Development",
    description: "Website untuk mempromosikan destinasi wisata di Malang Raya dengan fokus pada desain responsif dan pengalaman pengguna. Menyediakan informasi lengkap tentang tempat wisata, akomodasi, dan aktivitas lokal.",
    image: "/images/travio.png",
    link: "https://www.behance.net/gallery/244234591/TRAVIO",
    github: "https://github.com/Firaa14/TRAVIO-WEBSITE.git",
    tags: ["Web Development", "UI/UX Design", "Pariwisata"]
  },
  {
    title: "Egg Quality Detection System: AI-Powered Quality Control",
    category: "Artificial Intelligence",
    description: "Sistem kontrol kualitas berbasis kecerdasan buatan yang mendeteksi kondisi fisik telur melalui pemrosesan gambar. Model deep learning mencapai akurasi mAP50 sebesar 92% dalam mengklasifikasikan telur normal atau retak.",
    image: "/images/yolo.png",
    github: "https://github.com/Firaa14/egg-detection.git",
    tags: ["Machine Learning", "Computer Vision", "Image Processing"]
  },
  {
    title: "Hash Generator & Encryptor",
    category: "Cryptography",
    description: "Website untuk menghasilkan hash dan melakukan enkripsi data menggunakan berbagai algoritma kriptografi. Alat ini dirancang untuk memberikan solusi keamanan data yang efektif dan mudah digunakan.",
    image: "/images/hash cyber.png",
    link: "https://cyber-sec-kel5.vercel.app",
    tags: ["Cryptography", "Security", "Data Protection"]
  },
  {
    title: "Smart Fire Detection System pada Warehouse Berbasis IoT",
    category: "Internet of Things",
    description: "Sistem deteksi kebakaran berbasis IoT yang memanfaatkan sensor suhu dan api untuk memberikan peringatan dini. Menyediakan dashboard interaktif dengan data real-time dan notifikasi otomatis untuk meningkatkan keselamatan.",
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
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <motion.img 
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.7 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300" />
        
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
              {expanded ? 'Sembunyikan' : 'Baca Selengkapnya'}
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
    <Section id="projects" title="Proyek Saya" subtitle="Berikut adalah proyek yang pernah saya kerjakan, baik dalam bidang teknologi maupun non-teknologi.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
