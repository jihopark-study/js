export const HeaderAnimation = () => {
  const timeline = gsap.timeline();

  timeline.from(".header", {
    opacity: 0,
  });
  timeline.from(".haeder h1", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
  });
  timeline.from(".gnb li", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
  });
};
