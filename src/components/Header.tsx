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
    <header className="sticky top-0 z-50 bg-terminal-black/90 backdrop-blur-md border-b border-terminal-yellow/20">
      <nav className="container-content">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-lg font-mono font-bold text-terminal-white hover:text-terminal-yellow transition-colors duration-300">
            <Terminal className="h-6 w-6 text-terminal-yellow" />
            <span className="terminal-path">TheCodeStation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-mono font-medium transition-all duration-300 hover:text-terminal-yellow relative group ${
                  location.pathname === item.href 
                    ? 'text-terminal-yellow' 
                    : 'text-terminal-white/80'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-yellow transition-all duration-300 group-hover:w-full group-hover:shadow-glow"></span>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 p-2 text-terminal-white/80 hover:text-terminal-yellow transition-colors duration-300 font-mono text-sm"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4" />
                  <span>💡 Light</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  <span>🌙 Dark</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-terminal-white/80 hover:text-terminal-yellow transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-terminal-white/80 hover:text-terminal-yellow transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-terminal-dark border border-terminal-yellow/20 mt-2 shadow-terminal">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-mono font-medium transition-colors duration-300 ${
                    location.pathname === item.href
                      ? 'text-terminal-yellow bg-terminal-yellow/10'
                      : 'text-terminal-white/80 hover:text-terminal-yellow hover:bg-terminal-yellow/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="terminal-prompt">{item.name}</span>
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