function timelineOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            // markers:true,
            pin: true,
            end: "bottom -250%"
        }
    })
    tl.to("#circle #btm img", {
        rotate: "-180deg",
        scale: 1,
        duration: 1,
        ease: "power1",
        stagger: .1
    }, "hello")
        .to("#circle #top img", {
            scale: 1,
            duration: 1,
            ease: "power1",
            stagger: .1
        }, "hello")
        .to("#home>img", {
            scale: 1,
            ease: "power1",
            duration: 5
        }, "hello")

        .to("#c-img img", {
            scale: 0,
            duration: 1,
            ease: "power1",
            stagger: .1,
        }, "hello")

        .to("#center-img h5", {
            opacity: 0,
            ease: "power1",
            stagger: .1,
        }, "hello")

        .to("#circle", {
            scale: .6,
            ease: "power1",
        }, "hello")

        .to("#overlay>h1#gallery", {
            bottom: "-50%",
            ease: "power1",
        }, "hello")

        .to("#gola", {
            top: "50%",
            scale: 1.6,
            ease: "power1",
        }, "hello")

        .to("#overlay>h1#pf", {
            rotate: 0,
            bottom: "8%",
            ease: "power1",
        }, "hello2")

        .to("#gola", {
            opacity: 0,
            duration: 2.2,
            ease: "power1",
        }, "hello2")

        .to("#smallcircle", {
            scale: 0,
            duration: 2,
            ease: "power1",
        }, "hello2")

        .to("#circle", {
            scale: 0,
            duration: 2,
            ease: "power1",
        }, "hello2")
        .to("#pinkpart", {
            top: "0%",
            duration: 5,
            ease: "power1",
        }, "hello2")
        .to("#pinkpart", {
            top: "-100%",
            duration: 5,
            ease: "power1",
        })
}
timelineOne();

function timelineTwo() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            scrub: 1,
            // markers: true,
            pin: true,
            end: "bottom -150% "
        }
    })
    tl2.to("#s-top .circle", {
        top: "50%",
        ease: "power1",
        stagger: .1,
        scale: 1.4
    })
        .to("#s-top .circle", {
            left: "50%",
            ease: "power1",
        })
        .to("#s-top .circle", {
            scale: 1,
            ease: "power1",
        })
        .to("#s-top .pink", {
            scale: 10,
            ease: "power1",
            duration: 5
        })
        .to("#s-top h1", {
            left: "-260%",
            ease: "power1",
            duration: 8
        })
        .to("#s-btm p:nth-child(1)", {
            opacity: 0,
            ease: "power1",
            duration: 3,
            delay: -8
        })
        .to("#s-btm p:nth-child(2)", {
            opacity: 1,
            ease: "power1",
            duration: 6,
            delay: -5,
        })
        .to("#s-top .pink", {
            background: "linear-gradient(to right, #D5A7B4, #B4AAD5)",
            ease: "power1",
            delay: -6
        })
        .to("#parent-box .pink-box", {
            ease: "power1",
            stagger: 0.9,
            scaleY: 1,
            duration: 5
        })
        .to(".pink-box .child-box1", {
            ease: "power1",
            scaleX: 1,
            duration: 5
        }, "lala")
        .to(".pink-box .child-box2", {
            ease: "power1",
            scaleX: 1,
            duration: 5
        }, "lala")
        .to(".pink-box .child-box2", {
            ease: "power1",
            width: "130%",
            duration: 5
        })

}
timelineTwo();