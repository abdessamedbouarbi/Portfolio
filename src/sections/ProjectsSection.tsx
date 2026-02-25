import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const projects = [
  {
    id: 1,
    title: ' Dashboard Analytics',
    description:
      'Built with Next.js, Tailwind CSS, Framer Motion, and TypeScript, this sleek analytics dashboard delivers high-performance data visualization. It features interactive charts and real-time metrics designed for seamless business monitoring and growth tracking.',
    image: '/images/Dashbored.png',
    technologies: ['Next.js','Typescript' ,'Tailwind CSS','Framer Motion'],
    link: 'https://admin-dashboard-kappa-pink-41.vercel.app',
  },
   {
    id: 2,
    title: 'Ecom',
    description:
      'E-commerce app built with React, TypeScript and TailwindCSS — featuring product browsing, search, auth, cart, wishlist, and discounts..',
    image: '/images/Ecom.png',
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://prime-ecom-khalidouu.vercel.app',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description:
      'Animated Modern portfolio built with React.js, Typescript, and TailwindCSS, featuring smooth transitions, responsive design.',
    image: '/images/H1.png',
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
  },
  {
    id: 4,
    title: 'Todos List',
    description:
      'Animated developer portfolio built with React.js, Tailwind CSS, and GSAP, featuring smooth transitions, responsive design.',
    image: '/images/T.png',
    technologies: ['React', 'Materiel UI', 'Javascript'],
    link: 'https://my-todos-abdb.netlify.app',
  },
];

// Technology Badge Component with Framer Motion and GSAP animations
const TechBadge = ({ tech, index }: { tech: string; index: number }) => {
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">PROJECTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-pink mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="glow-card overflow-hidden group"
            >
              {/* Project Image - explicit dimensions help LCP/CLS */}
              <div className="relative overflow-hidden aspect-video bg-bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-purple hover:text-accent-pink transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <TechBadge key={tech} tech={tech} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
