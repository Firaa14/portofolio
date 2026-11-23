import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ThemeToggle from '../ui/ThemeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Awards', href: '#honored' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8',
        scrolled ? 'py-3 bg-[#171719]/85 backdrop-blur-md border-b border-white/5' : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#242225] border border-white/10 group-hover:border-[#830000]/40 flex items-center justify-center font-display font-extrabold text-[#830000] text-sm tracking-wider transition-colors">
            SF
          </div>
          <span className="font-display font-bold text-white text-base md:text-lg tracking-tight group-hover:text-[#830000] transition-colors">
            Syafira Firdausi
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#C9C7C8] hover:text-[#830000] transition-colors relative py-1"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right CTA / Action */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#830000] hover:bg-[#660000] text-white font-display font-bold text-xs md:text-sm transition-all duration-200 shadow-[0_0_20px_-3px_rgba(131,0,0,0.3)] hover:shadow-[0_0_25px_0px_rgba(131,0,0,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let's Work Together</span>
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full bg-[#830000] text-white font-bold text-xs"
          >
            Contact
          </a>
          <button
            className="p-2 text-[#C9C7C8] hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-3 bg-[#202022] rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-5"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-[#C9C7C8] hover:text-[#830000] hover:bg-white/[0.03] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#830000] text-white font-bold text-sm"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
