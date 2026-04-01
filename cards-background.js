// =========================================
// ГЕНЕРАЦИЯ АНИМИРОВАННОГО ФОНА
// =========================================

(function() {
  const CARD_WIDTH = 70;
  const CARD_GAP = 15;
  const COL_WIDTH = CARD_WIDTH + CARD_GAP;
  
  const CARD_HEIGHT = 105;
  const MARGIN_BOTTOM = 20;
  const CARD_FULL_HEIGHT = CARD_HEIGHT + MARGIN_BOTTOM;
  
  const SUITS =[
    { symbol: '♠', color: 'black' },
    { symbol: '♥', color: 'red' },
    { symbol: '♦', color: 'red' },
    { symbol: '♣', color: 'black' }
  ];

  function initBackground() {
    let container = document.getElementById('cards-bg-container');
    
    if (container) {
      container.innerHTML = '';
    } else {
      container = document.createElement('div');
      container.id = 'cards-bg-container';
      container.setAttribute('aria-hidden', 'true');
      
      // Вставляем фон безопасно
      if (document.body.firstChild) {
        document.body.insertBefore(container, document.body.firstChild);
      } else {
        document.body.appendChild(container);
      }
    }

    const screenWidth = window.innerWidth;
    const screenHeight = Math.max(window.innerHeight, 1200);

    const numCols = Math.ceil(screenWidth / COL_WIDTH) + 1;
    const cardsPerView = Math.ceil(screenHeight / CARD_FULL_HEIGHT) + 1; 

    const containerFragment = document.createDocumentFragment();

    for (let i = 0; i < numCols; i++) {
      const col = document.createElement('div');
      col.className = `cards-bg-col ${i % 2 === 0 ? 'move-down' : 'move-up'}`;

      const colFragment = document.createDocumentFragment();
      let colSuits =[];

      for (let j = 0; j < cardsPerView; j++) {
        const randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
        colSuits.push(randomSuit);
        colFragment.appendChild(createCardElement(randomSuit));
      }
      
      for (let j = 0; j < cardsPerView; j++) {
        colFragment.appendChild(createCardElement(colSuits[j]));
      }

      col.appendChild(colFragment);
      containerFragment.appendChild(col);
    }

    container.appendChild(containerFragment);
  }

  function createCardElement(suitObj) {
    const card = document.createElement('div');
    card.className = 'cards-bg-card';
    card.innerHTML = `<span class="cards-bg-suit ${suitObj.color}">${suitObj.symbol}</span>`;
    return card;
  }

  // ИСПРАВЛЕНИЕ: Безотказный запуск скрипта
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackground);
  } else {
    initBackground();
  }

  let resizeTimer;
  let currentWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    if (Math.abs(window.innerWidth - currentWidth) > 50) {
      currentWidth = window.innerWidth;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initBackground, 300);
    }
  });
})();