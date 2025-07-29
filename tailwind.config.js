import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Products', href: '/products' },
    { name: 'My Station', href: '/my-station' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Blogs', href: '/blogs' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-coder-white/95 dark:bg-coder-black/95 backdrop-blur-sm border-b border-coder-yellow/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold font-mono text-coder-yellow hover:animate-glow transition-all duration-300">
            <div className="p-2 bg-coder-yellow/20 border border-coder-yellow/30 rounded-xl">
              <Code2 className="h-6 w-6" />
            </div>
            <span className="bracket-highlight">TheCodeStation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-mono font-medium transition-all duration-300 hover:text-coder-yellow hover:shadow-glow px-3 py-2 rounded-lg ${
                  location.pathname === item.href 
                    ? 'text-coder-yellow bg-coder-yellow/10 border border-coder-yellow/30' 
                    : 'text-coder-black dark:text-coder-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-coder-yellow/30 text-coder-yellow hover:bg-coder-yellow hover:text-coder-black transition-all duration-300 hover:shadow-glow"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-coder-yellow/30 text-coder-yellow hover:bg-coder-yellow hover:text-coder-black transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-coder-black dark:text-coder-white hover:text-coder-yellow transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-coder-white dark:bg-coder-black border border-coder-yellow/20 mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-mono font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-coder-yellow bg-coder-yellow/10'
                      : 'text-coder-black dark:text-coder-white hover:text-coder-yellow hover:bg-coder-yellow/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;