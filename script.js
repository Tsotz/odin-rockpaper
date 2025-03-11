function getComputerChoice() {
    let computerChoice = Math.random();
    

    if (computerChoice >= 0 && computerChoice <= 0.33) {
        console.log("Computer chose: rock");  
        return "rock";
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        console.log("Computer chose: paper");  
        return "paper";
    } else if (computerChoice > 0.66 && computerChoice <= 1) {
        console.log("Computer chose: scissors");  
        return "scissors";
    }
}




function getHumanChoice () {

    let humanChoice = prompt("rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase().trim();
    console.log(`Player choice: '${humanChoice}'`);  
    return humanChoice;
    

}


let humanScore = 0;
let computerScore = 0;




function playRound (humanChoice, computerChoice) {

  

    if (humanChoice === computerChoice) {

        return " It's a tie! ";

    } else if ((humanChoice === "scissors" && computerChoice === "paper") || 
               (humanChoice === "paper" && computerChoice === "rock") || 
               (humanChoice === "rock" && computerChoice === "scissors") ) 
                
                {

        humanScore++;
        return "You Win!";
        
    } else {
        
        computerScore++;
        return "You Lose!";
        
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(playRound(humanSelection, computerSelection));
console.log(humanScore);




