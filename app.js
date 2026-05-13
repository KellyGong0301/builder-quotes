// 30 hand-tuned palettes; each poster cycles through them by index.
const PALETTES = [
  { bg: "#1a2332", fg: "#f4ede0", accent: "#ff6b3d" },
  { bg: "#bfa14a", fg: "#1c1c1e", accent: "#7a2a1f" },  // softened bright yellow → antique gold
  { bg: "#a8473a", fg: "#f0e6d2", accent: "#f5cf3a" },
  { bg: "#7a8a73", fg: "#141414", accent: "#c97a40" },
  { bg: "#1c1c1e", fg: "#e8e0c8", accent: "#f5cf3a" },
  { bg: "#e87555", fg: "#faf3e3", accent: "#1a2332" },
  { bg: "#2d4a3e", fg: "#e8e0d0", accent: "#d4a574" },
  { bg: "#2b3990", fg: "#f0e8d2", accent: "#ff5733" },
  { bg: "#b85e3a", fg: "#f4ede0", accent: "#2d4a3e" },
  { bg: "#e8dcc4", fg: "#1c1c1e", accent: "#a8473a" },
  { bg: "#4a3550", fg: "#e8d8c0", accent: "#c97a40" },
  { bg: "#4a5c6e", fg: "#f0e6d2", accent: "#f5cf3a" },
  { bg: "#6a6234", fg: "#f4ede0", accent: "#e87555" },
  { bg: "#b54a2e", fg: "#f4ede0", accent: "#1a2332" },  // softened inferno orange → muted rust
  { bg: "#ede4d0", fg: "#2d4a3e", accent: "#a8473a" },
  { bg: "#2a3458", fg: "#ede4d0", accent: "#ff5733" },
  { bg: "#a88a3a", fg: "#1c1c1e", accent: "#2d4a3e" },  // softened mustard → muted ochre
  { bg: "#1c4a4a", fg: "#f0e6d2", accent: "#d4a017" },
  { bg: "#f0907a", fg: "#5a1a1a", accent: "#1c4a4a" },
  { bg: "#0d0d0d", fg: "#c8e8d0", accent: "#ff5733" },
  { bg: "#b8a878", fg: "#0d0d0d", accent: "#a8473a" },
  { bg: "#b8c8d8", fg: "#1a2332", accent: "#ff5733" },
  { bg: "#5a1a1a", fg: "#ede4d0", accent: "#d4a017" },
  { bg: "#d8c8a8", fg: "#2a1a0a", accent: "#2d4a3e" },
  { bg: "#5a7a8a", fg: "#f0e6d2", accent: "#d4a017" },
  { bg: "#d97826", fg: "#ede4d0", accent: "#1a2332" },
  { bg: "#4a5c2a", fg: "#f4ede0", accent: "#d97826" },
  { bg: "#c0b0d0", fg: "#2a3458", accent: "#a8473a" },
  { bg: "#8a1f2e", fg: "#ede4d0", accent: "#d4a017" },
  { bg: "#1a4a8a", fg: "#ede4d0", accent: "#f5cf3a" }   // swap yellow text → cream, yellow demoted to accent
];

const $ = (s) => document.querySelector(s);

function dayOfYear(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

function formatDate(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const wd = ['SUN','MON','TUE','WED','THU','FRI','SAT'][d.getDay()];
  return `${y}.${m}.${day} · ${wd}`;
}

function bucket(wordCount) {
  if (wordCount <= 6) return 'xs';
  if (wordCount <= 12) return 'sm';
  if (wordCount <= 18) return 'md';
  return 'lg';
}

// Boot
if (typeof POSTERS_DATA === 'undefined' || !Array.isArray(POSTERS_DATA) || POSTERS_DATA.length === 0) {
  $('#loading').textContent = 'No posters loaded — check posters.js';
} else {
  $('#loading').remove();
  $('#poster').style.display = '';
  const POSTERS = POSTERS_DATA;
  let currentIdx = dayOfYear() % POSTERS.length;

  function render(idx) {
    const p = POSTERS[idx];
    const palette = PALETTES[idx % PALETTES.length];
    const r = document.documentElement.style;
    r.setProperty('--bg', palette.bg);
    r.setProperty('--fg', palette.fg);
    r.setProperty('--accent', palette.accent);

    $('#poster-num').textContent = String(idx + 1).padStart(3, '0');

    const words = (p.quote || '').split(' ');
    const b = bucket(words.length);
    const quoteEl = $('#quote');
    quoteEl.setAttribute('data-bucket', b);
    quoteEl.innerHTML = '';
    const stagger = b === 'lg' ? 0.045 : (b === 'md' ? 0.06 : 0.085);
    words.forEach((w, i) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = w;
      span.style.animationDelay = `${i * stagger + 0.1}s`;
      quoteEl.appendChild(span);
      if (i < words.length - 1) quoteEl.appendChild(document.createTextNode(' '));
    });

    // attribution
    $('#guest').textContent = p.guest || '';
    $('#role').textContent = p.guest_role || '';
    // delay attribution fade-in until after quote stagger
    const attrDelay = Math.min(0.1 + words.length * stagger + 0.25, 2.4);
    $('#attribution').style.setProperty('--attr-delay', `${attrDelay}s`);
    // re-trigger animation
    const attr = $('#attribution');
    attr.style.animation = 'none';
    void attr.offsetWidth;
    attr.style.animation = '';

    document.title = `${p.quote}  —  Daily / Builder Quotes`;
  }

  function nav(delta) {
    currentIdx = (currentIdx + delta + POSTERS.length) % POSTERS.length;
    render(currentIdx);
  }

  function shuffle() {
    let idx;
    do { idx = Math.floor(Math.random() * POSTERS.length); }
    while (idx === currentIdx && POSTERS.length > 1);
    currentIdx = idx;
    render(currentIdx);
  }

  // ─── Summary modal ───
  const modal = $('#summary-modal');
  let lastFocus = null;

  function openSummary() {
    const p = POSTERS[currentIdx];
    const e = p.explanation;
    if (!e || !e.meaning) return;

    $('#modal-quote').textContent = p.quote || '';
    $('#modal-guest').textContent = p.guest || '';
    $('#modal-role').textContent = p.guest_role || '';
    $('#modal-eptitle').textContent = p.title || '';
    $('#modal-meaning').textContent = e.meaning;

    const ul = $('#modal-points');
    ul.innerHTML = '';
    (e.argument || []).forEach(pt => {
      const li = document.createElement('li');
      li.textContent = pt;
      ul.appendChild(li);
    });

    $('#modal-matters').textContent = e.matters || '';

    const w = $('#modal-watch');
    if (p.youtube_url) {
      w.href = p.youtube_url;
      w.style.display = '';
    } else {
      w.style.display = 'none';
    }

    lastFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    // focus close button so ESC works and keyboard users get a target
    setTimeout(() => $('#modal-close').focus(), 50);
  }

  function closeSummary() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function isModalOpen() { return modal.classList.contains('open'); }

  $('#read').addEventListener('click', openSummary);
  $('#modal-close').addEventListener('click', closeSummary);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSummary();
  });

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (isModalOpen()) {
      if (e.key === 'Escape') closeSummary();
      return; // swallow other keys while modal is open
    }
    if (e.key === 'ArrowLeft') nav(-1);
    else if (e.key === 'ArrowRight') nav(1);
    else if (e.key === 'r' || e.key === 'R') shuffle();
    else if (e.key === ' ') { e.preventDefault(); shuffle(); }
    else if (e.key === 's' || e.key === 'S') openSummary();
  });

  $('#prev').addEventListener('click', () => nav(-1));
  $('#next').addEventListener('click', () => nav(1));
  $('#rand').addEventListener('click', shuffle);

  $('#date').textContent = formatDate();
  render(currentIdx);
}
