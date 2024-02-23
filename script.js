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

// (function skillBox() {
//     let toggle = document.querySelector('.toggle');
//     let skill = document.querySelector('#skill');
//     toggle.onmouseenter = function () {
//         skill.classList.toggle('active')
//     }
// })();

// lenis basic setup




// const lenis = new Lenis()


// lenis.on('scroll', (e) => {
//     console.log(e)
// })

// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
// console.log(lenis)

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


gsap.to("#home #hleft", {
    scale: 0,
    opacity: 0,
    x: 200,
    scrollTrigger: {
        trigger: "#home #hleft",
        scroller: "body",
        markers: true,
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
        markers: true,
        start: "50% 50%",
        end: "80% 40%",
        scrub: 1,
    }
})
// gsap.from("#page2 .toggle", {
//     rotate: 360, 
//     scrollTrigger: {
//         trigger: "#page2 .toggle",
//         scroller: "body",
//         markers: true,
//         start: "50% 75%",
//         end: "80% 50%",
//         scrub: 1,
//     }
// })

// hgkf

// Define some skills
const skills = [
    { name: 'HTML', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' }
  ];
  
  // Function to display skills on the page with animation
  function displaySkills() {
    const skillsList = document.getElementById('skills-list');
  
    // Clear previous content
    skillsList.innerHTML = '';
  
    // Loop through skills and create elements with animation
    skills.forEach((skill, index) => {
      setTimeout(() => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
  
        const skillName = document.createElement('div');
        skillName.classList.add('skill-name');
        skillName.textContent = skill.name;
  
        const skillLevel = document.createElement('div');
        skillLevel.classList.add('skill-level');
        skillLevel.textContent = 'Level: ' + skill.level;
  
        skillDiv.appendChild(skillName);
        skillDiv.appendChild(skillLevel);
        skillsList.appendChild(skillDiv);
      }, index * 150); // Delay each skill animation
    });
  }
  
  // Call the function to display skills with animation when the page loads
  window.onload = displaySkills;
  