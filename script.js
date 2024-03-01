import locomotiveScroll from "locomotive-scroll";
const scroll = new locomotiveScroll();

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

(function leniSetup(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
})();


(function page1Animation(){
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
            scrub: true,
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
})();

(function skillPageAnimation(){
    gsap.from('.skills-container #myskill', {
        width: 0,
        scrollTrigger: {
            trigger: ".skills-container #myskill",
            scroller: 'body',
            // markers: true,
            start: '50% 80%',
            end: '80% 40%',
            scrub: true
    
        }
    },"skill")
    gsap.from('.skills-container #myskill', {
        height:0,
        scrollTrigger: {
            trigger: ".skills-container #myskill",
            scroller: 'body',
            start: '50% 50%',
            end: '80% 30%',
            delay:1,
            scrub: true,
            ease: 'Expo.ease-in-out'
        }
    },"skill")
    
    gsap.from(".skills-list a", {
        fontSize:0,
        stagger:0.2,
        scrollTrigger:{
            trigger: ".skills-container a",
            scroller: "body",
            start: '50% 80%',
            end: '50% 60%',
            scrub: true,
        }
    },"name")
    
    gsap.from('.skill',{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:'.skill',
            scroller:"body",
            start:'top 90%',
            end:'top 70%',
            scrub:true
        }
    } , "name")
    
    
})();

