
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

function playerPlay () {
    player = window.prompt('Play your hand: ');
    playerSelection = player.toLowerCase();
    return(player);
}

function playRound () {
    player = playerPlay();
    computer = computerPlay();
    if (player == computer) {
        console.log("Tie!")
        return "tie";
    } else if ((player == "rock" && computer == "scissor") | (player == "scissor" && computer == "paper") | (player == "paper" && computer == "rock")) {
        console.log("Win Round!")
        return "win";
    } else if ((computer == "rock" && player == "scissor") | (computer == "scissor" && player == "paper") | (computer == "paper" && player == "rock")) {
        console.log("Lose Round!")
        return "lose";
    } else {
        console.log("ERROR, try again. (rock/paper/scissor)");
    }

    }    
   
function game(numgames) {
    score = 0;
    games = 0;
    playerscore = 0;
    computerscore = 0;
    while (games <= numgames) {
       round = playRound();
       if (round == "win") {
           games += 1;
           playerscore += 1;
       } else if (round == "lose") {
           games += 1;
           computerscore += 1
       } else if (round == "tie") {

       }
       
       if (playerscore >= ((numgames + 1)/2)) {
           console.log("WIN GAME !!!");
           break;
       } else if (computerscore >= ((numgames + 1)/2)) {
            console.log("LOSE GAME !!!");
            break;
        } else {
            continue;
        }
    }
}    

test = game(5);

