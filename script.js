const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll('.elem').forEach(elem => {
    let image = elem.querySelector("img");
    let tl = gsap.timeline();
    let xtransform = gsap.utils.random(-100, 100);
    tl
    .set(image, {
        transformOrigin: `${xtransform < 0 ? 0 : '100%'}`,
        scale: 1,
        opacity: 1,
    }, "start")
    .to(image, {
        scale: 0,
        opacity: 1,
    
        ease: "none",
        scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: false,
        }
    }, "start")
    .to(elem,{
        xPercent:xtransform,
        ease:"Power4.easeInOut",
        scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: false,

        }
    })
})

// Ensure images are loaded before applying animations
window.addEventListener('load', () => {
    gsap.to('.aspect-square.elem', {opacity: 1, duration: 0.5, stagger: 0.1});
});