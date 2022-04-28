//Write code to return random computer choice in rock paper scissors//

function computerPlay(comp) {
    const options = Math.floor(Math.random() * comp.length);
    const compPlay = comp[options];
    return compPlay
}

let array = ['Rock', 'Paper', 'Scissors'];
let computerChoice = computerPlay(array);
console.log(computerChoice);

//Make a prompt that asks users for their selection from rock, paper, and scissors//

let makeSelection = "Choose Rock, Paper, or Scissors";

function userChoice() {
    return prompt(makeSelection.toString());
}

let playerChoice = userChoice().toString();
console.log(playerChoice);


//Create function that compares computerChoice with playerChoice to determine a winner//

let result;
if ((computerChoice == 'Rock') && (playerChoice.toString() == 'Paper')) {
    result = 'Player wins, congratulations';
} else if((computerChoice == 'Rock') && (playerChoice.toString() == 'Scissors')) {
     result = 'Conputer wins, better luck next time';
} else if((computerChoice == 'Paper') && (playerChoice.toString() == 'Rock')) {
    result = 'Conputer wins, better luck next time';
} else if((computerChoice == 'Paper') && (playerChoice.toString() == 'Scissors')) {
    result = 'Player wins, congratulations';
} else if((computerChoice == 'Scissors') && (playerChoice.toString() == 'Rock')) {
    result = 'Player wins, congratulations';
 } else if((computerChoice == 'Scissors') && (playerChoice.toString() == 'Paper')) {
    result = 'Conputer wins, better luck next time';
} else if((computerChoice == 'Rock') && (playerChoice.toString() == 'Rock')) {
    result = 'Tie, please try again';
} else if((computerChoice == 'Paper') && (playerChoice.toString() == 'Paper')) {
     result = 'Tie, please try again';
} else if((computerChoice == 'Scissors') && (playerChoice.toString() == 'Scissors')) {
    result = 'Tie, please try again';
}


console.log(result);    

