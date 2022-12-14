//select all buttons
const allButtons = document.querySelectorAll('button');

//iterate through each button to see which one was pressed
allButtons.forEach(button => button.addEventListener('click', getButtonClass))

//get the class of button pressed
function getButtonClass(e) {
    const playerChoice = this.dataset.choices;
    //user input into game()
    game(playerChoice, getComputerChoice());
    e.stopPropagation();
}

/**
 * This is a game function it will:
 * -display what user and computer picks to scoreboard
 * -
 * @param play playRound() function
 * @returns 
 */
function game(userChoice, computerChoice) {
    displayResult(playRound(userChoice, computerChoice));
    updateStats(userChoice, computerChoice);
    checkForWinner();
}

function checkForWinner() {
    if (score[0] > score[1]) {
        console.log(`You won! Final score ${score[0]} vs ${score[1]}.`);
    } else if (score[0] === score[1]) {
        console.log(`It's a tie!Final score ${score[0]} vs ${score[1]}.`);
    } else { 
        console.log(`You lost! Final score ${score[0]} vs ${score[1]}`);
    }
}


function displayResult(message) {
    const result = document.querySelector('#result');

    if (result.textContent.length >= 3) {
        result.textContent = "Game Result: "
    }
    result.textContent += message

}

function updateStats(userChoice, computerChoice) {
    //updates user choice
    updateUserChoice(userChoice);
    //updates user score
    updateUserScore();
    //update computer choice
    updateCompChoice(computerChoice);
    //update computer score
    updateCompScore();    
}

function updateUserScore() {
    let userScore = score[0];
    const user = document.querySelector('.your-score');

    if (user.textContent.length >= 2) {
        user.textContent = "Your Score: "
    }
    user.textContent += ` ${userScore}`
}

function updateCompScore() {
    let compScore = score[1];
    const comp = document.querySelector('.comp-score');

    if (comp.textContent.length >= 2) {
        comp.textContent = "Computer Score: "
    }
    comp.textContent += ` ${compScore}`
}

function updateUserChoice(userChoice) {
    const user = document.querySelector('.your-choice');
    //removes old choice
    if (user.textContent.length >= 2) {
        user.textContent = "You: "
    }
    user.textContent += ` ${userChoice}`
}

function updateCompChoice(computerChoice) {
    const comp= document.querySelector('.comp-choice');
    if (comp.textContent.length >= 2) {
        comp.textContent = "Computer: "
    }
    comp.textContent += ` ${computerChoice}`;
}


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
        updateScore(score,roundWinner);
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
