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
      <div className="py-16 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-24 w-24 text-coder-yellow mx-auto mb-8" />
            <h1 className="text-4xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
              <span className="bracket-highlight">Welcome to</span> <span className="terminal-prompt">TheCodeStation Newsletter!</span> 🎉
            </h1>
            <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 font-mono">
              Thank you for subscribing! Check your email for a confirmation link and your free coding vault access.
            </p>
            <div className="card p-6">
              <h3 className="text-lg font-semibold font-mono mb-4 terminal-prompt">What happens next?</h3>
              <ul className="text-left space-y-3 text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-coder-yellow mr-3"></span>
                  Check your email for the welcome message
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-coder-yellow mr-3"></span>
                  Download your free coding vault
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-coder-yellow mr-3"></span>
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
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16 animate-on-scroll">
          <Mail className="h-16 w-16 text-coder-yellow mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="bracket-highlight">One Email. Every Week.</span> <span className="terminal-prompt">All You Need.</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Join thousands of developers who get the best AI tools, coding tips, freelance opportunities, and productivity hacks delivered straight to their inbox.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center terminal-prompt">What You'll Get Every Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-mono mb-2 text-coder-black dark:text-coder-white bracket-highlight">{benefit.title}</h3>
                    <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center bracket-highlight">Preview of Last Week's Issue</h2>
          <div className="max-w-4xl mx-auto card p-8">
            <div className="border-l-4 border-coder-yellow pl-6">
              <h3 className="text-xl font-semibold font-mono mb-4 text-coder-black dark:text-coder-white terminal-prompt">TheCodeStation Weekly #47</h3>
              <div className="space-y-4 text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt">AI Tool of the Week</h4>
                  <p>Cursor AI - The AI-first code editor that's changing how we write code. Get 50% off with code EARLY50.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt">Coding Tip</h4>
                  <p>Master React Server Components: A complete guide to the new paradigm with practical examples.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt">Freelance Gigs</h4>
                  <p>3 high-paying React developer positions ($80-120/hr) and a cool AI startup looking for frontend talent.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt">Productivity Hack</h4>
                  <p>The Pomodoro Technique + AI: How I increased my coding productivity by 300% using smart breaks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-8">
              <p className="text-xl italic mb-6 text-coder-gray-600 dark:text-coder-gray-400 font-mono">
                "Aachal's newsletter has been a game-changer for my career. The AI tools she recommends have saved me hours every week, and I landed two freelance projects through her recommendations!"
              </p>
              <div>
                <p className="font-semibold font-mono text-coder-black dark:text-coder-white">- Sarah Chen</p>
                <p className="text-coder-yellow font-mono text-sm">Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-mono mb-6 bracket-highlight">Join 10,000+ Developers</h2>
            <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 font-mono">
              Get instant access to the coding vault plus weekly insights that actually matter.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="input-field flex-1"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get Instant Access
                </button>
              </div>
              <p className="text-sm text-coder-gray-600 dark:text-coder-gray-400 font-mono">
                Free forever. Unsubscribe anytime. No spam, ever. 🚫
              </p>
            </form>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold font-mono text-coder-yellow mb-2">10,000+</div>
                <div className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">Active Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-coder-yellow mb-2">47</div>
                <div className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">Weekly Issues Sent</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-coder-yellow mb-2">95%</div>
                <div className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">Open Rate</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;