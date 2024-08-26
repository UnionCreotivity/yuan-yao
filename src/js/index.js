window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.registerPlugin();

    const c3swiper = new Swiper(".card3-swiper", {
        loop: true,
        speed: 1500,
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.c3-swiper-pagination',
            clickable: true,
        },
    });

    const c4swiper = new Swiper(".card4-swiper", {
        loop: true,
        speed: 1500,
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.c4-swiper-pagination',
            clickable: true,
        },
    });

    function c1Ani() {
        let tl = gsap.timeline({});
        tl.to(".card1", { maskSize: "400%", ease: Power0.easeNone, duration: 6, })
            .from('.logo-box', { y: 100, opacity: 0, duration: 2, }, "<+0.8")
            .from('.title-box', { y: 80, opacity: 0, duration: 1.5, }, "<+0.3")
            .from('.arrow-box', { opacity: 0, duration: 1, ease: 'power0.in', }, "<0.5")
            .from('.header-img', { opacity: 0, duration: 1, ease: 'power0.in', }, "<")
    }
    // c1Ani()
};
