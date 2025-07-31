import React, { useState } from 'react';
import { Bot, Wrench, FileText, Layout, Download, Lock, Mail, Filter } from 'lucide-react';

const Resources = () => {
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', command: '/all' },
    { id: 'ai', name: 'AI', command: '/ai' },
    { id: 'dev', name: 'Dev', command: '/dev' },
    { id: 'no-code', name: 'No-code', command: '/no-code' },
    { id: 'productivity', name: 'Productivity', command: '/productivity' },
  ];

  const resources = [
    {
      id: 1,
      title: 'ChatGPT',
      category: 'ai',
      description: 'AI-powered coding assistant',
      locked: false,
      color: 'terminal-yellow'
    },
    {
      id: 2,
      title: 'VS Code Extensions Pack',
      category: 'dev',
      description: 'Essential extensions for developers',
      locked: true,
      color: 'terminal-blue'
    },
    {
      id: 3,
      title: 'Notion Templates',
      category: 'productivity',
      description: 'Project management templates',
      locked: true,
      color: 'terminal-green'
    },
    {
      id: 4,
      title: 'Webflow',
      category: 'no-code',
      description: 'Visual web development platform',
      locked: false,
      color: 'terminal-red'
    },
    {
      id: 5,
      title: 'GitHub Copilot',
      category: 'ai',
      description: 'AI pair programmer',
      locked: false,
      color: 'terminal-yellow'
    },
    {
      id: 6,
      title: 'Figma',
      category: 'dev',
      description: 'Design and prototyping tool',
      locked: false,
      color: 'terminal-blue'
    },
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('> Access granted! Check your email for the developer toolkit.');
    setEmail('');
  };

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
              <div className="ml-4 text-terminal-white/50 font-mono text-sm">resources.db</div>
            </div>
            
            <div className="text-left">
              <div className="font-mono text-sm mb-4">
                <span className="text-terminal-blue">~/thecodestation</span> 
                <span className="text-terminal-green"> $ </span>
                <span className="text-terminal-white">query --table=resources</span>
              </div>
              <h1 className="text-3xl font-mono font-bold mb-4 text-terminal-white light:text-terminal-black">
                <span className="code-bracket">Developer</span> <span className="terminal-prompt">Resources</span>
              </h1>
              <p className="text-lg text-muted font-mono">
                Curated collection of the best tools and resources to supercharge your development workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Terminal Filters */}
        <section className="mb-12">
          <div className="terminal-card p-6 max-w-4xl mx-auto">
            <div className="font-mono text-sm mb-4">
              <span className="text-terminal-blue">~/thecodestation</span> 
              <span className="text-terminal-green"> $ </span>
              <span className="text-terminal-white">filter --category=</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`font-mono text-sm px-4 py-2 border transition-all duration-300 ${
                    selectedCategory === category.id 
                      ? 'bg-terminal-yellow text-terminal-black border-terminal-yellow shadow-glow' 
                      : 'bg-transparent text-terminal-yellow border-terminal-yellow/30 hover:border-terminal-yellow hover:bg-terminal-yellow/10'
                  }`}
                >
                  <span className="text-terminal-green">></span> {category.command}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="terminal-card p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 bg-${resource.color}/20 border border-${resource.color}/30 flex items-center justify-center mr-3`}>
                      <div className={`w-2 h-2 bg-${resource.color}`}></div>
                    </div>
                    <h3 className="text-lg font-mono font-bold text-terminal-white light:text-terminal-black">{resource.title}</h3>
                  </div>
                  {resource.locked && <Lock className="h-4 w-4 text-terminal-yellow" />}
                </div>
                <p className="text-muted mb-4 text-sm font-mono">{resource.description}</p>
                <button
                  className={`w-full py-2 font-mono font-medium transition-all duration-300 flex items-center justify-center text-sm ${
                    resource.locked
                      ? 'bg-transparent border border-terminal-white/20 text-terminal-white/50 cursor-not-allowed'
                      : 'terminal-button'
                  }`}
                  disabled={resource.locked}
                >
                  {resource.locked ? (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      <span className="terminal-prompt">locked</span>
                    </>
                  ) : (
                    <span className="terminal-prompt">try_tool</span>
                  )}
                </button>
                {!resource.locked && (
                  <div className="mt-3 text-terminal-green font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="terminal-prompt">status: available</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <section>
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <div className="font-mono text-sm mb-4">
              <span className="text-terminal-blue">~/thecodestation</span> 
              <span className="text-terminal-green"> $ </span>
              <span className="text-terminal-white">download --toolkit=developer</span>
            </div>
            <h2 className="text-2xl font-mono font-bold mb-4 code-bracket text-terminal-white light:text-terminal-black">Download Free Developer Toolkit</h2>
            <p className="text-lg text-muted mb-8 font-mono">
              Get instant access to checklists, Notion freebies, and downloadable guides.
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
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </button>
              </div>
              <p className="text-terminal-white/50 text-sm font-mono">
                <span className="text-terminal-green">#</span> Free forever, no spam
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;