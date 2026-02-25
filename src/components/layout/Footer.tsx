import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border-custom">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Abdessamed Bouarbi
          </h3>

          <p className="text-text-muted text-sm mb-4">
            Front-End Developer  | Building modern web experiences
          </p>

          <div className="flex items-center justify-center gap-1 text-text-muted text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent-pink fill-accent-pink" />
            <span>using React & Tailwind CSS</span>
          </div>

          <p className="text-text-muted/60 text-xs mt-4">
           &copy; {currentYear} Abdessamed Bouarbi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
