document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section, header");
  const sectionTitle = document.getElementById("section-title");
  const navLinks = document.querySelectorAll(".nav-link");

  const sectionNames = {
    home: "Home",
    about: "Über mich",
    lebenslauf: "Lebenslauf",
    projekte: "Projekte",
    hobbys: "Hobbys",
    kontakt: "kontakt",
    faq: "FAQ"
  };

  function updateActiveSection() {
    const scrollY = window.scrollY + window.innerHeight / 2;

    let currentSection = "home";

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      if (!id) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollY >= top && scrollY < top + height) {
        currentSection = id;
      }
    });

    // Met à jour le texte de la barre bleue
    if (sectionTitle) {
      sectionTitle.textContent = sectionNames[currentSection] || "";
    }

    // Active le lien correspondant
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.includes(`#${currentSection}`)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection();
});
