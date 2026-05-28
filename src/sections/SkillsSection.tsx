import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaCloud
} from 'react-icons/fa';
import {
  SiJavascript, SiMui, SiTailwindcss, SiNextdotjs,
  SiFramer,SiPrisma, SiTypescript, SiMongodb, SiExpress, SiNestjs
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const skills = [
  { name: 'HTML5',         icon: FaHtml5,       color: '#E34F26' },
  { name: 'CSS3',          icon: FaCss3Alt,     color: '#1572B6' },
  { name: 'JavaScript',    icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'TypeScript',    icon: SiTypescript,  color: '#3178C6' },
  { name: 'React',         icon: FaReact,       color: '#61DAFB' },
  { name: 'Next.js',       icon: SiNextdotjs,   color: '#ffffff' },
  { name: 'Tailwind CSS',  icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', icon: SiFramer,      color: '#BB4BE9' },
  { name: 'Material UI',   icon: SiMui,           color: '#007FFF' },
  { name: 'Node.js',       icon: FaNodeJs,      color: '#339933' },
  { name: 'Express',       icon: SiExpress,     color: '#43a329' },
  { name: 'NestJS',        icon: SiNestjs,      color: '#E0234E' },
   { name: 'MongoDB',       icon: SiMongodb,     color: '#47A248' },
  { name: 'MySQL',         icon: GrMysql,       color: '#4479A1' },
  { name: 'RESTful APIs',    icon: FaCloud,       color: '#94A3B8' },
  { name: 'Prisma',           icon: SiPrisma,         color: '#b60e06' },
  { name: 'Git',           icon: FaGitAlt,      color: '#F05032' },
  { name: 'GitHub',        icon: FaGithub,      color: '#ffffff' },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = skill.icon;

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      <motion.div
        className="relative flex flex-col items-center gap-4 p-6 rounded-3xl
                   bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                   border border-white/[0.08] backdrop-blur-xl overflow-hidden"
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.03 : 1,
          borderColor: isHovered ? `${skill.color}40` : 'rgba(255,255,255,0.08)',
          boxShadow: isHovered
            ? `0 20px 40px -15px ${skill.color}30, 0 0 0 1px ${skill.color}25, inset 0 1px 0 0 ${skill.color}15`
            : '0 4px 20px -10px rgba(0,0,0,0.3)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none"
          animate={{
            opacity: isHovered ? 0.35 : 0,
            scale: isHovered ? 1.2 : 0.8,
          }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: skill.color }}
        />

        {/* Icon ring */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${skill.color}18 0%, ${skill.color}08 100%)`,
            border: `1px solid ${skill.color}25`,
          }}
          animate={{
            rotate: isHovered ? [0, -10, 10, -5, 0] : 0,
            scale: isHovered ? 1.12 : 1,
          }}
          transition={{
            rotate: { duration: 0.6, ease: 'easeInOut' },
            scale: { duration: 0.3 },
          }}
        >
          <IconComponent
            className="w-8 h-8"
            style={{ color: skill.color }}
          />

          {/* Orbital ring on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ border: `1.5px solid ${skill.color}` }}
            animate={{
              opacity: isHovered ? [0, 0.5, 0] : 0,
              scale: isHovered ? [1, 1.3, 1.5] : 1,
            }}
            transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
          />
        </motion.div>

        {/* Skill name */}
        <span className="relative z-10 text-white/80 group-hover:text-white font-semibold text-sm text-center transition-colors duration-300">
          {skill.name}
        </span>

        {/* Progress bar */}
        <motion.div
          className="relative z-10 w-full h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
            initial={{ width: '0%' }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-accent-purple font-medium text-sm tracking-[0.2em] uppercase mb-4"
            animate={isInView ? { opacity: 1, letterSpacing: '0.2em' } : { opacity: 0, letterSpacing: '0.5em' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technical Stack
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-pink mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.p
            className="text-white/50 mt-6 max-w-xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Technologies and tools I use daily to build modern, performant web experiences.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
