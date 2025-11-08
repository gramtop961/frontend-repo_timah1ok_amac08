import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="container mx-auto px-6 md:px-10 py-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Bintang Saputra. Crafted with data, design, and curiosity.
        </div>
      </footer>
    </div>
  );
}

export default App;
