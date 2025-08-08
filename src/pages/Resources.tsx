import React, { useState } from 'react';
import { Map, FileText, Book, Wrench, MessageSquare, Eye, Download, Mail } from 'lucide-react';

const Resources = () => {
  const [email, setEmail] = useState('');

  const resourceSections = [
    {
      title: 'Roadmaps',
      icon: <Map className="h-6 w-6" />,
      resources: [
        {
          id: 1,
          title: 'Frontend Developer Roadmap',
          description: 'Complete path to becoming a frontend developer in 2024',
          icon: <Map className="h-8 w-8" />,
        },
        {
          id: 2,
          title: 'Backend Developer Roadmap',
          description: 'Step-by-step guide to backend development mastery',
          icon: <Map className="h-8 w-8" />,
        },
        {
          id: 3,
          title: 'Full Stack Developer Roadmap',
          description: 'Comprehensive roadmap for full stack development',
          icon: <Map className="h-8 w-8" />,
        },
        {
          id: 4,
          title: 'DevOps Engineer Roadmap',
          description: 'Path to becoming a DevOps professional',
          icon: <Map className="h-8 w-8" />,
        },
      ]
    },
    {
      title: 'Cheat Sheets',
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          id: 5,
          title: 'HTML Cheat Sheet',
          description: 'Quick reference for HTML tags and attributes',
          icon: <FileText className="h-8 w-8" />,
        },
        {
          id: 6,
          title: 'CSS Flexbox Cheat Sheet',
          description: 'Complete guide to CSS Flexbox properties',
          icon: <FileText className="h-8 w-8" />,
        },
        {
          id: 7,
          title: 'JavaScript ES6+ Cheat Sheet',
          description: 'Modern JavaScript features and syntax',
          icon: <FileText className="h-8 w-8" />,
        },
        {
          id: 8,
          title: 'Git Commands Cheat Sheet',
          description: 'Essential Git commands for version control',
          icon: <FileText className="h-8 w-8" />,
        },
      ]
    },
    {
      title: 'eBooks',
      icon: <Book className="h-6 w-6" />,
      resources: [
        {
          id: 9,
          title: 'React Hooks Mastery',
          description: 'Complete guide to React hooks with examples',
          icon: <Book className="h-8 w-8" />,
        },
        {
          id: 10,
          title: 'Node.js Best Practices',
          description: 'Production-ready Node.js development guide',
          icon: <Book className="h-8 w-8" />,
        },
        {
          id: 11,
          title: 'CSS Grid Layout Guide',
          description: 'Master CSS Grid with practical examples',
          icon: <Book className="h-8 w-8" />,
        },
        {
          id: 12,
          title: 'TypeScript Handbook',
          description: 'From JavaScript to TypeScript mastery',
          icon: <Book className="h-8 w-8" />,
        },
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench className="h-6 w-6" />,
      resources: [
        {
          id: 13,
          title: 'VS Code Extensions Pack',
          description: 'Essential extensions for productive coding',
          icon: <Wrench className="h-8 w-8" />,
        },
        {
          id: 14,
          title: 'Chrome DevTools Guide',
          description: 'Master browser debugging and optimization',
          icon: <Wrench className="h-8 w-8" />,
        },
        {
          id: 15,
          title: 'Figma Design System',
          description: 'Complete design system for developers',
          icon: <Wrench className="h-8 w-8" />,
        },
        {
          id: 16,
          title: 'Postman API Testing',
          description: 'API testing and documentation toolkit',
          icon: <Wrench className="h-8 w-8" />,
        },
      ]
    },
    {
      title: 'Interview Q&A',
      icon: <MessageSquare className="h-6 w-6" />,
      resources: [
        {
          id: 17,
          title: 'JavaScript Interview Questions',
          description: '100+ JavaScript questions with detailed answers',
          icon: <MessageSquare className="h-8 w-8" />,
        },
        {
          id: 18,
          title: 'React Interview Prep',
          description: 'Common React interview questions and solutions',
          icon: <MessageSquare className="h-8 w-8" />,
        },
        {
          id: 19,
          title: 'System Design Questions',
          description: 'System design interview preparation guide',
          icon: <MessageSquare className="h-8 w-8" />,
        },
        {
          id: 20,
          title: 'Algorithm & Data Structures',
          description: 'Coding interview problems and solutions',
          icon: <MessageSquare className="h-8 w-8" />,
        },
      ]
    },
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Access granted! Check your email for the developer resource vault.');
    setEmail('');
  };

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="text-coder-yellow">Developer</span> <span className="terminal-prompt">Resources</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Curated collection of roadmaps, cheat sheets, eBooks, tools, and interview resources to accelerate your development journey.
          </p>
        </section>

        {/* Resource Sections */}
        {resourceSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow mr-4 rounded-xl">
                {section.icon}
              </div>
              <h2 className="text-3xl font-bold font-mono terminal-prompt">{section.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.resources.map((resource) => (
                <div key={resource.id} className="card overflow-hidden">
                  {/* Resource Icon/Image */}
                  <div className="h-32 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center">
                    <div className="text-coder-black">
                      {resource.icon}
                    </div>
                  </div>

                  {/* Resource Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold font-mono text-coder-black dark:text-coder-white mb-3">
                      {resource.title}
                    </h3>
                    
                    <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-6 font-mono text-sm">
                      {resource.description}
                    </p>
                    
                    {/* CTA Button */}
                    <button className="w-full btn-primary flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Download CTA */}
        <section className="text-center bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-8 md:p-12 rounded-3xl">
          <h2 className="text-3xl font-bold font-mono mb-4 text-coder-yellow">Get All Resources in One Place</h2>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono">
            Join our newsletter and get instant access to the complete developer resource vault with exclusive content.
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
                <Download className="mr-2 h-5 w-5" />
                Get Access
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Resources;