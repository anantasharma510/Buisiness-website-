"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import Services from "@/components/services";
import Technologies from "@/components/twchnology";
import Footer from "@/components/footer";

export default function HeroParallaxDemo() {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800'>
      <HeroParallax products={products} />;
      <Services />
      <Technologies />
      <Footer />
    </div>
  );
}
export const products = [
  {
    title: "Nonstopeurotrip",
    link: "https://nonstopeurotrip.com",
    thumbnail: "/images/hero-parallax/nonstopeurotrip.png",
  },

  {
    title: "Doctor Appoinment System",
    link: "",
    thumbnail: "/images/hero-parallax/doctorappoinment.png",
  },
  {
    title: "Post Profit",
    link: "https://postprofit.vercel.app/ ",
    thumbnail: "/images/hero-parallax/postprofit.png",
  },

  {
    title: "Pnc Bca",
    link: "https://pncbca.vercel.app",
    thumbnail: "/images/hero-parallax/pncbca.png",
  },
  {
    title: "Nonstopeurotrip",
    link: "https://nonstopeurotrip.com",
    thumbnail: "/images/hero-parallax/nonstopeurotrip.png",
  },

  {
    title: "Doctor Appoinment System",
    link: "",
    thumbnail: "/images/hero-parallax/doctorappoinment.png",
  },
  {
    title: "Nonstopeurotrip",
    link: "https://nonstopeurotrip.com",
    thumbnail: "/images/hero-parallax/nonstopeurotrip.png",
  },

  {
    title: "Pnc Bca",
    link: "https://pncbca.vercel.app",
    thumbnail: "/images/hero-parallax/pncbca.png",
  },
];
