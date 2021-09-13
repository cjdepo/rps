
function computerPlay () {
    randnum = Math.floor(Math.random() * 3);
    if (randnum == 0) {
        return "rock";
    } else if (randnum == 1) {
        return "paper";
    } else {
        return "scissor";
    }
    
}


function playRound (play) {
    
    // Player 
    player = play;
    const container = document.querySelector("#container");
    const resultPlayer = document.createElement("div");
    resultPlayer.textContent = "Your play: " + player;
    container.appendChild(resultPlayer);

    // Computer
    computer = computerPlay();
    const resultComputer = document.createElement("div");
    resultComputer.textContent = "Computer play: " + computer;
    container.appendChild(resultComputer);

    // Winner?
    if (player == computer) {
        winner = "Tie!";
        //return "tie";
    } else if ((player == "rock" && computer == "scissor") | (player == "scissor" && computer == "paper") | (player == "paper" && computer == "rock")) {
        winner = "Win Round!";
        //return "win";
    } else if ((computer == "rock" && player == "scissor") | (computer == "scissor" && player == "paper") | (computer == "paper" && player == "rock")) {
        winner = "Lose Round!";
        //return "lose";
    } else {
        winner = "ERROR, try again. (rock/paper/scissor)";
    }
    const resultWinner = document.createElement("div");
    resultWinner.textContent = "Result: " + winner;
    container.appendChild(resultWinner);
    
    // Update and display score and winner if score >= 5
    if (winner == "Win Round!") {
        playerScore += 1;
    }
    else if (winner == "Lose Round!") {
        computerScore += 1;
    }
    playerDisplay.textContent = "Player Score: " + playerScore;
    computerDisplay.textContent = "Computer Score: " + computerScore;
    if (playerScore >= 5) {
        winnerDisplay.textContent = "YOU WIN!!!!!!!!!!!!!";
    }
    else if (computerScore >= 5) {
        winnerDisplay.textContent = "YOU LOSE!!!!!!!!!!!!";
    }




}    
   
function game(numwins) {
    score = 0;
    games = 0;
    playerscore = 0;
    computerscore = 0;
    while (computerscore <= numwins && playerscore <= numwins) {
        // round =
       if (round == "win") {
           games += 1;
           playerscore += 1;
       } else if (round == "lose") {
           games += 1;
           computerscore += 1;
       } else if (round == "tie") {

       }
       
       if (playerscore >= numwins) {
           console.log("WIN GAME !!!");
           break;
       } else if (computerscore >= numwins) {
            console.log("LOSE GAME !!!");
            break;
        } else {
            continue;
        }
        
    }
}    

// init
let playerScore = 0;
let computerScore = 0;

// Create buttons and event listeners
const buttons = document.querySelectorAll("button");
buttons.forEach( (button) => button.addEventListener('click', function() {playRound(button.id)}));

// Set initial display at top of page
let playerDisplay = document.createElement('div');
container.appendChild(playerDisplay);
let computerDisplay = document.createElement('div');
container.appendChild(computerDisplay);
let winnerDisplay = document.createElement('div');
container.appendChild(winnerDisplay);





// test = game(5);

