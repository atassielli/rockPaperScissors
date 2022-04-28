//Write code to return random computer choice in rock paper scissors//

function computerPlay(comp) {
    const options = Math.floor(Math.random() * comp.length);
    const compPlay = comp[options];
    return compPlay
}

let array = ['Rock', 'Paper', 'Scissors'];
let computerChoice = computerPlay(array).toLowerCase();
console.log(computerChoice);

//Make a prompt that asks users for their selection from rock, paper, and scissors//

let makeSelection = "Choose Rock, Paper, or Scissors";

function userChoice() {
    return prompt(makeSelection.toString());
}

let playerChoice = userChoice().toString().toLowerCase();
console.log(playerChoice);


//Create function that compares computerChoice with playerChoice to determine a winner//

let result;
if ((computerChoice == 'rock') && (playerChoice.toString() == 'paper')) {
    result = 'Player wins, congratulations';
} else if((computerChoice == 'rock') && (playerChoice.toString() == 'scissors')) {
     result = 'Conputer wins, better luck next time';
} else if((computerChoice == 'paper') && (playerChoice.toString() == 'rock')) {
    result = 'Conputer wins, better luck next time';
} else if((computerChoice == 'paper') && (playerChoice.toString() == 'scissors')) {
    result = 'Player wins, congratulations';
} else if((computerChoice == 'scissors') && (playerChoice.toString() == 'rock')) {
    result = 'Player wins, congratulations';
 } else if((computerChoice == 'scissors') && (playerChoice.toString() == 'paper')) {
    result = 'Conputer wins, better luck next time';
} else if((computerChoice == 'rock') && (playerChoice.toString() == 'rock')) {
    result = 'Tie, please try again';
} else if((computerChoice == 'paper') && (playerChoice.toString() == 'paper')) {
     result = 'Tie, please try again';
} else if((computerChoice == 'scissors') && (playerChoice.toString() == 'scissors')) {
    result = 'Tie, please try again';
}


console.log(result);    

