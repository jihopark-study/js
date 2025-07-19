/* -------------------------------------------------------------------------- */
/*                              트윈 Scroll Trigger                            */
/* -------------------------------------------------------------------------- */

const timeline = gsap.timeline({
  defaults: {
    ease: "power3.inOut",
    duration: 1,
  },
});

// gsap.to(".box", {
//   x: 200,
//   rotate: 360,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".section2", //어디를 기점으로 움직일 것인가.
//     // trigger 뷰포트
//     // markers: true, //영역 가이드 라인
//     start: "top center",
//   },
// });

// gsap.to(".block", {
//   x: 300,
//   backgroundColor: "red",
//   scrollTrigger: {
//     trigger: ".section3",
//     // markers: true,
//   },
// });

/* --------------------------- 아래 코드로는 작동 안된다고 하심 --------------------------- */

// timeline
//   .to(".box", {
//     x: 200,
//     rotate: 360,
//     duration: 2,
//   })
//   .to(".box", {
//     scale: 2,
//   })
//   .to(".box", {
//     backgroundColor: "magenta",
//     border: "5px solid blue",
//     scrollTrigger: {
//       trigger: ".section2", //어디를 기점으로 움직일 것인가.
//       // trigger 뷰포트
//       // markers: true, //영역 가이드 라인
//       start: "100px center",
//       end: "bottom center",
//     },
//   });

/* --------------------------- /아래 코드로는 작동 안된다고 하심 --------------------------- */

// timeline.to(".block", {
//   x: 300,
//   backgroundColor: "red",
//   scrollTrigger: {
//     trigger: ".section3",
//     // markers: true,
//   },
// });

/* -------------------------------------------------------------------------- */
/*                             생성자 Scroll Trigger                           */
/* -------------------------------------------------------------------------- */
const animation = timeline
  .to(".box", {
    x: 300,
    backgroundColor: "blue",
  })
  .to(".box", {
    scale: 2,
  })
  .to(".box", {
    scale: 2.5,
  })
  .to(".box", {
    scale: 3.5,
  })
  .to(".box", {
    borderRadius: 100,
    ease: "power3.inOut",
    duration: 2,
  });

ScrollTrigger.create({
  trigger: ".section2",
  markers: true,
  start: "top center",
  animation: animation,
  toggleActions: "play none restart none",
});

/* -------------------------------------------------------------------------- */
/*                               Toggle Actions                               */
/* -------------------------------------------------------------------------- */
