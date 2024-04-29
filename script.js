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
        transform: 'translateX(-180%)',
        scrollTrigger: {
            trigger: '.about-animation',
            scroll: 'body',
            start: 'top 0%',
            end: 'top -400%',
            scrub: 2,
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

// overflowXEffect();