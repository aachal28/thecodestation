import React from 'react';
import { Instagram, Youtube, Github, Twitter, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coder-white dark:bg-coder-black border-t border-coder-yellow/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30 rounded-xl w-10 h-10 flex items-center justify-center">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30 rounded-xl w-10 h-10 flex items-center justify-center">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30 rounded-xl w-10 h-10 flex items-center justify-center">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30 rounded-xl w-10 h-10 flex items-center justify-center">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30 rounded-xl w-10 h-10 flex items-center justify-center">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30 rounded-xl w-10 h-10 flex items-center justify-center">
              <Github className="h-6 w-6" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-coder-gray-500 font-mono text-sm leading-6">
            <span className="text-coder-yellow">©</span> 2024 TheCodeStation. Made with <span className="text-coder-yellow">❤️</span> by Aachal Pardeshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;