"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Code,
  Paintbrush,
  Search,
  Briefcase,
  Mail,
  ChevronDown,
  X,
} from "lucide-react"; // Lucide Icons
export function NavbarDemo() {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800'>
      {/* Show Navbar on Desktop */}
      <div className='hidden md:block'>
        <Navbar className='top-2 py-4' />
      </div>

      {/* Show MobileNavbar on Mobile */}
      <div className='block md:hidden'>
        <MobileNavbar />
      </div>
    </div>
  );
}

function Navbar({ className }) {
  const router = useRouter();
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "sticky top-0 flex justify-between items-center inset-x-0 z-50 px-8 py-4 bg-gray-900/90 backdrop-blur-md border-b border-gray-800",
        className,
      )}
    >
      <div className='logo text-white text-2xl font-bold tracking-tighter'>
        LOGO
      </div>
      <div className='menu'>
        <Menu setActive={setActive}>
          <div className='menus flex space-x-14 items-center'>
            <div
              onClick={() => {
                router.push("/");
              }}
              className='home text-white hover:text-gray-300 cursor-pointer transition-colors duration-300'
            >
              Home
            </div>
            <MenuItem setActive={setActive} active={active} item='About'>
              <div className='flex flex-col space-y-4 text-sm bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                <HoveredLink href='/'>Introduction</HoveredLink>
                <HoveredLink href='/aboutus/ourteam'>Team</HoveredLink>
                <HoveredLink href='/aboutus/howwework'>How we work</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item='Services'>
              <div className='text-sm grid grid-cols-2 gap-10 p-4 bg-white/10 backdrop-blur-sm rounded-lg'>
                <ProductItem
                  title='Web Development'
                  href='https://algochurn.com'
                  src='https://assets.aceternity.com/demos/algochurn.webp'
                  description='Custom websites and web applications tailored to your business needs.'
                />
                <ProductItem
                  title='App Development'
                  href='https://tailwindmasterkit.com'
                  src='https://assets.aceternity.com/demos/tailwindmasterkit.webp'
                  description='Native and cross-platform mobile app solutions for iOS and Android.'
                />
                <ProductItem
                  title='UI/UX'
                  href='https://gomoonbeam.com'
                  src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png'
                  description='Intuitive and engaging user experiences designed for maximum usability.'
                />
                <ProductItem
                  title='SEO'
                  href='https://userogue.com'
                  src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png'
                  description='Boost your search rankings and online visibility with expert SEO services.'
                />
              </div>
            </MenuItem>

            <div
              onClick={() => {
                router.push("/ourwork");
              }}
              className='home text-white hover:text-gray-300 cursor-pointer transition-colors duration-300'
            >
              Our Work
            </div>
            <div
              onClick={() => {
                router.push("/contact");
              }}
              className='home text-white hover:text-gray-300 cursor-pointer transition-colors duration-300'
            >
              Contact
            </div>
          </div>
        </Menu>
      </div>
      <div className='contact text-white hover:text-gray-300 cursor-pointer transition-colors duration-300'>
        98432948
      </div>
    </div>
  );
}

function MobileNavbar({ className }) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track open submenu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (item) => {
    setOpenSubmenu(openSubmenu === item ? null : item);
  };

  return (
    <div
      className={cn(
        "sticky top-0 flex justify-between items-center inset-x-0 z-50 px-8 py-4 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-lg",
        className,
      )}
    >
      {/* Logo */}
      <div className='logo text-white text-2xl font-bold tracking-tighter'>
        LOGO
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className='text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300'
        onClick={toggleMobileMenu}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16m-7 6h7'
          ></path>
        </svg>
      </button>

      {/* Half-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='fixed top-0 left-0 w-3/4 h-screen bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md z-40 shadow-2xl'
          >
            {/* Close Button */}

            {/* Menu Items */}
            <div className='flex flex-col space-y-6 p-8 mt-16'>
              {/* Home */}
              <div
                onClick={() => {
                  router.push("/");
                  setIsMobileMenuOpen(false);
                }}
                className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 text-2xl flex items-center space-x-4'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  ></path>
                </svg>
                <span>Home</span>
              </div>

              {/* About with Subitems */}
              <div>
                <div
                  onClick={() => toggleSubmenu("about")}
                  className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 text-2xl flex justify-between items-center'
                >
                  <div className='flex items-center space-x-4'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                      ></path>
                    </svg>
                    <span>About</span>
                  </div>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openSubmenu === "about" ? "rotate-180" : ""
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </div>
                <AnimatePresence>
                  {openSubmenu === "about" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className='pl-12'
                    >
                      <div
                        onClick={() => {
                          router.push("/about");
                          setIsMobileMenuOpen(false);
                        }}
                        className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 py-2 text-xl flex items-center space-x-4'
                      >
                        <span>Introduction</span>
                      </div>
                      <div
                        onClick={() => {
                          router.push("/aboutus/ourteam");
                          setIsMobileMenuOpen(false);
                        }}
                        className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 py-2 text-xl flex items-center space-x-4'
                      >
                        <span>Team</span>
                      </div>
                      <div
                        onClick={() => {
                          router.push("/aboutus/howwework");
                          setIsMobileMenuOpen(false);
                        }}
                        className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 py-2 text-xl flex items-center space-x-4'
                      >
                        <span>How We Work</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services with Subitems */}
              <div>
                <div
                  onClick={() => toggleSubmenu("services")}
                  className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 text-2xl flex justify-between items-center'
                >
                  <div className='flex items-center space-x-4'>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                      ></path>
                    </svg>
                    <span>Services</span>
                  </div>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openSubmenu === "services" ? "rotate-180" : ""
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </div>
                <AnimatePresence>
                  {openSubmenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className='pl-12'
                    >
                      <div
                        onClick={() => {
                          router.push("/services/web-development");
                          setIsMobileMenuOpen(false);
                        }}
                        className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 py-2 text-xl flex items-center space-x-4'
                      >
                        <span>Web Development</span>
                      </div>
                      <div
                        onClick={() => {
                          router.push("/services/app-development");
                          setIsMobileMenuOpen(false);
                        }}
                        className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 py-2 text-xl flex items-center space-x-4'
                      >
                        <span>App Development</span>
                      </div>
                      <div
                        onClick={() => {
                          router.push("/services/ui-ux");
                          setIsMobileMenuOpen(false);
                        }}
                        className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 py-2 text-xl flex items-center space-x-4'
                      >
                        <span>UI/UX Design</span>
                      </div>
                      <div
                        onClick={() => {
                          router.push("/services/seo");
                          setIsMobileMenuOpen(false);
                        }}
                        className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 py-2 text-xl flex items-center space-x-4'
                      >
                        <span>SEO</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Work */}
              <div
                onClick={() => {
                  router.push("/ourwork");
                  setIsMobileMenuOpen(false);
                }}
                className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 text-2xl flex items-center space-x-4'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  ></path>
                </svg>
                <span
                  onClick={() => {
                    router.push("/ourwork");
                  }}
                >
                  Our Work
                </span>
              </div>

              {/* Contact */}
              <div
                onClick={() => {
                  router.push("/contact");
                  setIsMobileMenuOpen(false);
                }}
                className='text-white hover:text-gray-300 cursor-pointer transition-colors duration-300 text-2xl flex items-center space-x-4'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  ></path>
                </svg>
                <span>Contact</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
