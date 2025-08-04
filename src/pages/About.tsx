import React from 'react';
import { ArrowRight, Award, Users, Zap, ExternalLink, Github, Calendar, Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Followers', value: '25K+' },
    { label: 'Projects', value: '50+' },
    { label: 'Blog Posts', value: '100+' }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: 'GitHub', href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Instagram className="h-5 w-5" />, label: 'Instagram', href: '#' },
    { icon: <Youtube className="h-5 w-5" />, label: 'YouTube', href: '#' },
    { icon: <Mail className="h-5 w-5" />, label: 'Newsletter', href: '/newsletter' }
  ];

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
        {/* Hero Section */}
        <section className="mb-16">
          <div className="card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Profile Image */}
              <div className="lg:col-span-1 text-center">
                <div className="w-48 h-48 bg-coder-yellow mx-auto mb-6 flex items-center justify-center shadow-soft rounded-3xl">
                  <span className="text-6xl font-bold font-mono text-coder-black">AP</span>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center gap-3 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow hover:bg-coder-yellow hover:text-coder-black transition-all duration-300 rounded-xl"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bio & Stats */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
                  Hi, I'm <span className="text-coder-yellow">Aachal Pardeshi</span>
                </h1>
                <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 font-mono leading-relaxed">
                  Developer, Content Creator, and Tech Enthusiast helping fellow coders navigate the ever-evolving world of technology. I create content that bridges the gap between cutting-edge technology and practical implementation.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold font-mono text-coder-yellow mb-2">{stat.value}</div>
                      <div className="text-sm font-mono text-coder-gray-600 dark:text-coder-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <div className="card p-8 text-center">
            <h2 className="text-3xl font-bold font-mono mb-6 text-coder-yellow">My Mission</h2>
            <p className="text-2xl text-coder-gray-700 dark:text-coder-yellow/90 font-mono">
              "To simplify tech & help coders grow faster."
            </p>
          </div>
        </section>

        {/* Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center text-coder-yellow">My Journey</h2>
          <div className="card p-8">
            <div className="space-y-6 text-lg font-mono leading-relaxed">
              <p className="text-coder-gray-700 dark:text-coder-yellow/80">
                My coding journey began with curiosity and a laptop. What started as simple HTML pages evolved into a passion for creating digital solutions that make a difference.
              </p>
              <p className="text-coder-gray-600 dark:text-coder-gray-400">
                TheCodeStation was born from my desire to simplify the complex world of technology. I believe that with the right resources, guidance, and community, every developer can achieve their goals faster.
              </p>
              <p className="text-coder-gray-600 dark:text-coder-gray-400">
                Today, I create content that bridges the gap between cutting-edge technology and practical implementation, helping thousands of developers stay ahead in their careers.
              </p>
            </div>
          </div>
        </section>

        {/* About Creator */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center text-coder-yellow">About the Creator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow mr-4 rounded-xl">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold font-mono text-coder-black dark:text-coder-white">Experience</h3>
              </div>
              <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">
                5+ years in web development, specializing in React, TypeScript, and modern web technologies.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow mr-4 rounded-xl">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold font-mono text-coder-black dark:text-coder-white">Community</h3>
              </div>
              <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">
                Building a community of 25K+ developers across YouTube, Instagram, and newsletter subscribers.
              </p>
            </div>
          </div>
        </section>

        {/* Past Collaborations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center text-coder-yellow">Past Collaborations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {collaborations.map((brand, index) => (
              <div key={index} className="card p-4 text-center">
                <div className="h-16 bg-coder-yellow/20 border border-coder-yellow/30 flex items-center justify-center mb-2 rounded-xl">
                  <span className="font-mono text-sm text-coder-yellow">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center text-coder-yellow">Projects I've Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card p-6">
                <div className="h-40 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center mb-4 rounded-xl">
                  <span className="text-coder-black font-mono font-semibold">Screenshot</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-coder-yellow/20 text-coder-yellow border border-coder-yellow/30 text-sm font-mono rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.time}
                  </div>
                </div>
                <h3 className="text-xl font-semibold font-mono mb-2 text-coder-black dark:text-coder-white">{project.title}</h3>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-4 font-mono text-sm">{project.description}</p>
                <div className="flex gap-2">
                  {project.links.live && (
                    <a href={project.links.live} className="flex items-center px-3 py-2 bg-coder-yellow text-coder-black font-mono text-sm transition-all duration-300 hover:shadow-glow rounded-xl">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="flex items-center px-3 py-2 bg-transparent border border-coder-yellow/30 text-coder-yellow font-mono text-sm transition-all duration-300 hover:bg-coder-yellow hover:text-coder-black rounded-xl">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.links.case && (
                    <a href={project.links.case} className="flex items-center px-3 py-2 bg-transparent border border-coder-yellow/30 text-coder-yellow font-mono text-sm transition-all duration-300 hover:bg-coder-yellow hover:text-coder-black rounded-xl">
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
          <div className="card p-8">
            <h2 className="text-3xl font-bold font-mono mb-6 text-coder-yellow">Ready to Work Together?</h2>
            <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono">
              Whether you need development services, content creation, or mentorship, I'm here to help you achieve your goals.
            </p>
            <Link
              to="/services"
              className="btn-primary inline-flex items-center"
            >
              View My Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;