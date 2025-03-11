function getComputerChoice () {

    let rps = Math.random();

    if (rps >= 0 && rps <= 0.33) {
        
        return "rock";

    } else if (rps > 0.33 && rps <= 0.66) {

        return "paper";

    } else if (rps > 0.66 && rps <= 1) {
        
        return "scissors";

    }

 

}
console.log(getComputerChoice());



function getHumanChoice () {

    return parseInt(prompt("rock, paper or scissors?"));

}


console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;


function playRound (HumanChoice.toLowerCase(), computerChoice) {

    

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



