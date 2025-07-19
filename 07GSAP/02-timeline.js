/* -------------------------------------------------------------------------- */
/*                                  Timeline                                  */
/* -------------------------------------------------------------------------- */
const timeline = gsap.timeline();
timeline.from(".header", {
  y: 50,
  opacity: 0,
});
timeline.from(
  ".visual",
  {
    y: 50,
    opacity: 0,
  },
  "-=0.2"
  // "<"//이전 타임라인과 동시 실행
  // "-=0.5" 이전 타임라인 종료 몇 초 0.5전에
  // "+=0.5" 이전 타임라인 종료 몇 초 0.5뒤에
  // "1" 전체 키프레임에서 몇 초 뒤 실행
);
// timeline.from(".box", {
//   y: 50,
//   opacity: 0,
//   stagger: 0.3,
// });
timeline.from(".box:nth-child(odd)", {
  x: -50,
  opacity: 0,
});

timeline.from(
  ".box:nth-child(even)",
  {
    x: 50,
    opacity: 0,
  },

  "<"
);
timeline.from(".footer", {
  y: 50,
  opacity: 0,
  stagger: 0.3,
});
