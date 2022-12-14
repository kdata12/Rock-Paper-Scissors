//select button





function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"];
    let index = Math.floor(Math.random() * (choice.length));
    return choice[index];
}
    
//function that compares two answers
function playRound(playerSelection, computerSelection) {
    let lowercase = playerSelection.toLowerCase()
    let playerChoice = lowercase[0].toUpperCase() + lowercase.slice(1);
    let roundWinner = "";
    let message;
    
    if (playerChoice === computerSelection) {
        return "Tie!"
    } else {
        if (playerChoice == "Rock" && computerSelection == "Scissor") {
            roundWinner = "Player";
            message = "You won! Rock beats Scissor"
        } else if (playerChoice == "Rock" && computerSelection == "Paper") {
            message = "You Lose! Paper beats Rock"
        } else if (playerChoice == "Paper" && computerSelection == "Rock") {
            roundWinner = "Player";
            message = "You won! Paper beats Rock"
        } else if (playerChoice == "Paper" && computerSelection == "Scissor") {
            message = "You Lose! Scissor beats Paper"
        } else if (playerChoice == "Scissor" && computerSelection == "Rock") {
            message = "You Lose! Rock beats Scissor"
        } else if (playerChoice == "Scissor" && computerSelection == "Paper") {
            roundWinner = "Player";
            message = "You Won! Scissor beats Paper"
        }
        updateScore(score, roundWinner);
        return message;
    }
}

let score = [0, 0];
function updateScore(score, winner) {
    if (winner === "Player") {
        score[0] += 1;
        return;
    } else {
        score[1] += 1;
    }
}

if (score[0] > score[1]) {
    console.log(`You won! Final score ${score[0]} vs ${score[1]}.`);
} else if (score[0] === score[1]) {
    console.log(`It's a tie!Final score ${score[0]} vs ${score[1]}.`);
} else { 
    console.log(`You lost! Final score ${score[0]} vs ${score[1]}`);
}