console.log("JS geladen 🎉");

// Timeline für Header
  gsap.to(".header-inner", {
    paddingLeft: "12rem",   // Zielwerte, anpassen wie du willst
    paddingRight: "12rem",
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "body",        // irgendwas, das sicher beim Scrollen bewegt wird
      start: "top top+=1",    // löst quasi sofort beim ersten Scroll-Pixel aus
      toggleActions: "play none none none",
      once: true              // nur einmal abspielen
    }
  });
