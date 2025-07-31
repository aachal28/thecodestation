import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

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
    },
    {
      id: 2,
      title: 'Book Review: Clean Code by Robert Martin',
      excerpt: 'My thoughts on this classic programming book and how it changed my coding practices.',
      category: 'Book Reviews',
      date: '2024-01-12',
      readTime: '5 min read',
      thumbnail: 'clean-code',
    },
    {
      id: 3,
      title: 'My Journey Learning TypeScript',
      excerpt: 'From JavaScript to TypeScript - the challenges, wins, and lessons learned along the way.',
      category: 'Learning Journey',
      date: '2024-01-10',
      readTime: '12 min read',
      thumbnail: 'typescript-journey',
    },
    {
      id: 4,
      title: 'January 2024: Tools, Content & Mistakes',
      excerpt: 'Monthly roundup of my favorite tools, content I consumed, and mistakes I made this month.',
      category: 'Monthly Roundups',
      date: '2024-01-08',
      readTime: '6 min read',
      thumbnail: 'jan-roundup',
    },
    {
      id: 5,
      title: 'CSS Grid vs Flexbox: When to Use What',
      excerpt: 'A practical guide to choosing between CSS Grid and Flexbox for your layout needs.',
      category: 'Tutorials & Tips',
      date: '2024-01-05',
      readTime: '10 min read',
      thumbnail: 'css-grid-flexbox',
    },
    {
      id: 6,
      title: 'Book Review: The Pragmatic Programmer',
      excerpt: 'Why every developer should read this timeless classic and key takeaways.',
      category: 'Book Reviews',
      date: '2024-01-03',
      readTime: '7 min read',
      thumbnail: 'pragmatic-programmer',
    },
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter((blog: any) => blog.category === selectedCategory);

  return (
    <div className="py-16 bg-white dark:bg-coder-black animate-fade-in">
      <div className="container-content">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-coder-gray-900 dark:text-coder-gray-100">
            <span className="code-bracket">Developer</span> <span className="terminal-prompt font-mono">Blog</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Tutorials, book reviews, learning stories, and monthly roundups - everything to help you grow as a developer.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-medium transition-all duration-200 text-sm ${
                  selectedCategory === category ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBlogs.map((blog: any) => (
              <article key={blog.id} className="card overflow-hidden cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center">
                  <span className="text-coder-black font-mono text-sm font-medium">{blog.thumbnail}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="tag">
                      {blog.category}
                    </span>
                    <div className="flex items-center text-muted text-xs">
                      <Clock className="h-4 w-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-3 text-coder-gray-900 dark:text-coder-gray-100">{blog.title}</h3>
                  <p className="text-muted mb-4 text-sm">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted text-xs">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                    <button className="flex items-center text-coder-yellow hover:text-coder-yellow/80 font-medium transition-colors duration-200 text-sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="text-center card p-8">
          <h2 className="text-xl font-display font-semibold mb-4 code-bracket text-coder-gray-900 dark:text-coder-gray-100">Join Newsletter for Weekly Summaries</h2>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Get weekly summaries of the latest blog posts, plus exclusive content and early access to new articles.
          </p>
          <button className="btn-primary">
            Join Newsletter
          </button>
        </section>
      </div>
    </div>
  );
};

export default Blogs;