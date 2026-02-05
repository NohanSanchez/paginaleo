const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("section");

// Menú hamburguesa
if (navToggle) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });
}

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


// =======================
// MODAL AVES
// =======================

const modal = document.getElementById("modal-ave");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalWhatsapp = document.getElementById("modal-whatsapp");
const modalClose = document.querySelector(".modal-close");

if (modal) {
  document.querySelectorAll(".btn-info").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // 🔑 evita que la página baje

      modalImg.src = btn.dataset.img;
      modalTitle.textContent = btn.dataset.title;
      modalDesc.innerHTML = btn.dataset.desc;
      modalWhatsapp.href = btn.dataset.whatsapp;

      modal.classList.add("active");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}


