import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { ExternalLink, ChevronDown } from 'lucide-react';

interface HonorCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export default function HonorCard({
  title,
  issuer,
  date,
  description,
  imageUrl,
  className
}: HonorCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn("perspective-1000 w-full max-w-lg mx-auto aspect-[4/3] cursor-pointer group", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden glass rounded-2xl p-6 flex flex-col justify-between group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-300 border border-white/10 hover:border-indigo-400/30">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-bl-3xl -mr-6 -mt-6 transition-all group-hover:bg-indigo-500/20 group-hover:scale-110" />
          
          <div className="relative z-10">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">{issuer}</p>
            <h3 className="text-lg font-display font-bold leading-tight text-white mb-3 group-hover:text-indigo-300 transition-colors">{title}</h3>
            <p className={`text-sm text-slate-400 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
              {description}
            </p>
            
            {/* Read More Button */}
            <motion.button
              whileHover={{ color: '#818cf8' }}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="mt-3 text-indigo-400 hover:text-indigo-300 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              {isExpanded ? (
                <>
                  Show less
                  <ChevronDown size={12} className="rotate-180 transition-transform" />
                </>
              ) : (
                <>
                  Read more
                  <ChevronDown size={12} className="transition-transform" />
                </>
              )}
            </motion.button>
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-tighter">{date}</span>
            <div className="bg-white/5 p-2 rounded-xl text-slate-500 group-hover:text-indigo-300 transition-colors border border-white/5 group-hover:border-indigo-400/30">
              <ExternalLink size={14} />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-white border border-white/10 p-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain rounded-lg"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  );
}
