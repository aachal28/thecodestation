import React, { useState } from 'react';
import { Instagram, Youtube, MessageCircle, Filter } from 'lucide-react';

const RecentPosts = () => {
  const [filter, setFilter] = useState('all');

  const posts = [
    { id: 1, type: 'reel', title: 'AI Coding Assistant Setup', platform: 'instagram', thumbnail: 'reel-1' },
    { id: 2, type: 'short', title: 'React Hooks in 60 Seconds', platform: 'youtube', thumbnail: 'short-1' },
    { id: 3, type: 'carousel', title: 'Top 5 VS Code Extensions', platform: 'instagram', thumbnail: 'carousel-1' },
    { id: 4, type: 'reel', title: 'CSS Grid Layout Tricks', platform: 'instagram', thumbnail: 'reel-2' },
    { id: 5, type: 'short', title: 'JavaScript Array Methods', platform: 'youtube', thumbnail: 'short-2' },
    { id: 6, type: 'thread', title: 'Freelancing Tips Thread', platform: 'twitter', thumbnail: 'thread-1' },
    { id: 7, type: 'reel', title: 'Git Commands You Need', platform: 'instagram', thumbnail: 'reel-3' },
    { id: 8, type: 'carousel', title: 'API Integration Guide', platform: 'instagram', thumbnail: 'carousel-2' },
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
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Recent Posts</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with my latest content across Instagram, YouTube, and Twitter. Quick tips, tutorials, and insights for developers.
          </p>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center ${
                filter === 'all' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              All Posts
            </button>
            <button
              onClick={() => setFilter('reel')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === 'reel' ? 'bg-pink-600 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              Reels
            </button>
            <button
              onClick={() => setFilter('short')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === 'short' ? 'bg-red-600 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              Shorts
            </button>
            <button
              onClick={() => setFilter('carousel')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === 'carousel' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              Carousels
            </button>
            <button
              onClick={() => setFilter('thread')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === 'thread' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
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
              <div key={post.id} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className={`aspect-square bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative`}>
                  <span className="text-white font-semibold text-lg">{post.thumbnail}</span>
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(post.type)}`}>
                    {post.type.toUpperCase()}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-white">{post.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
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
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors">
            Load More Posts
          </button>
        </section>
      </div>
    </div>
  );
};

export default RecentPosts;