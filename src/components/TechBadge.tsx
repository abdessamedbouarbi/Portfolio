import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export const TechBadge = ({ tech, index }: { tech: string; index: number }) => {
  const badgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const badge = badgeRef.current;
    if (!badge) return;

    // GSAP hover animation
    const handleMouseEnter = () => {
      gsap.to(badge, {
        scale: 1.1,
        y: -2,
        duration: 0.3,
        ease: 'back.out(1.7)',
      });
      gsap.to(badge, {
        boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)',
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(badge, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(badge, {
        boxShadow: '0 0px 0px rgba(168, 85, 247, 0)',
        duration: 0.3,
      });
    };

    badge.addEventListener('mouseenter', handleMouseEnter);
    badge.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      badge.removeEventListener('mouseenter', handleMouseEnter);
      badge.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.span
      ref={badgeRef}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1], // Custom bounce easing
      }}
      className="px-3 py-1 text-xs font-medium bg-accent-purple/20 text-accent-purple rounded-full border border-accent-purple/30 cursor-pointer"
    >
      {tech}
    </motion.span>
  );
};
