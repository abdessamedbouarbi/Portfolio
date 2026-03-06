import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Link } from 'react-router-dom';
import { projects, TechBadge } from '@/lib/projectsData';

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
          {projects.slice(0, 4).map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="glow-card overflow-hidden group flex flex-col h-full"
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
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <TechBadge key={tech} tech={tech} index={index} />
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full gradient-button flex items-center justify-center gap-2 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  Live Demo
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Link
          to="/projects"
          className="gradient-button flex justify-center items-center gap-2 mt-12 mx-auto w-fit min-w-[200px] px-8 py-3"
        >
          Show More
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
