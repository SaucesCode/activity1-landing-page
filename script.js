document.addEventListener("DOMContentLoaded", function () {
  const faqButtons = document.querySelectorAll(".faq-btn");

  faqButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const faqItem = this.parentElement;

      faqItem.classList.toggle("active");

      if (faqItem.classList.contains("active")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = 0;
      }

      const icon = this.querySelector("i");
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    });
  });
});

let menuicon = document.querySelector("#menu-icon");
let navigation = document.querySelector(".navbar");

menuicon.onclick = () => {
  menuicon.classList.toggle("fa-xmark");
  navigation.classList.toggle("active");
};

// SCROLL REVEAL
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, header, .key h1, .faq-container h2", {
  origin: "top",
});
ScrollReveal().reveal(".about img, .about-box, .key-container, footer", {
  origin: "bottom",
});
ScrollReveal().reveal(".more h3, .about-content, .key-box, .faq", {
  origin: "left",
});
ScrollReveal().reveal(".more h2, .more p, .conclusion-content", {
  origin: "right",
});
