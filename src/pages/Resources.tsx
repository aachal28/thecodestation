import React, { useState } from 'react';
import { Bot, Wrench, FileText, Layout, Download, Lock, Mail } from 'lucide-react';

const Resources = () => {
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: <Wrench className="h-5 w-5" /> },
    { id: 'ai-tools', name: 'AI Tools', icon: <Bot className="h-5 w-5" /> },
    { id: 'dev-tools', name: 'Dev Tools', icon: <Wrench className="h-5 w-5" /> },
    { id: 'pdfs', name: 'PDFs', icon: <FileText className="h-5 w-5" /> },
    { id: 'templates', name: 'Templates', icon: <Layout className="h-5 w-5" /> },
  ];

  const resources = [
    {
      id: 1,
      title: 'ChatGPT Code Assistant',
      category: 'ai-tools',
      description: 'AI-powered coding assistant for faster development',
      type: 'Free',
      url: '#',
      locked: false,
    },
    {
      id: 2,
      title: 'GitHub Copilot',
      category: 'ai-tools',
      description: 'AI pair programmer that suggests whole lines of code',
      type: 'Paid',
      url: '#',
      locked: false,
    },
    {
      id: 3,
      title: 'VS Code Extensions Pack',
      category: 'dev-tools',
      description: 'Essential VS Code extensions for web developers',
      type: 'Free',
      url: '#',
      locked: true,
    },
    {
      id: 4,
      title: 'React Cheatsheet',
      category: 'pdfs',
      description: 'Complete React hooks and concepts reference',
      type: 'Premium',
      url: '#',
      locked: true,
    },
    {
      id: 5,
      title: 'Landing Page Template',
      category: 'templates',
      description: 'Modern, responsive landing page template',
      type: 'Premium',
      url: '#',
      locked: true,
    },
    {
      id: 6,
      title: 'CSS Grid Generator',
      category: 'dev-tools',
      description: 'Visual tool for creating CSS Grid layouts',
      type: 'Free',
      url: '#',
      locked: false,
    },
    {
      id: 7,
      title: 'JavaScript ES6+ Guide',
      category: 'pdfs',
      description: 'Modern JavaScript features and best practices',
      type: 'Premium',
      url: '#',
      locked: true,
    },
    {
      id: 8,
      title: 'Portfolio Template',
      category: 'templates',
      description: 'Professional developer portfolio template',
      type: 'Premium',
      url: '#',
      locked: true,
    },
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks! Check your email for the developer toolkit download link.');
    setEmail('');
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Developer Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Curated collection of the best tools, templates, and resources to supercharge your development workflow.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Resources Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                  <div className="flex items-center">
                    {resource.locked && <Lock className="h-4 w-4 text-yellow-400 mr-2" />}
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      resource.type === 'Free' ? 'bg-green-600/20 text-green-400' :
                      resource.type === 'Paid' ? 'bg-blue-600/20 text-blue-400' :
                      'bg-purple-600/20 text-purple-400'
                    }`}>
                      {resource.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center ${
                    resource.locked
                      ? 'bg-slate-700 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                  disabled={resource.locked}
                >
                  {resource.locked ? (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Unlock with Email
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Access Now
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Unlock CTA */}
        <section className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Unlock the Full Vault</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get instant access to all premium resources, templates, and tools by joining our developer community.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Unlock All
              </button>
            </div>
          </form>
        </section>

        {/* Toolkit CTA */}
        <section className="text-center bg-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Download Free Developer Toolkit</h2>
          <p className="text-gray-300 mb-6">
            Get started with our essential collection of free tools and resources for modern web development.
          </p>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
            Download Toolkit
          </button>
        </section>
      </div>
    </div>
  );
};

export default Resources;