import React, { useState } from 'react';
import { ArrowRight, Wrench, ShoppingCart, BookOpen, Mail, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('✓ Welcome to TheCodeStation! Check your email for the weekly newsletter.');
    setEmail('');
  };

  const recentPosts = [
    { id: 1, type: 'YouTube', title: 'AI Coding Tools in 2024', platform: 'youtube', icon: <Youtube className="h-5 w-5" /> },
    { id: 2, type: 'Instagram', title: 'CSS Grid Layout Tips', platform: 'instagram', icon: <Instagram className="h-5 w-5" /> },
    { id: 3, type: 'Threads', title: 'Freelancing Journey', platform: 'threads', icon: <MessageCircle className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-coder-white dark:bg-coder-black text-coder-black dark:text-coder-white animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              <span className="text-coder-black dark:text-coder-white">Helping Coders</span><br />
              <span className="text-coder-yellow">Learn, Build & Grow</span> 🚀
            </h1>
            <p className="text-xl sm:text-2xl text-coder-gray-600 dark:text-coder-gray-400 mb-12 max-w-3xl mx-auto font-mono">
              Explore tools, projects, and personal picks — all in one station.
            </p>
            
            {/* Quick Link Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Link to="/resources" className="card text-center p-6 hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-coder-yellow/10 border border-coder-yellow/20 text-coder-yellow w-fit mx-auto mb-4">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold font-mono mb-2 text-coder-yellow">Tools</h3>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">Curated developer resources</p>
              </Link>
              
              <Link to="/products" className="card text-center p-6 hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-coder-yellow/10 border border-coder-yellow/20 text-coder-yellow w-fit mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold font-mono mb-2 text-coder-yellow">Products</h3>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">Digital products & templates</p>
              </Link>
              
              <Link to="/blogs" className="card text-center p-6 hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-coder-yellow/10 border border-coder-yellow/20 text-coder-yellow w-fit mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold font-mono mb-2 text-coder-yellow">Blogs</h3>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">Tutorials & insights</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 md:py-24 bg-coder-gray-50 dark:bg-coder-gray-950/50">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold font-display mb-8 text-center">
            <span className="terminal-prompt">My Recent Posts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div key={post.id} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-coder-yellow/10 border border-coder-yellow/20 text-coder-yellow mr-3">
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
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="terminal-box max-w-2xl mx-auto text-center pl-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-4 text-coder-yellow">$ join-newsletter</h2>
            <p className="text-lg text-coder-gray-400 mb-8 font-mono">
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
                className="btn-primary"
              >
                Subscribe →
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;