'use client';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 mt-20">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-2 text-sm text-gray-500 font-mono">
        <p>Designed & Built by Raj Anand</p>
        <p>
          &copy; {new Date().getFullYear()} &bull; Made with{' '}
          <span className="text-[#00ff88]">&lt;/&gt;</span> and ☕
        </p>
      </div>
    </footer>
  );
}
