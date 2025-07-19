export const Animation = () => {
  const timeline = gsap.timeline();
  const animationIdp = timeline
    .to(".idp", {
      y: -20,
      opacity: 1,
    })
    .to(".idp .heading", {
      y: -40,
    })
    .to(".idp .text-type1", {
      y: -40,
    })
    .from(".idp__info div:nth-child(odd)", {
      x: -20,
      opacity: 0,
    })
    .from(
      ".idp__info div:nth-child(even)",
      {
        x: 20,
        opacity: 0,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".idp",
    markers: true,
    start: "top center",
    end: "bottom center",
    animation: animationIdp,
    markers: true,
    scrub: 1,
  });

  const animationLounge = timeline
    .to(".lounge", {
      y: 20,
      opacity: 1,
    })
    .to(".lounge .heading", {
      y: -30,
    })
    .from(".lounge .tab-type1 li", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
    })
    .from(".lounge .list-type1 li", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
    });

  ScrollTrigger.create({
    trigger: ".lounge",
    // markers: true,
    start: "top center",
    end: "bottom center",
    animation: animationLounge,
    scrub: 1,
  });
};
