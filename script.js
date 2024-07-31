// Initialisation du menu toggle
function init() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            if (menu.style.left === '0px') {
                menu.style.left = '-250px';
            } else {
                menu.style.left = '0px';
            }
        });
    } else {
        console.error('Menu toggle or menu element not found');
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    const formData = new FormData(document.getElementById('contact-form'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('/api/send-email', { // Assurez-vous que le chemin est correct
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert('Bien Reçus !');
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'envoi du message.');
    });
}


// Initialisation du script lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    init();
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    } else {
        console.error('Form element not found');
    }
});
