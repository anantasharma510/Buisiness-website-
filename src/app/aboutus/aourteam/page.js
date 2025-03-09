import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react"; // Lucide icons

const TeamPage = () => {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder",
      description:
        "John is the visionary behind our company, driving innovation and growth.",
      image: "https://via.placeholder.com/150", // Placeholder image URL
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO",
      description:
        "Jane leads our technical team, ensuring we deliver cutting-edge solutions.",
      image: "https://via.placeholder.com/150", // Placeholder image URL
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Lead Designer",
      description:
        "Alice is responsible for creating stunning and user-friendly designs.",
      image: "https://via.placeholder.com/150", // Placeholder image URL
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      id: 4,
      name: "Bob Williams",
      role: "Marketing Head",
      description:
        "Bob oversees our marketing strategies, ensuring we reach the right audience.",
      image: "https://via.placeholder.com/150", // Placeholder image URL
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
  ];

  return (
    <div className='py-12 bg-gradient-to-br from-gray-900 to-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
            Our Team
          </h2>
          <p className='mt-4 text-lg text-gray-300'>
            Meet the talented individuals who make it all happen.
          </p>
        </div>

        <div className='mt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className='bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
              >
                <img
                  className='w-32 h-32 mx-auto rounded-full object-cover border-4 border-gray-700'
                  src={member.image}
                  alt={member.name}
                />
                <h3 className='mt-6 text-xl font-bold text-white text-center'>
                  {member.name}
                </h3>
                <p className='mt-2 text-indigo-400 text-center'>
                  {member.role}
                </p>
                <p className='mt-4 text-gray-300 text-center'>
                  {member.description}
                </p>
                <div className='mt-6 flex justify-center space-x-4'>
                  <a
                    href={member.social.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
                  >
                    <Linkedin className='w-6 h-6' />
                  </a>
                  <a
                    href={member.social.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
                  >
                    <Twitter className='w-6 h-6' />
                  </a>
                  <a
                    href={member.social.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
                  >
                    <Github className='w-6 h-6' />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
