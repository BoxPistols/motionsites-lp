# MotionSites LP

Dark premium LP built with React + Vite + TypeScript + Tailwind CSS v4.

**Live Demo**: https://boxpistols.github.io/motionsites-lp/

---

## Quick Start

```bash
npm install
npm run dev
```

## Tech Stack

| Library | Role |
|---------|------|
| React 19 + Vite 8 | Framework + Bundler |
| TypeScript 5.9 | Type safety |
| Tailwind CSS 4.2 | Utility CSS (`@tailwindcss/vite`) |
| motion (framer-motion) | Scroll / entry animations |
| lucide-react | SVG icons |
| hls.js | HLS video streaming |

---

## Sections

| # | Section | Key Feature |
|---|---------|-------------|
| 1 | Navbar | Fixed, liquid-glass nav pill |
| 2 | Hero | Animated orbs + BlurText heading |
| 3 | Partners | Logo-style partner names |
| 4 | How It Works | HLS video background + fades |
| 5 | Features Chess | Alternating text/image rows |
| 6 | Features Grid | 4-column liquid-glass cards |
| 7 | Stats | Desaturated video + glass card |
| 8 | Testimonials | 3-column quote cards |
| 9 | CTA Footer | HLS video background + footer |

---

## Deploy

GitHub Pages via Actions — auto-deploys on push to `main`.

---

# Recreation Prompt

> **以下のプロンプトを Claude にコピペすると、この LP を完全再現できます。**
>
> `{...}` を差し替えれば、別テーマの LP にも応用可能。

---

## 1. Overview

| Item | Value |
|------|-------|
| Type | Single-page Landing Page |
| Theme | {AI-powered web design agency} |
| Aesthetic | Dark, premium, Apple-inspired |
| Background | Pure black `#000` throughout |
| Stack | React + Vite + TypeScript + Tailwind CSS v4 |

### Dependencies (install these only)

```
motion          — framer-motion animations
lucide-react    — SVG icon library
hls.js          — HLS video streaming (optional)
```

### Critical Constraints

- Do NOT use `shadcn/ui` — implement liquid glass as raw CSS
- Use Tailwind v4 with `@theme inline`
- Specify fonts via **inline `style={{}}`**, NOT Tailwind `font-*` classes (unreliable in v4)
- Set `style={{ background: '#000' }}` on every section explicitly
- Always provide **visual fallback** (orbs + glow + grid) for when videos fail to load
- Place liquid-glass CSS **globally** in `index.css` — NOT inside `@layer components` (gets stripped in v4)
- Use `overflow-hidden` on all video background sections
- Use `min-height: 100vh` instead of fixed `height` values
- Add `overflow-x: hidden` to `body`

---

## 2. Design System

### 2.1 Fonts (Google Fonts)

| Role | Font | Weight | How to Apply |
|------|------|--------|--------------|
| Headings | Instrument Serif | italic only | `style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}` |
| Body | Barlow | 300, 400, 500, 600 | `style={{ fontFamily: "'Barlow', sans-serif" }}` |

```html
<!-- index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

### 2.2 Color Hierarchy (Dark Theme)

| Purpose | Value | Usage |
|---------|-------|-------|
| Background | `#000000` | All section backgrounds |
| Heading | `#ffffff` | h1, h2, h3 |
| Body (primary) | `rgba(255,255,255,0.8)` | Descriptions, quotes |
| Body (secondary) | `rgba(255,255,255,0.55-0.6)` | Subtexts |
| Body (tertiary) | `rgba(255,255,255,0.4)` | Footer, captions |
| Accent | `rgba(120,80,255,0.6)` | Orb glow, heading glow |

### 2.3 Typography Rules

| Element | Size | lineHeight | letterSpacing |
|---------|------|------------|---------------|
| Hero heading | `clamp(3.5rem, 9vw, 7rem)` | `0.88` | `-3px` |
| Section heading | `clamp(2.25rem, 5vw, 3.75rem)` | `0.9` | `-0.025em` |
| Sub heading | `clamp(1.5rem, 3vw, 1.875rem)` | `0.9` | `-0.025em` |
| Body text | `0.875rem` or `1.05rem` | `1.6-1.7` | — |
| Badge / Label | `0.75rem` | — | — |

> **Important**: Use `clamp()` for all responsive text. No media query font-size switching.

### 2.4 Interactive Elements

- All buttons / pills: `rounded-full` shape
- `cursor-pointer` on everything clickable
- `transition-colors` for hover effects
- Never use `scale` on hover (causes layout shift)

---

## 3. Liquid Glass CSS

### Write directly in `index.css` — do NOT use `@layer components`

```css
/* Liquid Glass - subtle (badges, nav pill, cards) */
.liquid-glass {
  background: rgba(255, 255, 255, 0.03);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Liquid Glass - strong (CTA buttons, icon containers) */
.liquid-glass-strong {
  background: rgba(255, 255, 255, 0.03);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05),
    inset 0 1px 1px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
/* Same ::before as .liquid-glass but with 0.5/0.2 opacity gradient */
```

---

## 4. Hero Visual Fallback (Most Important)

### The hero MUST look stunning even without video. Add these CSS backgrounds:

```css
/* 3 animated gradient orbs */
@keyframes orb-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(80px, -60px) scale(1.15); }
  66% { transform: translate(-40px, 40px) scale(0.9); }
}
/* orb-float-2: 25s, opposite direction */
/* orb-float-3: 18s, diagonal movement */

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  pointer-events: none;
  will-change: transform;
}

.hero-orb-1 {  /* 600x600, purple rgba(120,80,255,0.6), top:10% left:15%, 20s */  }
.hero-orb-2 {  /* 500x500, cyan rgba(0,180,255,0.5), top:30% right:10%, 25s */  }
.hero-orb-3 {  /* 400x400, violet rgba(180,60,255,0.4), bottom:10% left:40%, 18s */  }

/* Heading glow */
.hero-glow {
  position: absolute;
  width: 700px; height: 300px;
  top: 50%; left: 50%;
  transform: translate(-50%, -60%);
  background: radial-gradient(ellipse, rgba(140,80,255,0.2) 0%, transparent 70%);
  pointer-events: none;
}

/* Subtle grid pattern */
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 80%);
  pointer-events: none;
}
```

### Hero z-index Stack

```
z-0  : Video (optional) — opacity-40, mix-blend-mode: screen
z-0  : 3 animated orbs
z-0  : Grid pattern
z-0  : Heading glow
z-1  : Bottom fade overlay (400px gradient → black)
z-10 : Content (Badge → Heading → Subtext → CTAs)
```

---

## 5. Shared Components

### 5.1 BlurText (word-by-word reveal)

- `motion/react` for per-word animation
- `IntersectionObserver` triggers on viewport entry
- `blur(10px)` → `blur(0px)`, `opacity: 0` → `1`, `y: 50` → `0`
- Stagger: 80ms per word, duration 0.35s each
- **Use ONLY on hero heading** — do not overuse

### 5.2 HLSVideo

- `hls.js` for HLS streaming
- Safari fallback via `canPlayType('application/vnd.apple.mpegurl')`
- Always: `autoPlay loop muted playsInline`

### 5.3 Badge (section label)

```tsx
<span className="liquid-glass rounded-full inline-block mb-4"
  style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500,
           color: '#fff', fontSize: '0.75rem', padding: '0.25rem 0.875rem' }}>
  {children}
</span>
```

### 5.4 Video Fade Overlays

```css
.video-fade-top {
  position: absolute; top: 0; left: 0; right: 0;
  height: 200px;
  background: linear-gradient(to bottom, black, transparent);
  z-index: 1; pointer-events: none;
}
.video-fade-bottom {
  /* Same, but bottom: 0 and gradient: to top */
}
```

---

## 6. Page Sections

### Outer Wrapper

```tsx
<div className="bg-black overflow-visible">
  <Navbar />
  <Hero />
  <Partners />
  <HowItWorks />
  <FeaturesChess />
  <FeaturesGrid />
  <Stats />
  <Testimonials />
  <CTAFooter />
</div>
```

### Section 1 — NAVBAR (fixed)

| Property | Value |
|----------|-------|
| Position | `fixed top-4 left-0 right-0 z-50 px-6 md:px-8` |
| Layout | Left: logo (48x48) / Center: nav pill / Right: CTA |

- **Logo**: `w-12 h-12 rounded-full bg-white/10` + `backdrop-filter: blur(10px)`, heading font "M"
- **Nav pill**: `liquid-glass rounded-full` containing 5 links: Home, Services, Work, Process, Pricing
- **CTA**: `bg-white text-black rounded-full` + `ArrowUpRight` icon

---

### Section 2 — HERO (100vh)

| Property | Value |
|----------|-------|
| Height | `min-height: 100vh` (NOT fixed height) |
| Overflow | `hidden` |
| Padding | `paddingTop: '20vh', paddingBottom: '15vh'` |

**Background layers**: 3 orbs + grid + glow + optional video

**Content (z-10, centered)**:
1. **Badge pill**: `liquid-glass rounded-full` → `"New"` tag (white bg) + `"Introducing AI-powered web design."`
2. **Heading**: `BlurText` → `"The Website Your Brand Deserves"` — `clamp(3.5rem, 9vw, 7rem)`, italic serif
3. **Subtext**: `motion.p` (delay 0.8s) — `"Stunning design. Blazing performance..."`
4. **CTAs**: `motion.div` (delay 1.1s) — `liquid-glass-strong` "Get Started" + text-only "Watch the Film"

---

### Section 3 — PARTNERS

| Property | Value |
|----------|-------|
| Layout | Centered, `py-20` |
| Badge | `"Trusted by the teams behind"` |
| Names | `"Stripe"`, `"Vercel"`, `"Linear"`, `"Notion"`, `"Figma"` — heading font italic, `gap-8 md:gap-12` |

---

### Section 4 — HOW IT WORKS (video bg)

| Property | Value |
|----------|-------|
| Min height | `700px`, `overflow-hidden` |
| Background | HLS video + top/bottom fades |
| Content | Badge + heading + subtext + CTA, centered |

- Badge: `"How It Works"`
- Heading: `"You dream it. We ship it."`
- Subtext: `"Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters."`

---

### Section 5 — FEATURES CHESS (alternating rows)

| Property | Value |
|----------|-------|
| Layout | `flex-col gap-20`, max-w-6xl |

**Row 1** (text left, image right):
- H3: `"Designed to convert. Built to perform."`
- Button: `liquid-glass-strong` → `"Learn more"`
- Image: in `liquid-glass rounded-2xl overflow-hidden`

**Row 2** (image left, text right — `lg:flex-row-reverse`):
- H3: `"It gets smarter. Automatically."`
- Button: `"See how it works"`

---

### Section 6 — FEATURES GRID (4 columns)

| Property | Value |
|----------|-------|
| Grid | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` |

**4 Cards** (each: `liquid-glass rounded-2xl p-6`):

| Icon | Title | Description |
|------|-------|-------------|
| `Zap` | Days, Not Months | Concept to launch at a pace that redefines fast. |
| `Palette` | Obsessively Crafted | Every detail considered. Every element refined. |
| `BarChart3` | Built to Convert | Layouts informed by data. Decisions backed by performance. |
| `Shield` | Secure by Default | Enterprise-grade protection comes standard. |

Icon: `liquid-glass-strong rounded-full w-10 h-10`

---

### Section 7 — STATS (video bg + glass card)

| Property | Value |
|----------|-------|
| Background video | HLS, desaturated: `filter: saturate(0)` |
| Card | `liquid-glass rounded-3xl`, centered, responsive padding |
| Grid | `grid-cols-2 lg:grid-cols-4 gap-8 text-center` |

| Value | Label |
|-------|-------|
| 200+ | Sites launched |
| 98% | Client satisfaction |
| 3.2x | More conversions |
| 5 days | Average delivery |

---

### Section 8 — TESTIMONIALS (3 columns)

| Property | Value |
|----------|-------|
| Grid | `grid-cols-1 md:grid-cols-3 gap-6` |
| Card | `liquid-glass rounded-2xl p-8` |

| Name | Role | Quote |
|------|------|-------|
| Sarah Chen | CEO, Luminary | "A complete rebuild in five days..." |
| Marcus Webb | Head of Growth, Arcline | "Conversions up 4x..." |
| Elena Voss | Brand Director, Helix | "They didn't just design our site..." |

---

### Section 9 — CTA FOOTER (video bg)

| Property | Value |
|----------|-------|
| Background | HLS video + top/bottom fades |
| Heading | `"Your next website starts here."` — `clamp(3rem, 6vw, 4.5rem)` |
| Buttons | `liquid-glass-strong` "Book a Call" + `bg-white text-black` "View Pricing" |
| Footer | `border-top: 1px solid rgba(255,255,255,0.1)`, `marginTop: 8rem` |
| Footer left | `"© 2026 Studio"` — `rgba(255,255,255,0.4) 0.75rem` |
| Footer right | Privacy, Terms, Contact links |

---

## 7. Animation Rules

| Pattern | Where | Config |
|---------|-------|--------|
| BlurText | Hero heading only | per-word, 80ms stagger, 0.35s duration |
| fade-in-up | Badge, subtext, CTAs | `opacity: 0→1, y: 20→0`, 0.6s |
| whileInView | Section headings, cards | `viewport: { once: true, margin: '-50px' }` |
| stagger | Grid cards | `delay: i * 0.1` |
| orb-float | Hero orbs | 18-25s cycle, ease-in-out, infinite |

### Required: `prefers-reduced-motion` support

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Tailwind v4 CSS Template (`index.css`)

```css
@import "tailwindcss";

@theme inline {
  --color-foreground: #ffffff;
  --color-primary: #ffffff;
  --font-heading: 'Instrument Serif', serif;
  --font-body: 'Barlow', sans-serif;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Barlow', sans-serif;
  background: #000;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* Then add:
   1. prefers-reduced-motion
   2. Hero orb keyframes (3) + .hero-orb classes (3)
   3. .hero-glow, .hero-grid
   4. .liquid-glass + ::before
   5. .liquid-glass-strong + ::before
   6. .video-fade-top, .video-fade-bottom
*/
```

---

## 9. Common Mistakes & Fixes

| Mistake | Fix |
|---------|-----|
| Video doesn't load → black void | Always add orb + glow + grid fallback |
| `@layer components` strips liquid-glass | Define globally (no `@layer`) |
| Tailwind v4 `font-heading` doesn't work | Use inline `style={{ fontFamily }}` |
| `overflow-visible` causes horizontal scroll | Use `overflow-hidden` on video sections |
| `height: 1000px` leaves blank space | Use `min-height: 100vh` + padding |
| Heading line-height too loose | Set `lineHeight: 0.85-0.9` explicitly |
| Hover `scale` → layout shift | Use `bg-white/10` or opacity changes |
| Emoji used as icon | Use Lucide SVG icons only |
| No `overflow-x: hidden` on body | Orbs overflow — always add it |
| `@plugin "tailwindcss-animate"` unused | Remove — causes unnecessary CSS bloat |

---

## 10. Pre-Delivery Checklist

### Visual Quality
- [ ] Hero has impact even without video (orbs + glow visible)
- [ ] Liquid-glass border gradients are visible
- [ ] Fonts load correctly (italic serif + sans-serif)
- [ ] Color hierarchy is correct (white → 60% → 40%)

### Layout
- [ ] No horizontal scrollbar
- [ ] Navbar doesn't overlap content (top-4 gap)
- [ ] All sections have `#000` background
- [ ] Video sections have `overflow-hidden`

### Interaction
- [ ] All buttons have `cursor-pointer`
- [ ] No layout shift on hover
- [ ] `prefers-reduced-motion` disables animations

### Performance
- [ ] Orbs have `will-change: transform`
- [ ] Videos have `muted playsInline`
- [ ] Below-fold images have `loading="lazy"`
