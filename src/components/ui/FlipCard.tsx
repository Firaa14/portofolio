import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { ExternalLink, Award } from 'lucide-react';

interface FlipCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  className?: string;
  onImageClick?: () => void;
}

export default function FlipCard({
  title,
  issuer,
  date,
  description,
  imageUrl,
  className,
  onImageClick,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("perspective-1000 w-full aspect-[4/3] cursor-pointer group select-none", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => {
        if (onImageClick && isFlipped) {
          onImageClick();
        } else {
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-[#242225] rounded-2xl p-6 flex flex-col justify-between overflow-hidden border border-white/10 group-hover:border-[#830000]/40 group-hover:shadow-[0_0_25px_-5px_rgba(131,0,0,0.15)] transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#830000]/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-[#830000]/10" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-[#830000]/10 text-[#830000]">
                <Award size={14} />
              </span>
              <p className="text-xs font-bold text-[#830000] uppercase tracking-wider">{issuer}</p>
            </div>
            
            <h3 className="text-lg font-display font-bold leading-tight text-white mb-3 group-hover:text-[#830000] transition-colors line-clamp-2">
              {title}
            </h3>
            
            <p className="text-xs md:text-sm text-[#C9C7C8] line-clamp-4 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-xs font-medium text-[#858184] uppercase tracking-wider">{date}</span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#830000] group-hover:translate-x-0.5 transition-transform">
              <span>View Credential</span>
              <ExternalLink size={13} />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#1C1A1B] border border-[#830000]/30 p-3 flex flex-col items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  );
}
