import React from 'react';
import { FileText, Layout, Book, ShoppingCart, Terminal } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Project Management Template',
      category: 'Notion Templates',
      description: 'Complete project tracking system',
      price: '₹299',
      icon: <Layout className="h-5 w-5" />,
      available: true,
      color: 'terminal-yellow'
    },
    {
      id: 2,
      title: 'Developer Checklist',
      category: 'PDF Checklists',
      description: 'Essential development workflow checklist',
      price: '₹199',
      icon: <FileText className="h-5 w-5" />,
      available: true,
      color: 'terminal-blue'
    },
    {
      id: 3,
      title: 'React Hooks Guide',
      category: 'Mini eBooks',
      description: 'Complete guide to React hooks',
      price: '₹499',
      icon: <Book className="h-5 w-5" />,
      available: true,
      color: 'terminal-green'
    },
    {
      id: 4,
      title: 'CSS Grid Mastery',
      category: 'Mini eBooks',
      description: 'Master CSS Grid layouts',
      price: '₹399',
      icon: <Book className="h-5 w-5" />,
      available: false,
      color: 'terminal-red'
    },
    {
      id: 5,
      title: 'Freelancer Toolkit',
      category: 'Notion Templates',
      description: 'Complete freelancing management system',
      price: '₹599',
      icon: <Layout className="h-5 w-5" />,
      available: false,
      color: 'terminal-purple'
    },
    {
      id: 6,
      title: 'API Testing Checklist',
      category: 'PDF Checklists',
      description: 'Comprehensive API testing guide',
      price: '₹249',
      icon: <FileText className="h-5 w-5" />,
      available: true,
      color: 'terminal-blue'
    },
  ];

  const categories = ['Notion Templates', 'PDF Checklists', 'Mini eBooks'];

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
              <div className="ml-4 text-terminal-white/50 font-mono text-sm">products.store</div>
            </div>
            
            <div className="text-left">
              <div className="font-mono text-sm mb-4">
                <span className="text-terminal-blue">~/thecodestation</span> 
                <span className="text-terminal-green"> $ </span>
                <span className="text-terminal-white">ls products/ --available</span>
              </div>
              <h1 className="text-3xl font-mono font-bold mb-4 text-terminal-white light:text-terminal-black">
                <span className="code-bracket">Digital Products</span> <span className="terminal-prompt">to Help You Learn & Earn</span>
              </h1>
              <p className="text-lg text-muted font-mono">
                Premium digital products designed to accelerate your learning and boost your productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <div key={category} className="terminal-tag">
                <span className="terminal-prompt">{category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="terminal-card overflow-hidden group">
                {/* Product Header */}
                <div className={`h-32 bg-${product.color}/20 border-b border-${product.color}/30 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`w-12 h-12 bg-${product.color}/30 border border-${product.color}/50 flex items-center justify-center mx-auto mb-2`}>
                      {product.icon}
                    </div>
                    <p className="font-mono text-xs text-terminal-white/70">Product Preview</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="terminal-tag text-xs">{product.category}</span>
                    <span className="text-xl font-bold font-mono text-terminal-yellow">{product.price}</span>
                  </div>
                  
                  <h3 className="text-lg font-mono font-bold text-terminal-white light:text-terminal-black mb-3">{product.title}</h3>
                  <p className="text-muted mb-6 text-sm font-mono">{product.description}</p>
                  
                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 font-mono font-medium transition-all duration-300 flex items-center justify-center text-sm ${
                      product.available
                        ? 'terminal-button hover:shadow-glow'
                        : 'bg-transparent border border-terminal-white/20 text-terminal-white/50 cursor-not-allowed'
                    }`}
                    disabled={!product.available}
                  >
                    {product.available ? (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        <span className="terminal-prompt">buy_on_gumroad</span>
                      </>
                    ) : (
                      <span className="terminal-prompt">coming_soon</span>
                    )}
                  </button>
                  
                  {product.available && (
                    <div className="mt-3 text-terminal-green font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="terminal-prompt">status: ready_to_purchase</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section>
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <Terminal className="h-12 w-12 text-terminal-yellow mx-auto mb-6" />
            <h2 className="text-xl font-mono font-bold mb-4 terminal-prompt text-terminal-white light:text-terminal-black">Stay Updated on New Products</h2>
            <p className="text-muted mb-6 font-mono">
              Be the first to know about new product launches and exclusive discounts.
            </p>
            <button className="terminal-button">
              <span className="terminal-prompt">join_newsletter</span>
            </button>
            <div className="mt-4 text-terminal-green font-mono text-sm">
              <span className="terminal-prompt">notifications: enabled</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;