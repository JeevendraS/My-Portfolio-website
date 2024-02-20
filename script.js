(function mouse() {
    let mouse = document.getElementById('mousecircle');
    (function mouseMove() {
        window.addEventListener('mousemove', (details) => {
            // mouse.style.left = details.x + "px"
            mouse.style.left = details.pageX + "px"
            // mouse.style.top = details.y + "px"
            mouse.style.top = details.pageY + "px"
            console.log(details.x, details.y)
        })
    })()

    let jee = document.querySelector('.bigmouse');
    jee.addEventListener('mousemove', function () {
        mouse.style.width = '80px'
        mouse.style.height = '80px'

    })
    jee.addEventListener('mouseout', function () {
        mouse.style.width = '15px'
        mouse.style.height = '15px'
    })
})();

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

(function skillBox() {
    let toggle = document.querySelector('.toggle');
    let skill = document.querySelector('#skill');
    toggle.onmouseenter = function () {
        skill.classList.toggle('active')
    }
})();

// lenis basic setup




const lenis = new Lenis()


lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
console.log(lenis)


gsap.to("#home #hleft", {
    scale: 0,
    opacity: 0,
    x: 200,
    scrollTrigger: {
        trigger: "#home #hleft",
        scroller: "body",
        // markers: true,
        start: "50% 50%",
        end: "80% 40%",
        scrub: 1,
    }
})
gsap.to("#home #hright", {
    x: -300,
    scrollTrigger: {
        trigger: "#home #hright",
        scroller: "body",
        // markers: true,
        start: "50% 50%",
        end: "80% 40%",
        scrub: 1,
    }
})
gsap.from("#page2 .toggle", {
    rotate: 360, 
    scrollTrigger: {
        trigger: "#page2 .toggle",
        scroller: "body",
        markers: true,
        start: "50% 75%",
        end: "80% 50%",
        scrub: 1,
    }
})
gsap.from("#page3", {
    rotate: 360, 
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        markers: true,
        start: "50% 75%",
        end: "80% 50%",
        scrub: 1,
    }
})