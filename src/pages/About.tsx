import React from 'react';
import { ArrowRight, Award, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-on-scroll">
          <div className="w-32 h-32 bg-coder-yellow mx-auto mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold font-mono text-coder-black">AP</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="terminal-prompt">Hi, I'm</span> <span className="bracket-highlight">Aachal Pardeshi</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Developer, Content Creator, and Tech Enthusiast helping fellow coders navigate the ever-evolving world of technology.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-mono mb-8 text-center bracket-highlight">My Journey</h2>
            <div className="card p-8 md:p-12">
              <p className="text-lg text-coder-gray-600 dark:text-coder-gray-400 mb-6 leading-relaxed font-mono">
                My coding journey began with curiosity and a laptop. What started as simple HTML pages evolved into a passion for creating digital solutions that make a difference. Through years of learning, building, and sharing, I discovered my true calling: helping other developers accelerate their growth.
              </p>
              <p className="text-lg text-coder-gray-600 dark:text-coder-gray-400 mb-6 leading-relaxed font-mono">
                TheCodeStation was born from my desire to simplify the complex world of technology. I believe that with the right resources, guidance, and community, every developer can achieve their goals faster and more efficiently.
              </p>
              <p className="text-lg text-coder-gray-600 dark:text-coder-gray-400 leading-relaxed font-mono">
                Today, I create content that bridges the gap between cutting-edge technology and practical implementation, helping thousands of developers stay ahead in their careers.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center terminal-prompt">Achievements & Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <Award className="h-12 w-12 text-coder-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-mono mb-2 text-coder-yellow">10K+</h3>
              <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono">Developers Helped</p>
            </div>
            <div className="card p-6 text-center">
              <Users className="h-12 w-12 text-coder-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-mono mb-2 text-coder-yellow">50+</h3>
              <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono">Brand Collaborations</p>
            </div>
            <div className="card p-6 text-center">
              <Zap className="h-12 w-12 text-coder-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-mono mb-2 text-coder-yellow">100+</h3>
              <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono">Projects Delivered</p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold font-mono mb-6 bracket-highlight">My Mission</h2>
            <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto mb-8 font-mono">
              "To simplify technology and help developers grow faster by providing actionable insights, practical tools, and a supportive community."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div>
                <h4 className="font-semibold font-mono mb-2 text-coder-yellow terminal-prompt">Focus Areas</h4>
                <ul className="text-coder-gray-600 dark:text-coder-gray-400 space-y-1 font-mono text-sm">
                  <li className="terminal-prompt">AI-powered development tools</li>
                  <li className="terminal-prompt">Modern web technologies</li>
                  <li className="terminal-prompt">Career growth strategies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold font-mono mb-2 text-coder-yellow terminal-prompt">Core Values</h4>
                <ul className="text-coder-gray-600 dark:text-coder-gray-400 space-y-1 font-mono text-sm">
                  <li className="terminal-prompt">Continuous learning</li>
                  <li className="terminal-prompt">Community support</li>
                  <li className="terminal-prompt">Practical implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold font-mono mb-6 terminal-prompt">Ready to Work Together?</h2>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono">
            Whether you need content creation, development services, or mentorship, I'm here to help you achieve your goals.
          </p>
          <Link
            to="/services"
            className="btn-primary"
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