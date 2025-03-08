"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function NavbarDemo() {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800 '>
      <Navbar className='top-2 py-4' />
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

            <div className='home text-white hover:text-gray-300 cursor-pointer transition-colors duration-300'>
              Our Work
            </div>
            <div className='home text-white hover:text-gray-300 cursor-pointer transition-colors duration-300'>
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
