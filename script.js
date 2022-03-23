const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

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


function compare(choice) {
    const computerChoice = getComputerChoice();
    let userChoice = choice;
    console.log("user choice " + userChoice);
    console.log("computer choice " + computerChoice);
    if(userChoice === computerChoice)  {
        console.log("its a draw");
    } else if (userChoice === 'r' && computerChoice === 's') {
        console.log("you win");
    } else if (userChoice === 'p' && computerChoice === 'r') {
        console.log("you win");
    } else if (userChoice === 's' && computerChoice === 'p') {
        console.log("you win");
    } else {
        console.log("you lose");
    }

}



