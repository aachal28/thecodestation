import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Terminal } from 'lucide-react';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tutorials & Tips', 'Book Reviews', 'Learning Journey', 'Monthly Roundups'];

  const blogs = [
    {
      id: 1,
      title: 'How to Master React Hooks in 2024',
      excerpt: 'A comprehensive guide to understanding and implementing React hooks effectively in your projects.',
      category: 'Tutorials & Tips',
      date: '2024-01-15',
      readTime: '8 min read',
      thumbnail: 'react-hooks',
      color: 'terminal-blue'
    },
    {
      id: 2,
      title: 'Book Review: Clean Code by Robert Martin',
      excerpt: 'My thoughts on this classic programming book and how it changed my coding practices.',
      category: 'Book Reviews',
      date: '2024-01-12',
      readTime: '5 min read',
      thumbnail: 'clean-code',
      color: 'terminal-green'
    },
    {
      id: 3,
      title: 'My Journey Learning TypeScript',
      excerpt: 'From JavaScript to TypeScript - the challenges, wins, and lessons learned along the way.',
      category: 'Learning Journey',
      date: '2024-01-10',
      readTime: '12 min read',
      thumbnail: 'typescript-journey',
      color: 'terminal-yellow'
    },
    {
      id: 4,
      title: 'January 2024: Tools, Content & Mistakes',
      excerpt: 'Monthly roundup of my favorite tools, content I consumed, and mistakes I made this month.',
      category: 'Monthly Roundups',
      date: '2024-01-08',
      readTime: '6 min read',
      thumbnail: 'jan-roundup',
      color: 'terminal-red'
    },
    {
      id: 5,
      title: 'CSS Grid vs Flexbox: When to Use What',
      excerpt: 'A practical guide to choosing between CSS Grid and Flexbox for your layout needs.',
      category: 'Tutorials & Tips',
      date: '2024-01-05',
      readTime: '10 min read',
      thumbnail: 'css-grid-flexbox',
      color: 'terminal-blue'
    },
    {
      id: 6,
      title: 'Book Review: The Pragmatic Programmer',
      excerpt: 'Why every developer should read this timeless classic and key takeaways.',
      category: 'Book Reviews',
      date: '2024-01-03',
      readTime: '7 min read',
      thumbnail: 'pragmatic-programmer',
      color: 'terminal-green'
    },
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter((blog: any) => blog.category === selectedCategory);

  return (
    <div className="py-16 bg-terminal-black light:bg-terminal-white animate-fade-in">
      <div className="container-content">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="terminal-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-terminal-red"></div>
                <div className="w-3 h-3 bg-terminal-yellow"></div>
                <div className="w-3 h-3 bg-terminal-green"></div>
              </div>
              <div className="ml-4 text-terminal-white/50 font-mono text-sm">blog.md</div>
            </div>
            
            <div className="text-left">
              <div className="font-mono text-sm mb-4">
                <span className="text-terminal-blue">~/thecodestation</span> 
                <span className="text-terminal-green"> $ </span>
                <span className="text-terminal-white">ls blog/ --recent</span>
              </div>
              <h1 className="text-3xl font-mono font-bold mb-4 text-terminal-white light:text-terminal-black text-center">
                <span className="code-bracket">Developer</span> <span className="terminal-prompt">Blog</span>
              </h1>
              <p className="text-lg text-muted font-mono text-center">
                Tutorials, book reviews, learning stories, and monthly roundups - everything to help you grow as a developer.
              </p>
            </div>
          </div>
        </section>

        {/* Terminal Categories */}
        <section className="mb-12">
          <div className="terminal-card p-6 max-w-4xl mx-auto">
            <div className="font-mono text-sm mb-4">
              <span className="text-terminal-blue">~/blog</span> 
              <span className="text-terminal-green"> $ </span>
              <span className="text-terminal-white">filter --category=</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-mono text-sm px-4 py-2 border transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-terminal-yellow text-terminal-black border-terminal-yellow shadow-glow' 
                      : 'bg-transparent text-terminal-yellow border-terminal-yellow/30 hover:border-terminal-yellow hover:bg-terminal-yellow/10'
                  }`}
                >
                  <span className="text-terminal-green">></span> {category.toLowerCase().replace(' ', '_')}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog: any) => (
              <article key={blog.id} className="terminal-card overflow-hidden cursor-pointer group">
                <div className={`h-32 bg-${blog.color}/20 border-b border-${blog.color}/30 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`w-8 h-8 bg-${blog.color}/30 border border-${blog.color}/50 flex items-center justify-center mx-auto mb-2`}>
                      <div className={`w-2 h-2 bg-${blog.color}`}></div>
                    </div>
                    <span className="text-terminal-white/70 font-mono text-xs">{blog.thumbnail}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="terminal-tag text-xs">
                      {blog.category.toLowerCase().replace(' ', '_')}
                    </span>
                    <div className="flex items-center text-muted text-xs font-mono">
                      <Clock className="h-3 w-3 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-mono font-bold mb-3 text-terminal-white light:text-terminal-black">{blog.title}</h3>
                  <p className="text-muted mb-4 text-sm font-mono">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted text-xs font-mono">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                    <div className="text-terminal-yellow font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="terminal-prompt">read_more</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section>
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <Terminal className="h-12 w-12 text-terminal-yellow mx-auto mb-6" />
            <h2 className="text-xl font-mono font-bold mb-4 code-bracket text-terminal-white light:text-terminal-black">Join Newsletter for Weekly Summaries</h2>
            <p className="text-muted mb-6 font-mono">
              Get weekly summaries of the latest blog posts, plus exclusive content and early access to new articles.
            </p>
            <button className="terminal-button">
              <span className="terminal-prompt">join_newsletter</span>
            </button>
            <div className="mt-4 text-terminal-green font-mono text-sm">
              <span className="terminal-prompt">updates: weekly</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;