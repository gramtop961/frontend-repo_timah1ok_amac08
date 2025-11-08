import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, LineChart, Users } from 'lucide-react';

const skills = [
  { icon: Brain, title: 'Machine Learning', desc: 'Regression, classification, clustering, model tuning' },
  { icon: LineChart, title: 'Analytics & BI', desc: 'Exploratory analysis, dashboards, experimentation' },
  { icon: Users, title: 'Team Player', desc: 'Strong collaboration, communication, and ownership' },
  { icon: Sparkles, title: 'Rapid Learner', desc: 'Adapt quickly to tools and domains, learn-by-doing' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl text-slate-300"
        >
          I’m Bintang Saputra, a data scientist who thrives on fast learning, adaptation, and teamwork. I build
          data products and predictive systems that help teams make informed decisions and ship with confidence.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur-sm hover:bg-white/7 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
