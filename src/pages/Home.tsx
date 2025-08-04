import React, { useState } from 'react';
import { ArrowRight, Wrench, ShoppingCart, BookOpen, Mail, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('> Welcome to TheCodeStation! Check your email for the weekly newsletter.');
    setEmail('');
  };

  const recentPosts = [
    { id: 1, type: 'YouTube', title: 'AI Coding Tools in 2024', platform: 'youtube', icon: <Youtube className="h-5 w-5" /> },
    { id: 2, type: 'Instagram', title: 'CSS Grid Layout Tips', platform: 'instagram', icon: <Instagram className="h-5 w-5" /> },
    { id: 3, type: 'Threads', title: 'Freelancing Journey', platform: 'threads', icon: <MessageCircle className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono mb-6 text-coder-black dark:text-coder-white">
              <span className="glitch-text">Helping Coders</span><br />
              <span className="text-coder-yellow">Learn, Build & Grow</span> 🚀
            </h1>
            <p className="text-xl sm:text-2xl text-coder-gray-600 dark:text-coder-gray-400 mb-12 max-w-3xl mx-auto font-mono">
              <span className="typing-cursor">Explore tools, projects, and personal picks — all in one station</span>
            </p>
            
            {/* Quick Link Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Link to="/resources" className="terminal-box text-center hover:scale-105 transition-all duration-300">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <div className="terminal-dot red"></div>
                    <div className="terminal-dot yellow"></div>
                    <div className="terminal-dot green"></div>
                  </div>
                  <span className="text-coder-yellow font-mono text-sm">~/tools</span>
                </div>
                <div className="p-4 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow w-fit mx-auto mb-4 rounded-xl">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold font-mono mb-2 text-coder-black dark:text-coder-white">Tools</h3>
                <p className="text-coder-gray-600 dark:text-coder-yellow/80 font-mono text-sm">$ cat curated_resources.txt</p>
              </Link>
              
              <Link to="/products" className="terminal-box text-center hover:scale-105 transition-all duration-300">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <div className="terminal-dot red"></div>
                    <div className="terminal-dot yellow"></div>
                    <div className="terminal-dot green"></div>
                  </div>
                  <span className="text-coder-yellow font-mono text-sm">~/products</span>
                </div>
                <div className="p-4 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow w-fit mx-auto mb-4 rounded-xl">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold font-mono mb-2 text-coder-black dark:text-coder-white">Products</h3>
                <p className="text-coder-gray-600 dark:text-coder-yellow/80 font-mono text-sm">$ ls digital_products/</p>
              </Link>
              
              <Link to="/blogs" className="terminal-box text-center hover:scale-105 transition-all duration-300">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <div className="terminal-dot red"></div>
                    <div className="terminal-dot yellow"></div>
                    <div className="terminal-dot green"></div>
                  </div>
                  <span className="text-coder-yellow font-mono text-sm">~/blogs</span>
                </div>
                <div className="p-4 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow w-fit mx-auto mb-4 rounded-xl">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold font-mono mb-2 text-coder-black dark:text-coder-white">Blogs</h3>
                <p className="text-coder-gray-600 dark:text-coder-yellow/80 font-mono text-sm">$ vim latest_posts.md</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-coder-gray-100/50 dark:bg-coder-black/50 hacker-grid">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-mono text-center mb-12 text-coder-yellow">My Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div key={post.id} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow mr-3 rounded-xl">
                    {post.icon}
                  </div>
                  <span className="text-sm font-mono text-coder-yellow">{post.type}</span>
                </div>
                <h3 className="text-lg font-semibold font-mono mb-3 text-coder-black dark:text-coder-white">{post.title}</h3>
                <button className="text-coder-yellow hover:text-coder-yellow/80 font-mono text-sm transition-colors duration-300">
                  View Post →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-coder-yellow/10 dark:bg-coder-yellow/5 border-t border-b border-coder-yellow/20 mx-4 rounded-3xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4 text-coder-yellow">Join My Weekly Newsletter</h2>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono">
            Get the latest tools, tips, and insights delivered straight to your inbox every week.
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
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;