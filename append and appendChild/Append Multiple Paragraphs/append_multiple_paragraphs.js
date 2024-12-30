const container = document.createElement("div");
const para1 = document.createElement("p");
const para2 = document.createElement("p");

para1.textContent = "my name is jd";
para2.textContent = "i am from vadodara";

container.append(para1, para2); // Append multiple elements
document.body.appendChild(container);
