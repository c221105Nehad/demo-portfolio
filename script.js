let cursor = document.getElementById('cursor');

let cursorChild = document.getElementById('cursor-child');

window.addEventListener('mousemove', function (dets) {

    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
    });

    gsap.to(cursorChild, {
        x: dets.x,
        y: dets.y,
        delay: 0.1
    })
});

gsap.from('.hero-greeting', {
    x: -100,
    duration: 1,
    opacity: 0,
    delay: 0.5
});

document.querySelector('.rotate-t').style.color = 'crimson';

// gsap.to ('.rotate-t', {
//     marginTop: '10px',
//     marginBottom: '10px',
//     yoyo: true,
//     repeat: -1,
//     duration: 0.5,
// });

document.querySelector('.rotate-y').style.color = 'royalblue';

// gsap.to ('.rotate-y', {
//     rotate: '180deg',
//     yoyo: true,
//     repeat: -1,
//     duration: 0.5,
// });

const overflowXEffect = () => {

    gsap.to('.about-animation h1', {
        transform: 'translateX(-200%)',
        scrollTrigger: {
            trigger: '.about-animation',
            scroll: 'body',
            start: 'top 0%',
            end: 'top -400%',
            scrub: 3,
            pin: true
        }
    });

    gsap.to('.what-animation h1', {
        transform: 'translateX(0%)',
        scrollTrigger: {
            trigger: '.what-animation',
            scroll: 'body',
            start: 'top 0%',
            end: 'top -400%',
            scrub: 2,
            pin: true
        }
    });

    gsap.to('.summery-animation h1', {
        transform: 'translateX(-190%)',
        scrollTrigger: {
            trigger: '.summery-animation',
            scroller: 'body',
            start: 'top 0%',
            end: 'top -300%',
            scrub: 2,
            pin: true
        }
    });

}

overflowXEffect();

gsap.from('.about-container', {
    marginTop: '15vh',
    scale: 0.9,
    duration: 1,
    scrollTrigger: '.about-container',
    transform: 'translateY(30px)',
    opacity: 0.1
});

gsap.from('.footer-container', {
    transform: 'translateY(100%)',
    paddingTop: '0%',
    scrollTrigger: {
        trigger: 'footer',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 50%',
        scrub: 2
    }
});


gsap.from('.left-section-title', {
    x: -60,
    opacity: 0,
    scrollTrigger: {
        trigger: 'left-footer',
        scroller: 'body',
        start: 'top 40%',
        end: 'top 50%',
        scrub: 2
    }
});

// gsap.from ('.left-section-title', {
//     x: -60,
//     opacity: 0,
//     scrollTrigger: '.left-section-title'
// });


gsap.from('.form-title', {
    y: -70,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.form-title'
});

let button = document.querySelector('input[type="button"]');

button.addEventListener('mouseenter', function () {

    gsap.to('.effect-element', {
        transform: 'translateX(530%)',
        backgroundColor: 'white',
        delay: 0.5,
        duration: 1
    });
});

button.addEventListener('mouseleave', function () {

    gsap.to('.effect-element', {
        transform: 'translateX(-100%)',
        backgroundColor: 'white',
        duration: 1,
        delay: 0.5,
    });
});

gsap.to ('.resume', {
    letterSpacing: '3.3vw',
    duration: 0.7,
    ease: "power1.in",
    scrollTrigger: '.resume'
});

gsap.from ('.about-title', {
    y: 40,
    duration: 2,
    delay: 0.5,
    scrollTrigger: '.about-title',
    ease: "elastic.out(1,0.3)",
    opacity: 0
});

gsap.from ('.summery-content-left', {
    marginTop: '500px',
    duration: 1,
    opacity: 0,
    scrollTrigger: '.summery-content-left'
});

gsap.from ('.summery-content-right', {
    marginTop: '500px',
    duration: 1,
    opacity: 0,
    scrollTrigger: '.summery-content-right'
});


gsap.from ('.what-title', {
    scale: 100,
    duration: 1,
    opacity: 0,
    delay: 3,
    scrollTrigger: '.what-title'
});

gsap.from ('.what-skills-card', {
    transform: 'translateX(200%) rotateY(120deg)',
    opacity: 0,
    duration: 1.5,
    scrollTrigger: '.what-skills-card',
    stagger: 0.2,
    delay: 1.5,
});
