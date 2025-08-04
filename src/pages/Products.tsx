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
    <div className="py-16 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4 text-coder-black dark:text-coder-white">
            <span className="text-coder-yellow">Digital Products</span> <span className="text-coder-yellow">to Help You Learn & Earn</span>
          </h1>
          <p className="text-xl text-coder-gray-600 dark:text-coder-gray-400 max-w-3xl mx-auto font-mono">
            Premium digital products designed to accelerate your learning and boost your productivity.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <div key={category} className="px-6 py-3 bg-coder-yellow/20 border border-coder-yellow/30 text-coder-yellow font-mono font-medium rounded-full">
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card overflow-hidden">
                {/* Product Image */}
                <div className="h-48 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center rounded-t-2xl">
                  <div className="text-coder-black text-center">
                    {product.icon}
                    <p className="mt-2 font-mono font-semibold">Product Image</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-coder-yellow/20 text-coder-yellow border border-coder-yellow/30 text-sm font-mono rounded-full">{product.category}</span>
                    <span className="text-2xl font-bold font-mono text-coder-black dark:text-coder-white">{product.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold font-mono text-coder-black dark:text-coder-white mb-3 bracket-highlight">{product.title}</h3>
                  <h3 className="text-xl font-semibold font-mono text-coder-black dark:text-coder-white mb-3">{product.title}</h3>
                  <p className="text-coder-gray-600 dark:text-coder-gray-400 mb-6 font-mono text-sm">{product.description}</p>
                  
                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 font-mono font-semibold transition-all duration-300 flex items-center justify-center rounded-xl ${
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
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="text-center card p-8">
          <h2 className="text-2xl font-bold font-mono mb-4 text-coder-yellow">Stay Updated on New Products</h2>
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