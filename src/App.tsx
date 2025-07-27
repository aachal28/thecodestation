import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import RecentPosts from './pages/RecentPosts';
import GitHubProjects from './pages/GitHubProjects';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Products from './pages/Products';
import Newsletter from './pages/Newsletter';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<RecentPosts />} />
            <Route path="/projects" element={<GitHubProjects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/products" element={<Products />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;