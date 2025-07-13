function changeSection(id) {
// Masquer toutes les sections
document.querySelectorAll('.section-content').forEach((section) => {
section.classList.add('hidden');
});

const target = document.getElementById(id);
if (target) {
target.classList.remove('hidden');

if (id === 'accueil') {
const image = document.getElementById('accueil-image');
const texte = document.getElementById('accueil-text');

// Cacher le texte au départ
texte.style.opacity = '0';

// Réinitialiser classes image
image.classList.remove('final');
image.classList.add('fullscreen-start');

setTimeout(() => {
image.classList.remove('fullscreen-start');
image.classList.add('final');
}, 100);

// Afficher le texte après 2 secondes
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

