const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const displayText = document.getElementById("display-text")
let scorePlayer = 0;
let scoreComputer = 0;
let computerChoice;
let playerChoice;
const roundLimit = 5;

const getComputerChoice = () => {
    computerChoice = Math.floor(Math.random()* 3 + 1)
    if (computerChoice === 1) {
    computerChoice = "rock";
    } else if (computerChoice === 2) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissors";
    }
    return computerChoice;
}

const getPlayerChoice = (event) => {
    if (event.target.id === "rock") {
    playerChoice = "rock"
    } else if (event.target.id === "paper") {
    playerChoice = "paper"
    } else {
    playerChoice = "scissors";
    } 
    
    displayText.innerText = `You chose ${playerChoice}!`;
    setTimeout(() => {
        getComputerChoice();
        displayText.innerText = `Computer chose ${computerChoice}`;
        roundWinner();
    }, 2000)
    return playerChoice;
    }

rock.addEventListener("click", getPlayerChoice);
paper.addEventListener("click", getPlayerChoice);
scissors.addEventListener("click", getPlayerChoice);

const resetGame = () => {
    scorePlayer = 0;
    scoreComputer = 0;
    playerScore.innerText = scorePlayer;
    computerScore.innerText = scoreComputer;
    setTimeout(() => {
        displayText.innerText = "Make your choice!";
    }, 1500)
}

const roundWinner = () => {
    if (playerChoice === computerChoice) {
        displayText.innerText = `You both chose ${playerChoice}!`;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        scoreComputer++;
        computerScore.innerText = scoreComputer;
        displayText.innerText = `Computer wins the round! Computer chose ${computerChoice}, you chose ${playerChoice}.`;

    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        scorePlayer++;
        playerScore.innerText = scorePlayer
        displayText.innerText = `Player wins the round! Computer chose ${computerChoice}, you chose ${playerChoice}.`;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        scoreComputer++;
        computerScore.innerText = scoreComputer;
        displayText.innerText = `Computer wins the round! Computer chose ${computerChoice}, you chose ${playerChoice}.`;

    } else if (playerChoice === "paper" && computerChoice === "rock") {
        scorePlayer++;
        playerScore.innerText = scorePlayer;
        displayText.innerText = `Player wins the round! Computer chose ${computerChoice}, you chose ${playerChoice}.`;

    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        scorePlayer++;
        playerScore.innerText = scorePlayer;
        displayText.innerText = `Player wins the round! Computer chose ${computerChoice}, you chose ${playerChoice}.`;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        scoreComputer++;
        computerScore.innerText = scoreComputer;
        displayText.innerText = `Computer wins the round! Computer chose ${computerChoice}, you chose ${playerChoice}.`;
    }

    if (scorePlayer === roundLimit) {
        displayText.innerText = `Hooray! Player wins the game!`
        setTimeout(() => {
            resetGame();
        }, 2000)
    } else if (scoreComputer === roundLimit) {
        displayText.innerText = `Oh oh! Computer wins the game!`
        setTimeout(() => {
            resetGame();
        }, 2000)
    }
}




