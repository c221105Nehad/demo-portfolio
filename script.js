
let cursor = document.getElementById('cursor');

let cursorChild = document.getElementById('cursor-child');

const parentUl = document.getElementById('parent-ul');


let blog = document.querySelector('.blog');

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
            end: 'top -500%',
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
            end: 'top -500%',
            scrub: 3,
            pin: true
        }
    });

    gsap.to('.summery-animation h1', {
        transform: 'translateX(-190%)',
        scrollTrigger: {
            trigger: '.summery-animation',
            scroller: 'body',
            start: 'top 0%',
            end: 'top -500%',
            scrub: 3,
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


gsap.from('.form-title', {
    y: -70,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.form-title'
});


gsap.to('.resume', {
    letterSpacing: '3.6vw',
    duration: 0.7,
    scrollTrigger: '.resume'
});

gsap.from('.about-title', {
    y: 40,
    duration: 2,
    delay: 0.5,
    scrollTrigger: '.about-title',
    ease: "elastic.out(1,0.3)",
    opacity: 0
});

gsap.from('.summery-content-left', {
    marginTop: '500px',
    duration: 1,
    opacity: 0,
    scrollTrigger: '.summery-content-left'
});

gsap.from('.summery-content-right', {
    marginTop: '500px',
    duration: 1,
    opacity: 0,
    scrollTrigger: '.summery-content-right'
});


gsap.from('.what-title', {
    scale: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.what-container',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 50%',
        scrub: 1.5
    }
});

gsap.from('.what-skills-card', {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.what-skills-card',
});

gsap.from('.what-skills-card div', {
    y: 200,
    duration: 1,
    opacity: 0,
    scrollTrigger: '.what-skills-card',
});


const forPortfolio = () => {

    let portfolio = document.querySelector('.portfolio');

    let portfolioText = portfolio.textContent;

    let splittedTextPortfolio = portfolioText.split('');

    let clutter = '';

    splittedTextPortfolio.forEach(function (letter) {
        clutter += `<span>${letter}</span>`;
    });

    portfolio.innerHTML = clutter;


    portfolio.addEventListener('mouseover', (det) => {
        gsap.to(portfolio.querySelectorAll('span'), {
            y: '-20px',
            duration: 0.7,
            stagger: 0.15,
            opacity: 0.5
        });
    });

    portfolio.addEventListener('mouseout', () => {
        gsap.to(portfolio.querySelectorAll('span'), {
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            opacity: 1
        });
    });
};

forPortfolio();



const forBlog = () => {

    let blogText = blog.textContent;

    let splittedTextBlog = blogText.split('');

    let clutter = '';

    splittedTextBlog.forEach(function (letter) {
        clutter += `<span>${letter}</span>`;
    });

    blog.innerHTML = clutter;

    blog.addEventListener('mouseover', (det) => {
        gsap.to(blog.querySelectorAll('span'), {
            y: '-20px',
            duration: 0.7,
            stagger: 0.15,
            opacity: 0.5
        });
    });

    blog.addEventListener('mouseout', () => {
        gsap.to(blog.querySelectorAll('span'), {
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            opacity: 1
        });
    });
}

forBlog();