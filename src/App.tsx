import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Products from './pages/Products';
import Newsletter from './pages/Newsletter';
import Blogs from './pages/Blogs';
import Tutorials from './pages/Tutorials';
import MyStation from './pages/MyStation';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-coder-white dark:bg-coder-black text-coder-black dark:text-coder-white transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/products" element={<Products />} />
              <Route path="/my-station" element={<MyStation />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;