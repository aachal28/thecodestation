import React, { useState } from 'react';
import { ArrowRight, Wrench, Brain, Target, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('> Access granted! Check your email for the free coding vault.');
    setEmail('');
  };

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono mb-6 text-coder-black dark:text-coder-white">
              <span className="text-coder-yellow bracket-highlight">Helping Coders</span><br />
              <span className="terminal-prompt">Learn, Build & Grow</span> 🚀
            </h1>
            <p className="text-xl sm:text-2xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-3xl mx-auto font-mono">
              Your one-stop destination for AI tools, coding hacks, and developer resources to accelerate your programming journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/resources"
                className="btn-primary"
              >
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/newsletter"
                className="btn-secondary"
              >
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-coder-gray-100/50 dark:bg-coder-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Wrench className="h-12 w-12 text-coder-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-mono mb-3 bracket-highlight">Top Developer Tools</h3>
              <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">Curated collection of the best tools to boost your productivity</p>
            </div>
            <div className="card text-center p-6">
              <Brain className="h-12 w-12 text-coder-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-mono mb-3 bracket-highlight">AI & Coding Hacks</h3>
              <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">Learn cutting-edge AI techniques and coding shortcuts</p>
            </div>
            <div className="card text-center p-6">
              <Target className="h-12 w-12 text-coder-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-mono mb-3 bracket-highlight">Weekly Newsletter</h3>
              <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">Get the latest trends, tools, and tips delivered weekly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-mono text-center mb-12 terminal-prompt">Follow My Journey</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold font-mono mb-4 flex items-center">
                <span className="text-coder-yellow mr-2">📸</span> Instagram Highlights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center hover:shadow-glow transition-all duration-300 cursor-pointer">
                    <span className="text-coder-black font-mono font-semibold">Reel {i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold font-mono mb-4 flex items-center">
                <span className="text-coder-yellow mr-2">🎥</span> YouTube Shorts
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center hover:shadow-glow transition-all duration-300 cursor-pointer">
                    <span className="text-coder-black font-mono font-semibold">Short {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coder-yellow/10 dark:bg-coder-yellow/5 border-t border-b border-coder-yellow/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4 bracket-highlight">Get Your Free Coding Vault</h2>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono">
            Join thousands of developers and get instant access to premium resources, templates, and tools.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field flex-1"
                required
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Access
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;