import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Github, Twitter, Mail, Linkedin, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
  ];

  const resources = [
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Products', href: '/products' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Newsletter', href: '/newsletter' },
  ];

  const socialLinks = [
    { name: 'Email', href: 'mailto:hello@thecodestation.com', icon: <Mail className="h-5 w-5" /> },
    { name: 'Instagram', href: '#', icon: <Instagram className="h-5 w-5" /> },
    { name: 'YouTube', href: '#', icon: <Youtube className="h-5 w-5" /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
    { name: 'GitHub', href: '#', icon: <Github className="h-5 w-5" /> },
  ];

  return (
    <footer className="bg-coder-white dark:bg-coder-black border-t border-coder-yellow/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold font-mono text-coder-yellow mb-4">
              <Code2 className="h-8 w-8" />
              <span>TheCodeStation</span>
            </Link>
            <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm mb-4">
              Helping coders learn, build & grow with curated resources, tutorials, and tools.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 text-coder-gray-500 hover:text-coder-yellow transition-all duration-300 hover:shadow-glow border border-transparent hover:border-coder-yellow/30 rounded-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-mono text-coder-black dark:text-coder-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow font-mono text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold font-mono text-coder-black dark:text-coder-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow font-mono text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold font-mono text-coder-black dark:text-coder-white mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/my-station"
                  className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow font-mono text-sm transition-colors duration-300"
                >
                  My Station
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@thecodestation.com"
                  className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow font-mono text-sm transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow font-mono text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow font-mono text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-coder-yellow/20 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center text-coder-gray-500 font-mono text-sm mb-4 md:mb-0">
              <span className="text-coder-yellow mr-2">©</span>
              <span>2024 TheCodeStation. Made with</span>
              <Heart className="h-4 w-4 text-coder-yellow mx-2 fill-current" />
              <span>by Aachal Pardeshi</span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm font-mono">
              <a
                href="#"
                className="text-coder-gray-500 hover:text-coder-yellow transition-colors duration-300"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-coder-gray-500 hover:text-coder-yellow transition-colors duration-300"
              >
                RSS Feed
              </a>
              <span className="text-coder-gray-500">
                Built with React & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;