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
    <div className="py-16 bg-white dark:bg-coder-black animate-fade-in">
      <div className="container-content">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-coder-gray-900 dark:text-coder-gray-100">
            <span className="code-bracket">Digital Products</span> <span className="terminal-prompt font-mono">to Help You Learn & Earn</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Premium digital products designed to accelerate your learning and boost your productivity.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <div key={category} className="tag">
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card overflow-hidden">
                {/* Product Image */}
                <div className="h-40 bg-gradient-to-br from-coder-yellow to-coder-yellow/80 flex items-center justify-center">
                  <div className="text-coder-black text-center">
                    {product.icon}
                    <p className="mt-2 font-mono text-sm font-medium">Product Image</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="tag">{product.category}</span>
                    <span className="text-xl font-bold font-mono text-coder-gray-900 dark:text-coder-gray-100">{product.price}</span>
                  </div>
                  
                  <h3 className="text-lg font-display font-semibold text-coder-gray-900 dark:text-coder-gray-100 mb-3">{product.title}</h3>
                  <p className="text-muted mb-6 text-sm">{product.description}</p>
                  
                  {/* CTA Button */}
                  <button
                    className={`w-full py-2 font-medium transition-all duration-200 flex items-center justify-center text-sm ${
                      product.available
                        ? 'btn-primary'
                        : 'bg-transparent border border-coder-gray-300 dark:border-coder-gray-700 text-coder-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.available}
                  >
                    {product.available ? (
                      <>
                        <ShoppingCart className="mr-2 h-3 w-3" />
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
          <h2 className="text-xl font-display font-semibold mb-4 terminal-prompt text-coder-gray-900 dark:text-coder-gray-100">Stay Updated on New Products</h2>
          <p className="text-muted mb-6">
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