//menu navbar dropdown
const menuToggle = document.getElementById("bar-1");
const dropdownMenu = document.getElementById("dropdown");
const sidebar = document.getElementById("sidebar-1");


menuToggle.addEventListener("click", function () {
  if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
    dropdownMenu.style.display = "block";
    sidebar.style.backgroundColor = "#4c4c4c";
  } else {
    dropdownMenu.style.display = "none";
    sidebar.style.backgroundColor = "transparent";
  }
});

//navbar-scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    navbar.classList.add("scrolled");
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.left = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "1000";
  } else {
    navbar.classList.remove("scrolled");
    navbar.style.position = "";
    navbar.style.top = "";
    navbar.style.left = "";
    navbar.style.width = "";
    navbar.style.zIndex = "";
  }
});
//scroll button to top of page
const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
//gallery navigation

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    navItems.forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  })
})

