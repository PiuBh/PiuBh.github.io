/*
  nav.js section active dans la navigation
  IntersectionObserver sur chaque section : quand une section
  occupe au moins 40% de l'écran, le lien correspondant
  dans la nav passe en is-current.
*/

const sections = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll(".nav a");

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      /* Retire is-current partout, puis l'ajoute sur le bon lien */
      navLinks.forEach(function (lien) { lien.classList.remove("is-current"); });
      const lienActif = document.querySelector('.nav a[href="#' + entry.target.id + '"]');
      if (lienActif) lienActif.classList.add("is-current");
    }
  });
}, { threshold: 0.4 });

sections.forEach(function (section) { observer.observe(section); });