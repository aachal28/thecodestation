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
    <div className="py-16 bg-white dark:bg-coder-black animate-fade-in">
      <div className="container-content">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-coder-gray-900 dark:text-coder-gray-100">
            <span className="terminal-prompt font-mono">Let's Build or</span> <span className="code-bracket">Grow Together</span> 💼
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Professional services to help you build, grow, and succeed in the digital world.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-6">
                  <div className="icon-box mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-coder-gray-900 dark:text-coder-gray-100">{service.title}</h3>
                </div>
                
                <p className="text-muted mb-6 text-sm">{service.description}</p>
                
                <button className="btn-primary w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  {service.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="section-header text-center terminal-prompt font-mono">How We Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Discovery', desc: 'We discuss your needs and goals' },
              { step: '02', title: 'Planning', desc: 'I create a customized strategy' },
              { step: '03', title: 'Execution', desc: 'We bring your vision to life' },
              { step: '04', title: 'Delivery', desc: 'You receive exceptional results' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-coder-yellow flex items-center justify-center text-coder-black font-mono font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-base font-display font-semibold mb-2 text-coder-gray-900 dark:text-coder-gray-100">{item.title}</h4>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="terminal-box p-8 text-center">
          <h2 className="text-2xl font-display font-semibold mb-4 terminal-prompt text-coder-gray-100">Ready to Get Started?</h2>
          <p className="text-lg text-coder-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to achieve your goals. Book a free consultation call today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="btn-primary">
              Book Free Consultation
            </button>
            <button className="btn-secondary bg-transparent border-coder-gray-600 text-coder-gray-300 hover:border-coder-yellow hover:text-coder-yellow">
              Send a Message
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;