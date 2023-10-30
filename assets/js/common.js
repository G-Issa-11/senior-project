let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");
console.log(sidebar);

function toggleSidebar() {
  if (sidebarOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  console.log("sidebar opened");
  sidebar.classList.add("sidebar-responsive");
  sidebarOpen = true;
}

function closeSidebar() {
  sidebar.classList.remove("sidebar-responsive");
  sidebarOpen = false;
}

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

document.addEventListener("DOMContentLoaded", function() {
  const sidebarLinks = document.querySelectorAll(".sidebar-list-item a");
  // Add click event listeners to sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent the default link behavior
      const pageUrl = link.getAttribute("href");
      loadPageContent(pageUrl);
    });
  });
});
