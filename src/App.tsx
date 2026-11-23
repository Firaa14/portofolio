import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import CoreExpertise from './components/sections/CoreExpertise';
import Projects from './components/sections/Projects';
import CaseStudies from './components/sections/CaseStudies';
import TechStack from './components/sections/TechStack';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Honored from './components/sections/Honored';
import Certificates from './components/sections/Certificates';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const syncTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`theme-page relative min-h-screen overflow-x-hidden font-sans ${isDark ? 'theme-dark' : 'theme-light'}`}>
      
      {/* Background radial gradient atmospheres */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-[radial-gradient(circle,_rgba(131,0,0,0.10)_0%,_rgba(23,23,25,0)_70%)] blur-[80px]" />
        <div className="absolute top-[35%] -left-[200px] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(131,0,0,0.06)_0%,_rgba(23,23,25,0)_70%)] blur-[100px]" />
        <div className="absolute top-[70%] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(131,0,0,0.08)_0%,_rgba(23,23,25,0)_70%)] blur-[110px]" />
      </div>

      {/* Top Maroon Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#830000] origin-left z-[100] shadow-[0_0_10px_#830000]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="relative z-10 space-y-4 md:space-y-8">
        <Hero />
        <CoreExpertise />
        <Projects />
        <CaseStudies />
        <TechStack />
        <Experience />
        <Education />
        <Honored />
        <Certificates />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, backgroundColor: '#383033' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[#242225]/90 backdrop-blur-md border border-white/10 hover:border-[#830000]/40 flex items-center justify-center text-[#830000] shadow-2xl z-40 transition-colors"
          title="Back to Top"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </div>
  );
}
