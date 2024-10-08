// src/components/NavBar.js
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          MyApp
        </div>
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-blue-200">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-200">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-200">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-blue-200">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
