import React, { useState } from 'react';
import { Instagram, Youtube, MessageCircle, Filter } from 'lucide-react';

const RecentPosts = () => {
  const [filter, setFilter] = useState('all');

  const posts = [
    { id: 1, type: 'reel', title: 'AI Coding Assistant Setup', platform: 'instagram', thumbnail: 'ai-setup' },
    { id: 2, type: 'short', title: 'React Hooks in 60 Seconds', platform: 'youtube', thumbnail: 'react-hooks' },
    { id: 3, type: 'carousel', title: 'Top 5 VS Code Extensions', platform: 'instagram', thumbnail: 'vscode-ext' },
    { id: 4, type: 'reel', title: 'CSS Grid Layout Tricks', platform: 'instagram', thumbnail: 'css-grid' },
    { id: 5, type: 'short', title: 'JavaScript Array Methods', platform: 'youtube', thumbnail: 'js-arrays' },
    { id: 6, type: 'thread', title: 'Freelancing Tips Thread', platform: 'twitter', thumbnail: 'freelance' },
    { id: 7, type: 'reel', title: 'Git Commands You Need', platform: 'instagram', thumbnail: 'git-cmds' },
    { id: 8, type: 'carousel', title: 'API Integration Guide', platform: 'instagram', thumbnail: 'api-guide' },
  ];

  const filteredPosts = filter === 'all' ? posts : posts.filter(post => post.type === filter);

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      case 'youtube':
        return <Youtube className="h-5 w-5" />;
      case 'twitter':
        return <MessageCircle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'reel':
        return 'bg-pink-500';
      case 'short':
        return 'bg-red-500';
      case 'carousel':
        return 'bg-purple-500';
      case 'thread':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="bracket-highlight">Recent</span> <span className="terminal-prompt">Posts</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Stay updated with my latest content across Instagram, YouTube, and Twitter. Quick tips, tutorials, and insights for developers.
          </p>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 font-mono font-medium transition-all duration-300 flex items-center ${
                filter === 'all' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              All Posts
            </button>
            <button
              onClick={() => setFilter('reel')}
              className={`px-6 py-3 font-mono font-medium transition-all duration-300 ${
                filter === 'reel' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Reels
            </button>
            <button
              onClick={() => setFilter('short')}
              className={`px-6 py-3 font-mono font-medium transition-all duration-300 ${
                filter === 'short' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Shorts
            </button>
            <button
              onClick={() => setFilter('carousel')}
              className={`px-6 py-3 font-mono font-medium transition-all duration-300 ${
                filter === 'carousel' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Carousels
            </button>
            <button
              onClick={() => setFilter('thread')}
              className={`px-6 py-3 font-mono font-medium transition-all duration-300 ${
                filter === 'thread' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Threads
            </button>
          </div>
        </section>

        {/* Posts Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="card overflow-hidden cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center relative">
                  <span className="text-coder-black font-mono font-semibold text-lg">{post.thumbnail}</span>
                  <div className={`absolute top-3 right-3 px-2 py-1 text-xs font-mono font-semibold text-white ${getTypeColor(post.type)}`}>
                    {post.type.toUpperCase()}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-mono font-semibold mb-2 text-coder-black dark:text-coder-white">{post.title}</h3>
                  <div className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono">
                    {getIcon(post.platform)}
                    <span className="ml-2 capitalize">{post.platform}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Load More */}
        <section className="text-center mt-12">
          <button className="btn-secondary">
            Load More Posts
          </button>
        </section>
      </div>
    </div>
  );
};

export default RecentPosts;