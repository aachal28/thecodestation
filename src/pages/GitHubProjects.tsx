import React from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';

const GitHubProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Code Assistant Dashboard',
      description: 'A modern dashboard for managing AI coding assistants with real-time chat and code suggestions.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 234,
      featured: true,
    },
    {
      id: 2,
      title: 'Developer Portfolio Template',
      description: 'Clean, responsive portfolio template with dark mode and smooth animations for developers.',
      tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 156,
      featured: true,
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, real-time updates, and team collaboration.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 89,
      featured: true,
    },
    {
      id: 4,
      title: 'React Component Library',
      description: 'Reusable UI components built with React and Styled Components for modern web applications.',
      tags: ['React', 'Styled Components', 'Storybook', 'TypeScript'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 312,
      featured: true,
    },
    {
      id: 5,
      title: 'CSS Animation Playground',
      description: 'Interactive playground for experimenting with CSS animations and transitions.',
      tags: ['CSS', 'HTML', 'JavaScript', 'SASS'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 78,
      featured: false,
    },
    {
      id: 6,
      title: 'Chrome Extension Starter',
      description: 'Boilerplate for building Chrome extensions with modern web technologies.',
      tags: ['JavaScript', 'Chrome API', 'Webpack', 'Manifest V3'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 145,
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">GitHub Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my open-source projects and contributions. From web applications to developer tools, each project showcases different aspects of modern development.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    {project.stars}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    {project.stars}
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded text-xs">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">See All My Projects</h2>
          <p className="text-gray-300 mb-6">
            Explore my complete collection of projects, contributions, and experiments on GitHub.
          </p>
          <a
            href="https://github.com"
            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
          >
            <Github className="mr-2 h-5 w-5" />
            Visit My GitHub
          </a>
        </section>
      </div>
    </div>
  );
};

export default GitHubProjects;