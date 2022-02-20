let tl = gsap.timeline({ defaults: { ease: "power1.inOut", duration: 0.5 } });

tl.from(".mobile", { y: 100, opacity: 0, duration: 1, ease: "power4.inOut" })
  .to(".text-content", {
    "clip-path": "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
    y: 0,
    duration: 1.2,
    delay: -0.8,
  })
  .from(".msg-1", {
    x: -30,
    opacity: 0,
    stagger: 0.4,
  })
  .from(".msg-2", {
    scale: 0,
    opacity: 0,
    stagger: 0.1,
  })
  .from(".msg-3", {
    x: 30,
    opacity: 0,
    stagger: 0.4,
  })
  .from(".msg-4", {
    x: -30,
    opacity: 0,
  })
  .from(".msg-5", {
    x: -30,
    opacity: 0,
    stagger: 0.2,
  });
