import { motion } from "motion/react";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const LeftSlider = () => {
  return (
    <>
      {/* Desktop Sidebar: Fixed on the left, vertically centered */}
      <div className="max-lg:invisible lg:visible md:flex fixed top-0 left-0 h-screen w-20 flex-col justify-center items-center space-y-8 text-3xl text-cyan-400 z-40">
        <motion.a whileHover={{scale:1.1}} whileTap={{scale: 0.95}} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-green-500 transition" />
        </motion.a>
        <motion.a whileHover={{scale:1.1}} whileTap={{scale: 0.95}} href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-green-500 transition" />
        </motion.a>
        <motion.a whileHover={{scale:1.1}} whileTap={{scale: 0.95}} href="https://x.com/Naman_5800" target="_blank" rel="noopener noreferrer">
          <BsTwitter className="hover:text-green-500 transition" />
        </motion.a>
        <motion.a whileHover={{scale:1.1}} whileTap={{scale: 0.95}} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-green-500 transition" />
        </motion.a>
      </div>

      {/* Mobile/Tablet Footer: Horizontal layout at the bottom */}
      <div className="flex lg:collapse justify-center space-x-8 text-3xl text-cyan-400 py-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-green-500 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-green-500 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <BsTwitter className="hover:text-green-500 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-green-500 transition" />
        </a>
      </div>
    </>
  );
};

export default LeftSlider;