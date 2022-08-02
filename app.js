const panels = document.querySelectorAll(".panel");

function makeActive(e) {
  panels.forEach((panel) => panel.classList.remove("active"));
  e.target.classList.add("active");
}

panels.forEach((panel) => {
  panel.addEventListener("click", makeActive);
});