import { motion } from 'framer-motion';
import {
  FileCode,
  Paintbrush,
  Braces,
  Atom,
  Layers,
  Wind,
  Forward,
  Sparkles,
  FileType,
  Cpu,
  GitMerge,
  Github,
  Monitor,
  Rocket,
  Globe,
  Bot,
  Package,
  CloudCog,
} from 'lucide-react';
import { staggerContainer } from '../lib/animations';

const iconClass = 'w-8 h-8 flex-shrink-0 transition-transform duration-300';

const skillCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const skills = [
  { name: 'HTML5', icon: FileCode, color: '#E34F26' },
  { name: 'CSS3', icon: Paintbrush, color: '#1572B6' },
  { name: 'JavaScript', icon: Braces, color: '#F7DF1E' },
  { name: 'React', icon: Atom, color: '#61DAFB' },
  { name: 'Material UI', icon: Layers, color: '#007FFF' },
  { name: 'Tailwind CSS', icon: Wind, color: '#06B6D4' },
  { name: 'Next.js', icon: Forward, color: '#ffffff' },
  { name: 'Framer Motion', icon: Sparkles, color: '#BB4BE9' },
  { name: 'TypeScript', icon: FileType, color: '#3178C6' },
  { name: 'API', icon: CloudCog, color: '#ffffff' },
  { name: 'Node.js', icon: Cpu, color: '#339933' },
  { name: 'npm', icon: Package, color: '#CB3837' },
  { name: 'Git', icon: GitMerge, color: '#F05032' },
  { name: 'GitHub', icon: Github , color: '#ffffff' },
  { name: 'VS Code', icon: Monitor, color: '#007ACC' },
  { name: 'Vercel', icon: Rocket, color: '#ffffff' },
  { name: 'Netlify', icon: Globe, color: '#00C7B7' },
  { name: 'Cursor', icon: Bot, color: '#8B5CF6' },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">SKILLS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-pink mx-auto mt-4 rounded-full" />
          <p className="section-subtitle">
            A stack of technologies I explore and apply in development
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                custom={index}
                variants={skillCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="group relative"
              >
                <motion.div
                  className="relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-bg-secondary/60 border border-border-custom backdrop-blur-sm overflow-hidden"
                  whileHover={{
                    boxShadow: `0 20px 40px -15px ${skill.color}40, 0 0 0 1px ${skill.color}30`,
                    borderColor: `${skill.color}60`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Subtle gradient glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${skill.color}15 0%, transparent 70%)`,
                    }}
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl bg-white/5"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <IconComponent
                      className={iconClass}
                      style={{ color: skill.color }}
                    />
                  </motion.div>

                  <span className="relative z-10 text-white font-semibold text-sm sm:text-base text-center">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
