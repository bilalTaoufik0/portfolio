// -----------------------------
// Changement de section principale
// -----------------------------
function changeSection(id) {
  // Masquer toutes les sections
  document.querySelectorAll('.section-content').forEach((section) => {
    section.classList.add('hidden');
  });

  // Afficher la section ciblée
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('hidden');

    // Animation spécifique pour la section "accueil"
    if (id === 'accueil') {
      const image = document.getElementById('accueil-image');
      const texte = document.getElementById('accueil-text');

      // Cacher le texte au départ
      texte.style.opacity = '0';

      // Réinitialiser les classes de l'image
      image.classList.remove('final');
      image.classList.add('fullscreen-start');

      // Animation vers la classe "final"
      setTimeout(() => {
        image.classList.remove('fullscreen-start');
        image.classList.add('final');
      }, 100);

      // Réafficher le texte après l'animation
      setTimeout(() => {
        texte.style.opacity = '1';
      }, 3000);
    }
  }
}


// -----------------------------
// Toggle des technologies (déploiement des détails)
// -----------------------------
function toggleTech(button) {
  const details = button.closest('.group').querySelector('.tech-details');
  if (details) {
    details.classList.toggle('hidden');
  }
}


// -----------------------------
// Gestion des onglets (compétences)
// -----------------------------
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === tab) {
        panel.classList.add('active');
      }
    });
  });
});


// Animation synchronisée pour toutes les colonnes
const columns = document.querySelectorAll('.carousel-column');

let index = 0;
setInterval(() => {
  columns.forEach(column => {
    const images = column.querySelectorAll('img');
    images.forEach(img => img.classList.remove('active'));
    images[index % images.length].classList.add('active');
  });
  index++;
}, 3000);


// -----------------------------
// Initialisation à l'ouverture
// -----------------------------
window.onload = () => {
  changeSection('accueil');
};
