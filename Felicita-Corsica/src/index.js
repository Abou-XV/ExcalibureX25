document.addEventListener("DOMContentLoaded", () => {
  // Menu déroulant pour une meilleure expérience mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // Effet de défilement fluide pour les liens du menu
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Ajustement pour la hauteur du menu fixe
          behavior: "smooth",
        });
      }à
    });
  });

  // Formulaire : message de confirmation après soumission
  const contactForm = document.querySelector(".contact form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert(
        "Merci pour votre message ! Nous vous répondrons dès que possible."
      );
      contactForm.reset();
    });
  }

  // Carrousel d'actualités
  const carouselImages = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let index = 0;
  const totalImages = images.length;
  let autoSlideInterval;

  // Fonction pour mettre à jour le carrousel
  function updateCarousel() {
    const offset = -index * 1200; // Déplacement horizontal
    carouselImages.style.transform = `translateX(${offset}px)`;

    // Ajout de l'animation flash
    images.forEach((img) => img.classList.remove("flash"));
    images[index].classList.add("flash");
  }

  // Fonction pour démarrer l'auto-défilement
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      index = (index + 1) % totalImages;
      updateCarousel();
    }, 5000); // 5 secondes
  }

  // Fonction pour réinitialiser l'auto-défilement au clic
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide(); // Relancer le carrousel automatique
  }

  // Bouton Précédent
  prevBtn.addEventListener("click", () => {
    index = index > 0 ? index - 1 : totalImages - 1;
    updateCarousel();
    resetAutoSlide(); // Relance l'intervalle au clic
  });

  // Bouton Suivant
  nextBtn.addEventListener("click", () => {
    index = index < totalImages - 1 ? index + 1 : 0;
    updateCarousel();
    resetAutoSlide(); // Relance l'intervalle au clic
  });

  // Ajustement du carrousel lors du redimensionnement
  window.addEventListener("resize", updateCarousel);

  // Démarrer l'auto-défilement dès que la page est chargée
  startAutoSlide();
});
