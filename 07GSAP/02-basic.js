/* -------------------------------------------------------------------------- */
/*                                    Tween                                   */
/* -------------------------------------------------------------------------- */
gsap.from(".tween span", {
  x: 20,
  y: 20,
  duration: 2, //0.5s가 기본값
  scale: 1.5,
  rotate: 180,
});
gsap.to(".tween h2", {
  border: "5px solid orange",
  xPercent: 30,
  yPercent: 50,
  width: "50%",
  height: 200,
});

gsap.to(".tween div", {
  color: "violet",
  backgroundColor: "#ddd",
  translate: "100px 20px",
});
/* -------------------------------------------------------------------------- */
/*                               Delay & Repeat                               */
/* -------------------------------------------------------------------------- */
gsap.from(".delay li:nth-child(1)", {
  y: 50,
  opacity: 0,
  repeat: 2, //초기값 제외 반복 추가
  yoyo: true,
  repeatDelay: 1,
});
gsap.from(".delay li:nth-child(2)", {
  y: 50,
  opacity: 0,
  delay: 0.2,
  repeat: 2, //초기값 제외 반복 추가
  // repeat: -1, //무한 반복
  yoyo: true,
});
gsap.from(".delay li:nth-child(3)", {
  y: 50,
  opacity: 0,
  delay: 0.4,
  repeat: 2, //초기값 제외 반복 추가
  yoyo: true,
});
/* -------------------------------------------------------------------------- */
/*                                    Ease                                    */
/* -------------------------------------------------------------------------- */
gsap.fromTo(
  ".ease button",
  {
    x: -200,
  },
  {
    x: 200,
    ease: "power3.out", //fromTo메소드에서 ease 속성은 여기에 작성
    duration: 1,
  }
);
/* -------------------------------------------------------------------------- */
/*                                   Stagger                                  */
/* -------------------------------------------------------------------------- */
gsap.from(".stagger select", {
  y: 50,
  opacity: 0,
  ease: "power3.out",
  stagger: {
    // each: 0.2,
    amount: 2, //각각이 아니라, 2초 안에 모든 것이 실행되어야 한다는 의미.
    // from: "end",
    from: "1", //숫자를 넣으면 특정 수 기준으로 양쪽으로 생성
  },
});
/* -------------------------------------------------------------------------- */
/*                                  From의 문제점                              */
/* -------------------------------------------------------------------------- */
// const box = document.querySelector(".from .box");

// box.addEventListener("mouseenter", () => {
//   gsap.from(box, {
//     rotate: 360,
//   });
// });
const box = document.querySelector(".from .box");

box.addEventListener("mouseenter", () => {
  gsap.fromTo(
    box,
    {
      rotate: 0,
    },
    {
      rotate: 360,
    }
  );
});
