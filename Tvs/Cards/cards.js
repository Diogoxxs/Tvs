    // Click em abas 

 document.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    content.style.display = 'none';
                });
                tab.classList.add('active');
                const target = document.getElementById(tab.getAttribute('data-tab'));
                if (target) {
                    target.style.display = 'flex';
                    setTimeout(() => {
                        target.classList.add('active');
                    }, 10);
                }
            });
        });
    });
// Animação da sidebar 
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            tab.classList.add('active');
            const target = document.getElementById(tab.getAttribute('data-tab'));
            target.classList.add('active');
        });
    });


// Remove os controls se não tiver

const videocontrols = document.getElementsByClassName('card-video');

function removecontrols() {
    for (let card of videocontrols) {
        const video = card.querySelector('video');
        const src = video.getAttribute('src');

        if (src && src.endsWith('.mp4')) {
            card.style.display = 'block'; // Mostra a card
        } else {
            video.removeAttribute('controls'); // Remove controles
            card.style.display = 'none'; // Oculta a card se não for .mp4
        }
    }
}

removecontrols();



// Função para controlar loop infinito em fullscreen
document.addEventListener('fullscreenchange', () => {
    const fullscreenVideo = document.fullscreenElement;

    // Verifica se o elemento atual em fullscreen é um vídeo
    if (fullscreenVideo && fullscreenVideo.tagName === 'VIDEO') {
        fullscreenVideo.loop = true;
        fullscreenVideo.play();
    } else {
        // Saiu do fullscreen, remove o loop de todos os vídeos
        document.querySelectorAll('video').forEach(video => {
            video.loop = false;
        });
    }
});

// Adiciona evento de clique duplo para alternar fullscreen em cada vídeo
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('dblclick', () => {
        if (!document.fullscreenElement) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
});

  


