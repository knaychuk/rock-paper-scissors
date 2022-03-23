const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];

}

rock.addEventListener("click", function() {
    compare("r");
});

paper.addEventListener("click", function() {
    compare("p");
});

scissors.addEventListener("click", function() {
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
        console.log("its a draw");
    } else if (userChoice === 'r' && computerChoice === 's') {
        uScore++;
        userScore.innerHTML = uScore;
        console.log("you win");
    } else if (userChoice === 'p' && computerChoice === 'r') {
        uScore++;
        userScore.innerHTML = uScore;
        console.log("you win");
    } else if (userChoice === 's' && computerChoice === 'p') {
        uScore++;
        userScore.innerHTML = uScore;
        console.log("you win");
    } else {
        cScore++;
        computerScore.innerHTML = cScore;
        console.log("you lose");
    }

}




// function change() {
//     score++;
//     userScore.innerHTML = score;
// }
