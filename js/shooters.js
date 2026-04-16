// ============================================
// SHOOTERS.JS — Full Script (Header + Slider + Gallery)
// ============================================
document.addEventListener('DOMContentLoaded', () => {

  /* --- Header Scroll Shadow --- */
  const header = document.getElementById('header');
  function handleScroll() { header.classList.toggle('header--scrolled', window.scrollY > 50); }
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* --- Slider Logic --- */
  const track = document.getElementById('sliderTrack');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('sliderDots');
  const sliderWrapper = document.getElementById('sliderWrapper');

  if (track && slides.length > 0) {
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    const AUTO_PLAY_DELAY = 35000; // Измени здесь время в мс

    // Генерация точек
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('slider__dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => { goToSlide(i); resetAutoPlay(); });
      dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.slider__dot');

    function updateDots() { dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex)); }
    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    }

    nextBtn.addEventListener('click', () => { goToSlide(currentIndex + 1); resetAutoPlay(); });
    prevBtn.addEventListener('click', () => { goToSlide(currentIndex - 1); resetAutoPlay(); });

    function startAutoPlay() { autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), AUTO_PLAY_DELAY); }
    function stopAutoPlay() { clearInterval(autoPlayInterval); }
    function resetAutoPlay() { stopAutoPlay(); startAutoPlay(); }

    sliderWrapper.addEventListener('mouseenter', stopAutoPlay);
    sliderWrapper.addEventListener('mouseleave', startAutoPlay);

    let touchStartX = 0;
    sliderWrapper.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; stopAutoPlay(); }, { passive: true });
    sliderWrapper.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) diff > 0 ? goToSlide(currentIndex + 1) : goToSlide(currentIndex - 1);
      resetAutoPlay();
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { goToSlide(currentIndex + 1); resetAutoPlay(); }
      if (e.key === 'ArrowLeft') { goToSlide(currentIndex - 1); resetAutoPlay(); }
    });

    startAutoPlay();
  }

  /* --- CTA Smooth Scroll --- */
  const ctaBtn = document.querySelector('.hero__cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      const targetId = ctaBtn.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* --- Search Enter Stub --- */
  const searchInput = document.querySelector('.header__search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) console.log('Поиск:', searchInput.value.trim());
    });
  }

  /* --- Gallery: Play Buttons --- */
  const gamesGrid = document.getElementById('gamesGrid');
  if (gamesGrid) {
    gamesGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn');
      if (btn) {
        const gameName = btn.dataset.game || 'Игра';
        console.log(`Игра "${gameName}" открывается`);
        // Позже: открытие модального окна с iframe
      }
    });
  }

  /* --- Gallery: Filter Tabs --- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      // Здесь будет логика фильтрации/сортировки карточек
    });
  });

});