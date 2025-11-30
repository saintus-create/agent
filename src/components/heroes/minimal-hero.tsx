"use client";

import React, { /* useEffect, useRef */ } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";

export default function MinimalHero() {
  // Particles removed for a cleaner, grid-focused look
  // const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // useEffect(() => { ... }) - Particle logic removed

  return (
    <section className="minimal-root">
      <style>{`
@import url('https://fonts.cdnfonts.com/css/monument-grotesk');

.minimal-root, .minimal-root * {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.minimal-root {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  /* Gradient background for a premium look */
  --bg: linear-gradient(135deg, #18181b, #27272a);
  --fg: #fafafa;
  --muted: #a1a1aa;
  --border: #27272a;
  --accent: #e5e7eb;

  background: var(--bg);
  color: var(--fg);
  /* Monument Grotesk - bold, industrial, premium */
  font-family: 'Monument Grotesk', sans-serif;
  font-stretch: normal;
}

/* header */
.header {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.nav-list {
  display: flex;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
}

.nav-link {
  font-size: 12px;
  font-weight: 400;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  color: var(--fg);
}

/* hero center */
.hero {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  text-align: center;
  pointer-events: none;
  z-index: 5;
}
.kicker {
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--muted);
  margin-bottom: 14px;
}
.title {
  font-weight: 700;
  font-size: clamp(48px, 10vw, 100px);
  line-height: 1.05;
  margin: 0;
  color: var(--fg);
  text-shadow: none;
  letter-spacing: -0.02em;
}
.subtitle {
  margin-top: 24px;
  font-size: clamp(18px, 2.5vw, 24px);
  color: var(--muted);
  font-weight: 500;
}

/* accent lines container */
.accent-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}

/* base line visuals */
.hline, .vline {
  position: absolute;
  background: var(--border);
  opacity: .75;
  will-change: transform, opacity;
}

/* horizontal lines */
.hline {
  height: 1px; left: 0; right: 0;
  transform: scaleX(0);
  transform-origin: 50% 50%;
  animation: drawX 800ms cubic-bezier(.22,.61,.36,1) forwards;
}
.hline:nth-child(1){ top: 20%; animation-delay: 150ms; }
.hline:nth-child(2){ top: 50%; animation-delay: 280ms; }
.hline:nth-child(3){ top: 80%; animation-delay: 410ms; }

/* vertical lines */
.vline {
  width: 1px; top: 0; bottom: 0;
  transform: scaleY(0);
  transform-origin: 50% 0%;
  animation: drawY 900ms cubic-bezier(.22,.61,.36,1) forwards;
}
.vline:nth-child(4){ left: 20%; animation-delay: 520ms; }
.vline:nth-child(5){ left: 50%; animation-delay: 640ms; }
.vline:nth-child(6){ left: 80%; animation-delay: 760ms; }

/* subtle gradient shimmer while drawing */
.hline::after, .vline::after{
  content:"";
  position:absolute;
  inset:0;
  background: linear-gradient(90deg, transparent, rgba(250,250,250,.25), transparent);
  opacity:0;
  animation: shimmer 900ms ease-out forwards;
}
.hline:nth-child(1)::after{ animation-delay: 150ms; }
.hline:nth-child(2)::after{ animation-delay: 280ms; }
.hline:nth-child(3)::after{ animation-delay: 410ms; }
.vline:nth-child(4)::after{ animation-delay: 520ms; }
.vline:nth-child(5)::after{ animation-delay: 640ms; }
.vline:nth-child(6)::after{ animation-delay: 760ms; }

/* keyframes */
@keyframes drawX {
  0% { transform: scaleX(0); opacity: 0; }
  60% { opacity: .9; }
  100% { transform: scaleX(1); opacity: .75; }
}
@keyframes drawY {
  0% { transform: scaleY(0); opacity: 0; }
  60% { opacity: .9; }
  100% { transform: scaleY(1); opacity: .75; }
}
@keyframes shimmer {
  0% { opacity: .0; }
  30% { opacity: .25; }
  100% { opacity: 0; }
}

/* Gradient overlays */
.gradient-top, .gradient-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 150px;
  pointer-events: none;
  z-index: 1;
}
.gradient-top {
  top: 0;
  background: linear-gradient(to bottom, #18181b, transparent);
}
.gradient-bottom {
  bottom: 0;
  background: linear-gradient(to top, #18181b, transparent);
}

/* footer section (copy) */
.content {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 32px 24px;
  border-top: 1px solid var(--border);
  display: grid;
  place-items: center;
  text-align: center;
  gap: 6px;
  z-index: 10;
}
.content .tag {
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.08em;
}
.content .heading {
  font-size: 22px;
  font-weight: 600;
  color: var(--fg);
}
.content .desc {
  font-size: 14px;
  color: var(--muted);
  max-width: 680px;
}
      `}</style>

      {/* Header */}
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li><Link href="/menu" className="nav-link">Menu</Link></li>
            <li><Link href="/blog" className="nav-link">Blog</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="#contact" className="nav-link">Touch</Link></li>
            <li>
              <button type="button" className="nav-link" aria-label="Search">
                <Search size={14} />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Gradient overlays */}
      <div className="gradient-top" aria-hidden="true" />
      <div className="gradient-bottom" aria-hidden="true" />
      {/* Particles removed */}
      {/* <canvas ref={canvasRef} className="particleCanvas" /> */}

      {/* Accent Lines (now animated on mount) */}
      <div className="accent-lines">
        <div className="hline" />
        <div className="hline" />
        <div className="hline" />
        <div className="vline" />
        <div className="vline" />
        <div className="vline" />
      </div>

      {/* Hero */}
      <main className="hero">
        <div>
          <div className="kicker" style={{ textTransform: 'none', letterSpacing: '0.05em', fontSize: '14px', color: 'var(--fg)' }}>
            <TextEffect per="char" preset="fade" delay={0.5}>
              Greetings Citizens
            </TextEffect>
          </div>
          <h1 className="title">
            <TextEffect per="char" preset="fade" delay={1.0}>
              I&apos;m James
            </TextEffect>
          </h1>
          <div className="subtitle" style={{ maxWidth: '600px', margin: '18px auto 0', lineHeight: '1.3' }}>
            <TextEffect per="word" preset="blur" delay={1.5}>
              We are living In the age, In which the pursuit of all values, other than
              money success fame glamour has either been discredited or destroyed
              For we are living in the age of the thing
            </TextEffect>
          </div>
        </div>
      </main>

      {/* Bottom content removed */}
    </section>
  );
}
