import React, { useState, useEffect } from 'react';
import { ArrowRight, Wrench, ShoppingCart, BookOpen, Mail, Instagram, Youtube, MessageCircle, Terminal, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState('');
  const [typingText, setTypingText] = useState('');
  const fullText = 'Helping Coders Learn, Build & Grow 🚀';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('> Welcome to TheCodeStation! Check your email for the weekly newsletter.');
    setEmail('');
  };

  const recentPosts = [
    { id: 1, type: 'YouTube', title: 'AI Coding Tools in 2024', platform: 'youtube', icon: <Youtube className="h-4 w-4" /> },
    { id: 2, type: 'Instagram', title: 'CSS Grid Layout Tips', platform: 'instagram', icon: <Instagram className="h-4 w-4" /> },
    { id: 3, type: 'Threads', title: 'Freelancing Journey', platform: 'threads', icon: <MessageCircle className="h-4 w-4" /> },
  ];

  const featuredTools = [
    { name: 'ChatGPT', category: 'AI', description: 'AI-powered coding assistant' },
    { name: 'VS Code', category: 'Editor', description: 'Code editor with extensions' },
    { name: 'Figma', category: 'Design', description: 'UI/UX design platform' },
    { name: 'Notion', category: 'Productivity', description: 'All-in-one workspace' },
  ];

  return (
    <div className="min-h-screen bg-terminal-black light:bg-terminal-white animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-content">
          <div className="max-w-4xl mx-auto text-center">
            {/* Terminal Window */}
            <div className="terminal-card p-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-terminal-red"></div>
                  <div className="w-3 h-3 bg-terminal-yellow"></div>
                  <div className="w-3 h-3 bg-terminal-green"></div>
                </div>
                <div className="ml-4 text-terminal-white/50 font-mono text-sm">terminal</div>
              </div>
              
              <div className="text-left">
                <div className="font-mono text-sm mb-4">
                  <span className="text-terminal-blue">~/thecodestation</span> 
                  <span className="text-terminal-green"> $ </span>
                  <span className="text-terminal-white">echo "welcome"</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6 text-terminal-white light:text-terminal-black">
                  <span className="typing-animation">{typingText}</span>
                </h1>
                <p className="text-lg text-muted mb-8 font-mono">
                  <span className="text-terminal-green">></span> Explore tools, projects, and personal picks — all in one station.
                </p>
              </div>
            </div>
            
            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Link to="/resources" className="terminal-card p-6 text-center group">
                <div className="w-12 h-12 bg-terminal-yellow/20 border border-terminal-yellow/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-terminal-yellow/30 transition-all duration-300">
                  <Wrench className="h-6 w-6 text-terminal-yellow" />
                </div>
                <h3 className="text-lg font-mono font-bold mb-2 text-terminal-white light:text-terminal-black">Tools</h3>
                <p className="text-muted text-sm font-mono">Curated developer resources</p>
                <div className="mt-4 text-terminal-yellow font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="terminal-prompt">explore</span>
                </div>
              </Link>
              
              <Link to="/products" className="terminal-card p-6 text-center group">
                <div className="w-12 h-12 bg-terminal-blue/20 border border-terminal-blue/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-terminal-blue/30 transition-all duration-300">
                  <ShoppingCart className="h-6 w-6 text-terminal-blue" />
                </div>
                <h3 className="text-lg font-mono font-bold mb-2 text-terminal-white light:text-terminal-black">Products</h3>
                <p className="text-muted text-sm font-mono">Digital products & templates</p>
                <div className="mt-4 text-terminal-blue font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="terminal-prompt">browse</span>
                </div>
              </Link>
              
              <Link to="/blogs" className="terminal-card p-6 text-center group">
                <div className="w-12 h-12 bg-terminal-green/20 border border-terminal-green/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-terminal-green/30 transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-terminal-green" />
                </div>
                <h3 className="text-lg font-mono font-bold mb-2 text-terminal-white light:text-terminal-black">Blogs</h3>
                <p className="text-muted text-sm font-mono">Tutorials & insights</p>
                <div className="mt-4 text-terminal-green font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="terminal-prompt">read</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 bg-terminal-gray light:bg-gray-50">
        <div className="container-content">
          <div className="terminal-card p-8 mb-8">
            <h2 className="section-header terminal-prompt">Check what others are building</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredTools.map((tool, index) => (
                <div key={index} className="bg-terminal-black light:bg-white border border-terminal-yellow/30 p-4 hover:shadow-glow transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-mono font-bold text-terminal-white light:text-terminal-black">{tool.name}</h3>
                    <span className="terminal-tag text-xs">{tool.category}</span>
                  </div>
                  <p className="text-muted text-sm font-mono mb-3">{tool.description}</p>
                  <div className="text-terminal-yellow font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="terminal-prompt">try_tool</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="container-content">
          <h2 className="section-header text-center terminal-prompt">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {recentPosts.map((post) => (
              <div key={post.id} className="terminal-card p-6 group">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-terminal-yellow/20 border border-terminal-yellow/30 flex items-center justify-center mr-3">
                    {post.icon}
                  </div>
                  <span className="terminal-tag">{post.type}</span>
                </div>
                <h3 className="text-lg font-mono font-bold mb-3 text-terminal-white light:text-terminal-black">{post.title}</h3>
                <div className="text-terminal-yellow font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="terminal-prompt">view_post</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container-content">
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Terminal className="h-8 w-8 text-terminal-yellow mr-3" />
              <h2 className="text-2xl font-mono font-bold text-terminal-white light:text-terminal-black">Join My Weekly Newsletter</h2>
            </div>
            <p className="text-lg text-muted mb-8 font-mono">
              <span className="text-terminal-green">></span> Get the latest tools, tips, and insights delivered straight to your inbox.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@email.com"
                  className="terminal-input flex-1"
                  required
                />
                <button
                  type="submit"
                  className="terminal-button"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </button>
              </div>
              <p className="text-terminal-white/50 text-sm font-mono">
                <span className="text-terminal-green">#</span> No spam, unsubscribe anytime
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;