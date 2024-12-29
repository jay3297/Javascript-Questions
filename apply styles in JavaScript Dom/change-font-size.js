const text = document.getElementById("text");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
let fontSize = 16;

increaseBtn.addEventListener("click", () => {
  fontSize += 2;
  text.style.fontSize = fontSize + "px";
});

decreaseBtn.addEventListener("click", () => {
  fontSize -= 2;
  text.style.fontSize = fontSize + "px";
});
