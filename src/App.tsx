import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Honored from './components/sections/Honored';
import Contact from './components/sections/Contact';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-[#0F172A] min-h-screen">
      {/* Mesh Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-sky-400/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Projects />
        <Honored />
        <Certificates />
        <Contact />
      </main>

      {/* Floating Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 glass shadow-2xl rounded-2xl flex items-center justify-center text-indigo-400 hover:text-white z-40 transition-all active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </motion.button>
    </div>
  );
}

