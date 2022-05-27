
function computerPlay(comp) {
    const options = Math.floor(Math.random() * comp.length);
    const compPlay = comp[options];
    return compPlay;
}
let array = ['rock', 'paper', 'scissors'];
let computerChoice = computerPlay(array);

const selectionButtons = document.querySelector('.selectionButtons');

const rockButton = document.createElement('button');
rockButton.classList.add('rock');
rockButton.textContent = 'Rock';
rockButton.style.marginLeft = '5px';
selectionButtons.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.classList.add('paper');
paperButton.textContent = 'Paper';
paperButton.style.marginLeft = '5px';
selectionButtons.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissors');
scissorsButton.textContent = 'Scissors';
scissorsButton.style.marginLeft = '5px';
selectionButtons.appendChild(scissorsButton);

const startOverButton = document.createElement('button');
startOverButton.classList.add('startOver')
startOverButton.textContent = 'Start Over';
startOverButton.style.marginLeft = '5px';
selectionButtons.appendChild(startOverButton);

const chooseStartOver = document.querySelector('.startOver');

function startOver() {
    location.reload();
}

chooseStartOver.addEventListener('click', function (e) {
    startOver();
})

const choseRock = document.querySelector('.rock');
const chosePaper = document.querySelector('.paper');
const choseScissors = document.querySelector('.scissors');

let playerChoice;

choseRock.addEventListener('click', function (e) {
    playerChoice= 'rock';
    game();
})
chosePaper.addEventListener('click', function (e) {
    playerChoice = 'paper';
    game();
})
choseScissors.addEventListener('click', function (e) {
    playerChoice = 'scissors';
    game();
})

let ties = 0;
let playerScore = 0;
let computerScore = 0;

const compChoice = document.createElement('div');
const playChoice = document.createElement('div');
const notifyWin = document.createElement('div');

const compScore = document.createElement('div');
const playScore = document.createElement('div');
const tieTracker = document.createElement('div');

function playRound (computerChoice, playerChoice) {
        if (computerChoice === playerChoice) {
            (winner = 'Tie');
            (ties += 1);
        } else if ((computerChoice === 'rock' && playerChoice === 'scissors') || (computerChoice === 'scissors' && playerChoice === 'paper') || (computerChoice === 'paper' && playerChoice === 'rock')){
            (winner = 'Computer Wins');
            (computerScore += 1);
        } else {
            (winner = 'Player Wins');
            (playerScore += 1);
        }
        const results = document.querySelector('.results');

        compChoice.textContent = ('Computer Chooses: ' + computerChoice.toUpperCase());
        results.appendChild(compChoice);

        playChoice.textContent = ('Player Chooses: ' + playerChoice.toUpperCase());
        results.appendChild(playChoice);

        notifyWin.textContent = ('Round Result: ' + winner);
        results.appendChild(notifyWin);

        const score = document.querySelector('.score');

        compScore.textContent = ('Computer Wins: ' + computerScore);
        score.appendChild(compScore);

        playScore.textContent = ('Player Wins: ' + playerScore);
        score.appendChild(playScore);

        tieTracker.textContent = ('Ties: ' + ties);
        score.appendChild(tieTracker);

        return winner;
}

function playerWins() {
    alert('Congratulations, you have won the game');
}

function computerWins() {
    alert('Darn, the computer won. Better luck next time');
}

function playGame() {
    const computer = computerPlay(array).toString();
    const user = playerChoice;
    const win = playRound(computer, user);
    if (playerScore === 5) {
        playerWins();
    } else if (computerScore === 5) {
        computerWins();
    }
}

function game() {
    if (playerScore < 5 && computerScore < 5) {
        playGame()
    } else if (playerScore === 5) {
        playerWins();
    } else if (computerScore === 5) {
        computerWins();
    }
}
