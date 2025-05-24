document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu ul li a');
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    const clickSound = document.getElementById('click-sound');

    const toggleMenu = () => {
        const isMenuOpen = menu.style.left === '0px';
        menu.style.left = isMenuOpen ? '-250px' : '0px';
    };

    menuToggle.addEventListener('click', toggleMenu);

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            if (menu.style.left === '0px') {
                menu.style.left = '-250px';
            }
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            menu.style.left = '-250px';

            clickSound.currentTime = 0;
            clickSound.play();

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function viewProject(projectName) {
        let url = '';
        switch(projectName) {
            case 'Projet 1':
                url = 'https://projet-airlockunlock.netlify.app/';
                break;
            case 'Projet 2':
                url = 'https://www.uvitec.co.uk/alliance-iris/3d-product-tour/';
                break;
            default:
                console.error('Unknown project:', projectName);
                return;
        }
        window.open(url, '_blank');
    }

    function downloadProject(projectName) {
        let url = '';
        switch(projectName) {
            case 'Projet 3':
                url = './externe/Crypto-Shild.exe';
                break;
            default:
                console.error('Unknown project:', projectName);
                return;
        }
        window.location.href = url;
    }

    document.querySelectorAll('.view-button').forEach(button => {
        button.addEventListener('click', () => {
            viewProject(button.getAttribute('data-project'));
        });
    });

    document.querySelectorAll('.download-button').forEach(button => {
        button.addEventListener('click', () => {
            downloadProject(button.getAttribute('data-project'));
        });
    });

    document.querySelector('.profile-header img').addEventListener('click', function() {
        this.classList.add('rotate-horizontal');
        setTimeout(() => {
            this.classList.remove('rotate-horizontal');
        }, 1000);
    });

    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    musicToggle.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggle.textContent = '🎵';
        } else {
            backgroundMusic.pause();
            musicToggle.textContent = '🔇';
        }
    });

    backgroundMusic.volume = 0.2;
});
