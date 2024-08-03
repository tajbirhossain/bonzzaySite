
const splitTypes = document.querySelectorAll(".revealType");

const cards = document.querySelectorAll(".stackedCard")
const spacer = 20;
const minScale = 0.8;
const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });
cards.forEach((card, i) => {
    const scaleVal = distributor(i, cards[i], cards);
    const blurVal = 30 * (1 - scaleVal);

    const tween = gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: `top+=-100 top`,
            scrub: true,
            invalidateOnRefresh: true,
            // pin: true,
            // pinSpacing: "margin",
        },
        ease: "none",
        scale: scaleVal,
        filter: `blur(${blurVal}px)`,
    })

    ScrollTrigger.create({
        trigger: card,
        start: `top+=-100 top`,
        endTrigger: '.stackedCardWrap',
        end: `bottom top+=${530 + (cards.length * spacer)}`,
        pin: true,
        pinSpacing: false,
        id: 'pin',
        invalidateOnRefresh: true,
    });;
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