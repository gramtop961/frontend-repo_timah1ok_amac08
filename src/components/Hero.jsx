import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that won't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/10 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs md:text-sm text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Data Science Portfolio
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Bintang Saputra
          </h1>

          <p className="mt-4 text-slate-300 text-base md:text-lg max-w-2xl">
            Fast Learner • Adaptation • Good Team Work. I turn complex data into clear, actionable
            insights and craft intelligent solutions with a focus on impact and collaboration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 text-sm md:text-base transition-colors"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-5 py-3 text-sm md:text-base ring-1 ring-white/15 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
