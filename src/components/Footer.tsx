import React from 'react';
import { Instagram, Youtube, Github, Twitter, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coder-white dark:bg-coder-black border-t border-coder-gray-200 dark:border-coder-gray-800">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-coder-gray-400 hover:text-coder-yellow transition-all duration-300 p-2 border border-transparent hover:border-coder-gray-300 dark:hover:border-coder-gray-700">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-400 hover:text-coder-yellow transition-all duration-300 p-2 border border-transparent hover:border-coder-gray-300 dark:hover:border-coder-gray-700">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-400 hover:text-coder-yellow transition-all duration-300 p-2 border border-transparent hover:border-coder-gray-300 dark:hover:border-coder-gray-700">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-400 hover:text-coder-yellow transition-all duration-300 p-2 border border-transparent hover:border-coder-gray-300 dark:hover:border-coder-gray-700">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-400 hover:text-coder-yellow transition-all duration-300 p-2 border border-transparent hover:border-coder-gray-300 dark:hover:border-coder-gray-700">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-coder-gray-400 hover:text-coder-yellow transition-all duration-300 p-2 border border-transparent hover:border-coder-gray-300 dark:hover:border-coder-gray-700">
              <Github className="h-6 w-6" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-coder-gray-400 font-mono text-sm">
            <span className="text-coder-yellow">©</span> 2024 TheCodeStation. Made with <span className="text-coder-yellow">❤️</span> by Aachal Pardeshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;