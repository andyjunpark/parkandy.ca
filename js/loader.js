const loader = document.querySelector('.loader');
const main = document.querySelector('.video-wrap');
const body = document.querySelector('body');

// Fade in Video Wrapper after Loader //
function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        body.style.overflow ='visible';

        main.style.display ='block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 3000);
}

init();

