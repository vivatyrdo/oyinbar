const GAMES = [
  {
    id: 1,
    title: 'Маджонг',
    category: 'Мозаика',
    emoji: '🀄',
    color: '#e53935',
    difficulty: 3,
    players: '1 ойыншы',
    pageUrl: '/smartgames/mahjong.html', // <-- НОВАЯ ССЫЛКА НА СТРАНИЦУ
    iframeUrl: 'https://cdn.htmlgames.com/Mahjongg/index.html', // Оставляем на всякий случай для генерации
    desc: 'Маджонг — Қытайдан шыққан классикалық тақтайша ойыны. Бірдей өрнектегі тастарды жұптастыра отырып, барлық тастарды тақтадан аластатуың керек.',
  },
  {
    id: 2,
    title: '4 в ряд',
    category: 'Стратегия',
    emoji: '🔴',
    color: '#f9a825',
    difficulty: 2,
    players: '1-2 ойыншы',
    url: 'https://cdn.htmlgames.com/ConnectFour/index.html?bgcolor=white',
    desc: 'Тізбектен төрт — жай да тартымды стратегиялық ойын. Өз түстегі төрт дискіні тік, көлденең немесе диагональ бойынша тізіп алу — мақсатың осы. Қарсыласыңның жоспарын бұза отырып, алдын ала ойлан. Балаларға да, ересектерге де жарамды классик!',
  },
  {
    id: 3,
    title: 'Пасьянс Солитер',
    category: 'Пасьянс',
    emoji: '♠️',
    color: '#1565c0',
    difficulty: 2,
    players: '1 ойыншы',
    url: 'https://games.gameboss.com/freecellblue/',
    desc: '«Еркін ұяшық» (FreeCell) пасьянсы — 1978 жылы Пол Олфилл ойлап тапқан классикалық карта ойыны. Мақсат — барлық карталарды мастілер бойынша үйге жинау. Ойын логиканы, алдын ала ойлауды және стратегиялық жоспарлауды талап етеді. Іс жүзінде барлық раскладтар шешілетін — бар болғаны бір ерекшелік!',
  },
  {
    id: 4,
    title: 'Қытай шашкасы',
    category: 'Стратегия',
    emoji: '⭐',
    color: '#7c4dff',
    difficulty: 3,
    players: '2-6 ойыншы',
    url: 'https://www.novelgames.com/en/chinesecheckers/pwa/iframe.php?memberID=ng&settingID=gswww&hideMoreGamesButton=true',
    desc: 'Қытай шашкасы — алты бұрышты тақтада ойналатын стратегиялық ойын. Фишкаларыңды қарсы жаққа жеткізу — мақсатың. Басқа фишкалар арқылы секіру арқылы жылдам алға жылжуға болады. 2-ден 6-ға дейін ойыншы қатыса алады. Стратегиялық ойлауды және кеңістікті қабылдауды дамытады.',
  },
  {
    id: 5,
    title: 'Нарды',
    category: 'Стратегия',
    emoji: '🎲',
    color: '#795548',
    difficulty: 3,
    players: '2 ойыншы',
    url: 'https://terningspil.dk/spilfiler/backgammon/',
    desc: 'Нарды — бес мыңнан астам жылдық тарихы бар ежелгі тақтайша ойыны. Зарды лақтырып, фишкаларыңды үйіңе жинаған ойыншы жеңіске жетеді. Кездейсоқтық пен стратегияның ғажайып үйлесімі — тәжірибелі ойыншылар да, жаңа бастаушылар да ләззат алады.',
  },
  {
    id: 6,
    title: 'Пасьянс Паук',
    category: 'Пасьянс',
    emoji: '🕷️',
    color: '#37474f',
    difficulty: 4,
    players: '1 ойыншы',
    url: 'https://games.gameboss.com/spidersolitaireblue/',
    desc: 'Паук пасьянсы — ең күрделі классикалық пасьянстардың бірі. Екі дестемен ойналады, карталарды реттей отырып мастілерді жинап, үйге шығарып алу керек. Тізбектер толық болғанда ойыннан кетеді. Шыдамдылық пен стратегиялық ойлаудың шынайы сынағы!',
  },
  {
    id: 7,
    title: 'Го',
    category: 'Стратегия',
    emoji: '⚫',
    color: '#212121',
    difficulty: 5,
    players: '2 ойыншы',
    url: 'https://cdn.htmlgames.com/Go/',
    desc: 'Го — 2500 жылдық тарихы бар қытай стратегиялық ойыны. Тақтада тастарыңды орналастырып, қарсыласыңның тастарын қоршап ал. Қарапайым ережелері болғанымен, Го — барлық тақтайша ойындарының ең тереңі деп есептеледі. Жасанды интеллект та бұл ойында адамды жеңу үшін ондаған жылдар жұмсады.',
  },
  {
    id: 8,
    title: 'Пасьянс Пирамида',
    category: 'Пасьянс',
    emoji: '🔺',
    color: '#f4511e',
    difficulty: 2,
    players: '1 ойыншы',
    url: 'https://cdn.htmlgames.com/PyramidSolitaire/',
    desc: 'Пирамида пасьянсы — жиынтығы 13 болатын карта жұптарын жинайтын ойын. Пирамида пішінінде орналасқан карталарды бір-бірімен жұптастыра отырып, барлық карталарды алып тастау керек. Жеңіл ережелері мен үлкен тартымдылығымен — демалысқа керемет ойын.',
  },
  {
    id: 9,
    title: 'Bubble Shooter',
    category: 'Аркада',
    emoji: '🫧',
    color: '#00acc1',
    difficulty: 2,
    players: '1 ойыншы',
    url: 'https://games.gameboss.com/particles/index.html?lang=en',
    desc: 'Bubble Shooter — түрлі-түсті шарларды атып, бірдей үш немесе одан да көп шарды тізіп жойыңыз. Жылдам шешім қабылдай білу мен дәл нысанаға тию — жеңістің кілті. Барлық жас топтарына жарамды, оңай үйренілетін ойын.',
  },
  {
    id: 10,
    title: 'Пасьянс Үш Шың',
    category: 'Пасьянс',
    emoji: '🃏',
    color: '#00897b',
    difficulty: 2,
    players: '1 ойыншы',
    url: 'https://games-online.io/game/TriPeaks/?card=1&back=1&background=1',
    desc: 'Үш шың пасьянсы — үш пирамидадан тұратын карта ойыны. Ашық картаның мәніне қарағанда бір жоғары немесе бір төмен картаны алып тастау арқылы тақтаны тазарту керек. Ой мен жылдамдықты біріктіретін тамаша пасьянс.',
  },
  {
    id: 11,
    title: 'Домино',
    category: 'Стратегия',
    emoji: '🁣',
    color: '#455a64',
    difficulty: 2,
    players: '2-4 ойыншы',
    url: 'https://cdn.htmlgames.com/ClassicDomino/',
    desc: 'Класикалық домино — дүние жүзінің барлық бұрышында ойналатын ойын. Тастардағы нүктелерді сәйкестендіре отырып тізбек жасаңыз. Санаулы тастарыңнан алдымен арылған ойыншы жеңеді. Отбасылық демалысқа өте қолайлы классик.',
  },
  {
    id: 12,
    title: 'Нүктелер мен шаршылар',
    category: 'Логика',
    emoji: '🔲',
    color: '#0288d1',
    difficulty: 2,
    players: '2 ойыншы',
    url: 'https://cdn.htmlgames.com/DotsAndBoxes/',
    desc: 'Нүктелер мен шаршылар — қарапайым, бірақ тереңдігі жоқ емес ойын. Кезекпен сызықтар сызып, шаршылар жасаған ойыншы оны өз мүлкіне айналдырады. Ең көп шаршысы барлығы жеңеді. Стратегиялық ойлауды балалармен бірге дамытуға тамаша!',
  },
  {
    id: 13,
    title: 'Шашки',
    category: 'Стратегия',
    emoji: '⚪',
    color: '#6d4c41',
    difficulty: 3,
    players: '2 ойыншы',
    url: 'https://cdn.htmlgames.com/Checkers/',
    desc: 'Шашки — ғасырлар бойы ойналып келе жатқан классикалық тақтайша ойыны. Қарсыласыңның барлық фишкаларын жеп немесе жолын бөгеп тастаған ойыншы жеңеді. Дамка болу мен алдын ала ойлау — жеңістің негізгі жолы. Логиканы дамытатын маңызды стратегиялық ойын.',
  },
  {
    id: 14,
    title: 'Бинайро',
    category: 'Логика',
    emoji: '01',
    color: '#558b2f',
    difficulty: 3,
    players: '1 ойыншы',
    url: 'https://cdn.htmlgames.com/DailyTakuzu/',
    desc: 'Бинайро — 0 мен 1 сандарымен толтырылатын логикалық жұмбақ. Әр жолда 0 мен 1-дің санасы тең болу керек, үш бірдей цифр қатарынан орналасуға тиіс емес, және барлық жолдар мен бағандар бірегей болу керек. Судоку стилін ұнататындарға арнайы!',
  },
  {
    id: 15,
    title: 'Гомоку',
    category: 'Стратегия',
    emoji: '⬛',
    color: '#4a148c',
    difficulty: 3,
    players: '2 ойыншы',
    url: 'https://cdn.htmlgames.com/Gomoku/',
    desc: 'Гомоку — кезекпен тас қойып, бесеуін тізіп алатын Жапония ойыны. Бесеу тік, көлденең немесе диагональ бойынша тізілуі керек. Қарапайым ережелері — тартымды стратегиясы. Классикалық ойынды қоятын үлкен де кіші де шешіп кете алады.',
  },
  {
    id: 16,
    title: 'Пикалар',
    category: 'Карта',
    emoji: '♠',
    color: '#283593',
    difficulty: 3,
    players: '4 ойыншы',
    url: 'https://cdn.htmlgames.com/Hearts/',
    desc: 'Пикалар (Hearts) — жүректердің ауырлығынан аулақ болу керек карта ойыны. Жүректер алғасаң — жаман, пика ханшайымы алсаң — одан да жаман. Бірақ барлық жазалы карталарды алсаң — «ату» деп аталатын ерекше стратегия жұмысқа кіреді!',
  },
  {
    id: 17,
    title: 'Киллер Судоку',
    category: 'Логика',
    emoji: '🔢',
    color: '#e65100',
    difficulty: 5,
    players: '1 ойыншы',
    url: 'https://cdn.htmlgames.com/KillerSudoku/',
    desc: 'Киллер Судоку — классикалық судокудан күрделірек нұсқасы. 9×9 тордың әр жолында, бағанасында және 3×3 блогында 1-ден 9-ға дейінгі сандар бір рет болуы керек. Қосымша шарт: белгіленген аймақтардағы сандардың қосындысы берілген санға тең болу керек.',
  },
  {
    id: 18,
    title: 'Water Sort',
    category: 'Логика',
    emoji: '💧',
    color: '#0277bd',
    difficulty: 2,
    players: '1 ойыншы',
    url: 'https://html5.gamemonetize.co/27losowhk086qxyj7u1wbv2sd5092gc4/',
    desc: 'Water Sort — суды бояу бойынша сорттайтын тыныштандырғыш жұмбақ. Аралас түсті су толтырылған пробиркалардан бояуды бір түске біріктіріп алу керек. Шешім іздеу барысындағы «ага!» сәті — таза ләззат. Уайымды азайтуға тамаша жол.',
  },
  {
    id: 19,
    title: 'Покер дайсы (Яхтзи)',
    category: 'Карта',
    emoji: '🎯',
    color: '#ad1457',
    difficulty: 3,
    players: '2-4 ойыншы',
    url: 'https://games.crazygames.com/en_US/yahtzee-online/index.html?v=1.353',
    desc: 'Яхтзи — бес зармен ойналатын классикалық покер нұсқасы. Үш рет лақтырып, ең жақсы комбинацияны жасауға тырыс. Fullhouse, каре, страйт немесе яхтзи (бесеуі бір санда) — ең жоғары ұпай жинаған ойыншы жеңеді.',
  },
  {
    id: 20,
    title: 'Морской бой',
    category: 'Стратегия',
    emoji: '🚢',
    color: '#01579b',
    difficulty: 2,
    players: '2 ойыншы',
    url: 'https://cdn.htmlgames.com/Battleships/',
    desc: 'Морской бой — кемелерді жасырып, қарсыласыңның флотын жоятын классикалық ойын. Тор бойынша координаттарды атып, барлық кемелерді тапқан ойыншы жеңіске жетеді. Стратегия мен бақ ойының ғажайып үйлесімі — кез келген жаста ойнауға болады.',
  },
  {
    id: 21,
    title: 'Какурасу',
    category: 'Логика',
    emoji: '🔠',
    color: '#2e7d32',
    difficulty: 4,
    players: '1 ойыншы',
    url: 'https://cdn.htmlgames.com/DailyKakurasu/',
    desc: 'Какурасу — Жапония логикалық жұмбағы. Тор ұяшықтарын белгілей отырып, берілген жол мен баған қосындыларын орындау керек. Кросворд пен математиканың тоғысындағы ерекше ойын. Аналитикалық ойлауды дамытатын тамаша логикалық сынақ.',
  },
  {
    id: 22,
    title: 'Маджонг Коннект',
    category: 'Мозаика',
    emoji: '🀅',
    color: '#c62828',
    difficulty: 2,
    players: '1 ойыншы',
    url: 'https://cdn.htmlgames.com/MahjongConnect/index.html?bgcolor=white',
    desc: 'Маджонг Коннект — классикалық маджонгтың жылдамырақ нұсқасы. Бірдей екі тасты үш немесе одан аз бұрылыспен жол арқылы қосыңыз. Барлық тастарды жұптастырып бітірген ойыншы жеңеді. Зейін мен жылдамдыққа тамаша жаттығу!',
  },
];

const CATEGORIES = ['Барлығы', 'Логика', 'Стратегия', 'Пасьянс', 'Мозаика', 'Карта', 'Аркада'];

const SIDEBAR_SECTIONS = [
  {
    title: 'Жылдам өту',
    items: [
      { id: 'home', icon: '🏠', label: 'Басты бет', href: '/' },
      { id: 'brain', icon: '🧠', label: 'Ой ойындары', href: 'brain.html', active: true },
    ]
  },
  {
    title: 'Санаттар',
    items: [
      { id: 'қыздарға', icon: '👧', label: 'Қыздарға', href: '/?filter=қыздарға' },
      { id: 'ұлдарға', icon: '👦', label: 'Ұлдарға', href: '/?filter=ұлдарға' },
      { id: 'екеуіне', icon: '👫', label: 'Екеуіне', href: '/?filter=екеуіне' },
      { id: 'жарыс', icon: '🏎', label: 'Жарыс', href: '/?filter=жарыс' },
      { id: 'атыс', icon: '🔫', label: 'Атыс', href: '/?filter=атыс' },
      { id: 'спорт', icon: '⚽', label: 'Спорт', href: '/?filter=спорт' },
      { id: 'аркада', icon: '🕹', label: 'Аркада', href: '/?filter=аркада' },
    ]
  }
];

// ===== STATE =====
let currentFilter = 'Барлығы';
let currentGame = null;

// ===== THEME =====
const savedTheme = localStorage.getItem('oyinbar-theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('oyinbar-theme', next);
  updateThemeIcon(next);
});

// ===== RENDER SIDEBAR =====
function renderSidebar() {
  const desktop = document.getElementById('desktopSidebar');
  const drawerBody = document.getElementById('drawerBody');
  let html = '';

  SIDEBAR_SECTIONS.forEach(sec => {
    html += `<div class="sidebar-section"><div class="sidebar-title">${sec.title}</div>`;
    sec.items.forEach(item => {
      html += `<a href="${item.href || '#'}" class="sidebar-link${item.active ? ' active' : ''}">
        <span class="sidebar-icon">${item.icon}</span>${item.label}
      </a>`;
    });
    html += `</div>`;
  });

  desktop.innerHTML = html;

  // Drawer
  let dhtml = '';
  SIDEBAR_SECTIONS.forEach(sec => {
    dhtml += `<div class="drawer-section"><div class="drawer-section-title">${sec.title}</div>`;
    sec.items.forEach(item => {
      dhtml += `<a href="${item.href || '#'}" class="drawer-link${item.active ? ' active' : ''}">
        <span class="drawer-icon">${item.icon}</span>${item.label}
      </a>`;
    });
    dhtml += `</div>`;
  });
  drawerBody.innerHTML = dhtml;
}

// ===== RENDER FILTER CATS =====
function renderFilterCats() {
  const el = document.getElementById('filterCats');
  el.innerHTML = CATEGORIES.map(cat =>
    `<button class="filter-btn${cat === currentFilter ? ' active' : ''}" data-cat="${cat}">${cat}</button>`
  ).join('');
}

// ===== RENDER GAMES =====
function getFiltered() {
  if (currentFilter === 'Барлығы') return GAMES;
  return GAMES.filter(g => g.category === currentFilter);
}

function renderDots(level) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="diff-dot${i <= level ? ' filled' : ''}"></span>`;
  }
  return html;
}

function renderGames() {
  const grid = document.getElementById('gamesGrid');
  const noResults = document.getElementById('noResults');
  const title = document.getElementById('filterTitle');
  const filtered = getFiltered();

  title.textContent = currentFilter === 'Барлығы' ? 'Барлық ойындар' : currentFilter;

  if (!filtered.length) {
    grid.innerHTML = '';
    noResults.classList.add('visible');
    return;
  }
  noResults.classList.remove('visible');

  // ИЗМЕНЕНО: Теперь карточка это тег <a href="...">
  grid.innerHTML = filtered.map((g, i) => `
    <a href="${g.pageUrl || '#'}" class="game-card" data-id="${g.id}" style="animation-delay:${i * 0.04}s">
      <div class="card-thumb">
        <div class="card-thumb-inner" style="background: linear-gradient(135deg, ${g.color}22, ${g.color}11);">
          <div class="card-thumb-bg" style="background-image: radial-gradient(${g.color}33 1px, transparent 1px); background-size: 20px 20px;"></div>
          <span style="font-size:52px;position:relative;z-index:1">${g.emoji}</span>
        </div>
        <div class="play-overlay">
          <div class="play-btn-circle">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-badge">${g.category}</span>
          <div class="card-diff">${renderDots(g.difficulty)}</div>
        </div>
        <div class="card-title">${g.title}</div>
        <div class="card-desc">${g.desc}</div>
        <div class="card-footer">
          <span class="card-play-label">▶ ОЙНАУ</span>
          <span class="card-players">${g.players}</span>
        </div>
      </div>
    </a>
  `).join('');
}

// ===== FILTER CLICK =====
document.getElementById('filterCats').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  currentFilter = btn.dataset.cat;
  renderFilterCats();
  renderGames();
});

// ===== GAME CARD CLICK =====
document.getElementById('gamesGrid').addEventListener('click', e => {
  const card = e.target.closest('.game-card');
  if (!card) return;
  const id = parseInt(card.dataset.id);
  const game = GAMES.find(g => g.id === id);
  if (!game) return;
  openGame(game);
});

// ===== MODAL =====
function openGame(game) {
  currentGame = game;
  document.getElementById('modalTitle').textContent = game.title;
  document.getElementById('modalBadge').textContent = game.category;
  document.getElementById('modalDesc').textContent = game.desc;
  document.getElementById('gameFrame').src = game.url;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGame() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('gameFrame').src = '';
  document.body.style.overflow = '';
  currentGame = null;
}

document.getElementById('modalClose').addEventListener('click', closeGame);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeGame();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeGame();
});

document.getElementById('fullscreenBtn').addEventListener('click', () => {
  const frame = document.getElementById('gameFrame');
  if (frame.requestFullscreen) frame.requestFullscreen();
  else if (frame.webkitRequestFullscreen) frame.webkitRequestFullscreen();
  else if (currentGame) window.open(currentGame.url, '_blank');
});

// ===== DRAWER =====
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

// ===== INIT =====
renderSidebar();
renderFilterCats();
renderGames();