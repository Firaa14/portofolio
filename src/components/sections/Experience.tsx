import { motion } from 'motion/react';
import Section from '../layout/Section';
import { MapPin, Building2, Calendar, Award, ExternalLink } from 'lucide-react';
import { generateResumePdf } from '@/src/utils/generateResumePdf';

const experiences = [
  {
    period: "2026 - 2027",
    title: "Environmental Division Staff - GenBI Universitas Brawijaya",
    company: "GenBI Universitas Brawijaya",
    location: "Malang",
    type: "Organization",
    description: "Served as a Publication, Decoration, and Documentation staff in this division to support our big projects and events. Such as GenBI Goes to School, GenBI Goes to Campus, and GenBI Goes to Village. Responsible for creating visual content, managing event aesthetics, and documenting activities for promotional and archival purposes.",
    tags: ["IoT Hardware", "Teamwork", "Food Safety", "Problem Solving"]
  },
  {
    period: "Aug - Dec 2026",
    title: "IT Intern - System Owner",
    company: "PT PLN Nusantara Power Unit Pembangkitan Brantas",
    location: "Malang",
    type: "Internship",
    description: "Developed and maintained a web-based health mapping system for hydroelectric power plant units, focusing on asset reliability monitoring. Processed, analyzed, and organized asset reliability data using Microsoft Excel to support equipment condition assessment and maintenance monitoring.",
    tags: ["Asset Reliability", "Health Mapping", "Excel Telemetry", "Power Plants"]
  },
  {
    period: "2026 - 2027",
    title: "Bank Indonesia Scholarship Awardee",
    company: "Bank Indonesia (GenBI)",
    location: "Malang",
    type: "Scholarship",
    description: "Awarded the Bank Indonesia Scholarship in recognition of academic performance, leadership potential, and commitment to personal and professional development. Active member of GenBI conducting community leadership initiatives.",
    tags: ["Leadership", "Community Development", "Academic Excellence"]
  },
  {
    period: "July - Aug 2025",
    title: "National Finalist - Olimpiade Vokasi Indonesia (OLIVIA X UB)",
    company: "Forum Pendidikan Tinggi Vokasi Indonesia",
    location: "National",
    type: "Competition",
    description: "Developed an IoT-based food safety device for detecting biological contaminants for Free Nutritious Meals Program (MBG) and represented Universitas Brawijaya as a national finalist among 1,303 teams from 94 universities across Indonesia.",
    tags: ["IoT Hardware", "Teamwork", "Food Safety", "Problem Solving"]
  },
  {
    period: "2024 - 2025",
    title: "Treasurer 1 - Campus Expo Committee",
    company: "Campus Expo Committee / Alumni Network",
    location: "Malang",
    type: "Organization",
    description: "Served as Treasurer 1 in the Campus Expo committee, responsible for managing the event's financial planning, budgeting, expense tracking, and financial reporting. Ensured transparent fund allocation, monitored cash flow throughout the event preparation and execution, and coordinated with other divisions to maintain efficient and accountable financial management.",
    tags: ["Budgeting", "Financial Planning", "Coordination", "Accountability"]
  }
];

export default function Experience() {
  return (
    <Section 
      id="experience" 
      tag="PROFESSIONAL EXPERIENCE" 
      title="A Journey of Continuous Growth" 
      actionText="View Full Resume"
      actionOnClick={generateResumePdf}
      subtitle="Practical roles, internships, national competitions, and leadership activities where I contributed technical and organizational value."
    >
      <div className="relative border-l border-white/10 ml-3 md:ml-32 space-y-8 pb-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative pl-6 md:pl-8 group"
          >
            {/* Timeline Glowing Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#171719] border-2 border-[#830000] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#830000]" />
            </div>

            {/* Date label on the left (on desktop) */}
            <div className="md:absolute md:-left-36 md:top-1 text-xs font-semibold text-[#A9A5A7] group-hover:text-[#830000] transition-colors mb-1 md:mb-0 md:text-right md:w-28">
              {exp.period}
            </div>

            {/* Timeline Card */}
            <div className="bg-[#242225] group-hover:bg-[#383033] border border-white/10 group-hover:border-[#830000]/40 rounded-2xl p-5 md:p-6 transition-all duration-300 shadow-md space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base md:text-lg font-display font-bold text-white group-hover:text-[#830000] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-medium text-[#830000] flex items-center gap-1.5 mt-0.5">
                    <Building2 size={13} />
                    <span>{exp.company}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#A9A5A7] self-start sm:self-auto">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#30282A] text-[#830000] border border-[#830000]/20 text-[11px] font-semibold">
                    {exp.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-[#C9C7C8] leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#30282A] text-[#C9C7C8] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
