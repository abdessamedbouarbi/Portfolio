import { motion } from 'framer-motion';
import { Wrench , Eye, Sparkles, MonitorSmartphone } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';


const activities = [
  {
    id: 1,
    title: 'CLEAN CODE',
    description: 'Great design starts with clean code. Our development standards emphasize readability, reusability, and maintainability.',
    icon: Sparkles,
  },
  {
    id: 2,
    title: 'SEO Friendly',
    description: 'Your website is built with search visibility in mind from day one. We implement SEO-friendly structures, clean URLs and optumized meta tags.',
    icon: Eye ,
  },
  {
    id: 3,
    title: 'RESPONSIVE DESIGN',
    description: 'Whether on desktop, tablet, or smartphones, your website will look perfect and perform flawlessly across all devices.',
    icon: MonitorSmartphone ,
  },
  {
    id: 4,
    title: 'Updates & Fixes',
    description: 'Providing ongoing support, fixing bugs, and implementing content updates to keep your website secure, fresh, and running smoothly.',
    icon: Wrench ,
  },
];

const MyService = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">MY SERVICES</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-pink mx-auto mt-4 rounded-full" />
          <p className="section-subtitle max-w-2xl mx-auto">
            I deliver high-quality web solutions focused on performance, user experience, and long-term reliability.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              variants={fadeInUp}
              className="glow-card p-6 text-center group"
            >
              <div className="w-14 h-14 bg-accent-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-purple/30 transition-colors">
                <activity.icon className="w-7 h-7 text-accent-purple" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {activity.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyService;
