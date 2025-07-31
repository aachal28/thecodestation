import React from 'react';
import { Palette, Code, Zap, Share2, PenTool, Calendar, Terminal } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'UI/UX Design',
      description: 'Modern, user-friendly interfaces that convert visitors into customers.',
      category: 'design',
      cta: 'Book a Call',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies and best practices.',
      category: 'development',
      cta: 'Book a Call',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'No-code Web Builds',
      description: 'Fast, professional websites using no-code tools and platforms.',
      category: 'no-code',
      cta: 'Book a Call',
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: 'Social Media Management',
      description: 'Strategic content creation and management for your brand.',
      category: 'marketing',
      cta: 'Book a Call',
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: 'Content Creation for Brands',
      description: 'Engaging content that resonates with your developer audience.',
      category: 'content',
      cta: 'Book a Call',
    },
  ];

  const categories = [
    { id: 'design', name: 'UI/UX', color: 'terminal-yellow' },
    { id: 'development', name: 'Web Dev', color: 'terminal-blue' },
    { id: 'no-code', name: 'No-Code', color: 'terminal-green' },
    { id: 'marketing', name: 'Marketing', color: 'terminal-red' },
    { id: 'content', name: 'Content', color: 'terminal-purple' },
  ];

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
              <div className="ml-4 text-terminal-white/50 font-mono text-sm">services.json</div>
            </div>
            
            <div className="text-left">
              <div className="font-mono text-sm mb-4">
                <span className="text-terminal-blue">~/thecodestation</span> 
                <span className="text-terminal-green"> $ </span>
                <span className="text-terminal-white">ls services/</span>
              </div>
              <h1 className="text-3xl font-mono font-bold mb-4 text-terminal-white light:text-terminal-black">
                <span className="terminal-prompt">Let's Build or</span> <span className="code-bracket">Grow Together</span> 💼
              </h1>
              <p className="text-lg text-muted font-mono">
                Professional services to help you build, grow, and succeed in the digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <div key={category.id} className={`terminal-tag bg-${category.color}/20 text-${category.color} border-${category.color}/30`}>
                <span className="terminal-prompt">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="terminal-card p-6 group">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-terminal-yellow/20 border border-terminal-yellow/30 flex items-center justify-center mr-4 group-hover:bg-terminal-yellow/30 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-mono font-bold text-terminal-white light:text-terminal-black">{service.title}</h3>
                </div>
                
                <p className="text-muted mb-6 text-sm font-mono">{service.description}</p>
                
                <button className="terminal-button w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  {service.cta}
                </button>
                
                <div className="mt-3 text-terminal-yellow font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="terminal-prompt">service --category={service.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="section-header text-center terminal-prompt">How We Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We discuss your needs and goals', color: 'terminal-yellow' },
              { step: '02', title: 'Planning', desc: 'I create a customized strategy', color: 'terminal-blue' },
              { step: '03', title: 'Execution', desc: 'We bring your vision to life', color: 'terminal-green' },
              { step: '04', title: 'Delivery', desc: 'You receive exceptional results', color: 'terminal-red' },
            ].map((item, index) => (
              <div key={index} className="terminal-card p-6 text-center group">
                <div className={`w-12 h-12 bg-${item.color} flex items-center justify-center text-terminal-black font-mono font-bold text-lg mx-auto mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  {item.step}
                </div>
                <h4 className="text-base font-mono font-bold mb-2 text-terminal-white light:text-terminal-black">{item.title}</h4>
                <p className="text-muted text-sm font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <Terminal className="h-12 w-12 text-terminal-yellow mx-auto mb-6" />
            <h2 className="text-2xl font-mono font-bold mb-4 terminal-prompt text-terminal-white light:text-terminal-black">Ready to Get Started?</h2>
            <p className="text-lg text-muted mb-8 font-mono">
              Let's discuss how we can work together to achieve your goals. Book a free consultation call today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="terminal-button">
                Book Free Consultation
              </button>
              <button className="terminal-button-outline">
                Send a Message
              </button>
            </div>
            <div className="mt-4 text-terminal-green font-mono text-sm">
              <span className="terminal-prompt">status: ready_to_collaborate</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;