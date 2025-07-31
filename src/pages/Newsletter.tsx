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
      <div className="py-16 bg-white dark:bg-coder-black animate-fade-in">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-coder-yellow mx-auto mb-6" />
            <h1 className="text-3xl font-display font-bold mb-4 text-coder-gray-900 dark:text-coder-gray-100">
              <span className="code-bracket">Welcome to</span> <span className="terminal-prompt font-mono">TheCodeStation Newsletter!</span> 🎉
            </h1>
            <p className="text-lg text-muted mb-8">
              Thank you for subscribing! Check your email for confirmation and your free vault access.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white dark:bg-coder-black animate-fade-in">
      <div className="container-content">
        {/* Header */}
        <section className="text-center mb-16">
          <Mail className="h-12 w-12 text-coder-yellow mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-coder-gray-900 dark:text-coder-gray-100">
            <span className="code-bracket">One Weekly Email.</span> <span className="terminal-prompt font-mono">Everything You Need.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Tools, project ideas, cheat sheets, coding tips delivered straight to your inbox.
          </p>
        </section>

        {/* What's Inside */}
        <section className="mb-16">
          <h2 className="section-header text-center terminal-prompt font-mono">What's Inside</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="h-6 w-6" />, title: 'Latest Tools', desc: 'Cutting-edge developer tools' },
              { icon: <Code className="h-6 w-6" />, title: 'Coding Tips', desc: 'Weekly insights and tricks' },
              { icon: <Briefcase className="h-6 w-6" />, title: 'Project Ideas', desc: 'Build your portfolio' },
              { icon: <Target className="h-6 w-6" />, title: 'Cheat Sheets', desc: 'Quick reference guides' },
            ].map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="icon-box mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-display font-semibold mb-2 text-coder-gray-900 dark:text-coder-gray-100">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preview */}
        <section className="mb-16">
          <h2 className="section-header text-center code-bracket font-display">Preview of Last Issue</h2>
          <div className="max-w-3xl mx-auto card p-8">
            <div className="border-l-2 border-coder-yellow pl-6">
              <h3 className="text-lg font-display font-semibold mb-4 text-coder-gray-900 dark:text-coder-gray-100 terminal-prompt">TheCodeStation Weekly #47</h3>
              <div className="space-y-4 text-muted text-sm">
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt font-mono">Tool of the Week</h4>
                  <p>Cursor AI - The AI-first code editor that's changing how we write code.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt font-mono">Coding Tip</h4>
                  <p>Master React Server Components with practical examples and best practices.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-coder-yellow mb-2 terminal-prompt font-mono">Project Idea</h4>
                  <p>Build a real-time chat app using WebSockets and React - complete tutorial included.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto terminal-box p-8 text-center">
            <h2 className="text-2xl font-display font-semibold mb-6 code-bracket text-coder-gray-100">Join the Free Vault</h2>
            <p className="text-lg text-coder-gray-300 mb-8">
              Get instant access to exclusive resources plus weekly insights that actually matter.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="input-field flex-1 bg-coder-gray-800 border-coder-gray-700 text-coder-gray-100"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get Access
                </button>
              </div>
              <p className="text-sm text-coder-gray-400">
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