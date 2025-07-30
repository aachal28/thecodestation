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
    <div className="bg-dev-black text-dev-white animate-fade-in">
      <div className="container-dev section-spacing">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="heading-primary">
            <span className="text-dev-white">Let's Build or</span> <span className="text-dev-yellow">Grow Together</span> 💼
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto font-mono">
            Professional services to help you build, grow, and succeed in the digital world.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="dev-card">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-dev-yellow/10 border border-dev-yellow/20 text-dev-yellow mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-mono text-dev-white">{service.title}</h3>
                </div>
                
                <p className="text-muted mb-8 text-lg font-mono">{service.description}</p>
                
                <button className="btn-primary w-full">
                  <Calendar className="mr-2 h-5 w-5" />
                  {service.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="heading-secondary text-center">
            <span className="text-dev-yellow">></span> How We Work Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We discuss your needs and goals' },
              { step: '02', title: 'Planning', desc: 'I create a customized strategy' },
              { step: '03', title: 'Execution', desc: 'We bring your vision to life' },
              { step: '04', title: 'Delivery', desc: 'You receive exceptional results' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-dev-yellow flex items-center justify-center text-dev-black font-mono font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold font-mono mb-2 text-dev-white">{item.title}</h4>
                <p className="text-muted text-sm font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center terminal-box p-12 pl-12">
          <h2 className="text-2xl font-bold font-mono mb-4 text-dev-yellow">$ start-project</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto font-mono">
            Let's discuss how we can work together to achieve your goals. Book a free consultation call today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Book Free Consultation</button>
            <button className="btn-secondary">Send a Message</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;