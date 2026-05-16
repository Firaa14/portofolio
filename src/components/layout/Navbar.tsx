import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { COLORS, BORDER_RADIUS, TRANSITIONS } from '@/src/constants/design';

const navItems = [
  { name: 'Tentang', href: '#about' },
  { name: 'Minat', href: '#interests' },
  { name: 'Pendidikan', href: '#education' },
  { name: 'Pengalaman', href: '#experience' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Sertifikat', href: '#certificates' },
  { name: 'Kontak', href: '#contact' },
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className={cn(
        'max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-3 rounded-2xl transition-all duration-300',
        scrolled 
          ? 'bg-white/5 backdrop-blur-md shadow-lg border border-white/10' 
          : 'bg-transparent'
      )}>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full" />
            </motion.a>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 bg-[#1e243a]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
