import React from 'react';
import { Instagram, Youtube, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-purple-400 mb-4">TheCodeStation</h3>
            <p className="text-gray-300 mb-4">
              Helping developers learn, build, and grow through AI tools, coding tips, and resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-purple-400 transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/newsletter" className="text-gray-300 hover:text-purple-400 transition-colors">Newsletter</a></li>
              <li><a href="/blogs" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-purple-400 transition-colors">Products</a></li>
              <li><a href="/posts" className="text-gray-300 hover:text-purple-400 transition-colors">Recent Posts</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TheCodeStation. Made with ❤️ by Aachal Pardeshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;