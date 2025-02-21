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

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => {
    playRound("rock");
})

btnPaper.addEventListener("click", () => {
    playRound("paper");
})

btnScissors.addEventListener("click", () => {
    playRound("scissors");
})

let humanScore = 0;
let computerScore= 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    const pcScoreOutput = document.querySelector("#pcResultsOutput");
    const humanScoreOutput = document.querySelector("#humanResultsOutput");
    
    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        humanScoreOutput.textContent = humanScore;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        humanScoreOutput.textContent = humanScore;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        humanScoreOutput.textContent = humanScore;
    }
    else if (humanChoice ===  computerChoice) {
        console.log("It's a tie! " + humanChoice + " and " + computerChoice + " are the same!");
        console.log("No score increase.");
    }
    else {
        computerScore++
        pcScoreOutput.textContent = computerScore;
    }

    if (humanScore >= 5) {
        alert("You have Won! Congratulations!");

        humanScore = 0;
        humanScoreOutput.textContent = humanScore;

        computerScore = 0;
        pcScoreOutput.textContent = computerScore;
    }
    else if (computerScore >= 5) {
        alert("You have Lost! Please try again!");

        humanScore = 0;
        humanScoreOutput.textContent = humanScore;

        computerScore = 0;
        pcScoreOutput.textContent = computerScore;
    }
}



    



