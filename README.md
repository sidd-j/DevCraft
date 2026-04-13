# DevCraft Studio — React Version

This is the React conversion of the DevCraft Studio website. The design is identical to the original HTML/CSS version.

## Project Structure

```
devcraft-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── (place your images here — P1.jpeg, P2.jpeg ... S1.jpg ... S9.jpg)
└── src/
    ├── main.jsx              ← Entry point
    ├── App.jsx               ← Root component, page state management
    ├── styles.css            ← Original CSS (unchanged)
    ├── components/
    │   ├── Navbar.jsx        ← Sticky navbar with scroll shadow
    │   ├── MobileNav.jsx     ← Mobile fullscreen menu
    │   ├── Footer.jsx        ← Site footer
    │   ├── WhatsAppFloat.jsx ← Floating WhatsApp button
    │   ├── Carousel.jsx      ← Auto-scrolling image carousel with lightbox
    │   └── CTABand.jsx       ← Reusable call-to-action banner
    ├── pages/
    │   ├── HomePage.jsx      ← Hero, marquee, services, why, process, stack
    │   ├── AboutPage.jsx     ← Founders + values
    │   ├── ServicesPage.jsx  ← Service cards with pricing
    │   ├── PortfolioPage.jsx ← Portfolio project cards
    │   └── ContactPage.jsx   ← Contact form + info
    └── hooks/
        └── useFadeIn.js      ← IntersectionObserver for scroll animations
```

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add your images**

   Copy all your image files into the `public/` folder:
   ```
   public/
   ├── P1.jpeg
   ├── P2.jpeg
   ├── P3.jpeg
   ├── P4.jpeg
   ├── S1.jpg
   ├── S2.jpg
   ├── S3.jpg
   ├── S4.jpg
   ├── S5.jpg
   ├── S6.jpg
   ├── S7.jpg
   ├── S8.jpg
   └── S9.jpg
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173)

4. **Build for production**
   ```bash
   npm run build
   ```
   Output goes to `dist/`

## What Changed vs the HTML Version

| Feature | HTML Version | React Version |
|---|---|---|
| Page switching | `show(id)` toggling `.active` CSS class | React state `activePage` |
| Mobile menu | `toggleMob()` toggling `.open` class | React state `mobNavOpen` |
| Scroll effect on nav | `window.addEventListener('scroll')` | `useEffect` with cleanup |
| Fade-in animations | Global scroll listener | `IntersectionObserver` per page |
| Carousel auto-scroll | `setInterval` in DOMContentLoaded | `useEffect` with `useRef` |
| Image lightbox | Dynamic DOM creation | React conditional render |
| Contact form | Direct DOM reads + `display` toggle | Controlled inputs + `submitted` state |
| Portfolio cards | JS DOM injection | JSX mapped from data array |

## Notes

- The original `style.css` is imported **unchanged** — no design differences.
- Images in `Carousel.jsx` reference filenames from `/public/`. If you rename images, update the `images` array in `src/components/Carousel.jsx`.
- The WhatsApp number and email are hardcoded. Search for `8879679671` and `info@devcraft.studio` to update them.
