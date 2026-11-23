import { Github, Linkedin } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#171719] py-12 md:py-16 text-xs text-[#A9A5A7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-white/5">
          
          {/* Left Brand & Motto */}
          <div className="md:col-span-4 space-y-2">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#242225] border border-white/10 group-hover:border-[#830000]/40 flex items-center justify-center font-display font-black text-[#830000] text-xs">
                SF
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-[#830000] transition-colors">
                Syafira Firdausi
              </span>
            </a>
            <p className="text-[11px] text-[#858184] leading-relaxed max-w-xs">
              Building digital products that matter.<br />
              Code. Systems. Hardware. Impact.
            </p>
          </div>

          {/* Middle Nav Links & Socials */}
          <div className="md:col-span-5 flex flex-col items-start md:items-center space-y-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#830000] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/Firaa14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-[#C9C7C8] hover:text-[#830000] hover:bg-white/5 transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/syafirafn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-[#C9C7C8] hover:text-[#830000] hover:bg-white/5 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/syfra_f"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-[#C9C7C8] hover:text-[#830000] hover:bg-white/5 transition-colors"
                title="Instagram"
              >
                <SiInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Right Quote & Copyright */}
          <div className="md:col-span-3 md:text-right space-y-1">
            <p className="italic text-[#C9C7C8] font-serif">
              "Better products. A brighter tomorrow."
            </p>
            <p className="text-[10px] text-[#858184]">
              © {new Date().getFullYear()} Syafira Firdausi Nuzulla.<br />
              All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
