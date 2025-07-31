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
    <div className="min-h-screen bg-white dark:bg-coder-black animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-coder-gray-900 dark:text-coder-gray-100">
              <span className="terminal-prompt font-mono">Helping Coders</span><br />
              <span className="code-bracket">Learn, Build & Grow</span> 🚀
            </h1>
            <p className="text-lg sm:text-xl text-muted mb-12 max-w-2xl mx-auto">
              Explore tools, projects, and personal picks — all in one station.
            </p>
            
            {/* Quick Link Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              <Link to="/resources" className="card p-6 text-center hover:shadow-lg transition-all duration-200">
                <div className="icon-box mx-auto mb-4">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-coder-gray-900 dark:text-coder-gray-100">Tools</h3>
                <p className="text-muted text-sm">Curated developer resources</p>
              </Link>
              
              <Link to="/products" className="card p-6 text-center hover:shadow-lg transition-all duration-200">
                <div className="icon-box mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-coder-gray-900 dark:text-coder-gray-100">Products</h3>
                <p className="text-muted text-sm">Digital products & templates</p>
              </Link>
              
              <Link to="/blogs" className="card p-6 text-center hover:shadow-lg transition-all duration-200">
                <div className="icon-box mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-coder-gray-900 dark:text-coder-gray-100">Blogs</h3>
                <p className="text-muted text-sm">Tutorials & insights</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-coder-gray-50 dark:bg-coder-gray-950">
        <div className="container-content">
          <h2 className="section-header text-center terminal-prompt font-mono">My Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="icon-box mr-3">
                    {post.icon}
                  </div>
                  <span className="tag">{post.type}</span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-3 text-coder-gray-900 dark:text-coder-gray-100">{post.title}</h3>
                <button className="text-coder-yellow hover:text-coder-yellow/80 text-sm font-medium transition-colors duration-200">
                  View Post →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container-content">
          <div className="terminal-box p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold mb-4 code-bracket text-coder-gray-100">Join My Weekly Newsletter</h2>
            <p className="text-lg text-coder-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest tools, tips, and insights delivered straight to your inbox every week.
          </p>
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input-field flex-1 bg-coder-gray-800 border-coder-gray-700 text-coder-gray-100"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
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