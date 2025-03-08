import React from "react";
import { Linkedin, Twitter, Github, Mail, Phone } from "lucide-react"; // Lucide icons

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>Our Company</h3>
            <p className='text-gray-400'>
              We are a team of passionate individuals dedicated to delivering
              innovative solutions for our clients.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/about'
                  className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/services'
                  className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='/portfolio'
                  className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>Contact Us</h3>
            <ul className='space-y-2'>
              <li className='flex items-center space-x-2 text-gray-400'>
                <Mail className='w-5 h-5' />
                <span>info@company.com</span>
              </li>
              <li className='flex items-center space-x-2 text-gray-400'>
                <Phone className='w-5 h-5' />
                <span>+1 (123) 456-7890</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
              >
                <Linkedin className='w-6 h-6' />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
              >
                <Twitter className='w-6 h-6' />
              </a>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'
              >
                <Github className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 border-t border-gray-800 pt-8 text-center'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
