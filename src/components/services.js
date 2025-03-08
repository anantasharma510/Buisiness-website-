import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Layout,
  Search,
  Share,
  PenTool,
  FileText,
  Cloud,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Highly functional & visually appealing website designed to meet your need.",
    icon: <Code className='w-8 h-8 text-blue-500' />,
  },
  {
    title: "App Development",
    description:
      "Innovative and user-friendly mobile application designed to engage users.",
    icon: <Smartphone className='w-8 h-8 text-purple-500' />,
  },
  {
    title: "System/Software Development",
    description: "System/software developed according to your business needs.",
    icon: <Cloud className='w-8 h-8 text-green-500' />,
  },
  {
    title: "UI/UX",
    description:
      "Design eye-catching UI/UX interfaces for effortless user interaction.",
    icon: <Layout className='w-8 h-8 text-pink-500' />,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Custom SEO solutions for enhanced search engine visibility and growth.",
    icon: <Search className='w-8 h-8 text-yellow-500' />,
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "Build a strong online presence and engage with your targeted audience.",
    icon: <Share className='w-8 h-8 text-red-500' />,
  },
  {
    title: "Graphic Design",
    description:
      "Designs that Speak Your Brand’s Narrative and Connect with Your Audience.",
    icon: <PenTool className='w-8 h-8 text-indigo-500' />,
  },
  {
    title: "Content Writing",
    description:
      "Engaging and meaningful content to connect with your audience.",
    icon: <FileText className='w-8 h-8 text-orange-500' />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Services() {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          initial='hidden'
          whileInView='visible'
          variants={fadeInUp}
          viewport={{ once: true }} // Add this line
          className='text-4xl font-extrabold text-white text-center'
        >
          Our Services
        </motion.h2>
        <motion.p
          initial='hidden'
          whileInView='visible'
          variants={fadeInUp}
          viewport={{ once: true }} // Add this line
          className='mt-4 text-xl text-gray-300 text-center'
        >
          Exceptional Services For Your Business Growth
        </motion.p>

        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={stagger}
          viewport={{ once: true }} // Add this line
          className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className='bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300'
            >
              <div className='flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg'>
                {service.icon}
              </div>
              <h3 className='mt-4 text-xl font-semibold text-white'>
                {service.title}
              </h3>
              <p className='mt-2 text-gray-300'>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
