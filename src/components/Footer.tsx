import React from 'react';
import { Instagram, Youtube, Github, Twitter, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-terminal-dark border-t border-terminal-yellow/20">
      <div className="container-content py-12">
        {/* Terminal Prompt Style */}
        <div className="mb-8">
          <div className="font-mono text-terminal-green text-sm mb-4">
            <span className="text-terminal-blue">~/thecodestation</span> 
            <span className="text-terminal-green"> $ </span>
            <span className="text-terminal-white">connect --social</span>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a 
              href="#" 
              className="flex items-center space-x-2 px-4 py-2 bg-terminal-gray border border-terminal-yellow/30 text-terminal-white hover:text-terminal-yellow hover:border-terminal-yellow hover:shadow-glow transition-all duration-300 font-mono text-sm"
            >
              <Mail className="h-4 w-4" />
              <span>email</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 px-4 py-2 bg-terminal-gray border border-terminal-yellow/30 text-terminal-white hover:text-terminal-yellow hover:border-terminal-yellow hover:shadow-glow transition-all duration-300 font-mono text-sm"
            >
              <Instagram className="h-4 w-4" />
              <span>instagram</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 px-4 py-2 bg-terminal-gray border border-terminal-yellow/30 text-terminal-white hover:text-terminal-yellow hover:border-terminal-yellow hover:shadow-glow transition-all duration-300 font-mono text-sm"
            >
              <Youtube className="h-4 w-4" />
              <span>youtube</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 px-4 py-2 bg-terminal-gray border border-terminal-yellow/30 text-terminal-white hover:text-terminal-yellow hover:border-terminal-yellow hover:shadow-glow transition-all duration-300 font-mono text-sm"
            >
              <Linkedin className="h-4 w-4" />
              <span>linkedin</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 px-4 py-2 bg-terminal-gray border border-terminal-yellow/30 text-terminal-white hover:text-terminal-yellow hover:border-terminal-yellow hover:shadow-glow transition-all duration-300 font-mono text-sm"
            >
              <Twitter className="h-4 w-4" />
              <span>twitter</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 px-4 py-2 bg-terminal-gray border border-terminal-yellow/30 text-terminal-white hover:text-terminal-yellow hover:border-terminal-yellow hover:shadow-glow transition-all duration-300 font-mono text-sm"
            >
              <Github className="h-4 w-4" />
              <span>github</span>
            </a>
          </div>
        </div>
        
        {/* Terminal Output */}
        <div className="font-mono text-sm">
          <div className="text-terminal-green mb-2">
            <span className="text-terminal-blue">~/thecodestation</span> 
            <span className="text-terminal-green"> $ </span>
            <span className="text-terminal-white">whoami</span>
          </div>
          <div className="text-terminal-white/70 mb-4 pl-4">
            © 2024 TheCodeStation. Made with <span className="text-terminal-red">❤️</span> by Aachal Pardeshi
          </div>
          <div className="text-terminal-green">
            <span className="text-terminal-blue">~/thecodestation</span> 
            <span className="text-terminal-green"> $ </span>
            <span className="text-terminal-white animate-pulse">_</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;