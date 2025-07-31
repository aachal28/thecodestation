import React from 'react';
import { Instagram, Youtube, Github, Twitter, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-coder-gray-950 border-t border-coder-gray-200 dark:border-coder-gray-800">
      <div className="container-content py-8">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="p-2 text-coder-gray-500 hover:text-coder-yellow transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="p-2 text-coder-gray-500 hover:text-coder-yellow transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="p-2 text-coder-gray-500 hover:text-coder-yellow transition-colors duration-200">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" className="p-2 text-coder-gray-500 hover:text-coder-yellow transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="p-2 text-coder-gray-500 hover:text-coder-yellow transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="p-2 text-coder-gray-500 hover:text-coder-yellow transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-coder-gray-500 text-sm">
            © 2024 TheCodeStation. Made with <span className="text-coder-yellow">❤️</span> by Aachal Pardeshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;