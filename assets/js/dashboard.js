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
