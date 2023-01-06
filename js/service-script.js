gsap.registerPlugin(ScrollTrigger);

const gup = gsap.utils.toArray('.g-up');
gup.forEach(item => {
    gsap.fromTo(item, {
        y: 100,
        autoAlpha: 0,
    },
    {
        y:0,
        autoAlpha: 1,
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            // markers: true,
        },
        ease: "sine.out",
    })
})



// #Intro Section Timeline
const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.concerns',
        start: "top 90%",
        // markers: true
      }
})
t1
    .from('.concerns h2', {
        scale: 0,
        duration: 1,
        ease: 'sine.out'
    })
    .from('.concerned-image', {
        opacity: 0,
        duration: 1,
        ease: 'sine.out'
    },
    '<1'
    )
    .from('.bubble', {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: 'back',
    },
    '<'
    )
    .from('.bubble-text ul li', {
        y: 100,
        opacity: 0,
        stagger: 1,
        ease: "power2.easeOut"
    })
    