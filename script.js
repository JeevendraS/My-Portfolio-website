(function mouse() {
    let mouse = document.getElementById('mousecircle');
    (function mouseMove() {
        window.addEventListener('mousemove', (details) => {
            mouse.style.transform = `translate(${details.clientX}px,${details.clientY}px)`
        })
    })()

    let jee = document.querySelector('.bigmouse');
    jee.addEventListener('mouseover', function () {
        mouse.style.width = '80px'
        mouse.style.height = '80px'
        mouse.style.transform = translate("-50%","-50%")

    })
    jee.addEventListener('mouseout', function () {
        mouse.style.width = '15px'
        mouse.style.height = '15px'
    })
})();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

(function gsapAnimation() {
    let tl = gsap.timeline()
    tl.from('#navigation', {
        width: 0,
        duration: 1,
        ease: 'Expo.ease-in-out'
    })
        .to('.popFont', {
            y: 0,
            duration: 0.9,
            stagger: 0.5,
        })
        .from('#navItem ul li', {
            y: 100,
            stagger: 0.1
        })
        .from('#hright', {
            scale: 0.9,
            opacity: 0.8
        })
})();

// skill box rounding toggle

(function skillBox(){
    let toggle = document.querySelector('.toggle');
    let skill = document.querySelector('#skill');
    toggle.onmouseenter = function () {
        skill.classList.toggle('active')
    }
})();




