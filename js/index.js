const CATEGORY_EMOJIS = {
  'жарыс': '',
  'атыс': '',
  'басқату': '',
  'спорт': '',
  'қорқынышты': '',
  'аркада': '',
  'қыздарға': '',
  'ұлдарға': '',
  'екеуіне': ''
};

const CATEGORY_NAMES = {
  'жарыс': 'Жарыс',
  'атыс': 'Атыс',
  'басқату': 'Басқату',
  'спорт': 'Спорт',
  'қорқынышты': 'Қорқынышты',
  'аркада': 'Аркада',
  'қыздарға': 'Қыздарға арналған',
  'ұлдарға': 'Ұлдарға арналған',
  'екеуіне': 'Екеуіне арналған'
};

const GAMES_PER_PAGE = 32;

let allGames = [];
let currentFilter = 'all';
let currentSearch = '';
let currentPage = 1;

async function loadGames() {
  try {
    const res = await fetch('data/games.json');
    allGames = await res.json();
    renderGames();
    renderHeroAnimation();
  } catch (e) {
    console.error('Ойындарды жүктеу қатесі:', e);
  }
}

function renderHeroAnimation() {
  const container = document.getElementById('heroSlides');
  if (!container || allGames.length < 5) return;

  // 1. Перемешиваем все игры из базы
  const shuffled = [...allGames].sort(() => 0.5 - Math.random());
  
  // 2. Делим их на 3 кучки (если игр мало, кучки будут пересекаться, если много — будут уникальными)
  const chunkSize = Math.ceil(shuffled.length / 3);
  const sets = [
    shuffled.slice(0, chunkSize),
    shuffled.slice(chunkSize, chunkSize * 2),
    shuffled.slice(chunkSize * 2)
  ];

  // 3. Функция для создания ряда
  const createRow = (gamesSubset, rowClass) => {
    const row = document.createElement('div');
    row.className = `hero-slide-row ${rowClass}`;
    
    // Дублируем набор 3 раза для бесшовной анимации
    const items = [...gamesSubset, ...gamesSubset, ...gamesSubset];
    
    row.innerHTML = items.map(g => `
      <img src="${g.thumbnail}" alt="">
    `).join('');
    
    return row;
  };

  // Очищаем контейнер перед добавлением (на всякий случай)
  container.innerHTML = '';

  // Добавляем 3 ряда с разными наборами игр и направлениями
  container.appendChild(createRow(sets[0], 'row-1'));
  container.appendChild(createRow(sets[1], 'row-2'));
  container.appendChild(createRow(sets[2], 'row-3'));
}

function getFilteredGames() {
  return allGames.filter(g => {
    // Support both multi-category (categories[]) and single (category)
    const cats = g.categories || [g.category];
    const matchCat = currentFilter === 'all' || cats.includes(currentFilter);
    const q = currentSearch.toLowerCase();
    const matchSearch = !q ||
      g.title_kz.toLowerCase().includes(q) ||
      g.title.toLowerCase().includes(q) ||
      g.tags.some(t => t.includes(q));
    return matchCat && matchSearch;
  });
}

function renderGames() {
  const grid = document.getElementById('gamesGrid');
  const noResults = document.getElementById('noResults');
  const count = document.getElementById('gamesCount');
  const titleEl = document.getElementById('sectionTitle');

  const filtered = getFilteredGames();
  const totalPages = Math.ceil(filtered.length / GAMES_PER_PAGE);
  if (currentPage > totalPages) currentPage = 1;

  const start = (currentPage - 1) * GAMES_PER_PAGE;
  const games = filtered.slice(start, start + GAMES_PER_PAGE);

  if (currentFilter === 'all') {
    titleEl.textContent = 'Барлық ойындар';
    titleEl.removeAttribute('href');
    titleEl.style.cursor = 'default';
  } else {
    titleEl.textContent = CATEGORY_NAMES[currentFilter];
    titleEl.href = `category.html?cat=${currentFilter}`;
    titleEl.style.cursor = 'pointer';
  }
  count.textContent = `${filtered.length} ойын`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.add('visible');
    renderPagination(0, 0);
    return;
  }

  noResults.classList.remove('visible');

  grid.innerHTML = games.map((g, i) => {
    const cats = g.categories || [g.category];
    const primaryCat = cats[0];
    const extraCats = cats.slice(1, 3); // show up to 2 extra badges
    return `
    <a href="game.html?id=${g.id}"
       class="game-card${g.featured ? ' featured' : ''}"
       style="animation-delay:${i * 0.05}s"
       aria-label="${g.title_kz} ойынын ойна">
      <div class="card-thumb">
        <img src="${g.thumbnail}" alt="${g.title_kz}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="thumb-placeholder" style="display:none"></div>
        <div class="play-overlay">
          <div class="play-btn-icon">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-cats">
          <span class="card-cat" data-cat="${primaryCat}">
            <span class="cat-dot dot-${primaryCat}"></span>
            ${CATEGORY_NAMES[primaryCat] || primaryCat}
          </span>
          ${extraCats.map(c => `<span class="card-cat card-cat-sm" data-cat="${c}"><span class="cat-dot dot-${c}"></span>${CATEGORY_NAMES[c] || c}</span>`).join('')}
        </div>
        <div class="card-title">${g.title_kz}</div>
        <div class="card-desc">${g.description_kz}</div>
        <div class="card-footer">
          <span class="card-play-btn">▶ ОЙНАУ</span>
        </div>
      </div>
    </a>`;
  }).join('');

  renderPagination(currentPage, totalPages);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPagination(current, total) {
  let el = document.getElementById('pagination');
  if (!el) {
    el = document.createElement('div');
    el.id = 'pagination';
    document.querySelector('.games-section').appendChild(el);
  }

  if (total <= 1) { el.innerHTML = ''; return; }

  // Build page numbers with ellipsis
  let pages = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  el.innerHTML = `
    <button class="page-btn" ${current === 1 ? 'disabled' : ''} data-page="${current - 1}">‹</button>
    ${pages.map(p => p === '...'
      ? `<span class="page-ellipsis">…</span>`
      : `<button class="page-btn ${p === current ? 'active' : ''}" data-page="${p}">${p}</button>`
    ).join('')}
    <button class="page-btn" ${current === total ? 'disabled' : ''} data-page="${current + 1}">›</button>
  `;
}

// Pagination clicks
document.addEventListener('click', e => {
  const btn = e.target.closest('.page-btn');
  if (!btn || btn.disabled) return;
  currentPage = parseInt(btn.dataset.page);
  renderGames();
});

// Category filter
document.getElementById('categoriesBar').addEventListener('click', e => {
  const btn = e.target.closest('.cat-btn');
  if (!btn) return;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.filter;
  currentPage = 1;
  renderGames();
});

// Search
let searchTimer;
document.getElementById('searchInput').addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    currentSearch = e.target.value;
    currentPage = 1;
    renderGames();
  }, 250);
});

const urlParams = new URLSearchParams(window.location.search);
const urlSearch = urlParams.get('search');
if (urlSearch) {
  document.getElementById('searchInput').value = urlSearch;
  currentSearch = urlSearch;
}

const SIDEBAR_ITEMS = [
  {
    section: 'Жылдам өту',
    items: [
      { id: 'all',    icon: '🎮', label: 'Барлық ойындар', action: 'filter' },
      { id: 'top10',  icon: '🏆', label: 'Топ 10 ойын',    action: 'page', href: 'top.html?count=10' },
      { id: 'top20',  icon: '🥇', label: 'Топ 20 ойын',    action: 'page', href: 'top.html?count=20' },
      { id: 'random', icon: '🎲', label: 'Кездейсоқ ойын', action: 'random' },
    ]
  },
  {
    section: 'Материалдар',
    items: [
      { id: 'brain',    icon: '🧠', label: 'Ой ойындары',  action: 'page', href: 'brain.html' },
      { id: 'articles', icon: '📰', label: 'Мақалалар',    action: 'page', href: 'articles.html' },
      { id: 'guides',   icon: '📖', label: 'Гайдтар',      action: 'page', href: 'guides.html' },
    ]
  },
  {
    section: 'Санаттар',
    items: [
      { id: 'қыздарға',   icon: '👧', label: 'Қыздарға',    action: 'filter' },
      { id: 'ұлдарға',    icon: '👦', label: 'Ұлдарға',     action: 'filter' },
      { id: 'екеуіне',    icon: '👫', label: 'Екеуіне',     action: 'filter' },
      { id: 'жарыс',      icon: '🏎', label: 'Жарыс',       action: 'filter' },
      { id: 'атыс',       icon: '🔫', label: 'Атыс',        action: 'filter' },
      { id: 'басқату',    icon: '🧩', label: 'Басқату',     action: 'filter' },
      { id: 'спорт',      icon: '⚽', label: 'Спорт',       action: 'filter' },
      { id: 'қорқынышты', icon: '👻', label: 'Қорқынышты',  action: 'filter' },
      { id: 'аркада',     icon: '🕹', label: 'Аркада',      action: 'filter' },
    ]
  }
  
];

function renderSidebar() {
  const desktop = document.getElementById('desktopSidebar');
  const mobile  = document.getElementById('mobileSidebarNav');

  let desktopHTML = '';
  let mobileHTML  = '';

  SIDEBAR_ITEMS.forEach(section => {
    desktopHTML += `<div class="sidebar-section">
      <div class="sidebar-title">${section.section}</div>`;

    section.items.forEach(item => {
      const isActive = item.id === currentFilter && item.action === 'filter';
      const attrs = item.action === 'page'
        ? `href="${item.href}"`
        : `href="#" data-action="${item.action}" data-id="${item.id}"`;

      desktopHTML += `
        <a ${attrs} class="sidebar-link${isActive ? ' active' : ''}">
          <span class="sidebar-icon">${item.icon}</span>
          ${item.label}
        </a>`;

      // Mobile: только первые 2 секции
      if (section.section !== 'Материалдар') {
        mobileHTML += `
          <a ${attrs} class="sidebar-mobile-btn${isActive ? ' active' : ''}">
            ${item.icon} ${item.label}
          </a>`;
      }
    });

    desktopHTML += `</div>`;
  });

  desktop.innerHTML = desktopHTML;
  mobile.innerHTML  = mobileHTML;
}

function handleSidebarClick(e) {
  const link = e.target.closest('[data-action]');
  if (!link) return;
  e.preventDefault();

  const action = link.dataset.action;
  const id     = link.dataset.id;

  if (action === 'filter') {
    currentFilter = id;
    currentPage   = 1;

    // Sync category buttons in header
    document.querySelectorAll('.cat-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === id);
    });

    renderGames();
    renderSidebar();
    renderDrawer();
  }

  if (action === 'random') {
    const game = allGames[Math.floor(Math.random() * allGames.length)];
    if (game) window.location.href = `game.html?id=${game.id}`;
  }
}

document.addEventListener('click', handleSidebarClick);

function renderDrawer() {
  const drawerBody = document.getElementById('drawerBody');
  if (!drawerBody) return;

  let html = '';
  SIDEBAR_ITEMS.forEach(section => {
    html += `<div class="drawer-section">
      <div class="drawer-section-title">${section.section}</div>`;

    section.items.forEach(item => {
      const isActive = item.id === currentFilter && item.action === 'filter';
      const attrs = item.action === 'page'
        ? `href="${item.href}"`
        : `href="#" data-action="${item.action}" data-id="${item.id}"`;

      html += `
        <a ${attrs} class="drawer-link${isActive ? ' active' : ''}">
          <span class="drawer-icon">${item.icon}</span>
          ${item.label}
        </a>`;
    });

    html += `</div>`;
  });

  drawerBody.innerHTML = html;
}

function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
  document.getElementById('burgerBtn').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  document.getElementById('burgerBtn').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('burgerBtn').addEventListener('click', openDrawer);
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
document.getElementById('drawerOverlay').addEventListener('click', closeDrawer);

// Закрываем drawer при клике на ссылку внутри него
document.getElementById('drawer').addEventListener('click', e => {
  const link = e.target.closest('[data-action]');
  if (link) {
    closeDrawer();
  }
  // Для page-ссылок — тоже закрываем
  if (e.target.closest('a[href]') && !e.target.closest('[data-action]')) {
    closeDrawer();
  }
});

loadGames().then(() => {
  renderSidebar();
  renderDrawer();
});