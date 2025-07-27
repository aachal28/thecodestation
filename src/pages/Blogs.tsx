import React, { useState } from 'react';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI', 'Coding Tips', 'Tools', 'Freelance'];

  const blogs = [
    {
      id: 1,
      title: 'How to Use AI to Write Better Code in 2024',
      excerpt: 'Discover the latest AI tools and techniques that can dramatically improve your coding productivity and code quality.',
      category: 'AI',
      date: '2024-01-15',
      readTime: '8 min read',
      thumbnail: 'ai-coding',
      featured: true,
    },
    {
      id: 2,
      title: '10 React Hooks You Should Know',
      excerpt: 'Master these essential React hooks to write cleaner, more efficient React applications.',
      category: 'Coding Tips',
      date: '2024-01-12',
      readTime: '12 min read',
      thumbnail: 'react-hooks',
      featured: false,
    },
    {
      id: 3,
      title: 'The Ultimate VS Code Setup for 2024',
      excerpt: 'Transform your development experience with these essential VS Code extensions, themes, and configurations.',
      category: 'Tools',
      date: '2024-01-10',
      readTime: '6 min read',
      thumbnail: 'vscode-setup',
      featured: true,
    },
    {
      id: 4,
      title: 'How I Made $10K Monthly as a Freelance Developer',
      excerpt: 'My complete journey from $0 to $10K monthly income as a freelance developer, including strategies and mistakes.',
      category: 'Freelance',
      date: '2024-01-08',
      readTime: '15 min read',
      thumbnail: 'freelance-income',
      featured: true,
    },
    {
      id: 5,
      title: 'CSS Grid vs Flexbox: When to Use What',
      excerpt: 'A practical guide to choosing between CSS Grid and Flexbox for your layout needs.',
      category: 'Coding Tips',
      date: '2024-01-05',
      readTime: '10 min read',
      thumbnail: 'css-grid-flexbox',
      featured: false,
    },
    {
      id: 6,
      title: 'ChatGPT Prompts Every Developer Should Know',
      excerpt: 'Boost your productivity with these proven ChatGPT prompts specifically designed for developers.',
      category: 'AI',
      date: '2024-01-03',
      readTime: '7 min read',
      thumbnail: 'chatgpt-prompts',
      featured: false,
    },
    {
      id: 7,
      title: 'Building a Developer Portfolio That Gets Noticed',
      excerpt: 'Learn how to create a standout developer portfolio that attracts recruiters and clients.',
      category: 'Freelance',
      date: '2024-01-01',
      readTime: '11 min read',
      thumbnail: 'dev-portfolio',
      featured: false,
    },
    {
      id: 8,
      title: 'Top 15 Developer Tools I Use Daily',
      excerpt: 'My essential toolkit for web development, from code editors to productivity apps.',
      category: 'Tools',
      date: '2023-12-28',
      readTime: '9 min read',
      thumbnail: 'dev-tools',
      featured: false,
    },
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="bracket-highlight">Developer</span> <span className="terminal-prompt">Blog</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            In-depth articles, tutorials, and insights on web development, AI tools, freelancing, and everything that helps developers grow.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-mono font-medium transition-all duration-300 ${
                  selectedCategory === category ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        {selectedCategory === 'All' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-mono mb-8 terminal-prompt">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBlogs.slice(0, 2).map((blog) => (
                <article key={blog.id} className="card overflow-hidden cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center">
                    <span className="text-coder-black font-mono font-semibold">{blog.thumbnail}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-coder-yellow/20 text-coder-yellow border border-coder-yellow/30 text-sm font-mono">
                        {blog.category}
                      </span>
                      <div className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(blog.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono">
                        <Clock className="h-4 w-4 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold font-mono mb-3 text-coder-black dark:text-coder-white bracket-highlight">{blog.title}</h3>
                    <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-4 font-mono text-sm">{blog.excerpt}</p>
                    <button className="flex items-center text-coder-yellow hover:text-coder-yellow/80 font-mono font-medium transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Articles Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="font-mono terminal-prompt">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === 'All' ? regularBlogs : filteredBlogs).map((blog) => (
              <article key={blog.id} className="card overflow-hidden cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center">
                  <span className="text-coder-black font-mono font-semibold text-sm">{blog.thumbnail}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-coder-yellow/20 text-coder-yellow border border-coder-yellow/30 text-sm font-mono">
                      {blog.category}
                    </span>
                    <span className="text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono">{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold font-mono mb-2 text-coder-black dark:text-coder-white line-clamp-2">{blog.title}</h3>
                  <p className="text-coder-gray-600 dark:text-coder-gray-400 text-sm mb-4 line-clamp-3 font-mono">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 text-xs font-mono">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                    <button className="text-coder-yellow hover:text-coder-yellow/80 text-sm font-mono font-medium transition-colors duration-300">
                      Read →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Load More */}
        <section className="text-center mb-16">
          <button className="btn-secondary">
            Load More Articles
          </button>
        </section>

        {/* Newsletter CTA */}
        <section className="text-center bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-8">
          <h2 className="text-2xl font-bold font-mono mb-4 bracket-highlight">Never Miss a New Article</h2>
          <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-6 max-w-2xl mx-auto font-mono">
            Join our newsletter to get weekly summaries of the latest blog posts, plus exclusive content and early access to new articles.
          </p>
          <button className="btn-primary">
            Join Newsletter for Weekly Summaries
          </button>
        </section>
      </div>
    </div>
  );
};

export default Blogs;