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

let winner;
function playRound (computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        winner = 'Tie';
    } else if ((computerChoice === 'rock' && playerChoice === 'scissors') || (computerChoice === 'scissors' && playerChoice === 'paper') || (computerChoice === 'paper' && playerChoice === 'rock')){
        winner = 'Computer Wins';
    } else {
        winner = 'Player Wins';
    }
    console.log(winner);
    return winner;

}


//Create a for loop that plays 5 rounds of the game//

function playGame () {
    const user = playerInput().toString();
    const computer = computerPlay(array).toString();
    const win = playRound(computer, user);
}



function game () {
    for (i = 1; i <= 5; i++) {
        playGame();
    }
}

game();

