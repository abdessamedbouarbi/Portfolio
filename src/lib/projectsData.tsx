import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: ' Dashboard Analytics',
        description:
            'Built with Next.js, Tailwind CSS, Framer Motion, and TypeScript, this sleek analytics dashboard delivers high-performance data visualization. It features interactive charts and real-time metrics designed for seamless business monitoring and growth tracking.',
        image: '/images/Dash1.png',
        technologies: ['Next.js', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://admin-dashboard-kappa-pink-41.vercel.app',
    },
    {
        id: 2,
        title: 'Prime-Ecom',
        description:
            'Modern e-commerce platform dedicated to providing a premium shopping experience with fast delivery, secure payments, and a vast selection of products. The site highlights its commitment to quality and customer satisfaction through key features like 24/7 support and hassle-free returns, serving over 50,000 happy customers.',
        image: '/images/Ecom.png',
        technologies: ['React.js', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://prime-ecom-khalidouu.vercel.app',
    },
    {
        id: 3,
        title: 'Style Hub',
        description:
            'A premium fashion destination built with Next.js and Tailwind CSS, offering a curated selection of on-trend apparel for the whole family with promotions up to 50% off. The platform combines cutting-edge web performance with a seamless shopping experience, serving over 50,000 happy customers through its modern, conversion-focused interface.',
        image: '/images/Style.png',
        technologies: ['Next.js', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://style-hub-lac.vercel.app',
    },
    {
        id: 4,
        title: 'Watch Fluence Store',
        description:
            'Watch Fluence is an online store specialized in selling smartwatches, built with React and Tailwind CSS to deliver a fast and responsive shopping experience. The site showcases a premium collection of watches that blend advanced technologies (such as water resistance, long battery life, and connectivity with smart devices) with sleek design, focusing on providing high-quality products at competitive prices.',
        image: '/images/W.png',
        technologies: ['React.js', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://watch-fluence-store.netlify.app/',
    },
    {
        id: 5,
        title: 'Personal Portfolio',
        description:
            'Animated Modern portfolio built with React.js, Typescript, and TailwindCSS, featuring smooth transitions, responsive design.',
        image: '/images/H1.png',
        technologies: ['React.js', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
        link: '#',
    },
    {
        id: 6,
        title: 'Todos List',
        description:
            'A sleek and efficient task management application designed to organize daily goals and boost productivity..',
        image: '/images/T.png',
        technologies: ['React.js', 'Materiel UI', 'Javascript'],
        link: 'https://my-todos-abdb.netlify.app',
    },


];

// Technology Badge Component with Framer Motion and GSAP animations
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
