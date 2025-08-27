gsap.registerPlugin(ScrollTrigger);

  // Timeline für Header
  gsap.to(".header-inner", {
    paddingTop: "4rem",   // Zielwerte, anpassen wie du willst
    paddingBottom: "4rem",
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "body",        // irgendwas, das sicher beim Scrollen bewegt wird
      start: "top top+=1",    // löst quasi sofort beim ersten Scroll-Pixel aus
      toggleActions: "play none none none",
      once: true              // nur einmal abspielen
    }
  });
