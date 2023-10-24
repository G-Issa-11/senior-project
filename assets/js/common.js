// Toggle sidebar

const sidebar = document.querySelector("[data-sidebar]");
const menuBtn = document.querySelector("[data-menu-icon");
const closeBtn = document.querySelector("[data-close-icon");
let sidebarOpen = false;

const openSidebar = () => {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
};

const closeSidebar = () => {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
};

menuBtn.addEventListener("click", openSidebar);

closeBtn.addEventListener("click", closeSidebar);

// Function to load page content
function loadPageContent(pageUrl) {
  fetch(pageUrl)
    .then(response => response.text())
    .then(data => {
      const mainContainer = document.querySelector("[data-main-container]");
      mainContainer.innerHTML = data;
    })
    .catch(error => console.error("Error loading content:", error));
}

const sidebarLinks = document.querySelectorAll(".sidebar-list-item a");
document.addEventListener("DOMContentLoaded", function() {
  // Add click event listeners to sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent the default link behavior
      const pageUrl = link.getAttribute("href");
      loadPageContent(pageUrl);
    });
  });
});
