gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

gsap.from(".page1 div", {
    scrollTrigger: ".page1",
    y: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

// Page 2 animations
tl.from(".page2 .nav", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    stagger: 0.3
});

tl.from(".page2 .nav a", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3
});

tl.from(".page2 .nav i", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3
});

tl.from(".page2 .nav h1", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3
});

gsap.from(".page2 .nav-cont", {
    x: -100,
    opacity: 0,
    duration: 3,
    delay: 4
});

gsap.from(".page2 .para", {
    x: 100,
    opacity: 0,
    duration: 3.5,
    delay: 5
});

gsap.from(".page2 .icons i", {
    x: 100,
    opacity: 0,
    duration: 3.5,
    delay: 5,
    stagger: 0.3
});

gsap.from(".page2 .circle", {
    y: 100,
    scale: 0.1,
    opacity: 0,
    duration: 3,
    delay: 4
});

tl.from(".page2 .box", {
    y: 100,
    scale: 1,
    opacity: 0,
    duration: 1,
    delay: 1
});

gsap.from(".page2 .conner", {
    y: -40,
    scale: 1,
    opacity: 0,
    duration: 5.3,
    delay: 5.3
});

gsap.from(".page2 .conner1", {
    y: -40,
    scale: 1,
    opacity: 0,
    duration: 5.3,
    delay: 5.3
});

tl.from(".page2 .box img", {
    y: -40,
    scale: 1,
    opacity: 0,
    duration: 1,
    delay: 1
});

tl.from(".page2 .box p", {
    y: 40,
    scale: 1,
    opacity: 0,
    duration: 1,
    delay: 1
});

// Page 3 animations
gsap.from(".page3 .main-image", {
    scale: 1,
    opacity: 1,
    duration: 1.5,
    delay: 0.5
});

gsap.from(".page3 .text .para", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 1
}, "-=1");

gsap.from(".page3 .text h1", {
    x: -50,
    opacity: 0,
    duration: 1.5,
    delay: 1
}, "-=1");

// Page transition animations
ScrollTrigger.create({
    trigger: ".page3",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
       
        const scale = 1 - (self.progress * 0.5); 
        const width = 50 + (self.progress * 50); 
        const translateY = self.progress * 100; 
        gsap.to(".page3 .main-image", { scale: scale, width: `${width}%`, duration: 0.5 });
        gsap.to(".page3 .text .para", { y: translateY, opacity: 1, duration: 0.5 });
        gsap.to(".page3 .text h1", { x: translateY, opacity: 1, duration: 0.5 });
    }
});

ScrollTrigger.create({
    trigger: ".page3",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
        const scale = 1 - (self.progress * 0.5); 
        const translateX = self.progress * 50; 
        gsap.to(".background-image", {
            backgroundSize: 'contain',
            backgroundAttachment: 'scroll',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: `100%`,
            height: `1000px`,
            top: `195%`,
            left: `20%`,
            borderRadius:`15px`,
            marginTop:`5%`,
            scale: scale,
            x: `-${translateX - 5}%`, 
            duration: 1
        });

        if (self.progress === 0) {
            
            gsap.to(".background-image", {
                backgroundSize: '',
                backgroundAttachment: '',
                backgroundRepeat: '',
                backgroundPosition: '',
                width: '100%',
                height: '400vh',
                position:'absolute',
                top: 0,
                left: 0,
                scale: 1,
                x: '0%',
                duration: 1
            });
        }
    }
});
