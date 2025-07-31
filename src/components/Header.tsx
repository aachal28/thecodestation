import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-coder-black/80 backdrop-blur-md border-b border-coder-gray-200 dark:border-coder-gray-800">
      <nav className="container-content">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="flex items-center space-x-2 text-lg font-display font-semibold text-coder-gray-900 dark:text-coder-gray-100 hover:text-coder-yellow transition-colors duration-200">
            <Terminal className="h-5 w-5 text-coder-yellow" />
            <span>TheCodeStation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-coder-yellow px-2 py-1 ${
                  location.pathname === item.href 
                    ? 'text-coder-yellow' 
                    : 'text-coder-gray-600 dark:text-coder-gray-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-coder-gray-900 border border-coder-gray-200 dark:border-coder-gray-800 mt-2 shadow-card">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-coder-yellow bg-coder-yellow/5'
                      : 'text-coder-gray-600 dark:text-coder-gray-400 hover:text-coder-yellow hover:bg-coder-yellow/5'
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