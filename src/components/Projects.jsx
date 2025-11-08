import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Cpu, Database, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Demand Forecasting Engine',
    desc: 'Time-series models (Prophet/XGBoost) to forecast sales with feature engineering and holiday effects.',
    tags: ['Time Series', 'Forecasting', 'MLOps'],
    icon: BarChart3,
    link: '#',
  },
  {
    title: 'Customer Churn Predictor',
    desc: 'Gradient boosted models with SHAP explanations to reduce churn and improve retention strategy.',
    tags: ['Classification', 'Explainability', 'SHAP'],
    icon: Cpu,
    link: '#',
  },
  {
    title: 'Real-time Recommendation API',
    desc: 'Content-based + collaborative filtering served via a low-latency API with caching.',
    tags: ['Recommenders', 'APIs', 'Caching'],
    icon: Globe,
    link: '#',
  },
  {
    title: 'Analytics Data Mart',
    desc: 'Modeled a clean star schema and automated ELT to power dashboards and experiments.',
    tags: ['Data Modeling', 'ELT', 'BI'],
    icon: Database,
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-20 bg-slate-950">
      <div className="relative container mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ title, desc, tags, icon: Icon, link }, i) => (
            <motion.a
              key={title}
              href={link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="block rounded-xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/8 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="text-white text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
