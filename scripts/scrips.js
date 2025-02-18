function getComputerChoice() {
    let choice = 0;

    value = Math.floor(Math.random() * 100);

    if (value <= 33) {
        choice = "rock";
    }
    else if (value >= 33 && value <= 66) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice() {
    let human_choice = "";

    human_choice = prompt("Please pick either Rock, Paper, or Scissors!");

    if (human_choice !== null) {
        if (human_choice.toLowerCase() !== "rock" && human_choice.toLowerCase() !== "paper" && human_choice.toLowerCase() !== "scissors") {
            return console.log("Please exit the program and pick a valid option!");
        }
        else if (human_choice.toLowerCase() == "rock") {
            return human_choice.toLowerCase();
        }
        else if (human_choice.toLowerCase() == "paper") {
            return human_choice.toLowerCase();
        }
        else {
            return human_choice.toLowerCase();
        }
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        console.log("You Win! Rock beats Scissors!")
        console.log("Your score is now " + humanScore + "!");
        console.log("The computer score is " + computerScore + "!");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        console.log("You Win! Paper beats Rock!");
        console.log("Your score is now " + humanScore + "!");
        console.log("The computer score is " + computerScore + "!");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        console.log("You Win! Scissors beats Paper!");
        console.log("Your score is now " + humanScore + "!")
        console.log("The computer score is " + computerScore + "!");
    }
    else if (humanChoice ===  computerChoice) {
        console.log("It's a tie! " + humanChoice + " and " + computerChoice + " are the same!");
        console.log("No score increase.");
    }
    else {
        computerScore++
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
        console.log("The Computer score is now " + computerScore + "!");
        console.log("Your score is " + humanScore + "!");
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log("You Win! Congratulations!");
    }
    else if (computerScore > humanScore) {
        console.log("You Lose! So sorry!");
    }
} 
    
let humanScore = 0;
let computerScore= 0;

playGame();


