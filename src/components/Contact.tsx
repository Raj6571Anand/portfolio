'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-4xl mx-auto text-center scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-10"
      >
        <h2 className="text-2xl md:text-3xl font-mono text-[#00ff88]">
          {'// get in touch'}
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Got a project, a question, or just want to say hi?
          <br />
          My inbox is always open &mdash; let&apos;s build something together.
        </p>

        <div>
          <a
            href="https://mail.google.com/mail/?view=cm&to=rajanandreads@gmail.com&su=Hello%20Raj!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00ff88] text-[#0a0a0a] font-bold font-mono px-10 py-4 rounded-lg hover:bg-[#00ff88]/90 hover:shadow-[0_0_30px_rgba(0,255,136,0.25)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Say Hello →
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-10 flex-wrap pt-8"
        >
          <SocialLink href="https://github.com/Raj6571Anand" label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/raj-anand-887b12259/"
            label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://mail.google.com/mail/?view=cm&to=rajanandreads@gmail.com&su=Hello%20Raj!" label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </SocialLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  const isExternal = !href.startsWith('mailto:') && !href.startsWith('tel:');

  return (
    <a
      href={href}
      className="group flex items-center gap-2.5 text-gray-500 hover:text-[#00ff88] hover:-translate-y-1 transition-all duration-300"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <span className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:bg-[#00ff88]/10 group-hover:border-[#00ff88]/20 transition-all duration-300">
        {children}
      </span>
      <span className="font-mono text-sm">{label}</span>
    </a>
  );
}
