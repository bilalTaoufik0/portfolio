// -----------------------------
// Fonction d'affichage initial de la page "accueil" (sans vague)
// -----------------------------
function showAccueilDirect() {
  const target = document.getElementById('accueil');
  if (target) {
    target.classList.remove('hidden');
    setTimeout(() => {
      target.classList.add('fade-in');
    }, 50);

    // Animation image/texte
    const image = document.getElementById('accueil-image');
    const texte = document.getElementById('accueil-text');
    texte.style.opacity = '0';
    image.classList.remove('final');
    image.classList.add('fullscreen-start');
    setTimeout(() => {
      image.classList.remove('fullscreen-start');
      image.classList.add('final');
    }, 100);
    setTimeout(() => {
      texte.style.opacity = '1';
    }, 3000);
  }
}

// -----------------------------
// Fonction pour afficher une section avec animation de vague
// -----------------------------
function showSectionWithTransition(id) {
  const wave = document.getElementById('transition-wave');

  // Affiche et fait monter la vague
  wave.classList.remove('wave-hide');
  wave.classList.remove('hidden');
  wave.classList.add('wave-show');

  setTimeout(() => {
    // Cache toutes les sections
    document.querySelectorAll('.section-content').forEach(section => {
      section.classList.add('hidden');
      section.classList.remove('fade-in');
    });

    // Affiche la nouvelle section
    const target = document.getElementById(id);
    if (target) {
      target.classList.remove('hidden');
      setTimeout(() => {
        target.classList.add('fade-in');
      }, 50);
    }

    // Spécial pour l'accueil
    if (id === 'accueil') {
      const image = document.getElementById('accueil-image');
      const texte = document.getElementById('accueil-text');
      texte.style.opacity = '0';
      image.classList.remove('final');
      image.classList.add('fullscreen-start');
      setTimeout(() => {
        image.classList.remove('fullscreen-start');
        image.classList.add('final');
      }, 100);
      setTimeout(() => {
        texte.style.opacity = '1';
      }, 3000);
    }

    // Fait redescendre la vague
    wave.classList.remove('wave-show');
    wave.classList.add('wave-hide');

    // Cache la vague après l’animation
    setTimeout(() => {
      wave.classList.add('hidden');
    }, 600);
  }, 600);
}

// -----------------------------
// Navigation (boutons en haut)
// -----------------------------
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) return;

    navButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const target = button.dataset.section;
    showSectionWithTransition(target);
  });
});

// -----------------------------
// Toggle des technologies dans les projets
// -----------------------------
function toggleTech(button) {
  const details = button.closest('.group').querySelector('.tech-details');
  if (details) {
    details.classList.toggle('hidden');
  }
}

// -----------------------------
// Onglets dans la section compétences
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

// -----------------------------
// Carousel vertical (images défilantes dans les compétences)
// -----------------------------
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
// Chargement initial de la page
// -----------------------------
window.onload = () => {
  showAccueilDirect(); // Affiche "accueil" sans transition au premier chargement
};
