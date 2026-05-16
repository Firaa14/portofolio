import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bgColor?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  bgColor = 'bg-transparent'
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn('py-16 md:py-24 lg:py-32 px-4 md:px-6 relative', bgColor, className)}
    >
      <div className={cn('max-w-6xl mx-auto relative z-10', containerClassName)}>
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-4">
              <div className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-sky-400 rounded-full" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
                {title}
              </h2>
            </div>
            {subtitle && (
              <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
