"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
  FaHeart,
  FaItchIo
} from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ramansw?tab=repositories",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/ramandeep-singh-0789232a8/",
      color: "hover:text-secondary"
    },
   
    {
      name: "Itch.io",
      icon: FaItchIo,
      url: "https://itch.io/profile/ramansw",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="border-t border-primary/30 mt-4 lg:mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-6 mb-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`text-gray-500 text-2xl transition-colors duration-300 ${social.color}`}
              aria-label={social.name}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Ramandeep Singh. Made with</span>
            <FaHeart className="text-primary text-xs" />
            <span>and Passion For Making Something Memorable</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
