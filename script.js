let humanScore = 0;
let computerScore = 0;
playMatch();

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;;
    if (computerChoice == 1) return "rock";
    else if (computerChoice == 2) return "paper";
    else return "scissors";
}

function getHumanChoice() {
   let humanChoice = prompt("rock, paper, or scissors?", "rock").toLowerCase();
   return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw!");
    } else if (humanChoice == "rock" && computerChoice == "scissors"
        || humanChoice == "paper" && computerChoice == "rock"
        || humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You won the round!")
            humanScore++;
    } else {
        console.log("You lost the round!")
        computerScore++;
    }
}

function playMatch() {
    do {
        playRound(getHumanChoice(), getComputerChoice());
        if (humanScore == 3) {
            console.log("You won the match!")
            break;
        } else if (computerScore == 3) {
            console.log("You lost the match!")
            break;
        }
    } while (!(humanScore == 3 || computerScore == 3))
}