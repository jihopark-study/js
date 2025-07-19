/* -------------------------------------------------------------------------- */
/*                                  gsap.to()                                 */
/* -------------------------------------------------------------------------- */
// gsap.to("선택자", 객체옵션);
// gsap.to("#gsap-to", {
//   x: 100,
//   opacity: 0,
// });
console.log(gsap);
gsap.to("#gsap-to .avatar", {
  // x:200, //숫자 데이터로 넣게되면 기본 px
  x: "50vw",
  rotate: 360,
});

/* -------------------------------------------------------------------------- */
/*                                 gsap.from()                                */
/* -------------------------------------------------------------------------- */

gsap.from("#gsap-from", {
  opacity: 0,
  y: 100,
  y: -100,
  duration: 3,
});
/* -------------------------------------------------------------------------- */
/*                                gsap.fromTo()                               */
/* -------------------------------------------------------------------------- */
gsap.fromTo(
  "#gsap-fromTo",
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 50,
    opacity: 1,
  }
); //옵션 객체가 두 개
/* -------------------------------------------------------------------------- */
/*                                  Stagger                                   */
/* -------------------------------------------------------------------------- */
// gsap.from(".register .wrapper div:nth-child(1)", {
//   opacity: 0,
//   x: -50,
// });
// gsap.from(".register .wrapper div:nth-child(2)", {
//   opacity: 0,
//   x: -50,
//   delay: 0.4,
// });
// gsap.from(".register .wrapper div:nth-child(3)", {
//   opacity: 0,
//   x: -50,
//   delay: 0.8,
// });
// gsap.from(".register .wrapper div:nth-child(4)", {
//   opacity: 0,
//   x: -50,
//   delay: 1.2,
// });
gsap.from(".register .wrapper div", {
  opacity: 0,
  x: -50,
  stagger: 0.3, //0.3초 간격으로 반복
  ease: "elastic",
});

/* -------------------------------------------------------------------------- */
/*                                  Timeline                                  */
/* -------------------------------------------------------------------------- */
// 시퀀스 :
const timeline = gsap.timeline();

timeline.from(".header", {
  opacity: 0,
});
timeline.from(".header h1", {
  y: 50,
  opacity: 0,
});
timeline.from(".header .gnb li", {
  y: 50,
  opacity: 0,
  stagger: 0.2, //같은 움직임이 배열로 뭉쳐있으면 stagger로 제어한다.
});
timeline.from(".header .btn-contact", {
  y: 50,
  opacity: 0,
});
/* -------------------------------------------------------------------------- */
/*                                  Controls                                  */
/* -------------------------------------------------------------------------- */

const tween = gsap.to(".control-wrap .car", {
  duration: 4,
  x: 300,
  ease: "none",
  paused: true,
});

const buttons = document.querySelectorAll(".control-wrap button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    switch (index) {
      case 0:
        tween.play(); // 정방향 재생
        break;
      case 1:
        tween.pause(); // 일시정지
        break;
      case 2:
        tween.resume(); // 일시정지에서 시작
        break;
      case 3:
        tween.reverse(); // 역재생
        break;
      case 4:
        tween.restart(); // 처음부터 다시재생
        break;
    }
  });
});
