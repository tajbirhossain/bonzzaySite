const splitTypes = document.querySelectorAll(".revealType");
const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".revealParent",
        start: 'top top',
        end: 'top -400%',
        scrub: true,
        markers: false,
        pin: true,
    }
});

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });
    timeline.from(text.chars, {
        opacity: 0.2,
        stagger: 0.05,
        duration: 0.5,
    });
});

const revealBoxes = document.querySelectorAll(".revealBox");
revealBoxes.forEach((box, i) => {
    timeline.fromTo(box,
        { y: 600, opacity: 1, scrub: 0.1, stagger: 0.5, },
        { y: -window.innerHeight - 600, opacity: 1, duration: 8, ease: 'power1.inOut' },
        i * 2
    );
});


const splitTypes2 = document.querySelector(".splitTypes2")
const splitTypes2Text = new SplitType(splitTypes2, { types: 'chars' })
gsap.from(splitTypes2Text.chars, {
    scrollTrigger: {
        trigger: ".revealParent2",
        start: 'top top',
        end: '+=150%',
        scrub: true,
        markers: false,
        pin: true,
    },
    opacity: 0.2,
    stagger: 0.1,
})






const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//     console.log(e)
// })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)