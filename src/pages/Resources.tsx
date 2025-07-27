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
    alert('> Access granted! Check your email for the developer toolkit download link.');
    setEmail('');
  };

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="bracket-highlight">Developer</span> <span className="terminal-prompt">Resources</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
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
                className={`flex items-center px-6 py-3 font-mono font-medium transition-all duration-300 ${
                  selectedCategory === category.id ? 'btn-primary' : 'btn-secondary'
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
              <div key={resource.id} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold font-mono text-coder-black dark:text-coder-white bracket-highlight">{resource.title}</h3>
                  <div className="flex items-center">
                    {resource.locked && <Lock className="h-4 w-4 text-coder-yellow mr-2" />}
                    <span className={`px-2 py-1 text-xs font-mono font-semibold border ${
                      resource.type === 'Free' ? 'bg-green-600/20 text-green-400 border-green-400/30' :
                      resource.type === 'Paid' ? 'bg-blue-600/20 text-blue-400 border-blue-400/30' :
                      'bg-coder-yellow/20 text-coder-yellow border-coder-yellow/30'
                    }`}>
                      {resource.type}
                    </span>
                  </div>
                </div>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-4 font-mono text-sm">{resource.description}</p>
                <button
                  className={`w-full py-3 font-mono font-medium transition-all duration-300 flex items-center justify-center ${
                    resource.locked
                      ? 'bg-transparent border border-coder-gray-600/30 text-coder-gray-600 dark:text-coder-gray-400 cursor-not-allowed'
                      : 'btn-primary'
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
        <section className="bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold font-mono mb-4 bracket-highlight">Unlock the Full Vault</h2>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono">
            Get instant access to all premium resources, templates, and tools by joining our developer community.
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
                className="btn-primary flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Unlock All
              </button>
            </div>
          </form>
        </section>

        {/* Toolkit CTA */}
        <section className="text-center card p-8">
          <h2 className="text-2xl font-bold font-mono mb-4 terminal-prompt">Download Free Developer Toolkit</h2>
          <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-6 font-mono">
            Get started with our essential collection of free tools and resources for modern web development.
          </p>
          <button className="btn-primary">
            Download Toolkit
          </button>
        </section>
      </div>
    </div>
  );
};

export default Resources;