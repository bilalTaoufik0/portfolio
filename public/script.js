// -----------------------------
// Helper : pause avec Promise pour async/await
// -----------------------------
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// -----------------------------
// Variable pour savoir si l'animation accueil a déjà été jouée
// -----------------------------
let accueilAnimated = false;

// -----------------------------
// Animation accueil (image + texte)
// -----------------------------
async function animateAccueil() {
  const image = document.getElementById('accueil-image');
  const texte = document.getElementById('accueil-text');
  if (!image || !texte) return;

  texte.style.opacity = '0';
  image.classList.remove('final');
  image.classList.add('fullscreen-start');

  await wait(100);

  image.classList.remove('fullscreen-start');
  image.classList.add('final');

  await wait(2900);

  texte.style.opacity = '1';

  accueilAnimated = true;  // Animation jouée
}

// -----------------------------
// Affichage initial accueil
// -----------------------------
async function showAccueilDirect() {
  const target = document.getElementById('accueil');
  if (!target) return;

  target.classList.remove('hidden');
  await wait(50);
  target.classList.add('fade-in');

  if (!accueilAnimated) {
    await animateAccueil();
  }
}

// -----------------------------
// Affiche une section avec animation écran + slide-up
// -----------------------------
async function showSectionWithTransition(id) {
  const screen = document.getElementById('transition-screen');
  if (!screen) return;

  // Reset écran transition (bas + transparent)
  screen.classList.remove('hide', 'show');
  screen.style.transform = 'translateY(100%) skewY(5deg)';
  screen.style.opacity = '0';

  await wait(50);

  // Animation entrée écran (descente)
  screen.classList.add('show');
  screen.style.transform = '';
  screen.style.opacity = '';

  await wait(600);

  // Cacher toutes sections
  document.querySelectorAll('.section-content').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('fade-in', 'slide-up', 'show');
  });

  // Afficher section ciblée avec slide-up
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('slide-up');
    await wait(50);
    target.classList.add('show');
  }

  // Animation accueil spécifique, uniquement si jamais jouée
  if (id === 'accueil' && !accueilAnimated) {
    await animateAccueil();
  }

  // Animation sortie écran (remontée)
  screen.classList.remove('show');
  screen.classList.add('hide');

  await wait(800);

  // Reset écran transition pour prochaine utilisation
  screen.classList.remove('hide');
  screen.style.transform = 'translateY(100%) skewY(5deg)';
  screen.style.opacity = '0';
}

// -----------------------------
// Gestion navigation boutons
// -----------------------------
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
  button.addEventListener('click', async () => {
    if (button.classList.contains('active')) return;

    navButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const target = button.dataset.section;
    await showSectionWithTransition(target);
  });
});

// -----------------------------
// Gestion onglets compétences
// -----------------------------
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === tab);
    });
  });
});

// -----------------------------
// Carousel vertical images compétences (amélioré)
// -----------------------------
const carouselColumns = document.querySelectorAll('.carousel-column');
const carouselIntervals = [];

carouselColumns.forEach((column, colIndex) => {
  let idx = 0;
  const images = column.querySelectorAll('img');

  // Lance un interval indépendant pour chaque colonne
  const intervalId = setInterval(() => {
    images.forEach(img => img.classList.remove('active'));
    images[idx % images.length].classList.add('active');
    idx++;
  }, 3000);

  carouselIntervals.push(intervalId);
});

// -----------------------------
// Chargement initial
// -----------------------------
window.onload = () => {
  showAccueilDirect();
};
