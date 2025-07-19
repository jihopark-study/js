/* -------------------------------------------------------------------------- */
/*                                     Pin                                    */
/* -------------------------------------------------------------------------- */

const ani = gsap.to(".box", {
  fontSize: "10vw",
  backgroundColor: "#fff",
  color: "black",
  x: "100vw",
});
ScrollTrigger.create({
  trigger: ".box",
  start: "top center",
  // end: "2000px center",
  // markers: true,
  pin: true,
  scrub: 1,
  animation: ani,
});

// 변수로 빼기
const el = document.querySelector(".fix");

const time = gsap
  .timeline()
  .from(el, {
    x: "-100%",
    y: -400,
    opacity: 0,
    rotate: 360,
  })
  .to(el, {
    scale: 3,
  })
  .fromTo(
    el,
    {
      color: "black",
    },
    {
      color: "tomato",
    }
  )
  .to(
    el,
    {
      x: "120vw",
    },
    "-=0.5"
  );
ScrollTrigger.create({
  trigger: ".section3",
  start: "top top",
  end: "2000px center",
  markers: true,
  pin: true,
  scrub: 1,
  animation: time,
  onLeave: () => {
    console.log("끝");
  },
});

/* -------------------------------------------------------------------------- */
/*                                  Pin Type                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 Pin Spacing                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  examples1                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  examples2                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------- 부드러운 스크롤 -------------------------------- */
gsap.registerPlugin(ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1, // 속도정의
});

/* -------------------------------- header 고정 ------------------------------- */
const fixed = gsap.to("header", {
  top: 0,
  backgroundColor: "red",
});

const header = document.querySelector("header");

ScrollTrigger.create({
  start: "top -300", // 스크롤이 100px 내려가면 작동
  end: 99999, // 무한 끝까지
  onEnter: () => {
    header.classList.add("fixed");
    fixed.play();
  },
  onLeaveBack: () => {
    header.classList.remove("fixed");
    fixed.reverse();
  },
});
