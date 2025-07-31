import React, { useState } from 'react';
import { Mail, CheckCircle, Zap, Code, Briefcase, Target, Terminal } from 'lucide-react';

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
      <div className="py-16 bg-terminal-black light:bg-terminal-white animate-fade-in">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <div className="terminal-card p-8">
              <CheckCircle className="h-16 w-16 text-terminal-green mx-auto mb-6 animate-pulse" />
              <h1 className="text-3xl font-mono font-bold mb-4 text-terminal-white light:text-terminal-black">
                <span className="code-bracket">Welcome to</span> <span className="terminal-prompt">TheCodeStation Newsletter!</span> 🎉
              </h1>
              <p className="text-lg text-muted mb-8 font-mono">
                Thank you for subscribing! Check your email for confirmation and your free vault access.
              </p>
              <div className="text-terminal-green font-mono text-sm">
                <span className="terminal-prompt">subscription_status: active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-terminal-black light:bg-terminal-white animate-fade-in">
      <div className="container-content">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="terminal-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-terminal-red"></div>
                <div className="w-3 h-3 bg-terminal-yellow"></div>
                <div className="w-3 h-3 bg-terminal-green"></div>
              </div>
              <div className="ml-4 text-terminal-white/50 font-mono text-sm">newsletter.sh</div>
            </div>
            
            <div className="text-left">
              <div className="font-mono text-sm mb-4">
                <span className="text-terminal-blue">~/thecodestation</span> 
                <span className="text-terminal-green"> $ </span>
                <span className="text-terminal-white">subscribe --newsletter</span>
              </div>
              <Mail className="h-12 w-12 text-terminal-yellow mx-auto mb-6" />
              <h1 className="text-3xl font-mono font-bold mb-4 text-terminal-white light:text-terminal-black text-center">
                <span className="code-bracket">One Weekly Email.</span> <span className="terminal-prompt">Everything You Need.</span>
              </h1>
              <p className="text-lg text-muted font-mono text-center">
                Tools, project ideas, cheat sheets, coding tips delivered straight to your inbox.
              </p>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="mb-16">
          <h2 className="section-header text-center terminal-prompt">What's Inside</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="h-5 w-5" />, title: 'Latest Tools', desc: 'Cutting-edge developer tools', color: 'terminal-yellow' },
              { icon: <Code className="h-5 w-5" />, title: 'Coding Tips', desc: 'Weekly insights and tricks', color: 'terminal-blue' },
              { icon: <Briefcase className="h-5 w-5" />, title: 'Project Ideas', desc: 'Build your portfolio', color: 'terminal-green' },
              { icon: <Target className="h-5 w-5" />, title: 'Cheat Sheets', desc: 'Quick reference guides', color: 'terminal-red' },
            ].map((item, index) => (
              <div key={index} className="terminal-card p-6 text-center group">
                <div className={`w-10 h-10 bg-${item.color}/20 border border-${item.color}/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-${item.color}/30 transition-all duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-base font-mono font-bold mb-2 text-terminal-white light:text-terminal-black">{item.title}</h3>
                <p className="text-muted text-sm font-mono">{item.desc}</p>
                <div className={`mt-3 text-${item.color} font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <span className="terminal-prompt">content_type: {item.title.toLowerCase().replace(' ', '_')}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Preview */}
        <section className="mb-16">
          <h2 className="section-header text-center code-bracket">Preview of Last Issue</h2>
          <div className="max-w-3xl mx-auto terminal-card p-8">
            <div className="border-l-2 border-terminal-yellow pl-6">
              <div className="font-mono text-sm mb-4">
                <span className="text-terminal-blue">~/newsletter</span> 
                <span className="text-terminal-green"> $ </span>
                <span className="text-terminal-white">cat issue_47.txt</span>
              </div>
              <h3 className="text-lg font-mono font-bold mb-4 text-terminal-white light:text-terminal-black terminal-prompt">TheCodeStation Weekly #47</h3>
              <div className="space-y-4 text-muted text-sm font-mono">
                <div>
                  <h4 className="font-bold text-terminal-yellow mb-2 terminal-prompt">Tool of the Week</h4>
                  <p><span className="text-terminal-green">></span> Cursor AI - The AI-first code editor that's changing how we write code.</p>
                </div>
                <div>
                  <h4 className="font-bold text-terminal-blue mb-2 terminal-prompt">Coding Tip</h4>
                  <p><span className="text-terminal-green">></span> Master React Server Components with practical examples and best practices.</p>
                </div>
                <div>
                  <h4 className="font-bold text-terminal-red mb-2 terminal-prompt">Project Idea</h4>
                  <p><span className="text-terminal-green">></span> Build a real-time chat app using WebSockets and React - complete tutorial included.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto terminal-card p-8 text-center">
            <Terminal className="h-12 w-12 text-terminal-yellow mx-auto mb-6" />
            <h2 className="text-2xl font-mono font-bold mb-6 code-bracket text-terminal-white light:text-terminal-black">Join the Free Vault</h2>
            <p className="text-lg text-muted mb-8 font-mono">
              Get instant access to exclusive resources plus weekly insights that actually matter.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <div className="font-mono text-sm mb-2">
                  <span className="text-terminal-blue">~/newsletter</span> 
                  <span className="text-terminal-green"> $ </span>
                  <span className="text-terminal-white">subscribe --email=</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@email.com"
                    className="terminal-input flex-1"
                    required
                  />
                  <button
                    type="submit"
                    className="terminal-button"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get Access
                  </button>
                </div>
              </div>
              <p className="text-sm text-terminal-white/50 font-mono">
                <span className="text-terminal-green">#</span> Free forever. Unsubscribe anytime. No spam, ever. 🚫
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;