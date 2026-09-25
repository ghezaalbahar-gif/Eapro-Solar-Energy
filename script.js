// // section 6 Designed by indians for indians
// // Count-up animation for the stat numbers when they scroll into view.

// document.addEventListener("DOMContentLoaded", function () {

//   var stats = document.querySelectorAll(".designed-by-indians__num");

//   function animate(el) {

//     var text = el.textContent.trim();

//     var match = text.match(/(\d+)/);

//     if (!match) return;

//     var target = parseInt(match[1], 10);

//     var prefix = text.slice(0, match.index);

//     var suffix = text.slice(match.index + match[1].length);

//     var duration = 1200;

//     var start = null;

//     function step(ts) {

//       if (start === null) {
//         start = ts;
//       }

//       var progress = Math.min((ts - start) / duration, 1);

//       var value = Math.floor(progress * target);

//       el.textContent = prefix + value + suffix;

//       if (progress < 1) {
//         requestAnimationFrame(step);
//       } else {
//         el.textContent = text;
//       }
//     }

//     requestAnimationFrame(step);
//   }

//   if ("IntersectionObserver" in window) {

//     var observer = new IntersectionObserver(function (entries) {

//       entries.forEach(function (entry) {

//         if (entry.isIntersecting) {

//           animate(entry.target);

//           observer.unobserve(entry.target);
//         }

//       });

//     }, {
//       threshold: 0.5
//     });

//     stats.forEach(function (el) {
//       observer.observe(el);
//     });

//   } else {

//     stats.forEach(animate);

//   }

// });

// // India flag vid
// const video = document.querySelector(".background-video");

// video.playbackRate = 0.5;

// // =========================
// // FLOATING CARDS ANIMATION
// // =========================

// const solarCard = document.querySelector(".solar-card");
// const pvCard = document.querySelector(".pv-card");

// let startTime = performance.now();

// function animateCards(time) {
//   const elapsed = time - startTime;

//   // کارت اول
//   const solarX = Math.sin(elapsed / 900) * 5;
//   const solarY = Math.sin(elapsed / 700) * 6;
//   const solarRotate = Math.sin(elapsed / 1000) * 0.5;

//   solarCard.style.transform = `translate(${solarX}px, ${solarY}px) rotate(${solarRotate}deg)`;

//   // کارت دوم
//   const pvX = Math.sin(elapsed / 1100 + 1) * 6;
//   const pvY = Math.sin(elapsed / 800 + 1) * 7;
//   const pvRotate = Math.sin(elapsed / 1200 + 1) * 0.5;

//   pvCard.style.transform = `translate(${pvX}px, ${pvY}px) rotate(${pvRotate}deg)`;

//   requestAnimationFrame(animateCards);
// }

// requestAnimationFrame(animateCards);
// const cards = document.querySelectorAll(".solar-info-card");

// cards.forEach((card, index) => {
//   const speed = 3500 + index * 600;
//   const start = performance.now() + index * 700;

//   function floatCard(time) {
//     const progress = ((time - start) % speed) / speed;

//     const angle = progress * Math.PI * 2;

//     const y = Math.sin(angle) * 5;
//     const x = Math.cos(angle) * 2;

//     const rotate = Math.sin(angle) * 0.4;

//     card.style.transform = `translate3d(${x}px, ${y}px, 0)
//        rotate(${rotate}deg)`;

//     requestAnimationFrame(floatCard);
//   }

//   requestAnimationFrame(floatCard);
// });
// /* =========================================
//    TESTIMONIAL DATA
// ========================================= */

// const testimonials = [
//   {
//     text: "When my daughter was preparing for JEE, power cuts were our biggest worry. EAPRO solved that completely. She got into IIT, and we credit our reliable power backup.",

//     name: "RAJENDRA PATEL",

//     role: "Entrepreneur",

//     image: "images/client-2.jpeg",
//   },

//   {
//     text: "EAPRO has given our family reliable power backup and complete peace of mind. We no longer worry about unexpected power cuts.",

//     name: "ANIL SHARMA",

//     role: "Business Owner",

//     image: "images/client-2.jpeg",
//   },

//   {
//     text: "The power backup system has made our daily life much easier. It is reliable, efficient, and works exactly when we need it.",

//     name: "PRIYA MEHTA",

//     role: "Homeowner",

//     image: "images/client-3.jpeg",
//   },

//   {
//     text: "Our business depends on continuous electricity. With EAPRO, we can work without constantly worrying about power interruptions.",

//     name: "VIKAS PATEL",

//     role: "Entrepreneur",

//     image: "images/client-4.jpeg",
//   },
// ];

// /* =========================================
//    SELECT ELEMENTS
// ========================================= */

// const testimonialCard = document.querySelector(".testimonial-card-main");

// const testimonialText = document.querySelector(".testimonial-text");

// const testimonialName = document.querySelector(".testimonial-person-info h3");

// const testimonialRole = document.querySelector(".testimonial-person-info p");

// const testimonialImage = document.querySelector(".testimonial-avatar img");

// const prevButton = document.querySelector(".testimonial-prev");

// const nextButton = document.querySelector(".testimonial-next");

// /* =========================================
//    CURRENT TESTIMONIAL
// ========================================= */

// let currentTestimonial = 0;

// let isChanging = false;

// /* =========================================
//    SHOW TESTIMONIAL
// ========================================= */

// function showTestimonial(index, direction) {
//   if (isChanging) return;

//   isChanging = true;

//   /* Exit */

//   testimonialCard.classList.add(
//     direction === "next" ? "testimonial-exit-next" : "testimonial-exit-prev",
//   );

//   setTimeout(() => {
//     /* Change index */

//     currentTestimonial = index;

//     /* Get new information */

//     const testimonial = testimonials[currentTestimonial];

//     /* Change text */

//     testimonialText.textContent = testimonial.text;

//     /* Change name */

//     testimonialName.textContent = testimonial.name;

//     /* Change role */

//     testimonialRole.textContent = testimonial.role;

//     /* Change image */

//     testimonialImage.src = testimonial.image;

//     testimonialImage.alt = testimonial.name;

//     /* Remove exit */

//     testimonialCard.classList.remove(
//       "testimonial-exit-next",

//       "testimonial-exit-prev",
//     );

//     /* Enter */

//     testimonialCard.classList.add(
//       direction === "next"
//         ? "testimonial-enter-next"
//         : "testimonial-enter-prev",
//     );

//     setTimeout(() => {
//       testimonialCard.classList.remove(
//         "testimonial-enter-next",

//         "testimonial-enter-prev",
//       );

//       isChanging = false;
//     }, 450);
//   }, 300);
// }

// /* =========================================
//    NEXT BUTTON
// ========================================= */

// nextButton.addEventListener("click", () => {
//   let nextIndex = currentTestimonial + 1;

//   /* After last → first */

//   if (nextIndex >= testimonials.length) {
//     nextIndex = 0;
//   }

//   showTestimonial(nextIndex, "next");
// });

// /* =========================================
//    PREVIOUS BUTTON
// ========================================= */

// prevButton.addEventListener("click", () => {
//   let previousIndex = currentTestimonial - 1;

//   /* Before first → last */

//   if (previousIndex < 0) {
//     previousIndex = testimonials.length - 1;
//   }

//   showTestimonial(previousIndex, "prev");
// });

// /* =========================================
//    STATISTICS
// ========================================= */

// const statsSection = document.querySelector(".testimonial-stats");

// const statNumbers = document.querySelectorAll(".stat-number");

// let statsAnimated = false;

// /* =========================================
//    FORMAT STAT NUMBER
// ========================================= */

// function formatStat(number, type) {
//   /* =========================
//        10M+
//     ========================== */

//   if (type === "million") {
//     if (number >= 1000000) {
//       const million = number / 1000000;

//       return million.toFixed(million >= 10 ? 0 : 1) + "M+";
//     }

//     return Math.floor(number).toLocaleString() + "+";
//   }

//   /* =========================
//        4.8/5
//     ========================== */

//   if (type === "rating") {
//     return number.toFixed(1) + "/5";
//   }

//   /* =========================
//        98%
//     ========================== */

//   if (type === "percent") {
//     return Math.floor(number) + "%";
//   }
// }

// /* =========================================
//    ANIMATE NUMBER
// ========================================= */

// function animateNumber(element) {
//   const target = Number(element.dataset.target);

//   const type = element.dataset.type;

//   /*
//        Animation duration
//     */

//   const duration = 2500;

//   const startTime = performance.now();

//   function updateNumber(currentTime) {
//     const elapsed = currentTime - startTime;

//     const progress = Math.min(elapsed / duration, 1);

//     /*
//            Smooth easing
//         */

//     const ease = 1 - Math.pow(1 - progress, 3);

//     /*
//            Current number
//         */

//     const current = target * ease;

//     /*
//            Display number
//         */

//     element.textContent = formatStat(current, type);

//     /*
//            Continue
//         */

//     if (progress < 1) {
//       requestAnimationFrame(updateNumber);
//     } else {
//       /*
//                Exact final value
//             */

//       element.textContent = formatStat(target, type);
//     }
//   }

//   requestAnimationFrame(updateNumber);
// }

// /* =========================================
//    RESET STATISTICS
// ========================================= */

// function resetStats() {
//   statNumbers.forEach((element) => {
//     const type = element.dataset.type;

//     if (type === "million") {
//       element.textContent = "0+";
//     } else if (type === "rating") {
//       element.textContent = "0.0/5";
//     } else if (type === "percent") {
//       element.textContent = "0%";
//     }
//   });
// }

// /* =========================================
//    INTERSECTION OBSERVER
// ========================================= */

// const statsObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       /* =====================
//                        ENTER SECTION
//                     ====================== */

//       if (entry.isIntersecting && !statsAnimated) {
//         statsAnimated = true;

//         statNumbers.forEach((element) => {
//           animateNumber(element);
//         });
//       }

//       /* =====================
//                        LEAVE SECTION
//                     ====================== */

//       if (!entry.isIntersecting) {
//         statsAnimated = false;

//         resetStats();
//       }
//     });
//   },

//   {
//     threshold: 0.35,
//   },
// );

// /* =========================================
//    START OBSERVER
// ========================================= */

// statsObserver.observe(statsSection);

document.addEventListener("DOMContentLoaded", function () {
  /* =========================================================
     SECTION 6 — DESIGNED BY INDIANS
     Count-up animation
  ========================================================= */

  const designedStats = document.querySelectorAll(".designed-by-indians__num");

  function animateDesignedNumber(el) {
    const text = el.textContent.trim();
    const match = text.match(/(\d+)/);

    if (!match) return;

    const target = parseInt(match[1], 10);

    const prefix = text.slice(0, match.index);
    const suffix = text.slice(match.index + match[1].length);

    const duration = 1200;
    let start = null;

    function step(timestamp) {
      if (start === null) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / duration, 1);

      const value = Math.floor(progress * target);

      el.textContent = prefix + value + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = text;
      }
    }

    requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window) {
    const designedObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateDesignedNumber(entry.target);
            designedObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    designedStats.forEach(function (el) {
      designedObserver.observe(el);
    });
  } else {
    designedStats.forEach(animateDesignedNumber);
  }

  /* =========================================================
     INDIA FLAG VIDEO
  ========================================================= */

  const video = document.querySelector(".Powering-India-vid");

  if (video) {
    video.playbackRate = 0.5;
  }

  /* =========================================================
     FLOATING SOLAR CARDS
  ========================================================= */

  const solarCard = document.querySelector(".solar-card-one");
  const pvCard = document.querySelector(".solar-card-two");

  if (solarCard && pvCard) {
    const startTime = performance.now();

    function animateCards(time) {
      const elapsed = time - startTime;

      /* ---------- CARD ONE ---------- */

      const solarX = Math.sin(elapsed / 900) * 5;

      const solarY = Math.sin(elapsed / 700) * 6;

      const solarRotate = Math.sin(elapsed / 1000) * 0.5;

      solarCard.style.transform = `translate(${solarX}px, ${solarY}px) rotate(${solarRotate}deg)`;

      /* ---------- CARD TWO ---------- */

      const pvX = Math.sin(elapsed / 1100 + 1) * 6;

      const pvY = Math.sin(elapsed / 800 + 1) * 7;

      const pvRotate = Math.sin(elapsed / 1200 + 1) * 0.5;

      pvCard.style.transform = `translate(${pvX}px, ${pvY}px) rotate(${pvRotate}deg)`;

      requestAnimationFrame(animateCards);
    }

    requestAnimationFrame(animateCards);
  }

  /* =========================================================
     ALL SOLAR INFO CARDS
  ========================================================= */

  const cards = document.querySelectorAll(".solar-info-card");

  cards.forEach((card, index) => {
    const speed = 3500 + index * 600;
    const start = performance.now() + index * 700;

    function floatCard(time) {
      const progress = ((time - start) % speed) / speed;

      const angle = progress * Math.PI * 2;

      const y = Math.sin(angle) * 5;

      const x = Math.cos(angle) * 2;

      const rotate = Math.sin(angle) * 0.4;

      card.style.transform = `translate3d(${x}px, ${y}px, 0)
         rotate(${rotate}deg)`;

      requestAnimationFrame(floatCard);
    }

    requestAnimationFrame(floatCard);
  });

  /* =========================================================
     TESTIMONIAL DATA
  ========================================================= */

  const testimonials = [
    {
      text: "When my daughter was preparing for JEE, power cuts were our biggest worry. EAPRO solved that completely. She got into IIT, and we credit our reliable power backup.",

      name: "RAJENDRA PATEL",

      role: "Entrepreneur",

      image: "images/client-2.jpeg",
    },

    {
      text: "EAPRO has given our family reliable power backup and complete peace of mind. We no longer worry about unexpected power cuts.",

      name: "ANIL SHARMA",

      role: "Business Owner",

      image: "images/client-2.jpeg",
    },

    {
      text: "The power backup system has made our daily life much easier. It is reliable, efficient, and works exactly when we need it.",

      name: "PRIYA MEHTA",

      role: "Homeowner",

      image: "images/client-3.jpeg",
    },

    {
      text: "Our business depends on continuous electricity. With EAPRO, we can work without constantly worrying about power interruptions.",

      name: "VIKAS PATEL",

      role: "Entrepreneur",

      image: "images/client-4.jpeg",
    },
  ];

  /* =========================================================
     TESTIMONIAL ELEMENTS
  ========================================================= */

  const testimonialCard = document.querySelector(".testimonial-card-main");

  const testimonialText = document.querySelector(".testimonial-text");

  const testimonialName = document.querySelector(".testimonial-person-info h3");

  const testimonialRole = document.querySelector(".testimonial-person-info p");

  const testimonialImage = document.querySelector(".testimonial-avatar img");

  const prevButton = document.querySelector(".testimonial-prev");

  const nextButton = document.querySelector(".testimonial-next");

  /* =========================================================
     CURRENT TESTIMONIAL
  ========================================================= */

  let currentTestimonial = 0;
  let isChanging = false;

  /* =========================================================
     SHOW TESTIMONIAL
  ========================================================= */

  function showTestimonial(index, direction) {
    if (
      isChanging ||
      !testimonialCard ||
      !testimonialText ||
      !testimonialName ||
      !testimonialRole ||
      !testimonialImage
    ) {
      return;
    }

    isChanging = true;

    /* ---------- EXIT ---------- */

    testimonialCard.classList.add(
      direction === "next" ? "testimonial-exit-next" : "testimonial-exit-prev",
    );

    setTimeout(function () {
      /* ---------- CHANGE INDEX ---------- */

      currentTestimonial = index;

      const testimonial = testimonials[currentTestimonial];

      /* ---------- CHANGE CONTENT ---------- */

      testimonialText.textContent = testimonial.text;

      testimonialName.textContent = testimonial.name;

      testimonialRole.textContent = testimonial.role;

      testimonialImage.src = testimonial.image;

      testimonialImage.alt = testimonial.name;

      /* ---------- REMOVE EXIT ---------- */

      testimonialCard.classList.remove(
        "testimonial-exit-next",
        "testimonial-exit-prev",
      );

      /* ---------- ENTER ---------- */

      testimonialCard.classList.add(
        direction === "next"
          ? "testimonial-enter-next"
          : "testimonial-enter-prev",
      );

      setTimeout(function () {
        testimonialCard.classList.remove(
          "testimonial-enter-next",
          "testimonial-enter-prev",
        );

        isChanging = false;
      }, 450);
    }, 300);
  }

  /* =========================================================
     NEXT BUTTON
  ========================================================= */

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      let nextIndex = currentTestimonial + 1;

      if (nextIndex >= testimonials.length) {
        nextIndex = 0;
      }

      showTestimonial(nextIndex, "next");
    });
  }

  /* =========================================================
     PREVIOUS BUTTON
  ========================================================= */

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      let previousIndex = currentTestimonial - 1;

      if (previousIndex < 0) {
        previousIndex = testimonials.length - 1;
      }

      showTestimonial(previousIndex, "prev");
    });
  }

  /* =========================================================
     TESTIMONIAL STATISTICS
  ========================================================= */

  const statsSection = document.querySelector(".testimonial-stats");

  const statNumbers = document.querySelectorAll(".stat-number");

  let statsAnimated = false;

  /* =========================================================
     FORMAT STAT NUMBER
  ========================================================= */

  function formatStat(number, type) {
    /* ---------- MILLION ---------- */

    if (type === "million") {
      if (number >= 1000000) {
        const million = number / 1000000;

        return million.toFixed(million >= 10 ? 0 : 1) + "M+";
      }

      return Math.floor(number).toLocaleString() + "+";
    }

    /* ---------- RATING ---------- */

    if (type === "rating") {
      return number.toFixed(1) + "/5";
    }

    /* ---------- PERCENT ---------- */

    if (type === "percent") {
      return Math.floor(number) + "%";
    }

    return number;
  }

  /* =========================================================
     ANIMATE STAT NUMBER
  ========================================================= */

  function animateNumber(element) {
    const target = Number(element.dataset.target);

    const type = element.dataset.type;

    const duration = 2500;

    const startTime = performance.now();

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      /* Smooth easing */

      const ease = 1 - Math.pow(1 - progress, 3);

      /* Current number */

      const current = target * ease;

      /* Display */

      element.textContent = formatStat(current, type);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = formatStat(target, type);
      }
    }

    requestAnimationFrame(updateNumber);
  }

  /* =========================================================
     RESET STATISTICS
  ========================================================= */

  function resetStats() {
    statNumbers.forEach(function (element) {
      const type = element.dataset.type;

      if (type === "million") {
        element.textContent = "0+";
      } else if (type === "rating") {
        element.textContent = "0.0/5";
      } else if (type === "percent") {
        element.textContent = "0%";
      }
    });
  }

  /* =========================================================
     STATISTICS OBSERVER
  ========================================================= */

  if (statsSection && "IntersectionObserver" in window) {
    const statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          /* ---------- ENTER ---------- */

          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;

            statNumbers.forEach(function (element) {
              animateNumber(element);
            });
          }

          /* ---------- LEAVE ---------- */

          if (!entry.isIntersecting) {
            statsAnimated = false;

            resetStats();
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    statsObserver.observe(statsSection);
  } else if (statsSection) {
    /* Fallback */

    statNumbers.forEach(function (element) {
      animateNumber(element);
    });
  }

  /* =========================================================
     SAVINGS CALCULATOR
     (برای اینکه اگر بعداً JS آن را اضافه کردی،
     با بقیه کد تداخل نداشته باشد)
  ========================================================= */

  const calculateBtn = document.querySelector("#calculateBtn");

  const electricityBill = document.querySelector("#electricityBill");

  const result = document.querySelector("#result");

  if (calculateBtn && electricityBill && result) {
    calculateBtn.addEventListener("click", function () {
      const bill = Number(electricityBill.value);

      if (!bill || bill <= 0) {
        result.textContent = "Please enter a valid electricity bill.";

        return;
      }

      /* Example calculation */

      const savings = bill * 0.4;

      result.textContent = `Estimated monthly savings: ₹${savings.toFixed(0)}`;
    });
  }
});

/* =========================
   REPEAT SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  "section h1, section h2, section h3, section p, section img, section button, section .card, section .eapro-card"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        // ظاهر شدن از پایین به بالا
        entry.target.classList.add("show");

      } else {
        // وقتی از صفحه خارج شد، دوباره آماده شود
        entry.target.classList.remove("show");
      }

    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  element.classList.add("scroll-reveal");
  revealObserver.observe(element);
});