'use client';

import { useRef, ReactNode, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(6px)', ...directionMap[direction] }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }
          : { opacity: 0, filter: 'blur(6px)', ...directionMap[direction] }
      }
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  const [showPhoto, setShowPhoto] = useState(true);

  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-6xl mx-auto text-gray-300 scroll-mt-20">
      <ScrollReveal>
        <h2 className="text-[#00ff88] font-mono text-2xl md:text-3xl mb-16">
          {`// about me`}
        </h2>
      </ScrollReveal>

      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* Left: Avatar Toggle */}
        <ScrollReveal delay={0.15} direction="left">
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            {/* Gradient Border & Rotation */}
            <div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff88] to-blue-500 p-[2px] transform rotate-6 transition-all duration-700 group-hover:rotate-0 group-hover:scale-105 cursor-pointer shadow-2xl"
              onClick={() => setShowPhoto(!showPhoto)}
            >
              <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] flex items-center justify-center relative overflow-hidden group/inner">
                
                <AnimatePresence mode="wait">
                  {showPhoto ? (
                    <motion.div
                      key="photo"
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(10px)' }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src="/profile.png"
                        alt="Raj Anand"
                        fill
                        sizes="(max-width: 768px) 256px, 320px"
                        priority
                        className="object-cover opacity-80 group-hover/inner:opacity-100 transition-all duration-500 grayscale group-hover/inner:grayscale-0"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="terminal"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center text-[#00ff88]"
                    >
                      <span className="font-mono text-6xl md:text-7xl flex items-center shadow-[#00ff88]/50 drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">
                        &gt;_
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Click hint overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/inner:opacity-100 transition-opacity duration-300 flex items-center justify-center font-mono text-sm text-[#00ff88] backdrop-blur-sm pointer-events-none">
                  [ click to toggle ]
                </div>

              </div>
            </div>

            {/* Code Brackets Decoration */}
            <div className="absolute -left-6 -top-6 text-4xl font-mono text-white/5 group-hover:text-[#00ff88]/20 transition-colors duration-700">
              &lt;
            </div>
            <div className="absolute -right-6 -bottom-6 text-4xl font-mono text-white/5 group-hover:text-[#00ff88]/20 transition-colors duration-700">
              /&gt;
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Text and Stats */}
        <div className="flex-1 space-y-6 text-lg leading-relaxed">
          <ScrollReveal delay={0.2}>
            <p>
              B.Tech IT graduate from{' '}
              <span className="text-white font-medium">MAKAUT (WBUT)</span> with a{' '}
              <span className="text-[#00ff88] font-mono font-medium">9.22 CGPA</span>.
              I engineer backend systems that handle real traffic and write algorithms that solve problems brute force can&apos;t touch.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              My stack lives at the intersection of{' '}
              <span className="text-white">Python &middot; FastAPI &middot; Flutter</span>
              {' '}&mdash; from building API gateways with 5 rate-limiting strategies to crafting hybrid optimization frameworks inspired by nature.
              I write code that&apos;s clean enough to read and fast enough to ship.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-gray-500">
              When the terminal&apos;s closed, you&apos;ll find me grinding{' '}
              <span className="text-gray-400">300+ DSA problems</span>,
              organizing tournaments at the MAKAUT Sports Club, or deep-diving into whatever technology I haven&apos;t broken yet.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.5}>
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { label: 'CGPA', value: '9.22' },
                { label: 'Problems Solved', value: '300+' },
                { label: 'Projects', value: '5+' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 136, 0.5)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="bg-white/[0.03] border border-white/10 p-5 rounded-xl flex flex-col items-center justify-center text-center cursor-default"
                >
                  <span className="text-[#00ff88] font-mono text-2xl md:text-3xl font-bold">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 mt-2">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
