const listItems = document.querySelectorAll("#list li");

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "yellow";
  });

  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "transparent";
  });
});
