import React from 'react';
import { FileText, Layout, Book, ShoppingCart } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Project Management Template',
      category: 'Notion Templates',
      description: 'Complete project tracking system',
      price: '₹299',
      icon: <Layout className="h-6 w-6" />,
      available: true,
    },
    {
      id: 2,
      title: 'Developer Checklist',
      category: 'PDF Checklists',
      description: 'Essential development workflow checklist',
      price: '₹199',
      icon: <FileText className="h-6 w-6" />,
      available: true,
    },
    {
      id: 3,
      title: 'React Hooks Guide',
      category: 'Mini eBooks',
      description: 'Complete guide to React hooks',
      price: '₹499',
      icon: <Book className="h-6 w-6" />,
      available: true,
    },
    {
      id: 4,
      title: 'CSS Grid Mastery',
      category: 'Mini eBooks',
      description: 'Master CSS Grid layouts',
      price: '₹399',
      icon: <Book className="h-6 w-6" />,
      available: false,
    },
    {
      id: 5,
      title: 'Freelancer Toolkit',
      category: 'Notion Templates',
      description: 'Complete freelancing management system',
      price: '₹599',
      icon: <Layout className="h-6 w-6" />,
      available: false,
    },
    {
      id: 6,
      title: 'API Testing Checklist',
      category: 'PDF Checklists',
      description: 'Comprehensive API testing guide',
      price: '₹249',
      icon: <FileText className="h-6 w-6" />,
      available: true,
    },
  ];

  const categories = ['Notion Templates', 'PDF Checklists', 'Mini eBooks'];

  return (
    <div className="bg-dev-black text-dev-white animate-fade-in">
      <div className="container-dev section-spacing">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="heading-primary">
            <span className="text-dev-yellow">Digital Products</span> <span className="text-dev-white">to Help You Learn & Earn</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto font-mono">
            Premium digital products designed to accelerate your learning and boost your productivity.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <div key={category} className="code-highlight">
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="dev-card overflow-hidden">
                {/* Product Image */}
                <div className="h-48 bg-dev-yellow/20 border-b border-dev-yellow/30 flex items-center justify-center">
                  <div className="text-dev-yellow text-center">
                    {product.icon}
                    <p className="mt-2 font-mono font-semibold">Product Image</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="code-highlight text-xs">{product.category}</span>
                    <span className="text-2xl font-bold font-mono text-dev-white">{product.price}</span>
                  </div>
                  
                  
                  {/* CTA Button */}
              className="p-2 border border-coder-gray-300 dark:border-coder-gray-700 text-coder-gray-600 dark:text-coder-gray-400 hover:border-coder-yellow hover:text-coder-yellow transition-all duration-300"
                    className={`w-full py-3 font-mono font-semibold transition-all duration-300 flex items-center justify-center ${
                      product.available
                        ? 'btn-primary'
                        : 'bg-transparent border border-coder-gray-600/30 text-coder-gray-600 dark:text-coder-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!product.available}
                  >
                    {product.available ? (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Buy on Gumroad
                      </>
                    ) : (
                      'Coming Soon'
            <div className="px-2 pt-2 pb-3 space-y-1 bg-coder-white dark:bg-coder-gray-950 border border-coder-gray-200 dark:border-coder-gray-800 mt-2">
              className="text-coder-gray-600 dark:text-coder-gray-300 hover:text-coder-yellow transition-colors duration-300"
                </div>
              </div>
            ))}
                  className={`block px-3 py-2 text-sm font-mono font-medium transition-all duration-300 ${
        </section>
                      ? 'text-coder-yellow bg-coder-gray-100 dark:bg-coder-gray-900'
                      : 'text-coder-gray-600 dark:text-coder-gray-300 hover:text-coder-yellow hover:bg-coder-gray-100 dark:hover:bg-coder-gray-900'
        <section className="text-center card p-8 rounded-3xl">
          <h2 className="text-2xl font-bold font-mono mb-4 terminal-prompt">Stay Updated on New Products</h2>
          <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-6 font-mono">
            Be the first to know about new product launches and exclusive discounts.
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