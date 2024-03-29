(function mouse() {
    let mouse = document.getElementById('mousecircle');
    (function mouseMove() {
        window.addEventListener('mousemove', (details) => {
            // mouse.style.left = details.x + "px"
            mouse.style.left = details.pageX + "px"
            // mouse.style.top = details.y + "px"
            mouse.style.top = details.pageY + "px"
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

    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })
    
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
        // fontSize:0,
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
        // y:100,
        scale:0.3,
        stagger:0.8,
        opacity:0,
        scrollTrigger:{
            trigger:'.skill',
            scroller:"body",
            start:'top 80%',
            end:'top 60%',
            // markers:true,
            scrub:true
        }
    } , "name")
    gsap.from('#page2',{
        borderRadius:'50%',
        scrollTrigger:{
            trigger:'#page2',
            scroller:"body",
            start:'top 90%',
            end:'top 75%',
            // markers:true,
            scrub:true
        }
    } , "name")
    
    
})();

let tl = gsap.timeline({scrollTrigger:{
    trigger:'#page3',
    scroller:'body',
    start: '50% 50%',
    end: '80% 20%',
    // markers:true,
    pin:true,
    scrub:true
}})

tl.to('#overlay-content h1',{
    width:'100%',
    stagger:2
    // backgroundColor:'red'
},'a');

(function (){
    projects = document.querySelectorAll('.projectBox')
    projectPreview = document.querySelector('.projectPreview');
    projects.forEach(element => {
        element.addEventListener('mouseenter',(e)=>{
            // console.log(e.target.attributes[2].textContent)
            projectPreview.style.display = 'block'
            image = e.target.attributes[2].textContent
            projectPreview.style.backgroundImage = `url('${image}')`
        })
    });
    projects.forEach(element => {
        element.addEventListener('mouseout',()=>{
            projectPreview.style.display = 'none'
        })
    });
})();

function SendMail(){
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jeevendrasingh1999@gmail.com",
        Password : "11870C4925E79D7CD9CD4364557584BF17DF",
        To : 'jeevendrasingh1999@gmail.com',
        From : 'jeevendrasingh1999@gmail.com',
        Subject : "Email from My Portfolio website contact",
        Body : "Name: " + name  + "<br> User Email: " + email
    }).then(
      message => alert(message)
    );
}


