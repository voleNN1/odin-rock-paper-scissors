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

console.log(getComputerChoice());