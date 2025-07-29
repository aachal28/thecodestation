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
              Thank you for subscribing! Check your email for confirmation and your free vault access.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <Mail className="h-16 w-16 text-coder-yellow mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="bracket-highlight">One Weekly Email.</span> <span className="terminal-prompt">Everything You Need.</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Tools, project ideas, cheat sheets, coding tips delivered straight to your inbox.
          </p>
        </section>

        {/* What's Inside */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center terminal-prompt">What's Inside</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="h-6 w-6" />, title: 'Latest Tools', desc: 'Cutting-edge developer tools' },
              { icon: <Code className="h-6 w-6" />, title: 'Coding Tips', desc: 'Weekly insights and tricks' },
              { icon: <Briefcase className="h-6 w-6" />, title: 'Project Ideas', desc: 'Build your portfolio' },
              { icon: <Target className="h-6 w-6" />, title: 'Cheat Sheets', desc: 'Quick reference guides' },
            ].map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="p-3 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow mx-auto mb-4 w-fit rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold font-mono mb-2 text-coder-black dark:text-coder-white bracket-highlight">{item.title}</h3>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8 text-center bracket-highlight">Preview of Last Issue</h2>
          <div className="max-w-4xl mx-auto card p-8">
            <div className="border-l-4 border-coder-yellow pl-6">
              <h3 className="text-xl font-semibold font-mono mb-4 text-coder-black dark:text-coder-white terminal-prompt">TheCodeStation Weekly #47</h3>
              <div className="space-y-4 text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt">Tool of the Week</h4>
                  <p>Cursor AI - The AI-first code editor that's changing how we write code.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt">Coding Tip</h4>
                  <p>Master React Server Components with practical examples and best practices.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt">Project Idea</h4>
                  <p>Build a real-time chat app using WebSockets and React - complete tutorial included.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto text-center bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold font-mono mb-6 bracket-highlight">Join the Free Vault</h2>
            <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 font-mono">
              Get instant access to exclusive resources plus weekly insights that actually matter.
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
                  Get Access
                </button>
              </div>
              <p className="text-sm text-coder-gray-600 dark:text-coder-gray-400 font-mono">
                Free forever. Unsubscribe anytime. No spam, ever. 🚫
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;