import Head from "next/head";
import Carousel from "@/components/ui/carousel";

export default function OurWork() {
  const slideData = [
    {
      title: "Doctor Appoinment System",
      button: "Visit Website",
      src: "/images/hero-parallax/doctorappoinment.png",
      link: "",
      description:
        "An online platform for booking doctor appointments with ease.",
      technologies: ["React", "Firebase", "Express.js", "MySQL"],
      testimonial:
        "The system is user-friendly and has significantly reduced wait times.",
    },
    {
      title: "Nonstopeurotrip",
      button: "Visit Website",
      src: "/images/hero-parallax/nonstopeurotrip.png",
      link: "https://nonstopeurotrip.com",
      description:
        "A travel platform designed to help users plan and book their Euro trips seamlessly.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      testimonial:
        "Nonstopeurotrip made our travel planning so much easier! Highly recommended.",
    },
    {
      title: "Post Profit",
      button: "Visit Website",
      src: "/images/hero-parallax/postprofit.png",
      link: "https://postprofit.vercel.app/",
      description:
        "A financial analytics tool to help businesses track and optimize profits.",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Chart.js"],
      testimonial:
        "Post Profit has transformed how we analyze our financial data.",
    },
    {
      title: "Pnc Bca",
      button: "Visit Website",
      src: "/images/hero-parallax/pncbca.png",
      link: "https://pncbca.vercel.app",
      description: "A learning management system for students and educators.",
      technologies: ["Angular", "NestJS", "MongoDB", "GraphQL"],
      testimonial:
        "Pnc Bca has made online learning more interactive and effective.",
    },
  ];

  return (
    <div className='min-h-screen bg-gray-900 py-12'>
      <Head>
        <title>Our Work - My Next.js Project</title>
        <meta name='description' content='Check out our latest projects.' />
      </Head>

      <main className='container mx-auto px-4'>
        {/* Header Section */}
        <h1 className='text-4xl font-bold text-center text-white mb-4'>
          Our Work
        </h1>
        <p className='text-lg text-center text-gray-400 mb-12'>
          Explore some of the projects we have proudly worked on.
        </p>

        {/* Carousel Section */}
        <div className='relative overflow-hidden w-full h-full py-20'>
          <Carousel slides={slideData} />
        </div>

        {/* Project Details Section */}
        <div className='mt-20'>
          <h2 className='text-3xl font-bold text-center text-white mb-8'>
            Project Details
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {slideData.map((project, index) => (
              <div
                key={index}
                className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  {project.title}
                </h3>
                <p className='text-gray-400 mb-4'>{project.description}</p>
                <div className='mb-4'>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Technologies Used
                  </h4>
                  <ul className='list-disc list-inside text-gray-400'>
                    {project.technologies.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>
                {project.testimonial && (
                  <div className='mt-4'>
                    <h4 className='text-lg font-semibold text-white mb-2'>
                      Testimonial
                    </h4>
                    <p className='text-gray-400 italic'>
                      {project.testimonial}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className='mt-20 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Ready to Start Your Project?
          </h2>
          <p className='text-lg text-gray-400 mb-8'>
            Let's build something amazing together. Contact us today!
          </p>
          <a
            href='/contact'
            className='px-6 py-3 bg-[#6D64F7] text-white font-semibold rounded-lg hover:bg-[#5a52d6] transition-colors duration-300'
          >
            Get in Touch
          </a>
        </div>
      </main>
    </div>
  );
}
