import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../lib/animations';

const educationData = [
  {
    id: 1,
    degree: 'Modern Web Interfaces',
    year: '2025',
    description:
      'Mastered modern UI development using React.js, Next.js, Typescript, and Tailwindcss. Focused on building responsive, accesible and high-performance web App through hands-on project experience.',
    side: 'left',
  },
  {
    id: 2,
    degree: 'Back-end & System Architecture',
    year: 'Current Focus',
    description:
      'Currently expanding technical expertise into server-side logic and database management. Learning to build scalable APIs and secure back-end systems to transition into a complete Full-Stack Developer role.',
    side: 'right',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">EDUCATION</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-pink mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-purple to-accent-pink hidden md:block" />

          {/* Mobile Line */}
          <div className="absolute left-4 w-0.5 h-full bg-gradient-to-b from-accent-purple to-accent-pink md:hidden" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((item) => (
              <div key={item.id} className="relative">
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                  {item.side === 'left' ? (
                    <>
                      {/* Left Content */}
                      <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-right pr-8"
                      >
                        <div className="glow-card p-6 inline-block text-left">
                         
                          <p className="text-accent-purple font-medium mb-2">
                            {item.degree}
                          </p>
                          
                          <p className="text-text-muted text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>

                      {/* Center Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-purple rounded-full border-4 border-bg-primary shadow-glow" />

                      {/* Right Empty */}
                      <div />
                    </>
                  ) : (
                    <>
                      {/* Left Empty */}
                      <div />

                      {/* Center Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-pink rounded-full border-4 border-bg-primary shadow-glow-pink" />

                      {/* Right Content */}
                      <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="pl-8"
                      >
                        <div className="glow-card p-6">
                         
                          <p className="text-accent-purple font-medium mb-2">
                            {item.degree}
                          </p>
                          <p className="text-text-muted text-sm mb-2">
                            {item.year}
                            
                          </p>
                          <p className="text-text-muted text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="md:hidden pl-12"
                >
                  {/* Mobile Dot */}
                  <div className="absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-accent-purple rounded-full border-2 border-bg-primary shadow-glow" />

                  <div className="glow-card p-5">
                    
                    <p className="text-accent-purple font-medium mb-2">
                      {item.degree}
                    </p>
                    <p className="text-text-muted text-sm mb-2">
                      {item.year}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
