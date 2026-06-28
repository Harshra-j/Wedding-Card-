/* =========================================================
   ROYAL LUXURY WEDDING INVITATION — script.js
   Edit everything from the WEDDING object below.
   ========================================================= */

const WEDDING = {
  bride: "Harsh",
  groom: "Divya",
  // ^ swap names as you like; "bride"/"groom" labels are just keys.

  // Wedding date & time (used for hero, footer & countdown)
  dateISO: "2026-11-25T19:00:00",      // YYYY-MM-DDTHH:mm:ss (local)
  datePretty: "25 . 11 . 2026",         // shown on the cover
  dateLong: "Wednesday, 25 November 2026",
  venueShort: "Venue, TBA",

  // Background music — drop a file in assets/music/ and point to it here
  music: "assets/music/theme.mp3",

  // Couple hero photo — put image at assets/images/couple.jpg
  couplePhoto: "assets/images/couple.jpg",

  story: [
    { year: "Spring 2019", title: "First Meeting", text: "A mutual friend's terrace party, one shared playlist, and a conversation that didn't end until sunrise." },
    { year: "Summer 2019", title: "First Date", text: "Coffee that turned into dinner that turned into a long walk by the sea." },
    { year: "Winter 2022", title: "The Proposal", text: "Under a sky full of fairy lights, on one knee, with a question and happy tears." },
    { year: "Spring 2023", title: "Engagement", text: "Two families became one over laughter, sweets, and a thousand photographs." },
    { year: "12 Dec 2026", title: "The Wedding", text: "And now, the day we say forever — with all of you beside us." },
  ],

  // Gallery — add images to assets/images/ and list filenames here.
  // Empty array shows elegant placeholders.
  gallery: [
    // "assets/images/g1.jpg", "assets/images/g2.jpg", ...
  ],
  galleryCount: 6, // number of placeholder tiles if no images set

  events: [
    { name: "Haldi", date: "10 Dec 2026", time: "10:00 AM", venue: "Family Residence", desc: "Turmeric, marigolds and a riot of yellow to bless the couple.", icon: "fa-sun" },
    { name: "Mehendi", date: "10 Dec 2026", time: "4:00 PM", venue: "The Courtyard Garden", desc: "Henna, music and laughter under the evening lamps.", icon: "fa-hand-sparkles" },
    { name: "Sangeet", date: "11 Dec 2026", time: "7:00 PM", venue: "Crystal Ballroom", desc: "An evening of dance, performances and dazzling lights.", icon: "fa-music" },
    { name: "Wedding Ceremony", date: "12 Dec 2026", time: "7:00 PM", venue: "Grand Palace Hall", desc: "The sacred vows, the seven steps, and a lifetime promise.", icon: "fa-ring" },
    { name: "Reception", date: "12 Dec 2026", time: "9:30 PM", venue: "Grand Palace Hall", desc: "Dinner, celebration and blessings as newlyweds.", icon: "fa-champagne-glasses" },
  ],

  venue: {
    name: "Venue To Be Announced",
  address: "Details coming soon — stay tuned!",
  photo: "",
  maps: "#",
  },

  family: {
    bride: [
      { name: "Mr. & Mrs. Sharma", role: "Parents of the Bride" },
      { name: "Late Shri R. Sharma", role: "Grandfather" },
    ],
    groom: [
      { name: "Mr. & Mrs. Kapoor", role: "Parents of the Groom" },
      { name: "Smt. K. Kapoor", role: "Grandmother" },
    ],
  },

  dressCode: [
    { name: "Traditional", note: "Sarees, lehengas, sherwanis, bandhgalas.", color: "#c89b8c" },
    { name: "Ethnic", note: "Kurtas, anarkalis, indo-western fusion.", color: "#d4af6a" },
    { name: "Pastel Theme", note: "Soft blush, sage, ivory and powder blue.", color: "#e7c9bf" },
    { name: "Footwear", note: "Juttis & kolhapuris recommended — lawns ahead!", color: "#a47b32" },
  ],

  schedule: [
    { time: "6:00 PM", name: "Guest Arrival", icon: "fa-person-walking-arrow-right" },
    { time: "6:30 PM", name: "Welcome Drinks", icon: "fa-martini-glass" },
    { time: "7:00 PM", name: "Ceremony", icon: "fa-ring" },
    { time: "8:30 PM", name: "Dinner", icon: "fa-utensils" },
    { time: "9:30 PM", name: "Reception", icon: "fa-champagne-glasses" },
    { time: "10:30 PM", name: "Photography", icon: "fa-camera" },
    { time: "11:30 PM", name: "Farewell", icon: "fa-heart" },
  ],

  rsvp: {
    phone: "+919876543210",          // for Call Now + WhatsApp
    whatsapp: "919876543210",         // country code + number, no +
  },

  photoBooth: {
    copy: "Strike a pose at our floral photo wall and tag your favourite moments. Every smile makes our album complete.",
    hashtag: "#AdityaWedsShraddha",
  },

  social: [
    { icon: "fa-instagram", url: "#", brand: true },
    { icon: "fa-whatsapp", url: "#", brand: true },
    { icon: "fa-envelope", url: "#", brand: false },
  ],
};

/* =========================================================
   HELPERS
   ========================================================= */
const $  = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function fallbackPhoto(label) {
  return `<div class="fallback-photo"><i class="fa-solid fa-image"></i><span>${label}</span></div>`;
}

/* =========================================================
   POPULATE CONTENT FROM CONFIG
   ========================================================= */
function hydrate() {
  // Names
  $$("[data-bride]").forEach(el => el.textContent = WEDDING.bride);
  $$("[data-groom]").forEach(el => el.textContent = WEDDING.groom);

  // Dates
  $$("[data-date-pretty]").forEach(el => el.textContent = WEDDING.datePretty);
  $$("[data-date-long]").forEach(el => el.textContent = WEDDING.dateLong);
  $$("[data-venue-short]").forEach(el => el.textContent = WEDDING.venueShort);

  // Couple photo
  const photoEl = $(".hero__photo");
  if (WEDDING.couplePhoto) {
    const img = new Image();
    img.onload = () => { photoEl.style.background = `url('${WEDDING.couplePhoto}') center/cover`; photoEl.querySelector(".hero__photo-fallback").style.display = "none"; };
    img.src = WEDDING.couplePhoto;
  }

  // Story timeline
  $("[data-timeline]").innerHTML = WEDDING.story.map((s, i) => `
    <div class="tl-item" data-aos="fade-up" data-aos-delay="${i * 60}">
      <span class="tl-dot"><i class="fa-solid fa-heart"></i></span>
      <p class="tl-year">${s.year}</p>
      <h3 class="tl-title">${s.title}</h3>
      <p class="tl-text">${s.text}</p>
    </div>`).join("");

  // Gallery
  const galWrap = $("[data-gallery]");
  const imgs = WEDDING.gallery.length ? WEDDING.gallery : Array.from({ length: WEDDING.galleryCount });
  galWrap.innerHTML = imgs.map((src, i) => `
    <figure class="gal-item" data-index="${i}" data-aos="zoom-in" data-aos-delay="${(i % 4) * 60}">
      ${WEDDING.gallery.length ? `<img loading="lazy" src="${src}" alt="Couple photo ${i + 1}" />` : fallbackPhoto(`photo ${i + 1}`)}
    </figure>`).join("");

  // Events
  $("[data-events]").innerHTML = WEDDING.events.map((e, i) => `
    <article class="event-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <div class="event-card__icon"><i class="fa-solid ${e.icon}"></i></div>
      <h3 class="event-card__name">${e.name}</h3>
      <p class="event-card__when">${e.date} · ${e.time}</p>
      <p class="event-card__venue"><i class="fa-solid fa-location-dot"></i> ${e.venue}</p>
      <p class="event-card__desc">${e.desc}</p>
    </article>`).join("");

  // Venue
  $("[data-venue-name]").textContent = WEDDING.venue.name;
  $("[data-venue-address]").textContent = WEDDING.venue.address;
  $("[data-venue-map]").href = WEDDING.venue.maps;
  const vimg = $("[data-venue-photo]");
  if (WEDDING.venue.photo) {
    const t = new Image();
    t.onload = () => { vimg.classList.add("has-photo"); vimg.style.setProperty("--venue-bg", `url('${WEDDING.venue.photo}')`); };
    t.src = WEDDING.venue.photo;
  }

  // Family
  ["bride", "groom"].forEach(side => {
    $(`[data-family="${side}"]`).innerHTML = WEDDING.family[side].map(m =>
      `<li>${m.name}<small>${m.role}</small></li>`).join("");
  });

  // Dress code
  $("[data-dress]").innerHTML = WEDDING.dressCode.map((d, i) => `
    <div class="dress-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}">
      <div class="dress-card__sw" style="background:${d.color}"></div>
      <h3 class="dress-card__name">${d.name}</h3>
      <p class="dress-card__note">${d.note}</p>
    </div>`).join("");

  // Schedule
  $("[data-schedule]").innerHTML = WEDDING.schedule.map((s, i) => `
    <div class="sch-item" data-aos="${i % 2 ? 'fade-left' : 'fade-right'}">
      <span class="sch-dot"><i class="fa-solid ${s.icon}"></i></span>
      <p class="sch-time">${s.time}</p>
      <h3 class="sch-name">${s.name}</h3>
    </div>`).join("");

  // RSVP links
  $("#rsvpCall").href = `tel:${WEDDING.rsvp.phone}`;

  // Photo booth
  $("[data-booth-copy]").textContent = WEDDING.photoBooth.copy;
  $("[data-booth-tag]").textContent = WEDDING.photoBooth.hashtag;

  // Social
  $("[data-social]").innerHTML = WEDDING.social.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener" aria-label="social link"><i class="fa-${s.brand ? 'brands' : 'solid'} ${s.icon}"></i></a>`).join("");

  // Music source
  const bgm = $("#bgm");
  bgm.querySelector("source").src = WEDDING.music;
}

/* =========================================================
   PARTICLES (gold dust + petals)
   ========================================================= */
function initParticles() {
  if (reduceMotion) return;
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  let w, h, parts = [];

  function resize() { w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
  resize(); addEventListener("resize", resize);

  const N = Math.min(60, Math.floor(innerWidth / 18));
  for (let i = 0; i < N; i++) {
    parts.push({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 2.4 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: Math.random() * 0.4 + 0.15,
      a: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? "212,175,106" : "200,155,140",
    });
  }
  (function loop() {
    ctx.clearRect(0, 0, w, h);
    parts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.y > h + 5) { p.y = -5; p.x = Math.random() * w; }
      if (p.x < -5) p.x = w + 5; if (p.x > w + 5) p.x = -5;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.hue},${p.a})`;
      ctx.shadowBlur = 8; ctx.shadowColor = `rgba(${p.hue},${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    });
    requestAnimationFrame(loop);
  })();
}

/* =========================================================
   COUNTDOWN
   ========================================================= */
function initCountdown() {
  const target = new Date(WEDDING.dateISO).getTime();
  const cells = {
    days: $('[data-cd="days"]'), hours: $('[data-cd="hours"]'),
    minutes: $('[data-cd="minutes"]'), seconds: $('[data-cd="seconds"]'),
  };
  const done = $("[data-cd-done]");
  const grid = $(".countdown__grid");

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      grid.style.display = "none"; done.hidden = false; clearInterval(timer); return;
    }
    const d = Math.floor(diff / 864e5);
    const hms = (n) => String(n).padStart(2, "0");
    cells.days.textContent = hms(d);
    cells.hours.textContent = hms(Math.floor(diff / 36e5) % 24);
    cells.minutes.textContent = hms(Math.floor(diff / 6e4) % 60);
    cells.seconds.textContent = hms(Math.floor(diff / 1e3) % 60);
  }
  tick(); const timer = setInterval(tick, 1000);
}

/* =========================================================
   AUDIO
   ========================================================= */
function initAudio() {
  const bgm = $("#bgm");
  const toggle = $("#audioToggle");
  const icon = toggle.querySelector("i");
  let playing = false;

  function setIcon() {
    icon.className = playing ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
    toggle.classList.toggle("is-muted", !playing);
  }

  function play() { bgm.volume = 0.0; bgm.play().then(() => {
      playing = true; setIcon();
      // gentle fade-in
      let v = 0; const fade = setInterval(() => { v = Math.min(0.45, v + 0.03); bgm.volume = v; if (v >= 0.45) clearInterval(fade); }, 80);
    }).catch(() => { playing = false; setIcon(); });
  }
  function pause() { bgm.pause(); playing = false; setIcon(); }

  toggle.addEventListener("click", () => playing ? pause() : play());

  // expose for the open sequence
  window.__startMusic = play;
}

/* =========================================================
   OPENING SEQUENCE
   ========================================================= */
function initOpening() {
  const cover = $("#cover");
  const doors = $("#doors");
  const content = $("#content");
  const openBtn = $("#openBtn");
  const audioToggle = $("#audioToggle");

  // cover entrance
  if (!reduceMotion && window.gsap) {
    gsap.from("[data-cover-fade]", { opacity: 0, y: 24, duration: 1, stagger: 0.15, ease: "power2.out", delay: 0.2 });
  }

  function open() {
    openBtn.disabled = true;
    if (window.__startMusic) window.__startMusic();
    audioToggle.hidden = false;

    if (reduceMotion) { finish(); return; }

    doors.classList.add("is-active");
    requestAnimationFrame(() => doors.classList.add("is-opening"));

    setTimeout(() => {
      cover.classList.add("is-gone");
      finish();
    }, 1800);

    setTimeout(() => { doors.classList.remove("is-active", "is-opening"); }, 3200);
  }

  function finish() {
    document.body.classList.remove("is-locked");
    content.hidden = false;
    cover.classList.add("is-gone");
    if (window.AOS) AOS.refreshHard();
    // smooth scroll to hero
    setTimeout(() => $("#hero").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }), 200);
    initScrollAnimations();
  }

  openBtn.addEventListener("click", open);
}

/* =========================================================
   GSAP SCROLL FLOURISHES
   ========================================================= */
function initScrollAnimations() {
  if (reduceMotion || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero parallax
  gsap.to(".hero__sky", {
    yPercent: 18, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });

  // Section titles shimmer up
  $$(".section__title").forEach(title => {
    gsap.from(title, {
      scrollTrigger: { trigger: title, start: "top 88%" },
      backgroundPositionX: "-100%", opacity: 0.4, y: 18, duration: 0.9, ease: "power2.out",
    });
  });
}

/* =========================================================
   GALLERY LIGHTBOX
   ========================================================= */
function initLightbox() {
  const items = $$(".gal-item");
  if (!items.length) return;

  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `
    <button class="lightbox__close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
    <div class="lightbox__stage"></div>
    <button class="lightbox__nav lightbox__nav--next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>`;
  document.body.appendChild(box);
  const stage = $(".lightbox__stage", box);
  let idx = 0;

  function render() {
    const el = items[idx];
    const img = el.querySelector("img");
    stage.innerHTML = img ? `<img src="${img.src}" alt="${img.alt}" />` : fallbackPhoto(`photo ${idx + 1}`);
  }
  function show(i) { idx = (i + items.length) % items.length; render(); box.classList.add("is-open"); }
  function close() { box.classList.remove("is-open"); }

  items.forEach((el, i) => el.addEventListener("click", () => show(i)));
  $(".lightbox__close", box).addEventListener("click", close);
  $(".lightbox__nav--prev", box).addEventListener("click", () => show(idx - 1));
  $(".lightbox__nav--next", box).addEventListener("click", () => show(idx + 1));
  box.addEventListener("click", e => { if (e.target === box) close(); });
  document.addEventListener("keydown", e => {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });

  // swipe (mobile)
  let sx = 0;
  stage.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
  stage.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(dx > 0 ? idx - 1 : idx + 1);
  });
}

/* =========================================================
   RSVP
   ========================================================= */
function initRSVP() {
  const submit = $("#rsvpSubmit");
  const success = $("#rsvpSuccess");
  const wa = $("#rsvpWhatsapp");

  function gather() {
    return {
      name: $("#rsvpName").value.trim(),
      count: $("#rsvpCount").value,
      phone: $("#rsvpPhone").value.trim(),
      attend: $("#rsvpAttend").value,
      meal: $("#rsvpMeal").value,
    };
  }
  function message(d) {
    return `RSVP for ${WEDDING.bride} & ${WEDDING.groom}'s wedding%0A` +
      `Name: ${d.name || "—"}%0AGuests: ${d.count}%0APhone: ${d.phone || "—"}%0A` +
      `Attendance: ${d.attend}%0AMeal: ${d.meal}`;
  }

  submit.addEventListener("click", () => {
    const d = gather();
    if (!d.name) { $("#rsvpName").focus(); return; }
    success.hidden = false;
    success.textContent = d.attend.startsWith("Joyfully")
      ? `Thank you, ${d.name}! We can't wait to celebrate with you. 🤍`
      : `Thank you for letting us know, ${d.name}. You'll be missed!`;
    success.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  });

  // keep WhatsApp link live
  function syncWA() { wa.href = `https://wa.me/${WEDDING.rsvp.whatsapp}?text=${message(gather())}`; }
  ["rsvpName", "rsvpCount", "rsvpPhone", "rsvpAttend", "rsvpMeal"].forEach(id => $(`#${id}`).addEventListener("input", syncWA));
  syncWA();
}

/* =========================================================
   WISHES
   ========================================================= */
function initWishes() {
  const wall = $("[data-wishes]");
  const seed = [
    { name: "Riya & Arjun", text: "May your love story keep getting better with every chapter. So happy for you both!" },
    { name: "The Mehtas", text: "Wishing you a lifetime of laughter, adventure and endless chai together." },
    { name: "Nani", text: "My blessings are with you, always. Be kind, be silly, be in love." },
  ];
  let wishes = [...seed];

  function render() {
    wall.innerHTML = wishes.map(w => `
      <div class="wish-card">
        <span class="wish-card__quote">&rdquo;</span>
        <p class="wish-card__text">${escapeHTML(w.text)}</p>
        <p class="wish-card__name">${escapeHTML(w.name)}</p>
      </div>`).join("");
  }
  function escapeHTML(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  $("#wishSubmit").addEventListener("click", () => {
    const name = $("#wishName").value.trim() || "Anonymous";
    const text = $("#wishText").value.trim();
    if (!text) { $("#wishText").focus(); return; }
    wishes.unshift({ name, text });
    render();
    $("#wishName").value = ""; $("#wishText").value = "";
    if (!reduceMotion && window.gsap) gsap.from(wall.firstElementChild, { opacity: 0, y: 16, scale: .96, duration: .5, ease: "back.out(1.6)" });
  });
  render();
}

/* =========================================================
   BUTTON RIPPLE
   ========================================================= */
function initRipples() {
  document.addEventListener("click", e => {
    const btn = e.target.closest(".btn");
    if (!btn) return;
    const r = document.createElement("span");
    r.className = "ripple";
    const rect = btn.getBoundingClientRect();
    r.style.left = (e.clientX - rect.left) + "px";
    r.style.top = (e.clientY - rect.top) + "px";
    btn.appendChild(r);
    setTimeout(() => r.remove(), 650);
  });
}

/* =========================================================
   BOOT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  hydrate();
  if (window.AOS) AOS.init({ duration: 900, easing: "ease-out-cubic", once: true, offset: 80, disable: reduceMotion });
  initParticles();
  initCountdown();
  initAudio();
  initOpening();
  initLightbox();
  initRSVP();
  initWishes();
  initRipples();
});
