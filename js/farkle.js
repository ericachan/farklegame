//----------------------------------------------------------------
//      Global variables
//----------------------------------------------------------------

var playerScore = 0;
var player1score = 0;
var player2score = 0;

var flag = 1;

var die1 = {
    value: 1,
    state: "inPlay" 
};

var die2 = {
    value: 2,
    state: "inPlay"
};

var die3 = {
    value: 3,
    state: "inPlay"
};

var die4 = {
    value: 4,
    state: "inPlay"
};

var die5 = {
    value: 5,
    state: "inPlay"
};

var die6 = {
    value: 6,
    state: "inPlay"
};

var diceArray = [die1, die2, die3, die4, die5, die6];

var scoringArray = [0, 0, 0, 0, 0, 0];

var farkleArray = [0, 0, 0, 0, 0, 0];

//----------------------------------------------------------------
//      Functions to score points for 1s & 5s
//----------------------------------------------------------------

function addScore(diceNumber) {
    if (diceNumber.value == 1) {
        playerScore = playerScore + 100;
    }
    else if (diceNumber.value == 5) {
        playerScore = playerScore + 50;
    }
    document.getElementById("score").innerHTML = playerScore;
}

function subtractScore(diceNumber) {
    if (diceNumber.value == 1) {
        playerScore = playerScore - 100;
    }
    else if (diceNumber.value == 5) {
        playerScore = playerScore - 50;
    }
    document.getElementById("score").innerHTML = playerScore;
}

//----------------------------------------------------------------
//      Functions to score points for 3-of-a-kind
//----------------------------------------------------------------

function addToScoringArray(diceNumber) {
    
    if (diceNumber.state === "banked") {
        switch (diceNumber.value) {
            case 1:
                scoringArray[0] = scoringArray[0] + 1;
                break;
            case 2:
                scoringArray[1] = scoringArray[1] + 1;
                break;
            case 3:
                scoringArray[2] = scoringArray[2] + 1;
                break;
            case 4:
                scoringArray[3] = scoringArray[3] + 1;
                break;
            case 5:
                scoringArray[4] = scoringArray[4] + 1;
                break;
            case 6:
                scoringArray[5] = scoringArray[5] + 1;
                break;
         }
    }
 }

function subtractFromScoringArray(diceNumber) {
    
    if (diceNumber.state === "inPlay") {
        switch (diceNumber.value) {
            case 1:
                scoringArray[0] = scoringArray[0] - 1;
                break;
            case 2:
                scoringArray[1] = scoringArray[1] - 1;
                break;
            case 3:
                scoringArray[2] = scoringArray[2] - 1;
                break;
            case 4:
                scoringArray[3] = scoringArray[3] - 1;
                break;
            case 5:
                scoringArray[4] = scoringArray[4] - 1;
                break;
            case 6:
                scoringArray[5] = scoringArray[5] - 1;
                break;
         }
    }
 }


console.log(scoringArray);

function addTripleScore(diceNumber) {
    //for (i = 0; i < 6; i++) {
          switch (diceNumber.value) {
                case 1: 
                    if (scoringArray[diceNumber.value - 1] % 3 == 0){
                        playerScore = playerScore + 700;
                    }
                    console.log("case 1");
                    break;
                case 2:
                    if (scoringArray[diceNumber.value - 1] % 3 == 0){
                        playerScore = playerScore + 200;
                    }
                    console.log("case 2");
                    break;
                case 3:
                    if (scoringArray[diceNumber.value - 1] % 3 == 0){
                        playerScore = playerScore + 300;
                    }
                    console.log("case 3");
                    break;
                case 4:
                    if (scoringArray[diceNumber.value - 1] % 3 == 0){
                        playerScore = playerScore + 400;
                    }
                    console.log("case 4");
                    break;
                case 5:
                    if (scoringArray[diceNumber.value - 1] % 3 == 0){
                        playerScore = playerScore + 350;
                    }
                    console.log("case 5");
                    break;
                case 6:
                    if (scoringArray[diceNumber.value - 1] % 3 == 0){
                        playerScore = playerScore + 600;
                    }
                    console.log("case 6");
                    break;
            }
            document.getElementById("score").innerHTML = playerScore;
}


function subtractTripleScore(diceNumber) {
          switch (diceNumber.value) {
                case 1: 
                    if (scoringArray[diceNumber.value - 1] == 2){
                        playerScore = playerScore - 700;
                    }
                    console.log("case 1");
                    break;
                case 2:
                    if (scoringArray[diceNumber.value - 1] == 2){
                        playerScore = playerScore - 200;
                    }
                    console.log("case 2");
                    break;
                case 3:
                    if (scoringArray[diceNumber.value - 1] == 2){
                        playerScore = playerScore - 300;
                    }
                    console.log("case 3");
                    break;
                case 4:
                    if (scoringArray[diceNumber.value - 1] == 2){
                        playerScore = playerScore - 400;
                    }
                    console.log("case 4");
                    break;
                case 5:
                    if (scoringArray[diceNumber.value - 1] == 2){
                        playerScore = playerScore - 350;
                    }
                    console.log("case 5");
                    break;
                case 6:
                    if (scoringArray[diceNumber.value - 1] == 2){
                        playerScore = playerScore - 600;
                    }
                    console.log("case 6");
                    break;
            }
            document.getElementById("score").innerHTML = playerScore;
}



//-----------------------------------------------------------
//        Function to set initial state of dice
//-----------------------------------------------------------

function setState() {
    for (k = 0; k < 6; k++) {
        var y="die" + (k+1);
        diceArray[k].state = "inPlay";
        document.getElementById(y).style.opacity = "1.0";
        document.getElementById(y).style.pointerEvents = 'auto';
    }
    console.log("Fire diceRoll()");
    diceRoll();
}

window.onload=setState();
document.getElementById("endYourTurn").addEventListener("click", endTurn);


//------------------------------------------------------------
//        Function to roll the dice
//------------------------------------------------------------

function diceRoll() {
    var images = [];
    images[0] = "images/1.png";
    images[1] = "images/2.png";
    images[2] = "images/3.png";
    images[3] = "images/4.png";
    images[4] = "images/5.png";
    images[5] = "images/6.png";
    
    for (i = 0; i < 6; i++) {
        
        var y="die" + (i+1);
        var x=Math.floor(Math.random() * 6);
        
        if (diceArray[i].state==="inPlay"){
            document.getElementById(y).src = images[x];
            diceArray[i].value = x + 1;
        }
        else if (diceArray[i].state==="banked") {
            document.getElementById(y).style.pointerEvents = 'none';
            
        };
     }
    scoringArray = [0, 0, 0, 0, 0, 0];
    farkleArray = [0, 0, 0, 0, 0, 0];
    
    farkle();
}

document.getElementById("rollDice").addEventListener("click", diceRoll);

//---------------------------------------------------------------
//      Function to Farkle
//---------------------------------------------------------------


function farkle() {
    for (i = 0; i < 6; i++) {
        if (diceArray[i].state==="inPlay"){
            farkleArray[diceArray[i].value - 1] = farkleArray[diceArray[i].value - 1] + 1;
        }
    }
    if (farkleArray[0] != 0) {
        console.log(diceArray);
        return;
    }
    else if (farkleArray[4] != 0) {
        console.log(diceArray);
        return;
    }
    
    for (i = 0; i < 6; i++) {
        if (farkleArray[i] >= 3) {
            return;
        }
    }
    document.getElementById("message").innerHTML = "FARKLE!";
        
        function switchPlayerOnFarkle() {
            if (flag == 1) {
                playerScore = 0;
                document.getElementById("score").innerHTML = playerScore;
                document.getElementById("playerOneScore").style.backgroundColor = "lightgray";          
                document.getElementById("playerTwoScore").style.backgroundColor = "lightblue";
                console.log("Flag switched from 1 to 2 from farkling");
                flag = 2 ;
                }
            else if (flag == 2) {
                playerScore = 0;
                document.getElementById("score").innerHTML = playerScore;
                document.getElementById("playerTwoScore").style.backgroundColor = "lightgray"; 
                document.getElementById("playerOneScore").style.backgroundColor = "lightblue";
                console.log("Flag switched from 2 to 1 from farkling");
                flag = 1;
                }
        }      
        
        console.log("Flag switch from farkling complete");
            
        setTimeout (function(){
            document.getElementById("message").innerHTML = "";
        }, 1000);
        
        setTimeout(switchPlayerOnFarkle, 1000);
        setTimeout(setState, 1000);
    }


//---------------------------------------------------------------
//      Function to check for Win ( >=10,000 points)
//---------------------------------------------------------------

function checkForWin () {
    if (player1score >= 10000) {
        document.location.href = "player1wins.html";
    }
    else if (player2score >= 10000) {
        document.location.href = "player2wins.html";
    }
}

document.getElementById("endYourTurn").addEventListener("click", checkForWin);

// Add trolly gif

//---------------------------------------------------------------
//      Function to tally player scores, highlight current player,
//          check for hot dice, and end turn
//---------------------------------------------------------------


                                    
function switchPlayer(){
        if (flag == 1) {
            player1score = player1score + playerScore;
            document.getElementById("playerOneScore").innerHTML = player1score;
            playerScore = 0;
            document.getElementById("score").innerHTML = playerScore;
            document.getElementById("playerOneScore").style.backgroundColor = "lightgray"; document.getElementById("playerTwoScore").style.backgroundColor = "lightblue";
            console.log("Flag switched from 1 to 2");
            flag = 2 ;
    }
        else if (flag == 2) {
            player2score = player2score + playerScore;
            document.getElementById("playerTwoScore").innerHTML = player2score;
            playerScore = 0;
            document.getElementById("score").innerHTML = playerScore;
            document.getElementById("playerTwoScore").style.backgroundColor = "lightgray"; document.getElementById("playerOneScore").style.backgroundColor = "lightblue";
            console.log("Flag switched from 2 to 1");
            flag = 1;
        }
}


function hotDice() {
    document.getElementById("message").innerHTML = "Hot Dice! Roll again!";
    
    //document.getElementById("rollDice").onclick = function(){
    setTimeout(function()   
        {document.getElementById("message").innerHTML = "";}, 4000);
        
        if (flag == 1) {
            player1score = player1score + playerScore;
            document.getElementById("playerOneScore").innerHTML = player1score;
            playerScore = 0;
            document.getElementById("score").innerHTML = playerScore;
        }
        else if (flag == 2) {
            player2score = player2score + playerScore;
            document.getElementById("playerTwoScore").innerHTML = player2score;
            playerScore = 0;
            document.getElementById("score").innerHTML = playerScore;
        }
        console.log("Fire setState() inside hotDice");
        setState();
    }
//}


function endTurn() {
    
    console.log("endTurn() fired");
    console.log(diceArray);
    if (diceArray[0].state == "banked" && diceArray[1].state == "banked" && diceArray[2].state == "banked" &&        diceArray[3].state == "banked" && diceArray[4].state == "banked" && diceArray[5].state == "banked") {
        console.log(diceArray);
        hotDice();
    }
    else {
        console.log(diceArray);
        console.log("switchPlayer() fired");
        switchPlayer();
        setState();
    }
}


document.getElementById("endYourTurn").addEventListener("click", endTurn);


//-----------------------------------------------------------
//      Functions to toggle the dice states when clicked
//-----------------------------------------------------------



document.getElementById("die1").onclick = function() {
    if (die1.state === "inPlay"){
        die1.state = "banked";
        this.style.opacity = "0.5";
        addScore(die1);
        addToScoringArray(die1);
        addTripleScore(die1);
    }
    else {
        die1.state = "inPlay";
        this.style.opacity = "1.0";
        subtractScore(die1);
        subtractFromScoringArray(die1);
        subtractTripleScore(die1);
    }
}

document.getElementById("die2").onclick = function() {
    if (die2.state === "inPlay"){
        die2.state = "banked";
        this.style.opacity = "0.5";
        addScore(die2);
        addToScoringArray(die2);
        addTripleScore(die2);
    }
    else {
        die2.state = "inPlay";
        this.style.opacity = "1.0";
        subtractScore(die2);
        subtractFromScoringArray(die2);
        subtractTripleScore(die2);
    }
}
document.getElementById("die3").onclick = function() {
    if (die3.state === "inPlay"){
        die3.state = "banked";
        this.style.opacity = "0.5";
        addScore(die3);
        addToScoringArray(die3);
        addTripleScore(die3);
    }
    else {
        die3.state = "inPlay";
        this.style.opacity = "1.0";
        subtractScore(die3);
        subtractFromScoringArray(die3);
        subtractTripleScore(die3);
    }
}
document.getElementById("die4").onclick = function() {
    if (die4.state === "inPlay"){
        die4.state = "banked";
        this.style.opacity = "0.5";
        addScore(die4);
        addToScoringArray(die4);
        addTripleScore(die4);
    }
    else {
        die4.state = "inPlay";
        this.style.opacity = "1.0";
        subtractScore(die4);
        subtractFromScoringArray(die4);
        subtractTripleScore(die4);
    }
}
document.getElementById("die5").onclick = function() {
    if (die5.state === "inPlay"){
        die5.state = "banked";
        this.style.opacity = "0.5";
        addScore(die5);
        addToScoringArray(die5);
        addTripleScore(die5);
    }
    else {
        die5.state = "inPlay";
        this.style.opacity = "1.0";
        subtractScore(die5);
        subtractFromScoringArray(die5);
        subtractTripleScore(die5);
    }
}
document.getElementById("die6").onclick = function() {
    if (die6.state === "inPlay"){
        die6.state = "banked";
        this.style.opacity = "0.5";
        addScore(die6);
        addToScoringArray(die6);
        addTripleScore(die6);
    }
    else {
        die6.state = "inPlay";
        this.style.opacity = "1.0";
        subtractScore(die6);
        subtractFromScoringArray(die6);
        subtractTripleScore(die6);
    }
}


























