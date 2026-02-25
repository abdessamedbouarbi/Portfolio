import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import TypingAnimation from '@/components/TypingAnimation';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';


const HomeSection = () => {
  const roles = [
    'Front-End Developer',
    'Web Developer',
  ];

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 flex flex-col justify-center items-center lg:block"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 mb-2"
            >
              Hi, I am
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
             Abdessamed 
            </motion.h1>

            <motion.div variants={fadeInUp} className="text-xl md:text-2xl mb-6">
              <span className="text-white/90">I am a </span>
              <TypingAnimation
                texts={roles}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1500}
              />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Front-End Developer focused on React.js, Next.js, and Tailwind CSS,
              with hands-on experience building responsive user interfaces and Prioritizing
              clean UX, modular component architecture, and delivering
              production-ready, end-to-end web applications. Passionate about
              problem-solving, learning, and leveraging AI tools to speed up
              development and build efficient solutions.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a
                href="/Pdf/Abdessamed.pdf" download
                className="gradient-button inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink opacity-30 blur-3xl scale-110 animate-pulse-glow" />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-glow-lg">
                <img
                  src="/kp1.jpg"
                  alt="Abdessamed"
                  width={384}
                  height={384}
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default HomeSection;
