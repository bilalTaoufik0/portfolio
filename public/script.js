function changeSection(id) {
  // Masquer toutes les sections
  document.querySelectorAll('.section-content').forEach((section) => {
    section.classList.add('hidden');
  });

  // Afficher la section ciblée
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('hidden');

    // Si la section est "accueil", gérer l'animation de l'image et du texte
    if (id === 'accueil') {
      const image = document.getElementById('accueil-image');
      const texte = document.getElementById('accueil-text');

      // Cacher le texte au départ
      texte.style.opacity = '0';

      // Réinitialiser les classes de l'image
      image.classList.remove('final');
      image.classList.add('fullscreen-start');

      // Après un court délai, changer la classe pour lancer la transition vers la taille finale
      setTimeout(() => {
        image.classList.remove('fullscreen-start');
        image.classList.add('final');
      }, 100);

      // Afficher le texte après 3 secondes (quand l'animation est finie)
      setTimeout(() => {
        texte.style.opacity = '1';
      }, 3000);
    }
  }
}


window.onload = () => {
changeSection('accueil');
};


function toggleTech(button) {
const details = button.closest('.group').querySelector('.tech-details');
if (details) {
details.classList.toggle('hidden');
}
}



