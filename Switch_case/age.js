let age = 76;

switch (true) {
  case age < 18:
    console.log("Minor");
    break;
  case age >= 18 && age < 65:
    console.log("Adult");
    break;
  default:
    console.log("Senior Citizen");
}