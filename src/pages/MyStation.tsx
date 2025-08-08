import React from 'react';
import { Music, Book, Tv, Wrench, Monitor, Handshake, Folder, Calendar } from 'lucide-react';

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
    { name: 'VS Code', category: 'Editor', affiliate: false },
    { name: 'Notion', category: 'Productivity', affiliate: true },
    { name: 'Figma', category: 'Design', affiliate: false },
    { name: 'ChatGPT', category: 'AI', affiliate: true }
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
    { title: 'TheCodeStation Website', tech: 'React, TypeScript' },
    { title: 'Task Manager App', tech: 'Next.js, Prisma' },
    { title: 'Portfolio Template', tech: 'HTML, CSS, JS' }
  ];

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="text-coder-yellow">My</span> <span className="terminal-prompt">Station</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Personal digital shelf - clean, fun, and scrollable. Everything that inspires and powers my work.
          </p>
        </section>

        {/* Favorite Songs */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Music className="h-8 w-8 text-coder-yellow mr-4" />
            <h2 className="text-3xl font-bold font-mono terminal-prompt">Favorite Songs Playlist</h2>
          </div>
          <div className="terminal-box">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="text-coder-yellow font-mono text-sm">~/music/playlist.m3u</span>
            </div>
           <div className="terminal-content">
             <ul className="space-y-3">
               {favSongs.map((song, index) => (
                 <li key={index} className="flex items-center text-coder-gray-600 dark:text-coder-yellow/80 font-mono">
                   <span className="w-6 h-6 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow text-sm flex items-center justify-center mr-4 rounded-lg">
                     {index + 1}
                   </span>
                   {song}
                 </li>
               ))}
             </ul>
           </div>
          </div>
        </section>

        {/* Favorite Books */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Book className="h-8 w-8 text-coder-yellow mr-4" />
            <h2 className="text-3xl font-bold font-mono terminal-prompt">Favorite Books</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favBooks.map((book, index) => (
              <div key={index} className="card p-6">
                <div className="h-32 bg-coder-yellow/20 border border-coder-yellow/30 flex items-center justify-center mb-4 rounded-xl">
                  <Book className="h-8 w-8 text-coder-yellow" />
                </div>
                <h3 className="font-semibold font-mono mb-2 text-coder-black dark:text-coder-white bracket-highlight">{book.title}</h3>
                <h3 className="font-semibold font-mono mb-2 text-coder-black dark:text-coder-white text-coder-yellow">{book.title}</h3>
                <p className="text-sm text-coder-gray-600 dark:text-coder-gray-400 font-mono mb-4">{book.author}</p>
                <a href={book.link} className="text-coder-yellow hover:text-coder-yellow/80 font-mono text-sm transition-colors duration-300">
                  View on Amazon →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Favorite Shows & YouTubers */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Tv className="h-8 w-8 text-coder-yellow mr-4" />
            <h2 className="text-3xl font-bold font-mono terminal-prompt">Favorite Shows & YouTubers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favShows.map((show, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-semibold font-mono mb-2 text-coder-black dark:text-coder-white text-coder-yellow">{show.title}</h3>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">{show.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools I Use Daily */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Wrench className="h-8 w-8 text-coder-yellow mr-4" />
            <h2 className="text-3xl font-bold font-mono terminal-prompt">Tools I Use Daily</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyTools.map((tool, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold font-mono text-coder-black dark:text-coder-white text-coder-yellow">{tool.name}</h3>
                  {tool.affiliate && (
                    <span className="px-2 py-1 bg-coder-yellow/20 text-coder-yellow border border-coder-yellow/30 text-xs font-mono rounded-full">
                      Affiliate
                    </span>
                  )}
                </div>
                <p className="text-sm text-coder-gray-600 dark:text-coder-gray-400 font-mono mb-4">{tool.category}</p>
                <button className="text-coder-yellow hover:text-coder-yellow/80 font-mono text-sm transition-colors duration-300">
                  Try it →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* My Desk Setup */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Monitor className="h-8 w-8 text-coder-yellow mr-4" />
            <h2 className="text-3xl font-bold font-mono terminal-prompt">My Desk Setup</h2>
          </div>
          <div className="terminal-box">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="text-coder-yellow font-mono text-sm">~/setup/hardware.list</span>
            </div>
            <div className="terminal-content">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {deskSetup.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 rounded-xl">
                    <span className="w-2 h-2 bg-coder-yellow mr-3 rounded-full"></span>
                    <span className="font-mono text-coder-gray-700 dark:text-coder-yellow/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Collabs */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Handshake className="h-8 w-8 text-coder-yellow mr-4" />
            <h2 className="text-3xl font-bold font-mono terminal-prompt">Past Collaborations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collaborations.map((brand, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="h-16 bg-coder-yellow/20 border border-coder-yellow/30 flex items-center justify-center mb-2 rounded-xl">
                  <span className="font-mono text-sm text-coder-yellow">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects I've Built */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Folder className="h-8 w-8 text-coder-yellow mr-4" />
            <h2 className="text-3xl font-bold font-mono terminal-prompt">Projects I've Built</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-semibold font-mono mb-2 text-coder-black dark:text-coder-white text-coder-yellow">{project.title}</h3>
                <p className="text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm mb-4">{project.tech}</p>
                <button className="text-coder-yellow hover:text-coder-yellow/80 font-mono text-sm transition-colors duration-300">
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Book a Call */}
        <section className="text-center bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-12 rounded-3xl">
          <Calendar className="h-16 w-16 text-coder-yellow mx-auto mb-6" />
          <h2 className="text-3xl font-bold font-mono mb-4 text-coder-yellow">Book a Call</h2>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono">
            Ready to work together? Let's schedule a call to discuss your project or collaboration ideas.
          </p>
          <button className="btn-primary">
            Schedule on Calendly
          </button>
        </section>
      </div>
    </div>
  );
};

export default MyStation;