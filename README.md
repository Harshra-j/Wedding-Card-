# Royal Luxury Wedding Invitation

A premium, cinematic single-page wedding invitation website. Pure **HTML5 + CSS3 + Vanilla JS** with GSAP, AOS, Lottie (optional) and Font Awesome loaded from CDN. No build step, no backend — just open `index.html`.

## Quick start

1. Open `index.html` in any modern browser. That's it.
2. To customise, edit the single **`WEDDING`** object at the top of `script.js`. Everything — names, dates, story, events, family, venue, RSVP numbers, wishes — flows from there.

```
Wedding-Invitation/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/   ← couple.jpg, venue.jpg, gallery photos (g1.jpg …)
│   ├── videos/
│   ├── music/    ← theme.mp3 (background instrumental)
│   ├── icons/
│   └── lottie/
└── README.md
```

## Customising

Open `script.js` and edit the `WEDDING` object:

| Field | What it controls |
|-------|------------------|
| `bride`, `groom` | Couple names everywhere |
| `dateISO` | Drives the live countdown (use local time) |
| `datePretty`, `dateLong` | Cover & footer date text |
| `music` | Path to your background track |
| `couplePhoto` | Hero archway photo |
| `story[]` | "Our Story" timeline |
| `gallery[]` | Image paths; leave empty to show placeholders (`galleryCount`) |
| `events[]` | Wedding event cards |
| `venue` | Name, address, photo and Google Maps link |
| `family.bride/.groom` | Family listings |
| `dressCode[]` | Dress code cards + swatch colours |
| `schedule[]` | Day-of timeline |
| `rsvp` | Phone + WhatsApp numbers (Call / WhatsApp RSVP) |
| `photoBooth` | Booth copy + hashtag |
| `social[]` | Footer social icons |

## Adding media

- **Music:** drop an instrumental MP3 at `assets/music/theme.mp3` (or update `WEDDING.music`). It fades in when the invitation is opened; use the gold button (top-right) to mute/unmute.
- **Photos:** place images in `assets/images/`. Until you do, elegant gold placeholders are shown — the layout never breaks.
- **Gallery:** list filenames in `WEDDING.gallery`. They lazy-load and open in a swipeable lightbox.

## Notes

- Browsers block audio autoplay, so music starts on the **Tap to Open** tap (a real user gesture) — this is expected.
- Fully responsive (desktop → phone) and respects `prefers-reduced-motion`.
- All animations target a smooth 60 FPS; images are lazy-loaded.

Made with love. 🤍
