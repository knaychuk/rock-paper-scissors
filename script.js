const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const userChoice = document.getElementById('user-choice');
const computerChoice = document.getElementById('computer-choice');
const outcome = document.getElementById('outcome');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);

    //displays computer choice on browser
    if(randomNum === 0) {
        computerChoice.innerHTML = "Rock";
    } else if(randomNum === 1) {
        computerChoice.innerHTML = "Paper";
    } else if(randomNum === 2) {
        computerChoice.innerHTML = "Scissors";
    }

    return choices[randomNum];

}

rock.addEventListener("click", function() {
    userChoice.innerHTML = "Rock";
    compare("r");
});

paper.addEventListener("click", function() {
    userChoice.innerHTML = "Paper";
    compare("p");
});

scissors.addEventListener("click", function() {
    userChoice.innerHTML = "Scissors";
    compare("s");
});

let uScore = 0;
let cScore = 0;

function compare(choice) {
    const computerChoice = getComputerChoice();
    let userChoice = choice;
    console.log("user choice " + userChoice);
    console.log("computer choice " + computerChoice);
    if(userChoice === computerChoice)  {
        outcome.innerHTML = "It's a Draw";
    } else if (userChoice === 'r' && computerChoice === 's') {
        uScore++;
        userScore.innerHTML = uScore;
        outcome.innerHTML = "YOU WIN!";
    } else if (userChoice === 'p' && computerChoice === 'r') {
        uScore++;
        userScore.innerHTML = uScore;
        outcome.innerHTML = "YOU WIN!";
    } else if (userChoice === 's' && computerChoice === 'p') {
        uScore++;
        userScore.innerHTML = uScore;
        outcome.innerHTML = "YOU WIN!";
    } else {
        cScore++;
        computerScore.innerHTML = cScore;
        outcome.innerHTML = "Computer wins";
    }

}





