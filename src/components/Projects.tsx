'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SupportSense — Agentic Customer Support Pipeline',
    description:
      "An end-to-end agentic AI support pipeline built on 2.8M real AmazonHelp tweets. Uses a RAG few-shot classifier with ChromaDB to achieve 63.6% intent accuracy (Macro F1: 0.670). Features an 8-criteria escalation engine with 99.2% recall (F1: 0.742) and a rigorous LLM-as-judge evaluation framework with bootstrap 95% CIs and Cohen's κ inter-rater agreement.",
    tech: ['Python', 'ChromaDB', 'Groq LLM', 'RAG', 'Gradio'],
    github: 'https://github.com/Raj6571Anand/SupportSense-Agentic-Customer-Support',
    demo: '',
  },
  {
    title: 'Smart API Rate Limiter & Gateway',
    description:
      'A robust API gateway implementing 5 distinct rate-limiting algorithms (Token Bucket, Sliding Window, Fixed Window, Leaky Bucket) with tiered API key authentication, async SQLAlchemy, Redis with auto in-memory fallback, real-time analytics dashboard, and 100% test coverage across 26 tests.',
    tech: ['Python', 'FastAPI', 'Redis', 'SQLite', 'Docker'],
    github: 'https://github.com/Raj6571Anand/smart-api-rate-limiter',
    demo: '',
  },
  {
    title: 'AgriSense — Hybrid ADE-PSO Optimization',
    description:
      'An intelligent mobile app powered by a novel hybrid optimization algorithm combining Adaptive Differential Evolution and Particle Swarm Optimization. Provides data-driven crop management with optimized nutrient schedules, finding ideal combinations of farming inputs to maximize yield through nature-inspired computation.',
    tech: ['Flutter', 'Dart', 'Python', 'Nature-Inspired Algorithms'],
    github: 'https://github.com/Raj6571Anand/Crop_Yielder',
    demo: '',
  },
  {
    title: 'Huffman File Compressor',
    description:
      'A mobile tool demonstrating practical DSA by implementing lossless file compression using Huffman Coding. Engineered compression and decompression from scratch — character frequency analysis, Huffman tree construction via priority queue, binary code generation, and .huff file I/O with compression analytics.',
    tech: ['Dart', 'DSA', 'Huffman Coding', 'File I/O'],
    github: 'https://github.com/Raj6571Anand/Huffman-File-Compressor',
    demo: '',
  },
  {
    title: 'Recipe Book',
    description:
      'A modern Flutter recipe app integrating TheMealDB API with smart filtering by category and cuisine, detailed recipe views, random recommendations, and persistent favorites via Sqflite. Built with Riverpod state management, Clean Architecture (SOLID), Hero animations, shimmer loading, and responsive grid/list toggle.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'Sqflite', 'Clean Architecture'],
    github: 'https://github.com/Raj6571Anand/Recipe_Book',
    demo: '',
  },
  {
    title: 'Developer Portfolio',
    description:
      'This very site — a modern, minimalist developer portfolio with dark coder aesthetics, terminal-style animations, infinite skill marquees, and smooth scroll-triggered reveals.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Raj6571Anand',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-mono text-[#00ff88]">
          {'// projects'}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-xl p-8 overflow-hidden hover:border-[#00ff88]/30 transition-colors duration-500"
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff88]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Subtle glow on hover */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00ff88]/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Project number */}
            <div className="text-7xl font-black text-white/[0.03] absolute -top-3 -right-2 pointer-events-none select-none">
              {(index + 1).toString().padStart(2, '0')}
            </div>

            <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 group-hover:text-gray-400 mb-6 text-sm leading-relaxed transition-colors duration-300 min-h-[5rem]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] font-mono text-gray-400 border border-white/[0.08] rounded-full group-hover:border-white/15 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-5 font-mono text-sm mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#00ff88] transition-colors duration-300"
                >
                  {'[ view code ]'}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#00ff88] transition-colors duration-300"
                >
                  {'[ live demo ]'}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-20 text-center font-mono"
      >
        <a
          href="https://github.com/Raj6571Anand"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[#00ff88] transition-colors duration-300 text-sm"
        >
          {'> view all projects on github'}
        </a>
      </motion.div>
    </section>
  );
}
