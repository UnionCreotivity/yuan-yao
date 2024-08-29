window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    console.clear();

    const sections = gsap.utils.toArray(".slide");
    const images = gsap.utils.toArray(".image").reverse();
    const slideImages = gsap.utils.toArray(".slide__img");
    const outerWrappers = gsap.utils.toArray(".slide__outer");
    const innerWrappers = gsap.utils.toArray(".slide__inner");
    const count = document.querySelector(".count");
    const wrap = gsap.utils.wrap(0, sections.length);
    let animating;
    let currentIndex = 0;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });
    gsap.set(".slide:nth-of-type(1) .slide__outer", { yPercent: 0 });
    gsap.set(".slide:nth-of-type(1) .slide__inner", { yPercent: 0 });

    function gotoSection(index, direction) {
        animating = true;
        index = wrap(index);

        let tl = gsap.timeline({
            defaults: { duration: 1, ease: "expo.inOut" },
            onComplete: () => {
                animating = false;
            }
        });

        let currentSection = sections[currentIndex];

        let nextSection = sections[index];

        gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
        gsap.set([sections[currentIndex], images[index]], { zIndex: 1, autoAlpha: 1 });
        gsap.set([sections[index], images[currentIndex]], { zIndex: 2, autoAlpha: 1 });

        tl

            .fromTo(
                outerWrappers[index],
                {
                    yPercent: 100 * direction
                },
                { yPercent: 0 },
                0
            )
            .fromTo(
                innerWrappers[index],
                {
                    yPercent: -100 * direction
                },
                { yPercent: 0 },
                0
            )




        currentIndex = index;
    }

    Observer.create({
        type: "wheel,touch,pointer",
        preventDefault: true,
        wheelSpeed: -1,
        onUp: () => {
            console.log("down");
            if (animating) return;
            gotoSection(currentIndex + 1, +1);
        },
        onDown: () => {
            console.log("up");
            if (animating) return;
            gotoSection(currentIndex - 1, -1);
        },
        tolerance: 10
    });


}