function getComputerChoice() {
    let choice = 0;

    value = Math.floor(Math.random() * 100);

    if (value <= 33) {
        choice = "Rock";
    }
    else if (value >= 33 && value <= 66) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }

    return choice;
}

function getHumanchoice() {
    let human_choice = "";

    human_choice = prompt("Please pick either Rock, Paper, or Scissors!");
    if (human_choice !== null) {
        if (human_choice !== "Rock" && human_choice !== "Paper" && human_choice !== "Scissors") {
            return "Please exit the program and pick a valid option!";
        }
        else if (human_choice === "Rock") {
            return "You picked " + human_choice + "!";
        }
        else if (human_choice === "Paper") {
            return "You picked " + human_choice + "!";
        }
        else {
            return "You picked " + human_choice + "!";
        }
    }
}

console.log("The Computer picked " + getComputerChoice() + "!");

console.log(getHumanchoice());