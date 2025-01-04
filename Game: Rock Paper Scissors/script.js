console.log("Welcome to Rock Paper Scissors!");

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");

// Get computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine winner
function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "It's a tie!";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win! 🎉";
  }
  return "Computer wins! 💻";
}

// Game logic
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();

    userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
    winnerDisplay.textContent = `Winner: ${getWinner(userChoice, computerChoice)}`;
  });
});
