function showNav() {
  document.getElementById("hamburger-nav-menu").classList.remove("hide-nav");
}

function hideNav() {
  document.getElementById("hamburger-nav-menu").classList.add("hide-nav");
}

function showSection(section) {
  const sections = document.querySelector(".main");
  Object.keys(sections.children).forEach((item) => {
    sections.children[item].classList.remove("visible");
    sections.children[item].classList.add("not-visible");
  });
  document.getElementById(section).classList.add("visible");
  document.getElementById(section).classList.remove("not-visible");
}
