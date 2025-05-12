document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav-wrap");
  let lastScroll = window.pageYOffset;
  let scrollTimer;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // Si on scroll vers le bas -> cache la nav
    if (currentScroll > lastScroll) {
      nav.classList.add("hide-nav");
    }

    // Si on arrête de scroller -> montre la nav après un petit délai
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      nav.classList.remove("hide-nav");
    }, 200); // délai après arrêt de scroll

    lastScroll = currentScroll;
  });
});
  








function openModal(id) {
    document.getElementById(id).style.display = 'flex';
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    }
  });
  










  // Liste de tes pages dans l’ordre
const pages = [
  "freizeit.html",
  "kompetenz.html",
  "bildung.html",
  "projekte.html",
  "kontakt.html",
  "faq.html"
];

// Trouver la page actuelle
const currentPage = window.location.pathname.split("/").pop();
const currentIndex = pages.indexOf(currentPage);

// Clic flèche droite → page suivante
document.querySelector(".arrow.right").addEventListener("click", () => {
  if (currentIndex < pages.length - 1) {
    window.location.href = pages[currentIndex + 1];
  }
});

// Clic flèche gauche → page précédente
document.querySelector(".arrow.left").addEventListener("click", () => {
  if (currentIndex > 0) {
    window.location.href = pages[currentIndex - 1];
  }
});
