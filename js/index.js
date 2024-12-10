function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobile-menu");
  var menuIcon = document.getElementById("menu-icon");

  mobileMenu.classList.toggle("menu-open");

  if (mobileMenu.classList.contains("menu-open")) {
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
  } else {
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
  }
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    var mobileMenu = document.getElementById("mobile-menu");
    var menuIcon = document.getElementById("menu-icon");

    mobileMenu.classList.remove("menu-open");
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
  }, 300);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var scrollTopButton = document.getElementById("scroll-top-button");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-black/70", "backdrop-blur-md");
    } else {
      navbar.classList.remove("bg-black/70", "backdrop-blur-md");
    }

    if (window.scrollY > 300) {
      scrollTopButton.classList.remove("hidden");
    } else {
      scrollTopButton.classList.add("hidden");
    }
  });
});
