import React from 'react';
import { ArrowRight, Award, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">AP</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm Aachal Pardeshi</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Developer, Content Creator, and Tech Enthusiast helping fellow coders navigate the ever-evolving world of technology.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
            <div className="bg-slate-800 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My coding journey began with curiosity and a laptop. What started as simple HTML pages evolved into a passion for creating digital solutions that make a difference. Through years of learning, building, and sharing, I discovered my true calling: helping other developers accelerate their growth.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                TheCodeStation was born from my desire to simplify the complex world of technology. I believe that with the right resources, guidance, and community, every developer can achieve their goals faster and more efficiently.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, I create content that bridges the gap between cutting-edge technology and practical implementation, helping thousands of developers stay ahead in their careers.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements & Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">10K+</h3>
              <p className="text-gray-300">Developers Helped</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-gray-300">Brand Collaborations</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">My Mission</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              "To simplify technology and help developers grow faster by providing actionable insights, practical tools, and a supportive community."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">🎯 Focus Areas</h4>
                <ul className="text-gray-200 space-y-1">
                  <li>• AI-powered development tools</li>
                  <li>• Modern web technologies</li>
                  <li>• Career growth strategies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💡 Core Values</h4>
                <ul className="text-gray-200 space-y-1">
                  <li>• Continuous learning</li>
                  <li>• Community support</li>
                  <li>• Practical implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need content creation, development services, or mentorship, I'm here to help you achieve your goals.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
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