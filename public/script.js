// -----------------------------
// Changement de section principale
// -----------------------------
function changeSection(id) {
    document.querySelectorAll('.section-content').forEach((section) => {
        section.classList.add('hidden');
    });

    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('hidden');
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
    }
}

// -----------------------------
// Toggle des technologies
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


const buttons = document.querySelectorAll('.nav-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) return; // Ignore si déjà actif

    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const section = button.dataset.section;
    changeSection(section); // Ta fonction personnalisée
  });
});


window.onload = () => {
    changeSection('accueil');
};