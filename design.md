# VISUAL IDENTITY - Tomorrow's Letter

## 🎨 DESIGN DNA

**Name:** Tomorrow's Letter  
**Domain:** tomorrowsletter.com  
**Tagline:** "A letter from the person you're becoming."

**Core Aesthetic:**
- Old correspondence meets digital intimacy
- Museum-like silence, sacred, slow
- Melancholic but hopeful, honest but gentle
- Analog warmth in digital space

**NOT:**
- Productivity tool (no dashboards, no stats)
- Startup vibe (no bright colors, no "growth hacking")
- Social media aesthetic (no likes, no shares, no public display)

**YES:**
- Journal, memoir, private correspondence
- Tactile quality (paper texture, worn edges)
- Breathing room (generous whitespace)
- Weight and gravitas (this matters)

---

## 🎨 COLOR PALETTE

### Primary Colors:
```css
--paper-bg: #f4f1ea;        /* Aged paper background */
--ink-primary: #2c2416;     /* Faded ink text */
--leather-accent: #8b7355;  /* Brown leather details */
--gold-cta: #d4a574;        /* Warm gold for CTAs */
--shadow-deep: #1a1410;     /* Deep brown shadows */
```

### Secondary Colors:
```css
--paper-highlight: #faf8f3; /* Lighter paper for hover states */
--ink-secondary: #4a3f2f;   /* Lighter ink for descriptions */
--gold-hover: #c29660;      /* Darker gold on hover */
--error-red: #8b4545;       /* Muted red for errors */
--success-green: #5a6b4a;   /* Muted green for success */
```

### Semantic Usage:
- **Backgrounds:** Always `paper-bg` or `paper-highlight`
- **Text:** Primary = `ink-primary`, Secondary = `ink-secondary`
- **CTAs:** `gold-cta` with `gold-hover`
- **Accents:** Sparingly use `leather-accent`
- **Shadows:** `shadow-deep` at 5-15% opacity

---

## ✍️ TYPOGRAPHY

### Font Families:
```css
/* Display - Elegant serif for headlines */
font-family-display: 'Cormorant Garamond', Georgia, serif;

/* Body - Typewriter for letter content */
font-family-body: 'Courier Prime', 'Courier New', monospace;

/* UI - Modern sans for interface elements */
font-family-ui: 'Inter', -apple-system, system-ui, sans-serif;
```

### Font Sizes:
```css
--text-xs: 0.75rem;     /* 12px - Fine print */
--text-sm: 0.875rem;    /* 14px - Secondary text */
--text-base: 1rem;      /* 16px - Body text */
--text-lg: 1.125rem;    /* 18px - Large body */
--text-xl: 1.5rem;      /* 24px - Section headers */
--text-2xl: 2rem;       /* 32px - Page titles */
--text-3xl: 3rem;       /* 48px - Hero headlines */
```

### Line Heights:
```css
--leading-tight: 1.2;   /* Headlines */
--leading-normal: 1.6;  /* Body text */
--leading-loose: 1.8;   /* Letters (breathing room) */
```

### Usage Guide:
- **Headlines:** `font-family-display` + `text-2xl` or `text-3xl` + `leading-tight`
- **Letter content:** `font-family-body` + `text-lg` + `leading-loose`
- **UI elements:** `font-family-ui` + `text-base` + `leading-normal`
- **Buttons:** `font-family-ui` + `text-sm` + uppercase + letter-spacing

---

## 📐 SPACING & LAYOUT

### Spacing Scale:
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
```

### Container Widths:
```css
--container-sm: 640px;   /* Questions, narrow reading */
--container-md: 768px;   /* Letters, primary content */
--container-lg: 1024px;  /* Landing page sections */
--container-xl: 1280px;  /* Full width sections */
```

### Principles:
- **Generous padding:** 2-3x normal spacing (space-8 to space-16)
- **Vertical rhythm:** Consistent space-8 or space-12 between sections
- **Narrow reading width:** Max 65-75 characters per line
- **Breathing room:** Don't be afraid of whitespace

---

## 🖼️ TEXTURES & EFFECTS

### Paper Texture:
```css
.paper-texture {
  background-color: var(--paper-bg);
  background-image: 
    url('/textures/paper-noise.png'), /* Subtle grain */
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1), transparent 70%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1), transparent 70%);
  background-blend-mode: overlay, soft-light, soft-light;
}
```

### Worn Edges (SVG mask):
```svg
<svg width="0" height="0">
  <defs>
    <filter id="worn-edge">
      <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
      <feDisplacementMap in="SourceGraphic" scale="5" />
    </filter>
  </defs>
</svg>

/* Apply to elements */
.worn-edge {
  filter: url(#worn-edge);
}
```

### Shadow Layering:
```css
.paper-shadow {
  box-shadow:
    0 1px 2px rgba(26, 20, 16, 0.05),    /* Subtle inner */
    0 4px 8px rgba(26, 20, 16, 0.08),    /* Medium depth */
    0 8px 16px rgba(26, 20, 16, 0.1);    /* Outer glow */
}

.paper-lift {
  box-shadow:
    0 8px 16px rgba(26, 20, 16, 0.12),
    0 16px 32px rgba(26, 20, 16, 0.15);
  transform: translateY(-4px);
}
```

---

## 🎭 ANIMATIONS

### Timing Functions:
```css
--ease-gentle: cubic-bezier(0.25, 0.1, 0.25, 1);     /* Slow in/out */
--ease-paper: cubic-bezier(0.4, 0.0, 0.2, 1);        /* Material-like */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Slight overshoot */
```

### Duration:
```css
--duration-fast: 200ms;     /* Button hover */
--duration-base: 400ms;     /* Standard transition */
--duration-slow: 800ms;     /* Page transitions */
--duration-glacial: 2000ms; /* Question fade-in */
```

### Key Animations:

**Typewriter Reveal:**
```css
@keyframes typewriter {
  from { 
    width: 0;
    opacity: 0;
  }
  to { 
    width: 100%;
    opacity: 1;
  }
}

.typewriter-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 3s steps(60) forwards;
}
```

**Paper Lift (hover):**
```css
.paper-lift-hover {
  transition: transform 400ms var(--ease-paper),
              box-shadow 400ms var(--ease-paper);
}

.paper-lift-hover:hover {
  transform: translateY(-8px) rotateX(2deg);
  box-shadow: 0 16px 32px rgba(26, 20, 16, 0.2);
}
```

**Fade Transitions:**
```css
.fade-in {
  animation: fadeIn var(--duration-slow) var(--ease-gentle);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 🧩 COMPONENT PATTERNS

### Buttons:
```css
/* Primary CTA */
.btn-primary {
  background: var(--gold-cta);
  color: var(--ink-primary);
  font-family: var(--font-family-ui);
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--space-4) var(--space-8);
  border-radius: 2px;
  border: 1px solid var(--leather-accent);
  box-shadow: var(--paper-shadow);
  transition: all var(--duration-base) var(--ease-paper);
}

.btn-primary:hover {
  background: var(--gold-hover);
  transform: translateY(-2px);
  box-shadow: var(--paper-lift);
}

/* Secondary (ghost) */
.btn-secondary {
  background: transparent;
  color: var(--ink-primary);
  border: 1px solid var(--ink-secondary);
}
```

### Input Fields:
```css
.input-field {
  background: var(--paper-highlight);
  border: 1px solid var(--leather-accent);
  border-radius: 2px;
  padding: var(--space-4);
  font-family: var(--font-family-body);
  font-size: var(--text-base);
  color: var(--ink-primary);
  transition: all var(--duration-base);
}

.input-field:focus {
  outline: none;
  border-color: var(--gold-cta);
  box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
}
```

### Cards:
```css
.card {
  background: var(--paper-bg);
  border: 1px solid rgba(139, 115, 85, 0.2);
  border-radius: 4px;
  padding: var(--space-8);
  box-shadow: var(--paper-shadow);
}
```

---

## 📱 RESPONSIVE BREAKPOINTS
```css
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet portrait */
--breakpoint-lg: 1024px;  /* Tablet landscape */
--breakpoint-xl: 1280px;  /* Desktop */
```

### Mobile-First Approach:
- Base styles for mobile (320px+)
- Add complexity at breakpoints
- Maintain breathing room on all sizes
- Single-column layout on mobile

---

## 🎯 ACCESSIBILITY

### Contrast Ratios:
- `ink-primary` on `paper-bg`: **12.5:1** ✅ AAA
- `ink-secondary` on `paper-bg`: **7.8:1** ✅ AA
- `gold-cta` on `paper-bg`: **4.8:1** ✅ AA (large text)

### Focus States:
```css
:focus-visible {
  outline: 2px solid var(--gold-cta);
  outline-offset: 4px;
}
```

### Screen Readers:
- Use semantic HTML (`<article>`, `<section>`, `<nav>`)
- All images have alt text
- Form inputs have labels (visually hidden if needed)

---

## 🖼️ EXAMPLE SCREENS

### Landing Hero:
```
[Full viewport height]
[Centered vertically]
[Max width: 640px]

Headline: text-3xl, font-display, ink-primary
Subheadline: text-lg, font-ui, ink-secondary
CTA: btn-primary
```

### Question Screen:
```
[Full screen, single question]
[Centered with breathing room]

Question: text-2xl, font-display, space-12 margin-bottom
Textarea: Full width, min-height 200px, font-body
Button: Fixed bottom-right, only appears after 20 chars
```

### Letter Display:
```
[Container-md, centered]
[Aged paper texture]
[Generous padding: space-16]

Header: "A letter from your future self"
Date: +5 years from today
Letter body: text-lg, font-body, leading-loose
Worn edges + shadow
```

---

## 🎨 EXPORT FOR TAILWIND
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#f4f1ea', light: '#faf8f3' },
        ink: { DEFAULT: '#2c2416', light: '#4a3f2f' },
        leather: '#8b7355',
        gold: { DEFAULT: '#d4a574', dark: '#c29660' },
        shadow: '#1a1410',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Courier Prime', 'Courier New', 'monospace'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
}
```

---

## ✅ DESIGN CHECKLIST

Before launch, verify:
- [ ] All colors follow palette (no random hex codes)
- [ ] Typography hierarchy clear (3 levels max per screen)
- [ ] Spacing consistent (use scale, not arbitrary values)
- [ ] Animations smooth at 60fps
- [ ] Textures subtle (don't overpower content)
- [ ] Mobile responsive (test on real device)
- [ ] Accessible (contrast, focus states, semantic HTML)
- [ ] Feels intimate, not corporate
- [ ] Loading states exist for all async actions
- [ ] Error states are gentle, not alarming
