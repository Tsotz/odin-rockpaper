const buttons = document.querySelectorAll("button");

const cont  = document.querySelector(".container");
const score = document.createElement("div");
score.classList.add("score");
score.setAttribute("style", "background-color:blue; color:black; border:2px solid purple;");
cont.appendChild(score);

const choice = document.createElement("div");
choice.classList.add("choice");
choice.setAttribute("style", "background-color:blue; color:black; border:2px solid purple;");
cont.appendChild(choice);

const game = document.createElement("div");
game.classList.add("game");
game.setAttribute("style", "background-color:blue; color:black; border:2px solid purple;");
cont.appendChild(game);

let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let computerChoice = Math.random();
    

    if (computerChoice >= 0 && computerChoice <= 0.33) {      
        return "rock";
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {   
        return "paper";
    } else if (computerChoice > 0.66 && computerChoice <= 1) {
        return "scissors";
    }
}



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

buttons.forEach(button => {

    button.addEventListener("click", () => {

        if (humanScore >= 5 || computerScore >= 5) return;

        const humanChoice = button.textContent.toLowerCase().trim();
        const computerChoice = getComputerChoice();
        choice.textContent = `Player Chose : ${humanChoice} | Computer Chose : ${computerChoice}`;
        game.textContent = playRound(humanChoice, computerChoice);
        if (humanScore === 5) {

            score.textContent = "Player Won The Game!";

        } else if (computerScore === 5) {

            score.textContent = "Computer Won the Game";

        } else {
            
           score.textContent = (`Player Score : ${humanScore}  Computer Score : ${computerScore}`);

        }
    });

});






