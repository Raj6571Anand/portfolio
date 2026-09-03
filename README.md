# 🖥️ Raj Anand — Developer Portfolio

A modern, minimalist developer portfolio with a dark **coder aesthetic** — built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer)](https://www.framer.com/motion)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ Features

- 🌑 **Dark Coder Aesthetic** — Deep dark background (`#0a0a0a`) with neon green accents (`#00ff88`)
- ⌨️ **Terminal Typing Animation** — Hero section cycles through roles with a blinking cursor
- 🎬 **Blur-In Entrance Animations** — Smooth `filter: blur → 0` scroll-triggered reveals via Framer Motion
- ♾️ **Infinite Marquee** — Dual-row skill ticker scrolling in opposite directions
- 🪟 **Glassmorphism Cards** — Project and skill cards with `backdrop-blur` and subtle borders
- 💫 **Spring Physics Hover** — Buttons and cards lift with `stiffness: 400` spring animations
- 📱 **Fully Responsive** — Mobile-first layout with Tailwind breakpoints
- ⚡ **Static Export** — Deployed as a fully static site for blazing speed
- 🎨 **Custom Fonts** — Space Grotesk (headings) · Inter (body) · JetBrains Mono (code elements)

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport intro with terminal typing animation and gradient orb background |
| **About** | Bio, stats (CGPA · Problems Solved · Projects), gradient-bordered avatar placeholder |
| **Skills** | Infinite marquee + glassmorphism category cards (Languages, Frameworks, Databases, Core Concepts) |
| **Projects** | 5 project cards with descriptions, tech tags, GitHub links, and hover glow effects |
| **Contact** | Gmail compose integration, GitHub and LinkedIn social links |

---

## 🚀 Quick Start

### Prerequisites
- Node.js `>=20.9.0`
- npm `>=10`

### Run Locally

```bash
# Clone the repo
git clone https://github.com/Raj6571Anand/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open **http://localhost:3000** in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # CSS variables, scrollbar, marquee animations
│   │   ├── layout.tsx         # Root layout with Navbar + Footer
│   │   └── page.tsx           # Main page — composes all sections
│   └── components/
│       ├── Navbar.tsx          # Sticky navbar with backdrop-blur on scroll
│       ├── Hero.tsx            # Terminal typing animation, gradient orbs
│       ├── About.tsx           # Bio, stats, gradient-border avatar
│       ├── Skills.tsx          # Infinite marquee + category cards
│       ├── Projects.tsx        # Project grid with hover animations
│       ├── Contact.tsx         # Gmail compose CTA + social links
│       └── Footer.tsx          # Minimal footer
├── tailwind.config.ts          # Custom colors, fonts, animations
├── next.config.ts
└── package.json
```

---

## 🎨 Design Tokens

```css
--bg-primary:    #0a0a0a   /* Page background */
--bg-secondary:  #111111   /* Slightly lighter sections */
--bg-card:       #161616   /* Card backgrounds */
--border:        #1e1e1e   /* Subtle borders */
--accent:        #00ff88   /* Neon green — primary accent */
--accent-dim:    #00cc6a   /* Dimmed accent for hover states */
--text-primary:  #e5e5e5   /* Main text */
--text-secondary:#888888   /* Muted text */
--text-muted:    #555555   /* Very muted / labels */
```

**Fonts** (via Google Fonts):
- **Headings**: Space Grotesk
- **Body**: Inter
- **Code / Mono**: JetBrains Mono

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| **Next.js 16** (App Router) | Framework, routing, SSG |
| **React 19** | UI components |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Animations (blur-in, spring, scroll-triggered) |
| **Google Fonts** | Space Grotesk · Inter · JetBrains Mono |
| **Vercel** | Hosting & auto-deployment |

---

## 📦 Deployment

This portfolio is deployed on **Vercel** with automatic CI/CD — every push to `main` triggers a new deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Raj6571Anand/portfolio)

### Manual Deploy

1. Fork this repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your fork — Vercel auto-detects Next.js
4. Click **Deploy** — done in ~60 seconds ✅

---

## 🔧 Customization

To use this as a template for your own portfolio:

1. **Personal info** — Update `src/components/About.tsx` with your bio and stats
2. **Projects** — Edit the `projects` array in `src/components/Projects.tsx`
3. **Skills** — Update `row1`, `row2`, and `categories` in `src/components/Skills.tsx`
4. **Contact links** — Update URLs in `src/components/Contact.tsx`
5. **Accent color** — Change `--accent: #00ff88` in `src/app/globals.css`
6. **Metadata** — Update `title` and `description` in `src/app/layout.tsx`

---

## 📄 License

MIT License — free to use, fork, and adapt with attribution.

---

Built with ⚡ and ☕ by [Raj Anand](https://github.com/Raj6571Anand)
