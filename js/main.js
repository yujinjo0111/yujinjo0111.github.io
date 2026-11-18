(function () {
  'use strict';
  const D = window.SITE_DATA || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- News ---------- */
  function renderNews() {
    const list = $('#news-list');
    const items = D.news || [];
    const visible = D.newsVisible || items.length;
    list.innerHTML = items
      .map((n, i) => `<li class="${i >= visible ? 'is-hidden' : ''}"><span class="news-date">${esc(n.date)}</span><span>${n.text}</span></li>`)
      .join('');
    const btn = $('#news-more');
    if (items.length > visible) {
      btn.hidden = false;
      btn.addEventListener('click', () => {
        const open = list.classList.toggle('show-all');
        btn.textContent = open ? 'Show less' : 'Show older news';
      });
    }
  }

  /* ---------- Publications ---------- */
  const LINK_LABELS = { paper: 'Paper', code: 'Code', project: 'Project', slides: 'Slides', poster: 'Poster', bibtex: 'BibTeX' };

  function renderPublications() {
    const pubs = D.publications || [];
    const byYear = {};
    pubs.forEach((p) => (byYear[p.year] = byYear[p.year] || []).push(p));
    const years = Object.keys(byYear).sort((a, b) => b - a);

    $('#pub-list').innerHTML = years
      .map((y) => `
        <h3 class="pub-year">${esc(y)}</h3>
        ${byYear[y].map(pubCard).join('')}`)
      .join('');
  }

  function pubCard(p) {
    const authors = (p.authors || [])
      .map((a) => (a.replace('*', '') === D.me ? `<b class="me">${esc(a)}</b>` : esc(a)))
      .join(', ');
    const links = Object.entries(p.links || {})
      .filter(([, url]) => url)
      .map(([k, url]) => `<a class="chip" href="${esc(url)}" target="_blank" rel="noopener">${LINK_LABELS[k] || esc(k)}</a>`)
      .join('');
    return `
      <article class="pub">
        <div class="pub-thumb"><img src="${esc(p.image)}" alt="" loading="lazy" /></div>
        <div class="pub-body">
          <h4 class="pub-title">${esc(p.title)}</h4>
          <p class="pub-authors">${authors}</p>
          <p class="pub-venue">
            <span class="venue-badge">${esc(p.venue)}</span>
            ${p.venueFull ? `<span class="venue-full">${esc(p.venueFull)}</span>` : ''}
            ${p.award ? `<span class="award">🏆 ${esc(p.award)}</span>` : ''}
          </p>
          <div class="pub-links">${links}</div>
        </div>
      </article>`;
  }

  /* ---------- Timelines ---------- */
  function renderTimeline(id, items) {
    $(id).innerHTML = (items || [])
      .map((e) => `
        <div class="tl-item">
          <div class="tl-head">
            <div>
              <h3 class="tl-title">${esc(e.title)}${e.tag ? ` <span class="tag">${esc(e.tag)}</span>` : ''}</h3>
              <p class="tl-org">${esc(e.org)}${e.place ? ` · ${esc(e.place)}` : ''}</p>
            </div>
            <span class="tl-period">${esc(e.period)}</span>
          </div>
          ${e.bullets && e.bullets.length ? `<ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
        </div>`)
      .join('');
  }

  /* ---------- Navigation ---------- */
  function setupNav() {
    const toggle = $('.nav-toggle');
    const links = $('#nav-links');
    const header = $('.site-header');

    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Smooth scroll with offset for the sticky header; close the mobile menu after a pick.
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (ev) => {
        const target = document.getElementById(a.getAttribute('href').slice(1));
        if (!target) return;
        ev.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 8;
        window.scrollTo({ top: y, behavior: 'smooth' });
        history.replaceState(null, '', '#' + target.id);
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Highlight the menu item for the section in view.
    const navAnchors = [...links.querySelectorAll('a[href^="#"]')];
    const sections = navAnchors.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    const toTop = $('.to-top');
    const onScroll = () => {
      const line = header.offsetHeight + window.innerHeight * 0.25;
      let current = sections[0];
      sections.forEach((s) => { if (s.getBoundingClientRect().top <= line) current = s; });
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections[sections.length - 1];
      navAnchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
      header.classList.toggle('scrolled', window.scrollY > 4);
      toTop.classList.toggle('visible', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function setupTheme() {
    $('.theme-toggle').addEventListener('click', () => {
      const root = document.documentElement;
      const dark = root.dataset.theme
        ? root.dataset.theme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = dark ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    });
  }

  renderNews();
  renderPublications();
  renderTimeline('#research-list', D.research);
  renderTimeline('#education-list', D.education);
  renderTimeline('#activities-list', D.activities);
  setupNav();
  setupTheme();
  $('#year').textContent = new Date().getFullYear();

  // Honor a #hash on first load (content above was rendered by JS).
  if (location.hash) {
    const t = document.getElementById(location.hash.slice(1));
    if (t) setTimeout(() => window.scrollTo({ top: t.offsetTop - $('.site-header').offsetHeight - 8 }), 0);
  }
})();
