document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Initialize Swiper (Hero Section)
    const swiper = new Swiper('.heroSwiper', {
        loop: true, // Infinite loop
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: 'fade', // Optional: fade effect for smoother transitions
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
        once: false, // Let them animate again if scrolled back up/down? User said "every time I scroll down". 
        // Usually for "fade up individually" we keep once:true but stagger. 
        // But if they want to see it *every time* they scroll down, maybe once:false.
        // However, "Every time I scroll down I find them fading up" usually implies "As I scroll down the page, I want to see them appearing one by one".
        // Let's stick to standard behavior but maybe remove the staggered delays in HTML so they are purely scroll-triggered.
        offset: 120,
        delay: 0,
    });

    // Lightbox2 Configuration
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'fadeDuration': 300,
            'imageFadeDuration': 300,
            'showImageNumberLabel': false
        });
    }

    // Global Image Error Handler (Fallback)
    document.addEventListener('error', function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            const fallback = 'assets/images/logo.svg'; // Use logo as fallback or a dedicated placeholder
            if (e.target.src !== window.location.origin + '/' + fallback && !e.target.dataset.errorHandled) {
                e.target.dataset.errorHandled = "true";
                e.target.src = fallback;
                e.target.classList.add('image-fallback');
            }
        }
    }, true);

    // Smooth Scroll Fallback (for older browsers, though CSS handles most)
    // and for potential future "offset" needs if we add a fixed header.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
