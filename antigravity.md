# NEW — Naeem Engineering Works | Website Documentation

> **Project:** NEW — Naeem Engineering Works Industrial Website  
> **Built With:** React.js (Vite) + Bootstrap 5 + React Router DOM  
> **Color Theme:** Black (#0a0a0a) and Red (#c0392b)  
> **Fonts:** Oswald (headings), Rajdhani (labels), Inter (body)  
> **Repo Location:** `e:/NEW 3`

---

## 📁 Project Structure

```
NEW 3/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed top navbar with active link states
│   │   └── Footer.jsx        # Multi-column footer with social links
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with hero, services, stats, CTA
│   │   ├── About.jsx         # Company story, timeline, values, team
│   │   ├── Products.jsx      # Filterable product catalog (9 products)
│   │   └── Contact.jsx       # Contact form + info + WhatsApp + map
│   ├── App.jsx               # Router setup with all routes
│   ├── main.jsx              # App entry point
│   └── index.css             # Global design system & custom CSS
├── index.html                # HTML shell
├── package.json
├── vite.config.js
└── antigravity.md            # This file
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--red` | `#c0392b` | Primary accent, buttons, borders |
| `--red-dark` | `#96281b` | Hover states, gradients |
| `--red-light` | `#e74c3c` | Highlights |
| `--black` | `#0a0a0a` | Page background |
| `--black-mid` | `#111111` | Section alternating background |
| `--black-soft` | `#1a1a1a` | Card backgrounds |
| `--gray-dark` | `#222222` | Borders, subtle fills |
| `--text-muted` | `#999999` | Secondary text |
| `--white` | `#ffffff` | Primary text |

### Typography

| Font | Usage |
|---|---|
| **Oswald** (700/600) | Section headings, titles, stats |
| **Rajdhani** (600) | Badges, labels, nav items, uppercase UI |
| **Inter** (400/500) | Body copy, descriptions, form text |

### Key CSS Classes

| Class | Description |
|---|---|
| `.btn-industrial` | Red angled CTA button with clip-path |
| `.btn-outline-industrial` | Outlined red button |
| `.industrial-card` | Dark card with red left-border on hover |
| `.product-card` | Product card with image zoom on hover |
| `.section-badge` | Small red uppercase tag pill |
| `.section-title` | Large heading with red underline |
| `.form-industrial` | Dark themed input field |
| `.marquee-strip` | Red scrolling ticker |
| `.gear-spin` | CSS rotating gear animation |
| `.page-hero` | Inner page hero banner with grid bg |
| `.section-pad` | 90px top/bottom padding |
| `.red-divider` | Thin red gradient line divider |

---

## 📄 Pages

### 1. Home (`/`)
- **Hero Section** — Full viewport with animated floating gears, headline, CTA buttons, inline stats, decorative panel
- **Marquee Strip** — Scrolling red ticker with industrial keywords
- **Services Section** — 6-card grid (Heavy Machinery, Steel Fabrication, Equipment Supply, Maintenance, Consulting, Plant Installation)
- **Stats Counter** — 30+ years, 100+ projects, 20+ engineers, 15+ countries
- **Why Choose Us** — Feature list + 4 metric boxes
- **CTA Banner** — Red diagonal-stripe background with action buttons

### 2. About (`/about`)
- **Page Hero** — Title banner with breadcrumb
- **Mission & Vision** — Story text + two info blocks
- **Core Values** — 4-card grid (Quality, Integrity, Innovation, Teamwork)
- **Team** — 4 leadership members with avatar initials

### 3. Products (`/products`)
- **Page Hero** — Title banner with breadcrumb
- **Sticky Filter Bar** — Category tabs (All, Machinery, Fabrication, Hydraulics, Conveyor, CNC) + search input
- **Product Grid** — 9 products with specs, tags (Best Seller, New, Popular, Heavy Duty), quote request buttons
- **Custom CTA** — For bespoke product requests

**Products List:**
1. Industrial Hydraulic Press (Hydraulics)
2. CNC Plasma Cutter (CNC)
3. Heavy Conveyor System (Conveyor)
4. Steel Fabrication Unit (Fabrication)
5. Industrial Lathe Machine (Machinery)
6. Centrifugal Pump Set (Hydraulics)
7. CNC Milling Machine (CNC)
8. Overhead Bridge Crane (Machinery)
9. Roller Conveyor Line (Conveyor)

### 4. Contact (`/contact`)
- **Page Hero** — Title banner with breadcrumb
- **Quote Form** — Full form: Name, Email, Phone, Company, Subject (dropdown), Message
- **Success State** — Green-style notification on submit
- **Contact Info Cards** — Address, Phone, Email, Working Hours
- **WhatsApp Button** — Direct WhatsApp chat link (teal)
- **Map Placeholder** — Styled dark grid map with Google Maps link

---

## 🧩 Components

### Navbar (`/src/components/Navbar.jsx`)
- Fixed top position, backdrop blur
- Logo: `FERRO` + `TECH` (red accent) with gear icon
- Active route highlighting via `NavLink`
- Scroll-triggered shadow
- Mobile hamburger toggle with animated open/close
- "Get Quote" CTA button in nav

### Footer (`/src/components/Footer.jsx`)
- 4-column layout: Brand, Quick Links, Products, Contact Info
- Social icons: Facebook, Twitter, LinkedIn, YouTube
- Hover animations on links and social icons
- Bottom bar with copyright and tagline

---

## 🚀 Running the Project

```bash
# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Dev server URL:** http://localhost:5173

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19 | UI framework |
| `react-dom` | ^19 | DOM rendering |
| `react-router-dom` | latest | Client-side routing |
| `bootstrap` | latest | CSS framework |
| `react-bootstrap` | latest | Bootstrap React components |
| `react-icons` | latest | Icon library (Font Awesome icons) |
| `aos` | latest | Animate on scroll (available, not yet wired) |
| `vite` | ^6 | Build tool & dev server |

---

## 🏷️ Branding

- **Company Name:** Naeem Engineering Works (NEW)
- **Tagline:** Precision. Power. Performance.
- **Industry:** Heavy Engineering, Machinery, Fabrication
- **Location:** Karachi, Pakistan
- **Est.:** 1994
- **Certifications:** ISO 9001:2015, PSQCA

---

## ✅ Features Checklist

- [x] Responsive design (mobile-first Bootstrap grid)
- [x] Fixed navbar with active state
- [x] Animated hero with parallax gear effects
- [x] Scrolling marquee ticker
- [x] Service cards with hover effects
- [x] Statistics section
- [x] Product grid with category filters + search
- [x] Contact form with validation and success state
- [x] WhatsApp integration
- [x] Footer with social links
- [x] Custom scrollbar (red)
- [x] Google Fonts (Oswald, Rajdhani, Inter)
- [x] CSS custom properties design system
- [x] Clip-path polygon UI elements
- [x] Gear rotation animations
- [ ] AOS scroll animations (wired up — ready to enable)
- [ ] Real image assets (placeholder gear icons used)
- [ ] Backend form submission
- [ ] Google Maps embed (currently placeholder)

---

## 🔮 Future Enhancements

1. **Real product images** — Replace gear icon placeholders with actual product photos
2. **Form backend** — Connect to EmailJS or a Node.js API for actual email sending
3. **Google Maps embed** — Replace placeholder with live iframe map
4. **AOS animations** — Enable scroll-triggered animations across all sections
5. **Product detail pages** — Individual product pages with full specs and gallery
6. **Multilingual support** — Add Urdu/Arabic language toggle
7. **WhatsApp catalog** — Link product cards directly to WhatsApp product catalog
8. **CMS integration** — Headless CMS for easy product/content management

---

*Last updated: May 2025 | Maintained by Antigravity AI*
