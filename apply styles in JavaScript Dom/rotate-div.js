const box = document.getElementById("box");
const rotateBtn = document.getElementById("rotateBtn");
let angle = 0;

rotateBtn.addEventListener("click", () => {
  angle += 45;
  box.style.transform = `rotate(${angle}deg)`;
});
