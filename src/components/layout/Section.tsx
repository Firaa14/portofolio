import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface SectionProps {
  id: string;
  tag?: string;
  title?: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  actionOnClick?: () => void;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bgColor?: string;
}

export default function Section({
  id,
  tag,
  title,
  subtitle,
  actionText,
  actionHref,
  actionOnClick,
  children,
  className,
  containerClassName,
  bgColor = 'bg-transparent'
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn('py-16 md:py-24 relative', bgColor, className)}
    >
      <div className={cn('max-w-6xl mx-auto px-6 relative z-10', containerClassName)}>
        {(title || tag) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                {tag && (
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#A9A5A7] mb-2.5">
                    {tag}
                  </p>
                )}
                {title && (
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="text-sm md:text-base text-[#C9C7C8] max-w-2xl mt-3 leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>

              {actionText && (actionHref || actionOnClick) && (
                <motion.a
                  href={actionHref || '#'}
                  onClick={(event) => {
                    if (actionOnClick) {
                      event.preventDefault();
                      actionOnClick();
                    }
                  }}
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#830000] hover:text-[#660000] transition-colors whitespace-nowrap self-start md:self-end"
                >
                  <span>{actionText}</span>
                  <ArrowUpRight size={16} />
                </motion.a>
              )}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
