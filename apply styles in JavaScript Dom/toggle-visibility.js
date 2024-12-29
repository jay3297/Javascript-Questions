const text = document.getElementById("text");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  text.style.display = text.style.display === "none" ? "block" : "none";
});
