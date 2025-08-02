import React from 'react';
import { ArrowRight, Award, Users, Zap, ExternalLink, Github, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const collaborations = [
    'TechCorp', 'DevTools Inc', 'CodeAcademy', 'StartupXYZ', 'WebFlow', 'Notion'
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      category: 'Web',
      time: '2 weeks',
      description: 'Modern admin dashboard with analytics',
      links: { live: '#', github: '#' }
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'App',
      time: '1 month',
      description: 'React Native banking application',
      links: { case: '#', github: '#' }
    },
    {
      id: 3,
      title: 'Design System',
      category: 'UI',
      time: '3 weeks',
      description: 'Complete component library',
      links: { live: '#', case: '#' }
    }
  ];

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who I Am */}
        <section className="text-center mb-16">
          <div className="w-32 h-32 bg-coder-yellow mx-auto mb-8 flex items-center justify-center shadow-soft rounded-3xl">
            <span className="text-4xl font-bold font-mono text-coder-black">AP</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="terminal-prompt">Hi, I'm</span> <span className="bracket-highlight">Aachal Pardeshi</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Developer, Content Creator, and Tech Enthusiast helping fellow coders navigate the ever-evolving world of technology.
          </p>
        </section>

        {/* My Mission */}
        <section className="mb-16">
          <div className="terminal-box text-center">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="terminal-path">~/mission.txt</span>
            </div>
            <h2 className="text-3xl font-bold font-mono mb-8 bracket-highlight leading-10">My Mission</h2>
            <p className="text-2xl text-coder-yellow/90 font-mono leading-8">
              "To simplify tech & help coders grow faster."
            </p>
          </div>
        </section>

        {/* My Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center terminal-prompt">My Journey</h2>
          <div className="max-w-4xl mx-auto terminal-box">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="terminal-path">~/journey.log</span>
            </div>
            <p className="text-lg text-coder-yellow/80 mb-6 leading-7 font-mono">
              My coding journey began with curiosity and a laptop. What started as simple HTML pages evolved into a passion for creating digital solutions that make a difference.
            </p>
            <p className="text-lg text-coder-yellow/80 mb-6 leading-7 font-mono">
              TheCodeStation was born from my desire to simplify the complex world of technology. I believe that with the right resources, guidance, and community, every developer can achieve their goals faster.
            </p>
            <p className="text-lg text-coder-yellow/80 leading-7 font-mono">
              Today, I create content that bridges the gap between cutting-edge technology and practical implementation, helping thousands of developers stay ahead in their careers.
            </p>
          </div>
        </section>

        {/* Past Collaborations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center bracket-highlight">Past Collaborations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {collaborations.map((brand, index) => (
              <div key={index} className="card p-4 text-center">
                <div className="h-16 bg-coder-yellow/20 border border-coder-yellow/30 flex items-center justify-center mb-4 rounded-xl">
                  <span className="font-mono text-sm text-coder-yellow leading-6">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects I've Built */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center terminal-prompt">Projects I've Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card p-6">
                <div className="h-40 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center mb-6 rounded-xl">
                  <span className="text-coder-black font-mono font-semibold leading-6">Screenshot</span>
                </div>
                <div className="card-header">
                  <span className="tag">
                    {project.category}
                  </span>
                  <div className="card-meta">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.time}
                  </div>
                </div>
                <h3 className="card-title mb-4 bracket-highlight">{project.title}</h3>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-6 font-mono text-sm leading-6">{project.description}</p>
                <div className="flex gap-2">
                  {project.links.live && (
                    <a href={project.links.live} className="flex items-center px-3 py-2 bg-coder-yellow text-coder-black font-mono text-sm transition-all duration-300 hover:shadow-glow rounded-xl h-8 leading-6">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="flex items-center px-3 py-2 bg-transparent border border-coder-yellow/30 text-coder-yellow font-mono text-sm transition-all duration-300 hover:bg-coder-yellow hover:text-coder-black rounded-xl h-8 leading-6">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.links.case && (
                    <a href={project.links.case} className="flex items-center px-3 py-2 bg-transparent border border-coder-yellow/30 text-coder-yellow font-mono text-sm transition-all duration-300 hover:bg-coder-yellow hover:text-coder-black rounded-xl h-8 leading-6">
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold font-mono mb-8 terminal-prompt leading-10">Ready to Work Together?</h2>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono leading-8">
            Whether you need development services, content creation, or mentorship, I'm here to help you achieve your goals.
          </p>
          <Link
            to="/services"
            className="btn-primary inline-flex items-center"
          >
            View My Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;