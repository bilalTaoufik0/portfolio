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

// Fonctions pour les boutons
function viewProject(projectName) {
    alert(`Visualisation du ${projectName}`);
}

function downloadProject() {
    const downloadLink = './externe/Crypto-Shild.exe';
    window.location.href = downloadLink;
}

document.addEventListener('DOMContentLoaded', init);

window.viewProject = viewProject;
window.downloadProject = downloadProject;
