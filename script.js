
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
    player = play;
    console.log(player);
    computer = computerPlay();
    console.log(computer);
    if (player == computer) {
        console.log("Tie!")
        //return "tie";
    } else if ((player == "rock" && computer == "scissor") | (player == "scissor" && computer == "paper") | (player == "paper" && computer == "rock")) {
        console.log("Win Round!")
        //return "win";
    } else if ((computer == "rock" && player == "scissor") | (computer == "scissor" && player == "paper") | (computer == "paper" && player == "rock")) {
        console.log("Lose Round!")
        //return "lose";
    } else {
        console.log("ERROR, try again. (rock/paper/scissor)");
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



const buttons = document.querySelectorAll("button");

buttons.forEach( (button) => button.addEventListener('click', function() {playRound(button.id)}));


// test = game(5);

