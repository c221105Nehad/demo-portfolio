let cursor = document.getElementById('cursor');

let cursorChild = document.getElementById('cursor-child');

window.addEventListener('mousemove', function(dets) {

    gsap.to (cursor, {
        x: dets.x,
        y: dets.y,
        // duration: 0.3
    });

    gsap.to (cursorChild, {
        x: dets.x,
        y: dets.y,
        delay: 0.1
    })
});