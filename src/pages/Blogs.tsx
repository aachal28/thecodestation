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
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Developer Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
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
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBlogs.slice(0, 2).map((blog) => (
                <article key={blog.id} className="bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-colors cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-semibold">{blog.thumbnail}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                        {blog.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(blog.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{blog.title}</h3>
                    <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 font-medium">
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
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === 'All' ? regularBlogs : filteredBlogs).map((blog) => (
              <article key={blog.id} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{blog.thumbnail}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-sm">
                      {blog.category}
                    </span>
                    <span className="text-gray-400 text-sm">{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
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
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors">
            Load More Articles
          </button>
        </section>

        {/* Newsletter CTA */}
        <section className="text-center bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Never Miss a New Article</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join our newsletter to get weekly summaries of the latest blog posts, plus exclusive content and early access to new articles.
          </p>
          <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Join Newsletter for Weekly Summaries
          </button>
        </section>
      </div>
    </div>
  );
};

export default Blogs;