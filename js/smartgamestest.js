/* ================================================================
   smartgames.js — OyinBar Smart Games Pages
   Подключается как ../js/smartgames.js
================================================================ */

// ── GAMES LIST — синхронизирован с brain.html ──
// Добавляй сюда игры по мере создания страниц
const BRAIN_GAMES = [
  { id:1,  title:'Маджонг',                cat:'Мозаика',   emoji:'🀄',  href:'mahjong.html' },
  { id:2,  title:'4 қатарға',              cat:'Стратегия', emoji:'🔴',  href:'connect-four.html' },
  { id:3,  title:'Пасьянс — Фрисел',       cat:'Пасьянс',   emoji:'♠️',  href:'freecell.html' },
  { id:4,  title:'Қытай шашкасы',          cat:'Стратегия', emoji:'⭐',  href:'chinese-checkers.html' },
  { id:5,  title:'Нарды',                  cat:'Стратегия', emoji:'🎲',  href:'backgammon.html' },
  { id:6,  title:'Пасьянс — Өрмекші',      cat:'Пасьянс',   emoji:'🕷️',  href:'spider-solitaire.html' },
  { id:7,  title:'Го',                     cat:'Стратегия', emoji:'⚫',  href:'go.html' },
  { id:8,  title:'Пасьянс — Пирамида',     cat:'Пасьянс',   emoji:'🔺',  href:'pyramid-solitaire.html' },
  { id:9,  title:'Bubble Shooter',         cat:'Аркада',    emoji:'🫧',  href:'bubble-shooter.html' },
  { id:10, title:'Пасьянс — Үш Шың',       cat:'Пасьянс',   emoji:'🃏',  href:'tripeaks.html' },
  { id:11, title:'Домино',                 cat:'Стратегия', emoji:'🁣',  href:'domino.html' },
  { id:12, title:'Нүктелер мен шаршылар',  cat:'Логика',    emoji:'🔲',  href:'dots-and-boxes.html' },
  { id:13, title:'Шашки',                  cat:'Стратегия', emoji:'⚪',  href:'checkers.html' },
  { id:14, title:'Бинайро',                cat:'Логика',    emoji:'🔢',  href:'binairo.html' },
  { id:15, title:'Гомоку',                 cat:'Стратегия', emoji:'⬛',  href:'gomoku.html' },
  { id:16, title:'Пикалар',                cat:'Карта',     emoji:'♠',   href:'hearts.html' },
  { id:17, title:'Киллер Судоку',          cat:'Логика',    emoji:'#️⃣',  href:'killer-sudoku.html' },
  { id:18, title:'Water Sort',             cat:'Логика',    emoji:'💧',  href:'water-sort.html' },
  { id:19, title:'Покер дайсы',            cat:'Карта',     emoji:'🎯',  href:'yahtzee.html' },
  { id:20, title:'Морской бой',            cat:'Стратегия', emoji:'🚢',  href:'battleships.html' },
  { id:21, title:'Какурасу',               cat:'Логика',    emoji:'🔠',  href:'kakurasu.html' },
  { id:22, title:'Маджонг Коннект',        cat:'Мозаика',   emoji:'🀅',  href:'mahjong-connect.html' },
];

// ================================================================
// THEME
// ================================================================
(function initTheme() {
  const html = document.documentElement;
  const saved = localStorage.getItem('site-theme') || 'light';
  html.setAttribute('data-theme', saved);

  function updateIcon(theme) {
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  updateIcon(saved);

  document.addEventListener('DOMContentLoaded', () => {
    updateIcon(saved);

    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const cur  = html.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('site-theme', next);
      updateIcon(next);
    });
  });
})();

// ================================================================
// FULLSCREEN
// ================================================================
function openFullscreen() {
  const iframe = document.getElementById('gameFrame');
  if (!iframe) return;
  if      (iframe.requestFullscreen)       iframe.requestFullscreen();
  else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
  else if (iframe.msRequestFullscreen)     iframe.msRequestFullscreen();
}

document.addEventListener('DOMContentLoaded', () => {
  // Wire up all fullscreen buttons
  ['fullscreenBtnHeader', 'fullscreenBtnSidebar'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', openFullscreen);
  });
  // Legacy onclick support
  window.openFullscreen = openFullscreen;

  // ── DIFFICULTY DOTS ──
  // Finds all .diff-dots[data-level="N"] and renders N filled dots out of 5
  document.querySelectorAll('.diff-dots[data-level]').forEach(el => {
    const level = parseInt(el.dataset.level) || 0;
    el.innerHTML = Array.from({ length: 5 }, (_, i) =>
      `<span class="diff-dot${i < level ? ' on' : ''}"></span>`
    ).join('');
  });

  // ── RELATED GAMES ──
  renderRelated();
});

// ================================================================
// RELATED GAMES
// Reads data-current-id from #relatedList (or falls back to filename)
// and renders 4 random games from a different page
// ================================================================
function renderRelated() {
  const container = document.getElementById('relatedList');
  if (!container) return;

  // Determine current page filename to exclude it
  const currentFile = window.location.pathname.split('/').pop() || '';

  // Filter out current page
  const pool = BRAIN_GAMES.filter(g => g.href !== currentFile);

  // Shuffle and take 4
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 4);

  container.innerHTML = shuffled.map(g => `
    <a href="${g.href}" class="rel-item">
      <div class="rel-thumb">${g.emoji}</div>
      <div>
        <div class="rel-name">${g.title}</div>
        <div class="rel-cat">${g.cat}</div>
      </div>
    </a>
  `).join('');
}