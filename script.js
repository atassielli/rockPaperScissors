//Write code to return random computer choice in rock paper scissors//

function computerPlay(comp) {
    const options = Math.floor(Math.random() * comp.length);
    const compPlay = comp[options];
    return compPlay
}

const array = ['Rock', 'Paper', 'Scissors'];
const computerChoice = computerPlay(array);
console.log(computerChoice);