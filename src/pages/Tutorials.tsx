import React, { useState } from 'react';
import { Code, Database, Palette, Globe, Smartphone, Server, Play, Clock, Users } from 'lucide-react';

const Tutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: <Code className="h-5 w-5" /> },
    { id: 'frontend', name: 'Frontend', icon: <Globe className="h-5 w-5" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="h-5 w-5" /> },
    { id: 'database', name: 'Database', icon: <Database className="h-5 w-5" /> },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone className="h-5 w-5" /> },
    { id: 'design', name: 'Design', icon: <Palette className="h-5 w-5" /> },
  ];

  const tutorials = [
    {
      id: 1,
      title: 'HTML Tutorial',
      category: 'frontend',
      description: 'Learn HTML from basics to advanced concepts with hands-on examples.',
      duration: '4 hours',
      level: 'Beginner',
      students: '12.5k',
      icon: <Code className="h-8 w-8" />,
    },
    {
      id: 2,
      title: 'CSS Flexbox Mastery',
      category: 'frontend',
      description: 'Master CSS Flexbox layout with practical projects and real-world examples.',
      duration: '3 hours',
      level: 'Intermediate',
      students: '8.2k',
      icon: <Palette className="h-8 w-8" />,
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      category: 'frontend',
      description: 'Complete JavaScript course covering ES6+, DOM manipulation, and async programming.',
      duration: '8 hours',
      level: 'Beginner',
      students: '15.7k',
      icon: <Code className="h-8 w-8" />,
    },
    {
      id: 4,
      title: 'React Hooks Deep Dive',
      category: 'frontend',
      description: 'Advanced React hooks tutorial with custom hooks and performance optimization.',
      duration: '6 hours',
      level: 'Advanced',
      students: '6.3k',
      icon: <Code className="h-8 w-8" />,
    },
    {
      id: 5,
      title: 'Node.js API Development',
      category: 'backend',
      description: 'Build RESTful APIs with Node.js, Express, and MongoDB from scratch.',
      duration: '10 hours',
      level: 'Intermediate',
      students: '9.1k',
      icon: <Server className="h-8 w-8" />,
    },
    {
      id: 6,
      title: 'MongoDB Database Design',
      category: 'database',
      description: 'Learn MongoDB database design patterns and optimization techniques.',
      duration: '5 hours',
      level: 'Intermediate',
      students: '4.8k',
      icon: <Database className="h-8 w-8" />,
    },
    {
      id: 7,
      title: 'React Native Mobile Apps',
      category: 'mobile',
      description: 'Build cross-platform mobile apps with React Native and Expo.',
      duration: '12 hours',
      level: 'Intermediate',
      students: '7.2k',
      icon: <Smartphone className="h-8 w-8" />,
    },
    {
      id: 8,
      title: 'UI/UX Design Principles',
      category: 'design',
      description: 'Learn design fundamentals, color theory, and user experience best practices.',
      duration: '6 hours',
      level: 'Beginner',
      students: '11.4k',
      icon: <Palette className="h-8 w-8" />,
    },
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-600 border-green-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30';
      case 'Advanced':
        return 'bg-red-500/20 text-red-600 border-red-500/30';
      default:
        return 'bg-coder-yellow/20 text-coder-yellow border-coder-yellow/30';
    }
  };

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="text-coder-yellow">Tutorials</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Step-by-step tutorials to master web development, from beginner to advanced level.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 font-mono font-medium transition-all duration-300 rounded-xl ${
                  selectedCategory === category.id 
                    ? 'btn-primary' 
                    : 'bg-coder-white dark:bg-coder-black border-2 border-coder-yellow/30 text-coder-yellow hover:bg-coder-yellow hover:text-coder-black hover:shadow-glow'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTutorials.map((tutorial) => (
              <div key={tutorial.id} className="card overflow-hidden">
                {/* Tutorial Icon/Image */}
                <div className="h-32 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center">
                  <div className="text-coder-black">
                    {tutorial.icon}
                  </div>
                </div>

                {/* Tutorial Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-sm font-mono rounded-full border ${getLevelColor(tutorial.level)}`}>
                      {tutorial.level}
                    </span>
                    <div className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono">
                      <Clock className="h-4 w-4 mr-1" />
                      {tutorial.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold font-mono text-coder-black dark:text-coder-white mb-3">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-4 font-mono text-sm">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 text-sm font-mono">
                      <Users className="h-4 w-4 mr-1" />
                      {tutorial.students} students
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className="w-full btn-primary flex items-center justify-center">
                    <Play className="mr-2 h-4 w-4" />
                    Start Learning!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-8 md:p-12 rounded-3xl">
          <h2 className="text-3xl font-bold font-mono mb-4 text-coder-yellow">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-8 max-w-2xl mx-auto font-mono">
            Suggest a tutorial topic and I'll create it for the community. Your learning journey matters!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Suggest a Tutorial
            </button>
            <button className="btn-secondary">
              Join Newsletter for Updates
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tutorials;