import React from 'react';
import { ArrowRight, Award, Users, Zap, ExternalLink, Github, Calendar, Terminal } from 'lucide-react';
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
    <div className="py-16 bg-terminal-black light:bg-terminal-white animate-fade-in">
      <div className="container-content">
        {/* Terminal Header */}
        <section className="text-center mb-16">
          <div className="terminal-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-terminal-red"></div>
                <div className="w-3 h-3 bg-terminal-yellow"></div>
                <div className="w-3 h-3 bg-terminal-green"></div>
              </div>
              <div className="ml-4 text-terminal-white/50 font-mono text-sm">about.sh</div>
            </div>
            
            <div className="text-left">
              <div className="font-mono text-sm mb-4">
                <span className="text-terminal-blue">~/thecodestation</span> 
                <span className="text-terminal-green"> $ </span>
                <span className="text-terminal-white">cat about.txt</span>
              </div>
              
              <div className="w-20 h-20 bg-terminal-yellow flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-xl font-bold font-mono text-terminal-black">AP</span>
              </div>
              
              <h1 className="text-3xl font-mono font-bold mb-4 text-terminal-white light:text-terminal-black">
                <span className="text-terminal-green">></span> Hi, I'm <span className="code-bracket">Aachal Pardeshi</span>
              </h1>
              <p className="text-lg text-muted font-mono">
                Developer, Content Creator, and Tech Enthusiast helping fellow coders navigate the ever-evolving world of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <h2 className="section-header code-bracket">My Mission</h2>
            <div className="font-mono text-xl text-terminal-yellow mb-4">
              "To simplify tech & help coders grow faster."
            </div>
            <div className="text-terminal-green font-mono text-sm">
              <span className="terminal-prompt">mission_status: active</span>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="mb-16">
          <h2 className="section-header text-center terminal-prompt">My Journey</h2>
          <div className="max-w-3xl mx-auto terminal-card p-8">
            <div className="space-y-6 font-mono text-sm">
              <div>
                <span className="text-terminal-green">></span> 
                <span className="text-muted ml-2">My coding journey began with curiosity and a laptop. What started as simple HTML pages evolved into a passion for creating digital solutions that make a difference.</span>
              </div>
              <div>
                <span className="text-terminal-blue">></span> 
                <span className="text-muted ml-2">TheCodeStation was born from my desire to simplify the complex world of technology. I believe that with the right resources, guidance, and community, every developer can achieve their goals faster.</span>
              </div>
              <div>
                <span className="text-terminal-yellow">></span> 
                <span className="text-muted ml-2">Today, I create content that bridges the gap between cutting-edge technology and practical implementation, helping thousands of developers stay ahead in their careers.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborations */}
        <section className="mb-16">
          <h2 className="section-header text-center code-bracket">Past Collaborations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {collaborations.map((brand, index) => (
              <div key={index} className="terminal-card p-4 text-center group">
                <div className="h-12 bg-terminal-yellow/10 border border-terminal-yellow/20 flex items-center justify-center mb-2 group-hover:bg-terminal-yellow/20 transition-all duration-300">
                  <span className="font-mono text-xs text-terminal-yellow">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="section-header text-center terminal-prompt">Projects I've Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="terminal-card p-6 group">
                <div className="h-32 bg-gradient-to-br from-terminal-yellow to-terminal-blue flex items-center justify-center mb-4">
                  <span className="text-terminal-black font-mono text-sm font-medium">Screenshot</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="terminal-tag">
                    {project.category}
                  </span>
                  <div className="flex items-center text-muted text-xs font-mono">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.time}
                  </div>
                </div>
                <h3 className="text-lg font-mono font-bold mb-2 text-terminal-white light:text-terminal-black">{project.title}</h3>
                <p className="text-muted mb-4 text-sm font-mono">{project.description}</p>
                <div className="flex gap-3">
                  {project.links.live && (
                    <a href={project.links.live} className="terminal-button-outline text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Live
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="terminal-button-outline text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  )}
                  {project.links.case && (
                    <a href={project.links.case} className="terminal-button-outline text-xs">
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
          <div className="terminal-card p-8 max-w-2xl mx-auto">
            <h2 className="section-header terminal-prompt">Ready to Work Together?</h2>
            <p className="text-lg text-muted mb-8 font-mono">
              Whether you need development services, content creation, or mentorship, I'm here to help you achieve your goals.
            </p>
            <Link
              to="/services"
              className="terminal-button inline-flex items-center"
            >
              View My Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;