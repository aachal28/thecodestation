import React from 'react';
import { Video, Code, GraduationCap, Handshake, ArrowRight, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Content Creation',
      description: 'Engaging Instagram reels, carousels, and AI tool reviews that resonate with your developer audience.',
      deliverables: [
        'Custom Instagram reels and carousels',
        'AI tool reviews and comparisons',
        'Educational coding content',
        'Brand collaboration posts',
      ],
      cta: 'Book a Call',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Programming Services',
      description: 'Professional web development services including landing pages, portfolios, and custom applications.',
      deliverables: [
        'Responsive landing pages',
        'Developer portfolios',
        'Custom web applications',
        'UI/UX design implementation',
      ],
      cta: 'Get Quote',
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: '1:1 Mentorship',
      description: 'Personalized guidance for career growth, coding skills, and content creation strategies.',
      deliverables: [
        'Career roadmap planning',
        'Code review sessions',
        'Content strategy development',
        'Interview preparation',
      ],
      cta: 'Schedule Session',
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Sponsorships',
      description: 'Strategic partnerships and sponsored content for developer tools, platforms, and educational courses.',
      deliverables: [
        'Sponsored content creation',
        'Product reviews and demos',
        'Brand partnership campaigns',
        'Event collaborations',
      ],
      cta: 'Partner With Me',
    },
  ];

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="terminal-prompt">Let's Build or</span> <span className="bracket-highlight">Grow Together</span> 💼
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Whether you need content creation, development services, mentorship, or partnership opportunities, I'm here to help you achieve your goals.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-coder-black dark:text-coder-white bracket-highlight">{service.title}</h3>
                </div>
                
                <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-6 text-lg font-mono">{service.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold font-mono mb-4 text-coder-yellow terminal-prompt">What You Get</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">
                        <ArrowRight className="h-4 w-4 text-coder-yellow mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
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
              { step: '01', title: 'Discovery Call', desc: 'We discuss your needs and goals' },
              { step: '02', title: 'Proposal', desc: 'I create a customized plan for you' },
              { step: '03', title: 'Execution', desc: 'We bring your vision to life' },
              { step: '04', title: 'Delivery', desc: 'You receive exceptional results' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-coder-yellow flex items-center justify-center text-coder-black font-mono font-bold text-xl mx-auto mb-4 border border-coder-yellow">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold font-mono mb-2 text-coder-black dark:text-coder-white">{item.title}</h4>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center bracket-highlight">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Chen',
                role: 'Frontend Developer',
                content: 'Aachal helped me land my dream job with her mentorship program. Her guidance was invaluable!',
              },
              {
                name: 'Mike Rodriguez',
                role: 'Startup Founder',
                content: 'The landing page she built increased our conversions by 300%. Highly recommend her services!',
              },
              {
                name: 'Tech Startup',
                role: 'Brand Partnership',
                content: 'Our collaboration with Aachal brought excellent engagement and quality leads to our platform.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="card p-6">
                <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-4 italic font-mono text-sm">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold font-mono text-coder-black dark:text-coder-white">{testimonial.name}</p>
                  <p className="text-coder-yellow text-sm font-mono">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-12">
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