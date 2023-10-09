console.log("hello world");

const addEventonElen = function(element, type, callback) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, callback); // Use [i] to access the elements in the NodeList
    }
  } else {
    element.addEventListener(type, callback);
  }
};

const navbarToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector(".nav-toggle-btn"); // Define the toggle button element

const toggleNavbar = () => {
  const isNavbarOpen = navbar.classList.contains("active");
  navbar.style.height = isNavbarOpen ? "0" : "auto";
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active"); // Toggle the active class on the toggle button
};

addEventonElen(navbarToggler, "click", toggleNavbar);

const closeNavbar = () => {
  const isNavbarOpen = navbar.classList.contains("active");
  navbar.style.height = isNavbarOpen ? "0" : "auto";
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active"); // Toggle the active class on the toggle button
};

addEventonElen(navLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
