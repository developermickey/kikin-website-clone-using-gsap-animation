gsap.registerPlugin(ScrollTrigger);


gsap.to(".heading1", {
    ease: "power3.out",
    opacity: 1,
    duration: 8,
})
gsap.to(".heading2", {
    delay: 1,
    ease: "power3.out",
    opacity: 1,
    duration: 8,
})

gsap.to(".demo1", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page1",
        start: "top -100%",
        end: "bottom top",
        scrub: true,
        stagger: 0.1,

    }
})

gsap.to(".demo2", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page1",
        start: "top -70%",
        end: "bottom top",
        scrub: true,
        stagger: 0.1,

    }
})

gsap.to(".demo3", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page2",
        start: "top 15%",
        end: "top bottom",
        scrub: true,
        stagger: 0.1,

    }
})
gsap.to(".demo4", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page2",
        start: "top 20%",
        end: "top bottom",
        scrub: true,
        stagger: 0.1,

    }
})
gsap.to(".demo5", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page2",
        start: "top 25%",
        end: "top bottom",
        scrub: true,
        stagger: 0.1,

    }
})

// GSAP for Page 3 to Page 5


let heading = document.querySelectorAll("#page3 h3");
let headings = document.querySelectorAll("#page4 h3");
let headingss = document.querySelectorAll("#page5 h3");

function textSplitteing() {
    heading.forEach((elem) => {
        let clutter = '';
        let h1Text = elem.textContent;
        let splitedText = h1Text.split('');
        splitedText.forEach((e) => {
            clutter += `<span>${e}</span>`
        });
        elem.innerHTML = clutter;
    })
}

function gsapAnimation() {
    gsap.to("#page3 h3 span", {
        color: "#55dd4a",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page3",
            start: "top 50%",
            end: "top -30%",
            scrub: true,
        }
    })
}
textSplitteing();
gsapAnimation();


function textSplitteings() {
    headings.forEach((elem) => {
        let clutter = '';
        let h1Text = elem.textContent;
        let splitedText = h1Text.split('');
        splitedText.forEach((e) => {
            clutter += `<span>${e}</span>`
        });
        elem.innerHTML = clutter;
    })
}

function gsapAnimations() {
    gsap.to("#page4 h3 span", {
        color: "#55dd4a",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page4",
            start: "top 50%",
            end: "top -30%",
            scrub: true,
        }
    })
}
textSplitteings();
gsapAnimations();


function textSplitteingss() {
    headingss.forEach((elem) => {
        let clutter = '';
        let h1Text = elem.textContent;
        let splitedText = h1Text.split('');
        splitedText.forEach((e) => {
            clutter += `<span>${e}</span>`
        });
        elem.innerHTML = clutter;
    })
}

function gsapAnimationss() {
    gsap.to("#page5 h3 span", {
        color: "#55dd4a",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page5",
            start: "top 50%",
            end: "top -30%",
            scrub: true,
        }
    })
}
textSplitteingss();
gsapAnimationss();




// Page6 Heading animation 
let headingsss = document.querySelectorAll("#page6 .left h2");

function textSplitteingsss() {
    headingsss.forEach((elem) => {
        let clutter = '';
        let h1Text = elem.textContent;
        let splitedText = h1Text.split('');
        splitedText.forEach((e) => {
            clutter += `<span>${e}</span>`
        });
        elem.innerHTML = clutter;
    })
}

function gsapAnimationsss() {
    gsap.to("#page6 .left h2 span", {
        color: "#55dd4a",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page6",
            start: "top 50%",
            end: "top -30%",
            scrub: true,
            // markers: true,
        }
    })
}
textSplitteingsss();
gsapAnimationsss();




gsap.to(".page6Img1", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page5",
        start: "top -100%",
        end: "bottom top",
        scrub: true,
        stagger: 0.1,

    }
})

gsap.to(".page6Img2", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page5",
        start: "top -70%",
        end: "bottom top",
        scrub: true,
        stagger: 0.1,

    }
})

gsap.to(".page6Img3", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page6",
        start: "top 15%",
        end: "top bottom",
        scrub: true,
        stagger: 0.1,

    }
})