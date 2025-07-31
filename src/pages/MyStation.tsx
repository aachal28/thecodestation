import React from 'react';
import { Music, Book, Tv, Wrench, Monitor, Handshake, Folder, Calendar, Terminal } from 'lucide-react';

const MyStation = () => {
  const favSongs = [
    'Bohemian Rhapsody - Queen',
    'Imagine - John Lennon',
    'Hotel California - Eagles',
    'Stairway to Heaven - Led Zeppelin',
    'Sweet Child O Mine - Guns N Roses'
  ];

  const favBooks = [
    { title: 'Clean Code', author: 'Robert Martin', link: '#' },
    { title: 'The Pragmatic Programmer', author: 'Andy Hunt', link: '#' },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson', link: '#' },
    { title: 'Atomic Habits', author: 'James Clear', link: '#' }
  ];

  const favShows = [
    { title: 'Silicon Valley', note: 'Perfect tech humor' },
    { title: 'Mr. Robot', note: 'Hacking done right' },
    { title: 'The Social Dilemma', note: 'Eye-opening documentary' },
    { title: 'Fireship', note: 'Best tech YouTuber' }
  ];

  const dailyTools = [
    { name: 'VS Code', category: 'Editor', affiliate: false, color: 'terminal-blue' },
    { name: 'Notion', category: 'Productivity', affiliate: true, color: 'terminal-yellow' },
    { name: 'Figma', category: 'Design', affiliate: false, color: 'terminal-green' },
    { name: 'ChatGPT', category: 'AI', affiliate: true, color: 'terminal-red' }
  ];

  const deskSetup = [
    'MacBook Pro M2',
    'Blue Yeti Microphone',
    'Sony WH-1000XM4',
    'LG 27" 4K Monitor',
    'Mechanical Keyboard'
  ];

  const collaborations = [
    'TechCorp', 'DevTools Inc', 'CodeAcademy', 'StartupXYZ'
  ];

  const projects = [
    { title: 'TheCodeStation Website', tech: 'React, TypeScript', color: 'terminal-yellow' },
    { title: 'Task Manager App', tech: 'Next.js, Prisma', color: 'terminal-blue' },
    { title: 'Portfolio Template', tech: 'HTML, CSS, JS', color: 'terminal-green' }
  ];

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
              <div className="ml-4 text-terminal-white/50 font-mono text-sm">mystation.json</div>
            </div>
            
            <div className="text-left">
              <div className="font-mono text-sm mb-4">
                <span className="text-terminal-blue">~/thecodestation</span> 
                <span className="text-terminal-green"> $ </span>
                <span className="text-terminal-white">cat mystation.json</span>
              </div>
              <h1 className="text-3xl font-mono font-bold mb-4 text-terminal-white light:text-terminal-black text-center">
                <span className="code-bracket">My</span> <span className="terminal-prompt">Station</span>
              </h1>
              <p className="text-lg text-muted font-mono text-center">
                Personal digital shelf - clean, fun, and scrollable. Everything that inspires and powers my work.
              </p>
            </div>
          </div>
        </section>

        {/* Favorite Songs */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Music className="h-6 w-6 text-terminal-yellow mr-3" />
            <h2 className="section-header terminal-prompt">Favorite Songs Playlist</h2>
          </div>
          <div className="terminal-card p-8">
            <div className="font-mono text-sm mb-4">
              <span className="text-terminal-blue">~/music</span> 
              <span className="text-terminal-green"> $ </span>
              <span className="text-terminal-white">playlist --top-5</span>
            </div>
            <ul className="space-y-3">
              {favSongs.map((song, index) => (
                <li key={index} className="flex items-center text-muted font-mono">
                  <span className="w-6 h-6 bg-terminal-yellow/20 border border-terminal-yellow/30 text-terminal-yellow text-xs flex items-center justify-center mr-4">
                    {index + 1}
                  </span>
                  <span className="text-terminal-green">></span>
                  <span className="ml-2">{song}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Favorite Books */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Book className="h-6 w-6 text-terminal-blue mr-3" />
            <h2 className="section-header terminal-prompt">Favorite Books</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favBooks.map((book, index) => (
              <div key={index} className="terminal-card p-6 group">
                <div className="h-24 bg-terminal-blue/20 border border-terminal-blue/30 flex items-center justify-center mb-4 group-hover:bg-terminal-blue/30 transition-all duration-300">
                  <Book className="h-6 w-6 text-terminal-blue" />
                </div>
                <h3 className="font-mono font-bold mb-2 text-terminal-white light:text-terminal-black">{book.title}</h3>
                <p className="text-sm text-muted font-mono mb-4">{book.author}</p>
                <a href={book.link} className="text-terminal-yellow hover:text-terminal-yellow/80 font-mono text-sm transition-colors duration-300">
                  <span className="terminal-prompt">view_on_amazon</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Favorite Shows */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Tv className="h-6 w-6 text-terminal-green mr-3" />
            <h2 className="section-header terminal-prompt">Favorite Shows & YouTubers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favShows.map((show, index) => (
              <div key={index} className="terminal-card p-6 group">
                <h3 className="text-lg font-mono font-bold mb-2 text-terminal-white light:text-terminal-black">{show.title}</h3>
                <p className="text-muted font-mono text-sm mb-3">
                  <span className="text-terminal-green">></span> {show.note}
                </p>
                <div className="text-terminal-green font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="terminal-prompt">status: recommended</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Tools */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Wrench className="h-6 w-6 text-terminal-red mr-3" />
            <h2 className="section-header terminal-prompt">Tools I Use Daily</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyTools.map((tool, index) => (
              <div key={index} className="terminal-card p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono font-bold text-terminal-white light:text-terminal-black">{tool.name}</h3>
                  {tool.affiliate && (
                    <span className="px-2 py-1 bg-terminal-yellow/20 text-terminal-yellow border border-terminal-yellow/30 text-xs font-mono">
                      affiliate
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted font-mono mb-4">
                  <span className="text-terminal-green">></span> {tool.category}
                </p>
                <button className="terminal-button-outline w-full text-sm">
                  <span className="terminal-prompt">try_tool</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Desk Setup */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Monitor className="h-6 w-6 text-terminal-purple mr-3" />
            <h2 className="section-header terminal-prompt">My Desk Setup</h2>
          </div>
          <div className="terminal-card p-8">
            <div className="font-mono text-sm mb-4">
              <span className="text-terminal-blue">~/setup</span> 
              <span className="text-terminal-green"> $ </span>
              <span className="text-terminal-white">ls hardware/</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {deskSetup.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-terminal-gray border border-terminal-yellow/20 hover:border-terminal-yellow/40 transition-all duration-300">
                  <span className="w-2 h-2 bg-terminal-yellow mr-3"></span>
                  <span className="font-mono text-terminal-white light:text-terminal-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborations */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Handshake className="h-6 w-6 text-terminal-blue mr-3" />
            <h2 className="section-header terminal-prompt">Past Collaborations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collaborations.map((brand, index) => (
              <div key={index} className="terminal-card p-6 text-center group">
                <div className="h-16 bg-terminal-yellow/10 border border-terminal-yellow/20 flex items-center justify-center mb-2 group-hover:bg-terminal-yellow/20 transition-all duration-300">
                  <span className="font-mono text-sm text-terminal-yellow">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Folder className="h-6 w-6 text-terminal-green mr-3" />
            <h2 className="section-header terminal-prompt">Projects I've Built</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="terminal-card p-6 group">
                <h3 className="text-lg font-mono font-bold mb-2 text-terminal-white light:text-terminal-black">{project.title}</h3>
                <p className="text-muted font-mono text-sm mb-4">
                  <span className="text-terminal-green">></span> {project.tech}
                </p>
                <button className="terminal-button-outline">
                  <span className="terminal-prompt">view_project</span>
                </button>
                <div className={`mt-3 text-${project.color} font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <span className="terminal-prompt">status: deployed</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Book a Call */}
        <section>
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <Calendar className="h-16 w-16 text-terminal-yellow mx-auto mb-6" />
            <h2 className="text-3xl font-mono font-bold mb-4 code-bracket text-terminal-white light:text-terminal-black">Book a Call</h2>
            <p className="text-xl text-muted mb-8 font-mono">
              Ready to work together? Let's schedule a call to discuss your project or collaboration ideas.
            </p>
            <button className="terminal-button">
              <span className="terminal-prompt">schedule_on_calendly</span>
            </button>
            <div className="mt-4 text-terminal-green font-mono text-sm">
              <span className="terminal-prompt">availability: open</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyStation;