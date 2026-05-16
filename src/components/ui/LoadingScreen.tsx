import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0F172A]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 180, 360],
            borderRadius: ["25%", "50%", "25%"]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-rose-400"
      />
    </motion.div>
  );
}
