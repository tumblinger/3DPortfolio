gsap.registerPlugin(ScrollTrigger);

function initNavigation() {
    const mainNavLinks = gsap.utils.toArray('.menu__body a');

    mainNavLinks.forEach(link => {
        link.addEventListener('mouseleave', (e) => {
            link.classList.add('animate-out');
            setTimeout(() => {
                link.classList.remove('animate-out')
            }, 300)
        })
    });
}

function init() {
    initNavigation();
}

window.addEventListener('load', function () {
    init();
});