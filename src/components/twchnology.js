import { motion } from "framer-motion";
import {
  Code,
  Database,
  Smartphone,
  Cloud,
  FileSpreadsheet,
  Server,
} from "lucide-react";

const technologies = [
  {
    category: "Web Development",
    icon: <Code className='w-8 h-8 text-blue-500' />,
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    category: "App Development",
    icon: <Smartphone className='w-8 h-8 text-purple-500' />,
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Database",
    icon: <Database className='w-8 h-8 text-green-500' />,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Excel Platform",
    icon: <FileSpreadsheet className='w-8 h-8 text-orange-500' />,
    items: ["Excel", "Google Sheets", "Airtable", "Smartsheet"],
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

export default function Technologies() {
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
          Technologies We Rely On To Achieve Success
        </motion.h2>
        <motion.p
          initial='hidden'
          whileInView='visible'
          variants={fadeInUp}
          viewport={{ once: true }} // Add this line
          className='mt-4 text-xl text-gray-300 text-center'
        >
          Web Development | App Development | Database | Excel Platform
        </motion.p>

        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={stagger}
          viewport={{ once: true }} // Add this line
          className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className='bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300'
            >
              <div className='flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg'>
                {tech.icon}
              </div>
              <h3 className='mt-4 text-xl font-semibold text-white'>
                {tech.category}
              </h3>
              <ul className='mt-4 space-y-2'>
                {tech.items.map((item, idx) => (
                  <li key={idx} className='text-gray-300 flex items-center'>
                    <span className='mr-2'>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* AWS Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={fadeInUp}
          viewport={{ once: true }} // Add this line
          className='mt-16 text-center'
        >
          <div className='inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-lg rounded-full'>
            <Server className='w-8 h-8 text-yellow-500' />
          </div>
          <h3 className='mt-4 text-2xl font-bold text-white'>AWS</h3>
          <p className='mt-2 text-gray-300'>
            Leveraging AWS for scalable, secure, and reliable cloud solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
