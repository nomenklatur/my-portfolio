/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Dimas Eka Putra
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="https://github.com/nomenklatur"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"  target="_blank" rel="noopener noreferrer">
          Github
          <BsGithub className="w-4 h-4 ml-1" />
        </a>
        <a
          href="http://t.me/masstah"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"  target="_blank" rel="noopener noreferrer">
          Telegram
          <FaTelegramPlane className="w-4 h-4 ml-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/masdimasekaputra/"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" target="_blank" rel="noopener noreferrer">
          Linkedin
          <BsLinkedin className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}