import React from 'react';
import { Instagram, Youtube, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coder-white dark:bg-coder-black border-t border-coder-yellow/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold font-mono text-coder-yellow mb-4 bracket-highlight">TheCodeStation</h3>
            <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-4 font-mono text-sm">
              Helping developers learn, build, and grow through AI tools, coding tips, and resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow p-2 border border-transparent hover:border-coder-yellow/30">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-mono mb-4 text-coder-yellow terminal-prompt">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-300 font-mono text-sm">About</a></li>
              <li><a href="/services" className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-300 font-mono text-sm">Services</a></li>
              <li><a href="/projects" className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-300 font-mono text-sm">Projects</a></li>
              <li><a href="/resources" className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-300 font-mono text-sm">Resources</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold font-mono mb-4 text-coder-yellow terminal-prompt">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/newsletter" className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-300 font-mono text-sm">Newsletter</a></li>
              <li><a href="/blogs" className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-300 font-mono text-sm">Blog</a></li>
              <li><a href="/products" className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-300 font-mono text-sm">Products</a></li>
              <li><a href="/posts" className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-300 font-mono text-sm">Recent Posts</a></li>
            </ul>
          </div>
        </div>

        <div className="section-divider"></div>
        <div className="text-center">
          <p className="text-coder-gray-500 font-mono text-sm">
            <span className="text-coder-yellow">©</span> 2024 TheCodeStation. Made with <span className="text-coder-yellow">❤️</span> by Aachal Pardeshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;