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
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  const smallPlayerWord = 'player'.fontsize(3).sup();
  const smallComputerWord = 'computer'.fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You win!`;
  
}

function lose(playerChoice, computerChoice) {
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  const smallPlayerWord = 'player'.fontsize(3).sup();
  const smallComputerWord = 'computer'.fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallComputerWord} beats ${convertToWord(playerChoice)}${smallPlayerWord}. You lose.`;computerScore++;

}


function draw() {
  const smallPlayerWord = 'player'.fontsize(3).sup();
  const smallComputerWord = 'computer'.fontsize(3).sup();
  result_p.innerHTML = 'DRAW.'
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
  rock_div.addEventListener('click', function() {
    game("r");
 
});

  paper_div.addEventListener('click', function() {
    game("p");
  
});

  scissors_div.addEventListener('click', function() {
    game("s");
  
});
}

main();
