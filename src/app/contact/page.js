"use client";
import React from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"; // Lucide Icons

const ContactPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Page Header */}
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl'>
            Contact Us
          </h1>
          <p className='mt-4 text-lg text-gray-300'>
            We&apos;d love to hear from you! Reach out to us for any inquiries
            or collaborations.
          </p>
        </div>

        {/* Contact Content */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Contact Form */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold text-white'>Send Us a Message</h2>
            <form className='mt-6 space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-300'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Your Name'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-300'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='your.email@example.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-300'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Your Message'
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type='submit'
                  className='w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold text-white'>
              Contact Information
            </h2>
            <div className='mt-6 space-y-6'>
              {/* Email */}
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <Mail className='w-6 h-6 text-indigo-400' />
                </div>
                <div>
                  <h3 className='text-lg font-medium text-white'>Email</h3>
                  <p className='text-gray-300'>
                    <a
                      href='mailto:info@example.com'
                      className='hover:text-indigo-400 transition-colors duration-300'
                    >
                      info@example.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <Phone className='w-6 h-6 text-indigo-400' />
                </div>
                <div>
                  <h3 className='text-lg font-medium text-white'>Phone</h3>
                  <p className='text-gray-300'>
                    <a
                      href='tel:+1234567890'
                      className='hover:text-indigo-400 transition-colors duration-300'
                    >
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <MapPin className='w-6 h-6 text-indigo-400' />
                </div>
                <div>
                  <h3 className='text-lg font-medium text-white'>Address</h3>
                  <p className='text-gray-300'>
                    123 Tech Street, Suite 456
                    <br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <Clock className='w-6 h-6 text-indigo-400' />
                </div>
                <div>
                  <h3 className='text-lg font-medium text-white'>
                    Business Hours
                  </h3>
                  <p className='text-gray-300'>
                    Mon - Fri: 9:00 AM - 6:00 PM
                    <br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className='mt-12 bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.458630317849!2d-122.08424958469422!3d37.42206597984625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1629990000000!5m2!1sen!2sus'
            width='100%'
            height='400'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            className='rounded-lg'
          ></iframe>
        </div>

        {/* Call-to-Action Section */}
        <div className='mt-12 text-center bg-gray-800 p-8 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-bold text-white'>
            Have Questions? Let&apos;s Talk!
          </h2>
          <p className='mt-4 text-lg text-gray-300'>
            Whether you have a project in mind or just want to chat, we&apos;re
            here to help.
          </p>
          <div className='mt-6'>
            <a
              href='mailto:info@example.com'
              className='inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300'
            >
              <MessageCircle className='w-5 h-5 mr-2' />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
