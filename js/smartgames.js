function openFullscreen() {
    const iframe = document.getElementById("gameFrame");
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { /* Safari */
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE11 */
      iframe.msRequestFullscreen();
    }
  }
  
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggle");
    const htmlElement = document.documentElement; // <html> тегі

    // 1. LocalStorage-тен сақталған тақырыпты тексеру
    const savedTheme = localStorage.getItem("site-theme") || "light";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateToggleIcon(savedTheme);

    // 2. Батырманы басқан кездегі әрекет
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      // Тақырыпты ауыстыру
      htmlElement.setAttribute("data-theme", newTheme);
      
      // Таңдауды сақтау
      localStorage.setItem("site-theme", newTheme);
      
      // Иконканы өзгерту
      updateToggleIcon(newTheme);
    });

    // 3. Иконканы өзгертетін функция (☀️ күндіз, 🌙 түн)
    function updateToggleIcon(theme) {
      if (theme === "dark") {
        themeToggleBtn.textContent = "☀️"; // Қараңғы режимде күн тұрады
      } else {
        themeToggleBtn.textContent = "🌙"; // Жарық режимде ай тұрады
      }
    }
  });