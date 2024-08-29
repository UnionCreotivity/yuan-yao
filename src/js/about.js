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


    //大事紀=>公司沿革
    function historyYearHover() {
        let yearNav = document.querySelectorAll('.history-content .left-year-nav div');
        let contentImgs = document.querySelectorAll('.history-content .center-img-box img');
        let date = document.querySelectorAll('.history-content .right-info-box .info-item');


        gsap.set(contentImgs[0], { opacity: 1 });
        gsap.set(date[0], { opacity: 1 });

        yearNav.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {


                if (index < contentImgs.length) {

                    gsap.to(contentImgs, { opacity: 0, ease: 'power0.inOut', duration: 0.5 });
                    gsap.to(date, { opacity: 0, ease: 'power0.inOut', duration: 0.5 });


                    //主要顯示的圖片
                    gsap.to(contentImgs[index], { opacity: 1, ease: 'power0.inOut', duration: 0.5 });
                    gsap.fromTo(date[index],
                        { y: 20, filter: 'blur(8px)', },
                        { opacity: 1, filter: 'blur(0px)', y: 0, ease: 'power0.inOut', duration: 0.5 })
                }
            });
        });


    }
    historyYearHover();


    function classicSlider() {
        let arrowTop = document.querySelector('.arrow-top');
        let arrowBottom = document.querySelector('.arrow-bottom');
        let classicItems = document.querySelectorAll('.classic-item');
        let currentIndex = 0;

        //初始設定
        let initYearBox = classicItems[currentIndex].querySelector('.left-box').querySelector('.year-box');
        let initContentBox = classicItems[currentIndex].querySelector('.info-content')
        let initIMG = classicItems[currentIndex].querySelector('.right-box').querySelector('.img-box');
        let initName = classicItems[currentIndex].querySelector('.right-box').querySelector('.local-name-box');
        let initBoxLine = classicItems[currentIndex].querySelector('.middle-line')

        gsap.set([classicItems[currentIndex]], { zIndex: 2, autoAlpha: 1, opacity: 1 });
        gsap.set([initYearBox], { opacity: 1 });
        gsap.set([initContentBox], { opacity: 1 });
        gsap.set([initIMG], { opacity: 1 });
        gsap.set([initName], { opacity: 1 });
        gsap.set([initBoxLine], { opacity: 1 });

        arrowTop.addEventListener('click', (e) => {

            if (currentIndex > 0) {

                //要退回來的
                let prevYearBox = classicItems[currentIndex - 1].querySelector('.left-box').querySelector('.year-box');
                let prevContentBox = classicItems[currentIndex - 1].querySelector('.info-content')
                let prevIMG = classicItems[currentIndex - 1].querySelector('.right-box').querySelector('.img-box');
                let prevName = classicItems[currentIndex - 1].querySelector('.right-box').querySelector('.local-name-box');
                let prevBoxLine = classicItems[currentIndex - 1].querySelector('.middle-line')

                //當前
                let currentYearBox = classicItems[currentIndex].querySelector('.left-box').querySelector('.year-box');
                let currentContentBox = classicItems[currentIndex].querySelector('.info-content')
                let currentIMG = classicItems[currentIndex].querySelector('.right-box').querySelector('.img-box');
                let currentName = classicItems[currentIndex].querySelector('.right-box').querySelector('.local-name-box');
                let currentBoxLine = classicItems[currentIndex].querySelector('.middle-line')


                let tl = gsap.timeline({
                });
                tl
                    .to(currentYearBox, { duration: 1, opacity: 0, y: '20vw', ease: "expo.in" })
                    .to(currentContentBox, { duration: 1, opacity: 0, y: '20vw', ease: "expo.in" }, '<0.15')
                    .to(currentName, { duration: 1, opacity: 0, y: '20vw', ease: "expo.in" }, '<0.2')
                    .to(currentIMG, { duration: 1, opacity: 0, y: '20vw', ease: "expo.in" }, '<0.1')
                    .to(currentBoxLine, { duration: 1, opacity: 0, y: '20vw', ease: "expo.in" }, '<0.2')


                    .to(prevBoxLine, { duration: 1.5, opacity: 1, y: '0vw', ease: "power4.inOut", }, '<0.1')
                    .to(prevYearBox, { duration: 1.5, opacity: 1, y: '0vw', ease: "power4.inOut", }, '<0.2')
                    .to(prevIMG, { duration: 1.5, opacity: 1, y: '0vw', ease: "power4.inOut", }, '<0.2')
                    .to(prevContentBox, { duration: 1.5, opacity: 1, y: '0vw', ease: "power4.inOut", }, '<0.2')
                    .to(prevName, { duration: 1.5, opacity: 1, y: '0vw', ease: "power4.inOut", }, '<0.2')


                currentIndex--;
            }


        })

        arrowBottom.addEventListener('click', (e) => {

            if (currentIndex < classicItems.length - 1) {

                //下一個要跳上來的
                let nextyearBox = classicItems[currentIndex + 1].querySelector('.left-box').querySelector('.year-box');
                let nextContentBox = classicItems[currentIndex + 1].querySelector('.info-content')
                let nextIMG = classicItems[currentIndex + 1].querySelector('.right-box').querySelector('.img-box');
                let nextName = classicItems[currentIndex + 1].querySelector('.right-box').querySelector('.local-name-box');
                let nextBoxLine = classicItems[currentIndex + 1].querySelector('.middle-line')

                //當前要往上跑掉的
                let lastyearBox = classicItems[currentIndex].querySelector('.left-box').querySelector('.year-box');
                let lastContentBox = classicItems[currentIndex].querySelector('.info-content')
                let lastIMG = classicItems[currentIndex].querySelector('.right-box').querySelector('.img-box');
                let lastName = classicItems[currentIndex].querySelector('.right-box').querySelector('.local-name-box');
                let lastBoxLine = classicItems[currentIndex].querySelector('.middle-line')

                let tl = gsap.timeline({
                });
                tl
                    // .to(classicItems[currentIndex], { zIndex: 1, duration: 1.5, opacity: 0, y: '-20vw', ease: "expo.inOut" })

                    .to(lastyearBox, { duration: 1.2, opacity: 0, y: '-20vw', ease: "expo.in" })
                    .to(lastContentBox, { duration: 1.2, opacity: 0, y: '-20vw', ease: "expo.in" }, '<0.1')
                    .to(lastName, { duration: 1.2, opacity: 0, y: '-20vw', ease: "expo.in" }, '<0.15')
                    .to(lastIMG, { duration: 1.2, opacity: 0, y: '-20vw', ease: "expo.in" }, '<0.1')
                    .to(lastBoxLine, { duration: 1, opacity: 0, y: '-20vw', ease: "expo.in" }, '<0.1')

                    .fromTo(nextyearBox,
                        {
                            opacity: 0,
                            y: '17vw'
                        },
                        {
                            duration: 1.5,
                            opacity: 1,
                            ease: "expo.inOut",
                            y: '0vw',
                        }, '<0.7')
                    .fromTo(nextContentBox,
                        {
                            opacity: 0,
                            y: '12vw'
                        },
                        {

                            duration: 1.5,
                            opacity: 1,
                            ease: "expo.inOut",
                            y: '0vw',
                        }, '<0.3')
                    .fromTo(nextIMG,
                        {
                            opacity: 0,
                            y: '12vw'
                        },
                        {

                            duration: 1.5,
                            opacity: 1,
                            ease: "expo.inOut",
                            y: '0vw',
                        }, '<0.1')

                    .fromTo(nextName,
                        {
                            opacity: 0,
                            y: '15vw'
                        },
                        {
                            duration: 1.5,
                            opacity: 1,
                            ease: "expo.inOut",
                            y: '0vw',
                        }, '<0.2')
                    .fromTo(nextBoxLine,
                        {
                            opacity: 0,
                            y: '15vw'
                        },
                        {
                            duration: 1,
                            opacity: 1,

                            y: '0vw',
                        }, '<0.5')

                currentIndex++;
            }

        })
    }
    classicSlider()
}