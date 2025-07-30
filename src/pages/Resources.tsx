import React, { useState } from 'react';
import { Bot, Wrench, FileText, Layout, Download, Lock, Mail } from 'lucide-react';

const Resources = () => {
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: <Wrench className="h-5 w-5" /> },
    { id: 'ai', name: 'AI', icon: <Bot className="h-5 w-5" /> },
    { id: 'dev', name: 'Dev', icon: <Wrench className="h-5 w-5" /> },
    { id: 'no-code', name: 'No-code', icon: <Layout className="h-5 w-5" /> },
    { id: 'productivity', name: 'Productivity', icon: <FileText className="h-5 w-5" /> },
  ];

  const resources = [
    {
      id: 1,
      title: 'ChatGPT',
      category: 'ai',
      description: 'AI-powered coding assistant',
      locked: false,
    },
    {
      id: 2,
      title: 'VS Code Extensions Pack',
      category: 'dev',
      description: 'Essential extensions for developers',
      locked: true,
    },
    {
      id: 3,
      title: 'Notion Templates',
      category: 'productivity',
      description: 'Project management templates',
      locked: true,
    },
    {
      id: 4,
      title: 'Webflow',
      category: 'no-code',
      description: 'Visual web development platform',
      locked: false,
    },
    {
      id: 5,
      title: 'GitHub Copilot',
      category: 'ai',
      description: 'AI pair programmer',
      locked: false,
    },
    {
      id: 6,
      title: 'Figma',
      category: 'dev',
      description: 'Design and prototyping tool',
      locked: false,
    },
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('✓ Access granted! Check your email for the developer toolkit.');
    setEmail('');
  };

  return (
    <div className="bg-dev-black text-dev-white animate-fade-in">
      <div className="container-dev section-spacing">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="heading-primary">
            <span className="text-dev-yellow">Developer</span> <span className="text-dev-white">Resources</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto font-mono">
            Curated collection of the best tools and resources to supercharge your development workflow.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 font-mono font-medium transition-all duration-200 ${
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
              <div key={resource.id} className="dev-card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold font-mono text-dev-white">{resource.title}</h3>
                  {resource.locked && <Lock className="h-4 w-4 text-dev-yellow" />}
                </div>
                <p className="text-muted mb-4 font-mono text-sm">{resource.description}</p>
                <button
                  className={`w-full py-3 font-mono font-medium transition-all duration-200 flex items-center justify-center ${
                    resource.locked
                      ? 'bg-transparent border border-dev-gray-700 text-dev-gray-400 cursor-not-allowed'
                      : 'btn-primary'
                  }`}
                  disabled={resource.locked}
                >
                  {resource.locked ? (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Locked
                    </>
                  ) : (
                    <>
                      Try
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <section className="text-center terminal-box p-8 md:p-12 pl-12">
          <h2 className="text-2xl font-bold font-mono mb-4 text-dev-yellow">$ download-toolkit</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto font-mono">
            Get instant access to checklists, Notion freebies, and downloadable guides.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="dev-input flex-1"
                required
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Download →
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Resources;