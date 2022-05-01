//Write code to return random computer choice in rock paper scissors//

function computerPlay(comp) {
    const options = Math.floor(Math.random() * comp.length);
    const compPlay = comp[options];
    return compPlay
}

let array = ['rock', 'paper', 'scissors'];
let computerChoice = computerPlay(array).toLowerCase();
console.log(computerChoice);

//Make a prompt that asks users for their selection from rock, paper, and scissors//

function playerInput () {
    let input = prompt('Type in rock, paper, or scissors');
    while (input == null) {
        input = prompt('Type in rock paper, or scissors');
    } 
    if (validate(input) == true) {
        input = input.toLowerCase();
    }  else if (validate(input) == false) {
        input = prompt('Type in rock, paper, or scissors. Case does not matter but spelling does');
    }
    return input;
}

let playerChoice = playerInput().toString();
console.log(playerChoice)



//Create function that validates the users input is rock, paper, or scissors//

function validate(choice) {
    return array.includes(choice);
}





//Create function that compares computerChoice with playerChoice to determine a winner//

function playRound (computerChoice, playerChoice) {

}

//Create a for loop that plays 5 rounds of the game//


//Use break to stop the game if computer or user wins 3 or more times//