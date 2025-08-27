console.log("JS geladen 🎉");

gsap.to(".header-inner", {
  paddingLeft: "12rem",
  paddingRight: "12rem",
  duration: 0.8,         // knapp unter 1 Sekunde
  ease: "power4.out",    // knackiger, schneller Start, smoothes Ende
  scrollTrigger: {
    trigger: "body",
    start: "top top+=1", 
    toggleActions: "play none none none",
    once: true
  }
});
