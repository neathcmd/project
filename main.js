// Toggle navigation menu
const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

// Smooth scrolling for navigation links
const links = document.querySelectorAll("nav a, .footer-iconTop a");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Adjust for fixed header
        behavior: "smooth",
      });
    }
  });
});

// Dynamic portfolio filtering (example)
const portfolioBoxes = document.querySelectorAll(".portfolio-box");
portfolioBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.querySelector(".portfolio-layer").classList.add("visible");
  });
  box.addEventListener("mouseleave", () => {
    box.querySelector(".portfolio-layer").classList.remove("visible");
  });
});

// Scroll-to-top functionality
const scrollToTopIcon = document.querySelector(".footer-iconTop a");

scrollToTopIcon.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Responsive menu auto-close on link click
navBar.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navBar.classList.remove("active");
  }
});
