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
    <div className="py-16 bg-white dark:bg-coder-black animate-fade-in">
      <div className="container-content">
        {/* Who I Am */}
        <section className="text-center mb-16">
          <div className="w-24 h-24 bg-coder-yellow mx-auto mb-6 flex items-center justify-center shadow-card">
            <span className="text-2xl font-bold font-mono text-coder-black">AP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-coder-gray-900 dark:text-coder-gray-100">
            <span className="terminal-prompt font-mono">Hi, I'm</span> <span className="code-bracket">Aachal Pardeshi</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Developer, Content Creator, and Tech Enthusiast helping fellow coders navigate the ever-evolving world of technology.
          </p>
        </section>

        {/* My Mission */}
        <section className="mb-16">
          <div className="terminal-box p-8 text-center">
            <h2 className="text-2xl font-display font-semibold mb-6 code-bracket text-coder-gray-100">My Mission</h2>
            <p className="text-xl text-coder-gray-300 font-mono">
              "To simplify tech & help coders grow faster."
            </p>
          </div>
        </section>

        {/* My Journey */}
        <section className="mb-16">
          <h2 className="section-header text-center terminal-prompt font-mono">My Journey</h2>
          <div className="max-w-3xl mx-auto card p-8">
            <p className="text-base text-muted mb-6 leading-relaxed">
              My coding journey began with curiosity and a laptop. What started as simple HTML pages evolved into a passion for creating digital solutions that make a difference.
            </p>
            <p className="text-base text-muted mb-6 leading-relaxed">
              TheCodeStation was born from my desire to simplify the complex world of technology. I believe that with the right resources, guidance, and community, every developer can achieve their goals faster.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Today, I create content that bridges the gap between cutting-edge technology and practical implementation, helping thousands of developers stay ahead in their careers.
            </p>
          </div>
        </section>

        {/* Past Collaborations */}
        <section className="mb-16">
          <h2 className="section-header text-center code-bracket font-display">Past Collaborations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {collaborations.map((brand, index) => (
              <div key={index} className="card p-4 text-center">
                <div className="h-12 bg-coder-yellow/10 border border-coder-yellow/20 flex items-center justify-center mb-2">
                  <span className="font-mono text-xs text-coder-yellow">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects I've Built */}
        <section className="mb-16">
          <h2 className="section-header text-center terminal-prompt font-mono">Projects I've Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="card p-6">
                <div className="h-32 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center mb-4">
                  <span className="text-coder-black font-mono text-sm font-medium">Screenshot</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="tag">
                    {project.category}
                  </span>
                  <div className="flex items-center text-muted text-xs">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.time}
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-coder-gray-900 dark:text-coder-gray-100">{project.title}</h3>
                <p className="text-muted mb-4 text-sm">{project.description}</p>
                <div className="flex gap-3">
                  {project.links.live && (
                    <a href={project.links.live} className="btn-primary text-xs">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="btn-secondary text-xs">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.links.case && (
                    <a href={project.links.case} className="btn-secondary text-xs">
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
          <h2 className="section-header terminal-prompt font-mono">Ready to Work Together?</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Whether you need development services, content creation, or mentorship, I'm here to help you achieve your goals.
          </p>
          <Link
            to="/services"
            className="btn-primary inline-flex items-center"
          >
            <ArrowRight className="ml-2 h-5 w-5" />
            View My Services
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;