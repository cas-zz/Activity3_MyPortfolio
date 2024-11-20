const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  sidebar.classList.toggle("open");
});

document.addEventListener("scroll", () => {
  const home = document.getElementById("home");
  const skills = document.getElementById("skills");
  const experience = document.getElementById("experience");
  const contact = document.getElementById("contact");

  function fadeInOnScroll(section) {
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight && sectionPosition > 0) {
      const opacityAmount =
        1 -
        Math.abs((sectionPosition - windowHeight / 3) / (windowHeight / 0));
      section.style.opacity = opacityAmount;
    } else {
      section.style.opacity = 0;
    }
  }

  fadeInOnScroll(home);
  fadeInOnScroll(skills);
  fadeInOnScroll(experience);
  fadeInOnScroll(contact);
});

const aboutButton = document.getElementById("aboutButton");
const infoBox = document.getElementById("infoBox");

aboutButton.addEventListener("click", () => {
  if (infoBox.classList.contains("visible")) {
    infoBox.classList.remove("visible");
    aboutButton.textContent = "About Me";
  } else {
    infoBox.classList.add("visible");
    aboutButton.textContent = "Hide Info";
  }
});
