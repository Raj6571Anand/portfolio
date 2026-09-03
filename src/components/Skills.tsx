'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const row1 = ["Python", "Dart", "Java", "C++", "JavaScript", "SQL", "FastAPI", "Flutter"];
const row2 = ["Redis", "MySQL", "MongoDB", "Firebase", "Docker", "Git", "SQLAlchemy", "Linux"];

const categories = [
  {
    title: "Languages",
    skills: ["Python", "Dart", "SQL", "Java", "C++", "JavaScript", "C"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["FastAPI", "Flutter", "SQLAlchemy", "Pydantic", "Riverpod", "Pytest"]
  },
  {
    title: "Databases & Infra",
    skills: ["Redis", "MySQL", "MongoDB", "Firebase", "SQLite", "Docker", "Git"]
  },
  {
    title: "Core Concepts",
    skills: ["System Design", "RESTful APIs", "Clean Architecture", "SOLID", "DSA"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        <ScrollReveal>
          <h2 className="text-[#00ff88] font-mono text-2xl md:text-3xl">
            {`// skills & tools`}
          </h2>
        </ScrollReveal>
      </div>

      {/* Infinite Marquee */}
      <div className="flex flex-col gap-6 mb-24 relative before:absolute before:inset-y-0 before:left-0 before:w-1/6 before:bg-gradient-to-r before:from-[#0a0a0a] before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-1/6 after:bg-gradient-to-l after:from-[#0a0a0a] after:to-transparent after:z-10">
        
        {/* CSS Animations added via style block for pure CSS implementation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
        `}} />

        {/* Row 1 (Left to Right) */}
        <div className="flex w-max animate-scroll-left gap-4 hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((skill, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur font-mono text-sm text-gray-300 hover:text-[#00ff88] hover:border-[#00ff88]/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all whitespace-nowrap cursor-default">
              {skill}
            </div>
          ))}
        </div>

        {/* Row 2 (Right to Left) */}
        <div className="flex w-max animate-scroll-right gap-4 hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((skill, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur font-mono text-sm text-gray-300 hover:text-[#00ff88] hover:border-[#00ff88]/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all whitespace-nowrap cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, idx) => (
          <ScrollReveal key={idx} delay={0.2 + idx * 0.2} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group">
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#00ff88] transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 rounded-md font-mono text-xs text-gray-400">
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
