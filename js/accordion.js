/*
  accordion.js ouverture/fermeture des blocs compétences
  C'est le seul fichier JS du site. Pas de librairie,
  pas d'import : un écouteur par bouton, une classe CSS,
  une hauteur. C'est tout.
  Un seul bloc ouvert à la fois : les autres se ferment au clic.
*/

const tousLesBoutons = document.querySelectorAll(".bloc-toggle");

tousLesBoutons.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    const bloc    = bouton.parentElement;
    const panneau = bloc.querySelector(".bloc-panel");
    const ouvert  = bloc.classList.contains("is-open");

    /* Ferme tous les autres blocs avant d'en ouvrir un */
    tousLesBoutons.forEach(function (autreBouton) {
      const autreBloc    = autreBouton.parentElement;
      const autrePanneau = autreBloc.querySelector(".bloc-panel");
      autreBloc.classList.remove("is-open");
      autrePanneau.style.maxHeight = "0px";
      autreBouton.setAttribute("aria-expanded", "false");
    });

    /* Si le bloc cliqué était fermé, on l'ouvre */
    if (!ouvert) {
      bloc.classList.add("is-open");
      panneau.style.maxHeight = panneau.scrollHeight + "px";
      bouton.setAttribute("aria-expanded", "true");
    }
    /* S'il était déjà ouvert, le forEach ci-dessus l'a déjà fermé */
  });
});