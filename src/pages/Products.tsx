import React from 'react';
import { Book, FileText, Layout, GraduationCap, ShoppingCart, ExternalLink } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'The Complete React Guide',
      category: 'Mini eBooks',
      description: 'Master React from basics to advanced concepts with practical examples and projects.',
      price: '$29',
      image: 'ebook-react',
      icon: <Book className="h-6 w-6" />,
      features: ['150+ pages', 'Code examples', 'Practice projects', 'Lifetime updates'],
    },
    {
      id: 2,
      title: 'CSS Flexbox & Grid Cheatsheet',
      category: 'Cheatsheets',
      description: 'Visual reference for CSS Flexbox and Grid properties with examples.',
      price: '$15',
      image: 'cheatsheet-css',
      icon: <FileText className="h-6 w-6" />,
      features: ['Visual examples', 'PDF format', 'Print-friendly', 'Quick reference'],
    },
    {
      id: 3,
      title: 'Developer Portfolio Notion Template',
      category: 'Notion Templates',
      description: 'Professional Notion template for organizing your developer portfolio and projects.',
      price: '$19',
      image: 'notion-portfolio',
      icon: <Layout className="h-6 w-6" />,
      features: ['Pre-built sections', 'Project tracker', 'Skill organizer', 'Easy customization'],
    },
    {
      id: 4,
      title: 'JavaScript ES6+ Cheatsheet',
      category: 'Cheatsheets',
      description: 'Complete reference for modern JavaScript features and syntax.',
      price: '$12',
      image: 'cheatsheet-js',
      icon: <FileText className="h-6 w-6" />,
      features: ['All ES6+ features', 'Code examples', 'Browser support', 'PDF download'],
    },
    {
      id: 5,
      title: 'AI Prompts for Developers',
      category: 'Cheatsheets',
      description: 'Collection of proven AI prompts to boost your coding productivity.',
      price: '$25',
      image: 'ai-prompts',
      icon: <FileText className="h-6 w-6" />,
      features: ['100+ prompts', 'Use cases', 'Copy-paste ready', 'Regular updates'],
    },
    {
      id: 6,
      title: 'Web Development Mastery Course',
      category: 'Courses',
      description: 'Complete web development course from beginner to advanced level.',
      price: '$99',
      image: 'course-webdev',
      icon: <GraduationCap className="h-6 w-6" />,
      features: ['40+ hours video', 'Hands-on projects', 'Certificate', 'Coming soon'],
      comingSoon: true,
    },
  ];

  const categories = ['All', 'Mini eBooks', 'Cheatsheets', 'Notion Templates', 'Courses'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="bracket-highlight">Digital Products</span> <span className="terminal-prompt">to Help You Learn & Earn</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Premium digital products designed to accelerate your learning and boost your development skills.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-mono font-medium transition-all duration-300 ${
                  selectedCategory === category ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card overflow-hidden">
                {/* Product Image */}
                <div className="h-48 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center relative">
                  <div className="text-coder-black text-center">
                    {product.icon}
                    <p className="mt-2 font-mono font-semibold">{product.image}</p>
                  </div>
                  {product.comingSoon && (
                    <div className="absolute top-4 right-4 bg-coder-black text-coder-yellow px-3 py-1 text-sm font-mono font-semibold border border-coder-yellow">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-coder-yellow text-sm font-mono font-medium">{product.category}</span>
                    <span className="text-2xl font-bold font-mono text-coder-black dark:text-coder-white">{product.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold font-mono text-coder-black dark:text-coder-white mb-3 bracket-highlight">{product.title}</h3>
                  <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-4 font-mono text-sm">{product.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-coder-gray-600 dark:text-coder-gray-400 text-sm flex items-center font-mono">
                          <span className="w-1.5 h-1.5 bg-coder-yellow mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 font-mono font-semibold transition-all duration-300 flex items-center justify-center ${
                      product.comingSoon
                        ? 'bg-transparent border border-coder-gray-600/30 text-coder-gray-600 dark:text-coder-gray-400 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                    disabled={product.comingSoon}
                  >
                    {product.comingSoon ? (
                      'Coming Soon'
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Buy on Gumroad
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Product */}
        <section className="mb-16">
          <div className="bg-coder-yellow/10 dark:bg-coder-yellow/5 border border-coder-yellow/20 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-mono mb-4 bracket-highlight">Featured: The Complete React Guide</h2>
                <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 mb-6 font-mono">
                  Master React with this comprehensive guide that takes you from zero to hero. Perfect for developers looking to level up their React skills.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">
                    <span className="w-2 h-2 bg-coder-yellow mr-3"></span>
                    150+ pages of in-depth content
                  </li>
                  <li className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">
                    <span className="w-2 h-2 bg-coder-yellow mr-3"></span>
                    Real-world projects and examples
                  </li>
                  <li className="flex items-center text-coder-gray-600 dark:text-coder-gray-400 font-mono text-sm">
                    <span className="w-2 h-2 bg-coder-yellow mr-3"></span>
                    Lifetime updates included
                  </li>
                </ul>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold font-mono text-coder-black dark:text-coder-white">$29</span>
                  <button className="btn-primary flex items-center">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Get It Now
                  </button>
                </div>
              </div>
              <div className="h-64 bg-coder-yellow/20 border border-coder-yellow/30 flex items-center justify-center">
                <Book className="h-24 w-24 text-coder-yellow" />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="text-center card p-8">
          <h2 className="text-2xl font-bold font-mono mb-4 terminal-prompt">Stay Updated on New Products</h2>
          <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-6 font-mono">
            Be the first to know about new product launches, exclusive discounts, and special offers.
          </p>
          <button className="btn-primary">
            Join the Newsletter
          </button>
        </section>
      </div>
    </div>
  );
};

export default Products;