import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto container px-6 md:px-10">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 backdrop-blur"
        >
          <a href="#" className="text-white font-semibold tracking-tight">Bintang Saputra</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm transition-colors"
          >
            Hire Me
          </a>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
