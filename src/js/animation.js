gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin);


const tLoader = gsap.timeline()

tLoader.set('.menu__item-link', {color: '#fff'})
.set('.menu__item-link', {color: '#fff'})
.set('.logo svg path', {fill: '#fff'})
.set('.menu__item-link svg path', {fill: '#fff'})
.to('.menu__item-link', {
    scrollTrigger: {
        trigger: '.section__hero',
        start: "bottom 60px",
        scrub: true,
    },
    color: "#333333",
})
.to('.logo svg path', {
    scrollTrigger: {
        trigger: '.section__hero',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#333333",
})
.to('.menu__item-link svg path', {
    scrollTrigger: {
        trigger: '.section__hero',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#333333",
})

.from('.menu__item-link', {
    scrollTrigger: {
        trigger: '.section__tabs',
        start: "bottom -60px",
        scrub: true,
    },
    color: '#333333',
})

.from('.logo svg path', {
    scrollTrigger: {
        trigger: '.section__tabs',
        start: "bottom -60px",
        scrub: true,
    },
    fill: '#333333'
}).from('.menu__item-link svg path', {
    scrollTrigger: {
        trigger: '.section__tabs',
        start: "bottom -60px",
        scrub: true,
    },
    fill: '#333333'
})



.from('.menu__item-link', {
    scrollTrigger: {
        trigger: '.section__salon',
        start: "bottom 60px",
        scrub: true,
    },
    color: "#fff",
})
.from('.logo svg path', {
    scrollTrigger: {
        trigger: '.section__salon',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#fff",
})
.from('.menu__item-link svg path', {
    scrollTrigger: {
        trigger: '.section__salon',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#fff",
})

.to('.menu__item-link', {
    scrollTrigger: {
        trigger: '.section__salon',
        start: "bottom 60px",
        scrub: true,
    },
    color: "#333333",
})
.to('.logo svg path', {
    scrollTrigger: {
        trigger: '.section__salon',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#333333",
})
.to('.menu__item-link svg path', {
    scrollTrigger: {
        trigger: '.section__salon',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#333333",
})




.from('.menu__item-link', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "top 60px",
        end: "top 60px",
    },
    color: "#333333",
})
.from('.logo svg path', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "top 60px",
        end: "top 60px",
        scrub: true,
    },
    fill: "#333333",
})
.from('.menu__item-link svg path', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "top 60px",
        end: "top 60px",
        scrub: true,
    },
    fill: "#333333",
})

.to('.menu__item-link', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "top 60px",
        end: "top 60px",
        scrub: true,
    },
    color: "#fff",
})
.to('.logo svg path', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "top 60px",
        end: "top 60px",
        scrub: true,
    },
    fill: "#fff",
})
.to('.menu__item-link svg path', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "top 60px",
        end: "top 60px",
        scrub: true,
    },
    fill: "#fff",
})
.from('.menu__item-link', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "bottom 60px",
        scrub: true,
    },
    color: "#fff",
})
.from('.logo svg path', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#fff",
})
.from('.menu__item-link svg path', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#fff",
})
.to('.menu__item-link', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "bottom 60px",
        scrub: true,
    },
    color: "#333333",
})
.to('.logo svg path', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#333333",
})
.to('.menu__item-link svg path', {
    scrollTrigger: {
        trigger: '.section__form',
        start: "bottom 60px",
        scrub: true,
    },
    fill: "#333333",
})
