# Eudaimon Consulting — Website

A modern, premium multi-page website for Eudaimon Consulting, built with Next.js 14, Tailwind CSS, and Framer Motion.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
eudaimon/
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── globals.css         # Global styles, custom utilities
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── insights/page.tsx   # Insights / thought leadership
│   ├── founder/page.tsx    # Founder profile
│   └── contact/page.tsx    # Contact page with form
├── components/
│   ├── Navbar.tsx          # Responsive sticky navbar
│   ├── Footer.tsx          # Site footer
│   └── AnimatedSection.tsx # Scroll-reveal animation wrapper
├── public/
│   └── assets/
│       ├── logo.jpg        # Eudaimon logo
│       └── founder.jpg     # Founder headshot
├── tailwind.config.ts      # Custom theme (brand colors, fonts)
└── package.json
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, capabilities, differentiators, case study previews, CTA |
| About | `/about` | Philosophy, mission, values, approach |
| Services | `/services` | Detailed service sections with outcomes and case studies |
| Insights | `/insights` | Thought leadership article grid |
| Founder | `/founder` | Parul Kaul Green profile and biography |
| Contact | `/contact` | Contact form and direct contact details |

## Design System

### Brand Colors
- **Crimson**: `#E63946` — Primary accent
- **Cobalt**: `#1D6FA4` — Secondary accent  
- **Amber**: `#F4A01C` — Tertiary accent
- **Charcoal**: `#111111` — Backgrounds

### Typography
- **Display**: Playfair Display (serif) — headlines and hero text
- **Body**: DM Sans — paragraphs and UI text
- **Mono**: JetBrains Mono — labels and accents

### Key CSS Utilities (globals.css)
- `.glass` — frosted glass card effect
- `.gradient-text-*` — branded gradient text
- `.mono-label` — uppercase tracking label style
- `.card-hover` — lift-on-hover effect
- `.reveal` / `.visible` — scroll-triggered reveal animation
- `.display-xl/lg/md` — responsive display typography

## Customisation

### Replacing images
Replace `public/assets/logo.jpg` and `public/assets/founder.jpg` with updated assets.

### Updating content
All page content is co-located within each page file for easy editing.

### Adding pages
Create a new folder in `/app/[page-name]/page.tsx` following the existing pattern.

