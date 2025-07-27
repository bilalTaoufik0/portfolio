// --- Code des particules ---
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width, height;
function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = 1 + Math.random() * 4;
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.speedY = (Math.random() - 0.5) * 1.5;
    const colors = ["#FFA500", "#808080", "#000000"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.opacity = 0.6;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

const particles = [];
const PARTICLE_COUNT = 150;
for(let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (const p of particles) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(animate);
}

animate();

// --- FIN Code particules ---




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



function toggleTech(button) {
  const card = button.closest('.relative');
  const techDetails = card.querySelector('.tech-details');
  if (!techDetails) return;

  techDetails.classList.toggle('hidden');
}




// -----------------------------
// Chargement initial
// -----------------------------
window.onload = () => {
  showAccueilDirect();
};
