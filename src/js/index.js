window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');

        // 當滾動距離超過 50px 時改變背景色，可以根據需要調整這個數值
        if (window.scrollY > 50) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });


    const c3mainSwiper = new Swiper(".card3-main-swiper", {
        loop: true,
        speed: 1500,
        effect: 'fade',

        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.c3-main-pagination',
            type: 'fraction'
        },
    });

    const c3swiper = new Swiper(".card3-swiper", {
        loop: true,
        speed: 1500,
        effect: 'fade',

        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.c3-swiper-pagination',
            clickable: true,
        },
    });

    function c1Ani() {
        let c1zhTitle = gsap.utils.toArray(".card1 .title-box");
        let c1SplitZhTitle = c1zhTitle.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));
        let tl = gsap.timeline({});
        tl.to(".card1", { maskSize: "400%", ease: Power0.easeNone, duration: 6, })
            .from('.card1', { filter: 'blur(10px)', duration: 1, ease: 'Power0.in', scale: 1.2 }, '<0.55')


            .from('.card1 .logo-box', { ilter: 'blur(10px)', ease: 'power0.inOut', opacity: 0, duration: 2.5, }, "<0.65")

            .fromTo(c1SplitZhTitle[0].chars, {
                opacity: 0,
                skewX: '-20',
                willChange: 'filter, transform',
                filter: 'blur(8px)'
            }, {
                // ease: 'sine',
                ease: 'sine',
                opacity: 1,
                skewX: 0,
                filter: 'blur(0px)',
                stagger: 0.04,
                duration: 1,

            }, '<0.3')
            .from('.header', { duration: 2, y: '-5vw', opacity: 0, ease: 'Power0.in', }, '<')
            .from('.arrow-box', { filter: 'blur(8px)', opacity: 0, duration: 1, }, '<1.6')

    }
    c1Ani();

    // function c2Ani() {
    //     let c2SmallZHtitle = gsap.utils.toArray(".card2 .left-box .top-box .title-box");
    //     let c2SmallSplitZhTitle = c2SmallZHtitle.map(heading => new SplitText(heading, {
    //         type: "chars,words,lines", linesClass: "clip-text"
    //     }));

    //     let c2Content = gsap.utils.toArray(".card2 .bottom-box .content");
    //     let c2SplitContent = c2Content.map(heading => new SplitText(heading, {
    //         type: "chars,words,lines", linesClass: "content-clip-text"
    //     }));

    //     let c2entitle = gsap.utils.toArray(".card2 .right-box .en-title");
    //     let c2SplitENTitle = c2entitle.map(heading => new SplitText(heading, {
    //         type: "chars,words,lines", linesClass: "en-title-clip-text"
    //     }));


    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".card2",
    //             start: "-20%",
    //         },
    //     });

    //     tl.fromTo('.card2 .left-box .top-box .img-box img', {
    //         clipPath: 'inset(100% 0 0 0)',
    //         filter: 'blur(15px) brightness(1.1)',
    //     }, {
    //         duration: 1.5,
    //         ease: 'cubic-bezier(0.16, 0.88, 0.25, 1)',
    //         clipPath: 'inset(0% 0 0 0)',
    //         filter: 'blur(0px) brightness(1)',
    //     })
    //         .fromTo('.card2 .left-box .bottom-box .img-box img', {
    //             clipPath: 'inset(100% 0 0 0)',
    //             filter: 'blur(40px) brightness(1.1)',

    //         }, {
    //             duration: 1.5,
    //             ease: 'cubic-bezier(0.16, 0.88, 0.25, 1)',
    //             clipPath: 'inset(0% 0 0 0)',
    //             filter: 'blur(0px) brightness(1)',
    //         }, '<0.2')

    //         .from(c2SplitENTitle[0].chars, {
    //             y: gsap.utils.wrap([-50, 50]),
    //             filter: 'blur(8px)',
    //             opacity: 0,
    //             duration: 1,
    //             stagger: { each: 0.05, from: "start", },

    //         }, '<0.2')
    //         .from('.card2 .right-box .zh-title', {

    //             opacity: 0,
    //             duration: 1,
    //             filter: 'blur(5px)',

    //         }, '<0.15')

    //         .fromTo(c2SmallSplitZhTitle[0].chars, {
    //             opacity: 0,
    //             filter: 'blur(8px)'
    //         }, {
    //             ease: 'sine',
    //             opacity: 1,
    //             filter: 'blur(0px)',
    //             stagger: 0.1,
    //             duration: 1,

    //         }, '<0.15')
    //         .from(".cls-1-line", { duration: 1, drawSVG: "0% 0%" }, '<1')
    //         .fromTo([c2SplitContent[0].words[0], c2SplitContent[0].words[1], c2SplitContent[0].words[2], c2SplitContent[0].words[3]], {
    //             opacity: 0,
    //             filter: 'blur(8px)'
    //         }, {
    //             ease: 'sine',
    //             opacity: 1,
    //             filter: 'blur(0px)',
    //             stagger: 0.1,
    //             duration: 1,

    //         }, '<')

    //         .fromTo(".circle-1", { drawSVG: "100% 100%" }, { ease: 'power0.in', drawSVG: "0% 100%", duration: 1.5, }, '<')
    //         .from('.circle-item-li', { duration: 1, opacity: 0 }, '<2')
    // }
    // c2Ani();

    function c2Ani() {
        let c2SmallZHtitle = gsap.utils.toArray(".card2 .left-box .top-box .title-box");
        let c2SmallSplitZhTitle = c2SmallZHtitle.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));

        let c2Content = gsap.utils.toArray(".card2 .bottom-box .content");
        let c2SplitContent = c2Content.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "content-clip-text"
        }));

        let c2entitle = gsap.utils.toArray(".card2 .right-box .en-title");
        let c2SplitENTitle = c2entitle.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "en-title-clip-text"
        }));


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card2",
                start: "-30%",
            },
        });

        tl


            .from(c2SplitENTitle[0].chars, {
                y: gsap.utils.wrap([-50, 50]),
                filter: 'blur(8px)',
                opacity: 0,
                duration: 1,
                stagger: { each: 0.05, from: "start", },

            }, '<0.2')
            .from('.card2 .right-box .zh-title', {

                opacity: 0,
                duration: 1,
                filter: 'blur(5px)',

            }, '<0.15')

            .fromTo(c2SmallSplitZhTitle[0].chars, {
                opacity: 0,
                filter: 'blur(8px)'
            }, {
                ease: 'sine',
                opacity: 1,
                filter: 'blur(0px)',
                stagger: 0.1,
                duration: 1,

            }, '<0.15')
            .from(".cls-1-line", { duration: 1, drawSVG: "0% 0%" }, '<1')
            .fromTo([c2SplitContent[0].words[0], c2SplitContent[0].words[1], c2SplitContent[0].words[2], c2SplitContent[0].words[3]], {
                opacity: 0,
                filter: 'blur(8px)'
            }, {
                ease: 'sine',
                opacity: 1,
                filter: 'blur(0px)',
                stagger: 0.1,
                duration: 1,

            }, '<')

            .fromTo(".circle-1", { drawSVG: "100% 100%" }, { ease: 'power0.in', drawSVG: "0% 100%", duration: 1.5, }, '<')
            .from('.circle-item-li', { duration: 1, opacity: 0 }, '<2')
    }
    c2Ani();

    function c2Test() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card2",
                start: "-30%",
            },
        });
        tl.to('.spotlight1', { duration: 3, right: '-200%', bottom: '-200%', })
            .from('.card2 .top-box .img-box img', { duration: 1, scale: 1.4 }, '<')

            .to('.spotlight1', { duration: 0.5, opacity: 0 }, '<0.5')
            .to('.spotlight2', { duration: 3, right: '-200%', bottom: '-200%', }, '<')
            .from('.card2 .bottom-box .img-box img', { duration: 1, scale: 1.4, }, '<')
            .to('.spotlight2', { duration: 0.5, opacity: 0 }, '<0.5')

    }
    c2Test();

    function c3Ani() {
        let c3entitle = gsap.utils.toArray(".card3 .right-box .en-title");
        let c3SplitENTitle = c3entitle.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "en-title-clip-text"
        }));


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card3",
                start: "-10% top",
                end: "bottom",
                scrub: 2,
            },
        });

        tl.to('.card3', { duration: 2, backgroundPosition: '100% 80%' })

        let textTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card3",
                start: "-35%",
            },
        });

        textTl.from(c3SplitENTitle[0].chars, {
            y: gsap.utils.wrap([-50, 50]),
            filter: 'blur(8px)',
            opacity: 0,
            duration: 1,
            stagger: { each: 0.05, from: "start", },

        })
            .from('.card3 .right-box .zh-title', {

                opacity: 0,
                duration: 1,
                filter: 'blur(5px)',

            }, '<0.2')
    }
    c3Ani()

    function c4Ani() {
        let newsItems = document.querySelectorAll('.news-item');
        let contentImgs = document.querySelectorAll('.content-img');

        let date = document.querySelectorAll('.news-btn-box .date');

        // tl.fromTo(
        //     img[i],
        //     { clipPath: 'circle(0% at 145% 49%)' },
        //     { duration: 2.5, clipPath: 'circle(100% at 50% 50%)' }
        // );

        gsap.set(contentImgs[0], { opacity: 1 });
        gsap.set(date[0], { opacity: 1 });

        newsItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {


                if (index < contentImgs.length) {

                    gsap.to(contentImgs, { opacity: 0, ease: 'power0.inOut', duration: 0.5 });
                    gsap.to(date, { opacity: 0, ease: 'power0.inOut', duration: 0.5 });


                    //主要顯示的圖片
                    gsap.to(contentImgs[index], { opacity: 1, ease: 'power0.inOut', duration: 0.5 });
                    gsap.fromTo(date[index],
                        { y: 20, filter: 'blur(8px)', },
                        { opacity: 1, filter: 'blur(0px)', y: 0, ease: 'power0.inOut', duration: 0.5 })
                    // gsap.to(date[index], { opacity: 1, ease: 'power0.inOut', duration: 0.5 })
                }
            });
        });

        //文字動態
        let c4entitle = gsap.utils.toArray(".card4 .title-box .en-title");
        let c4SplitENTitle = c4entitle.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "en-title-clip-text"
        }));

        let textTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card4",
                start: "-20%",
            },
        });

        textTl.from(c4SplitENTitle[0].chars, {
            y: gsap.utils.wrap([-50, 50]),
            filter: 'blur(8px)',
            opacity: 0,
            duration: 1,
            stagger: { each: 0.05, from: "start", },

        })
            .from('.card4 .title-box .zh-title', {

                opacity: 0,
                duration: 1,
                filter: 'blur(5px)',

            }, '<0.2')

    }
    c4Ani();

};
