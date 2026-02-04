const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("section");

// Menú hamburguesa
navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Scroll Spy
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
