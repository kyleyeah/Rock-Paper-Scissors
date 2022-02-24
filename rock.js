let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's']
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function win(playerChoice, computerChoice) {
  const smallPlayerWord = 'player'.fontsize(3).sup();
  const smallComputerWord = 'computer'.fontsize(3).sup();
  const playerChoice_div = document.getElementById(playerChoice);
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  
  result_p.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)}. You win!`;
  document.getElementById(playerChoice).classList.add('green_glow');
  setTimeout(() => playerChoice_div.classList.remove('green_glow'), 300);
}


function lose(playerChoice, computerChoice) {
  const smallPlayerWord = 'player'.fontsize(3).sup();
  const smallComputerWord = 'computer'.fontsize(3).sup();
  const playerChoice_div = document.getElementById(playerChoice);
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(playerChoice)}. You lose.`;computerScore++;
  document.getElementById(playerChoice).classList.add('red_glow');
  setTimeout(() => playerChoice_div.classList.remove('red_glow'), 300);
}


function draw(playerChoice) {
  const smallPlayerWord = 'player'.fontsize(3).sup();
  const smallComputerWord = 'computer'.fontsize(3).sup();
  const playerChoice_div = document.getElementById(playerChoice);
  result_p.innerHTML = 'DRAW.'
  document.getElementById(playerChoice).classList.add('gray_glow');
  setTimeout(() => playerChoice_div.classList.remove('gray_glow'), 300);
}

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  switch (playerChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(playerChoice, computerChoice);
      break;
   case "rp":
   case "ps":
   case "sr":
      lose(playerChoice, computerChoice);
      break;
   case "rr":
   case "pp":
   case "ss":
      draw(playerChoice, computerChoice);
     break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"));

  paper_div.addEventListener('click', () => game("p"));

  scissors_div.addEventListener('click', () => game("s"));

};

main();
