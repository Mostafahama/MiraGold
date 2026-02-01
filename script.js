document.addEventListener('DOMContentLoaded', function () {
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

    // Lightbox2 Configuration (Optional, defaults are usually good)
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fadeDuration': 300,
        'imageFadeDuration': 300,
        'showImageNumberLabel': false // Clean look
    });

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
