import React from 'react';
import { Palette, Code, Zap, Share2, PenTool, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'Modern, user-friendly interfaces that convert visitors into customers.',
      cta: 'Book a Call',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies and best practices.',
      cta: 'Book a Call',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'No-code Web Builds',
      description: 'Fast, professional websites using no-code tools and platforms.',
      cta: 'Book a Call',
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'Social Media Management',
      description: 'Strategic content creation and management for your brand.',
      cta: 'Book a Call',
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Content Creation for Brands',
      description: 'Engaging content that resonates with your developer audience.',
      cta: 'Book a Call',
    },
  ];

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="terminal-prompt">Let's Build or</span> <span className="bracket-highlight">Grow Together</span> 💼
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Professional services to help you build, grow, and succeed in the digital world.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="terminal-box">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <div className="terminal-dot red"></div>
                    <div className="terminal-dot yellow"></div>
                    <div className="terminal-dot green"></div>
                  </div>
                  <span className="terminal-path">~/services/{service.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.sh</span>
                </div>
                <div className="card-header mb-6">
                  <div className="flex items-center">
                    <div className="icon-container mr-4">
                      {service.icon}
                    </div>
                    <h3 className="card-title bracket-highlight">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-coder-yellow/80 mb-8 text-lg font-mono leading-7">{service.description}</p>
                
                <button className="btn-primary w-full flex items-center justify-center h-12">
                  <Calendar className="mr-2 h-5 w-5" />
                  {service.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center terminal-prompt leading-10">How We Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We discuss your needs and goals' },
              { step: '02', title: 'Planning', desc: 'I create a customized strategy' },
              { step: '03', title: 'Execution', desc: 'We bring your vision to life' },
              { step: '04', title: 'Delivery', desc: 'You receive exceptional results' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-coder-yellow flex items-center justify-center text-coder-black font-mono font-bold text-xl mx-auto mb-6 border border-coder-yellow rounded-2xl">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold font-mono mb-4 text-coder-black dark:text-coder-white leading-7">{item.title}</h4>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-mono text-coder-black dark:text-coder-white bracket-highlight">{service.title}</h3>
                </div>
                
                <p className="text-coder-yellow/80 mb-8 text-lg font-mono">{service.description}</p>
                
                <button className="btn-primary w-full flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  {service.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center terminal-prompt">How We Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We discuss your needs and goals' },
              { step: '02', title: 'Planning', desc: 'I create a customized strategy' },
              { step: '03', title: 'Execution', desc: 'We bring your vision to life' },
              { step: '04', title: 'Delivery', desc: 'You receive exceptional results' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-coder-yellow flex items-center justify-center text-coder-black font-mono font-bold text-xl mx-auto mb-4 border border-coder-yellow rounded-2xl">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold font-mono mb-2 text-coder-black dark:text-coder-white">{item.title}</h4>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold font-mono mb-4 terminal-prompt">Ready to Get Started?</h2>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono">
            Let's discuss how we can work together to achieve your goals. Book a free consultation call today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Book Free Consultation
            </button>
            <button className="btn-secondary">
              Send a Message
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;