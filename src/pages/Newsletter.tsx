import React, { useState } from 'react';
import { Mail, CheckCircle, Zap, Code, Briefcase, Target } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
  };

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Latest AI Tools',
      description: 'Discover cutting-edge AI tools that boost your productivity',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Coding Tips & Tricks',
      description: 'Weekly coding insights and best practices from the trenches',
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Freelance Opportunities',
      description: 'Curated list of high-paying freelance gigs and projects',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Productivity Hacks',
      description: 'Proven strategies to optimize your workflow and time',
    },
  ];

  if (isSubscribed) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-8" />
            <h1 className="text-4xl font-bold mb-4">Welcome to TheCodeStation Newsletter! 🎉</h1>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for subscribing! Check your email for a confirmation link and your free coding vault access.
            </p>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
              <ul className="text-left space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Check your email for the welcome message
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Download your free coding vault
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Get your first newsletter this Friday
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <Mail className="h-16 w-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">One Email. Every Week. All You Need.</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of developers who get the best AI tools, coding tips, freelance opportunities, and productivity hacks delivered straight to their inbox.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">What You'll Get Every Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                <div className="flex items-start">
                  <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400 mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Preview of Last Week's Issue</h2>
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8">
            <div className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-xl font-semibold mb-4">🚀 TheCodeStation Weekly #47</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">🤖 AI Tool of the Week</h4>
                  <p>Cursor AI - The AI-first code editor that's changing how we write code. Get 50% off with code EARLY50.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">💡 Coding Tip</h4>
                  <p>Master React Server Components: A complete guide to the new paradigm with practical examples.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">💼 Freelance Gigs</h4>
                  <p>3 high-paying React developer positions ($80-120/hr) and a cool AI startup looking for frontend talent.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">⚡ Productivity Hack</h4>
                  <p>The Pomodoro Technique + AI: How I increased my coding productivity by 300% using smart breaks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8">
              <p className="text-xl italic mb-6">
                "Aachal's newsletter has been a game-changer for my career. The AI tools she recommends have saved me hours every week, and I landed two freelance projects through her recommendations!"
              </p>
              <div>
                <p className="font-semibold">- Sarah Chen</p>
                <p className="text-purple-300">Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join 10,000+ Developers</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get instant access to the coding vault plus weekly insights that actually matter.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get Instant Access
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Free forever. Unsubscribe anytime. No spam, ever. 🚫
              </p>
            </form>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="bg-slate-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">10,000+</div>
                <div className="text-gray-300">Active Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">47</div>
                <div className="text-gray-300">Weekly Issues Sent</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Open Rate</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;