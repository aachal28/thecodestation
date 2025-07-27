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
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Digital Products to Help You Learn & Earn</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
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
              <div key={product.id} className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                {/* Product Image */}
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative">
                  <div className="text-white text-center">
                    {product.icon}
                    <p className="mt-2 font-semibold">{product.image}</p>
                  </div>
                  {product.comingSoon && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 text-sm font-medium">{product.category}</span>
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                      product.comingSoon
                        ? 'bg-slate-700 text-gray-400 cursor-not-allowed'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
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
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">💡 Featured: The Complete React Guide</h2>
                <p className="text-xl text-gray-200 mb-6">
                  Master React with this comprehensive guide that takes you from zero to hero. Perfect for developers looking to level up their React skills.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-gray-200">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    150+ pages of in-depth content
                  </li>
                  <li className="flex items-center text-gray-200">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Real-world projects and examples
                  </li>
                  <li className="flex items-center text-gray-200">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Lifetime updates included
                  </li>
                </ul>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold">$29</span>
                  <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Get It Now
                  </button>
                </div>
              </div>
              <div className="h-64 bg-white/10 rounded-xl flex items-center justify-center">
                <Book className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="text-center bg-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Stay Updated on New Products</h2>
          <p className="text-gray-300 mb-6">
            Be the first to know about new product launches, exclusive discounts, and special offers.
          </p>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
            Join the Newsletter
          </button>
        </section>
      </div>
    </div>
  );
};

export default Products;