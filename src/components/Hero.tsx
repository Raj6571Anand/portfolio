'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Backend Developer',
  'Flutter Developer',
  'Algorithm Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.substring(0, currentText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (currentText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] text-white overflow-hidden">
      {/* Animated gradient orb */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[#00ff88] mb-4 text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-100 mb-2"
          >
            Raj Anand
            <span className="text-[#00ff88]">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center mb-8 mt-2"
          >
            <span className="font-mono text-[#00ff88] mr-3 text-xl md:text-2xl">&gt;</span>
            <span className="font-mono text-2xl md:text-3xl lg:text-4xl text-gray-400 h-[36px] md:h-[44px] lg:h-[52px] flex items-center">
              {currentText}
              <span className="inline-block w-[3px] h-[24px] md:h-[32px] lg:h-[40px] bg-[#00ff88] ml-1 cursor-blink" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed mb-12"
          >
            I architect backend systems that don&apos;t break and optimization
            algorithms that find solutions humans can&apos;t. Clean code, elegant
            solutions, zero compromises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="px-8 py-4 bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88] rounded font-mono text-sm hover:bg-[#00ff88]/20 transition-colors flex items-center justify-center"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: '#00ff88' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="px-8 py-4 bg-transparent text-gray-300 border border-gray-600 rounded font-mono text-sm hover:text-white transition-colors flex items-center justify-center"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator — positioned safely at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="font-mono text-[10px] text-gray-600 mb-2 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-[2px] h-[6px] bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
