const image = document.getElementById("image");

image.addEventListener("mouseover", () => {
  image.style.border = "5px solid black";
});

image.addEventListener("mouseout", () => {
  image.style.border = "none";
});
