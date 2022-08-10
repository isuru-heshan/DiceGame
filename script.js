let score1 = 0; /* to store the score */
let score2 = 0;
let flag = 1; /* to indicate who is plating*/
let newName1 = "Player 01"; /* name of the player */
let newName2 = "Player 02";

/* function for beginning */

function beginning(){
    let toRm = document.getElementById("welcome");
    document.body.removeChild(toRm)
    document.getElementById("game").style.visibility = "visible";
    setTimeout(setNames, 100);
}

let StartBtn = document.querySelector('#Start');
StartBtn.addEventListener('click', beginning);

/* get player names in the beginning */
function setNames() {
    newName1 = prompt("Enter name for player1");
    newName2 = prompt("Enter name for player2");
    /* check if name enterd or not*/
    if (newName1.length > 0) {
        document.getElementById("player1").innerHTML = newName1;
        document.getElementById("turn").innerHTML = newName1;
    }
    if (newName2.length > 0) {
        document.getElementById("player2").innerHTML = newName2;
    }
}

/* function create roll animation and then to get dice values and */
function rollDice(i = 6) {

    /* check for reset button avilability if not avilable add reset button */
    let btnChk = document.querySelector('#btn2');
    if (!btnChk) {
        addReset();
    }
    /* i used recursion function for animation, when recursion stops call getDiceVal to get random values for dice */
    if (i == 0) {
        getDiceVal();
        return;
    }
    document.getElementById("dice-img2").src = "./images/dice_" + i + ".png";
    document.getElementById("dice-img1").src = "./images/dice_" + i + ".png";
    /* call function recursively */
    setTimeout(rollDice, 100, i - 1);
}
/* function for get random values for dice */
function getDiceVal() {
    let dice1 = 0; /* variable for store random values*/
    let dice2 = 0;

    /* assign random values to variables (between 1 and 6) */
    dice1 = Math.round(Math.random() * 5) + 1;
    dice2 = Math.round(Math.random() * 5) + 1;
    
    /* change dice photo and display value according to the random value*/
    document.getElementById("diceVal1").innerHTML = "Dice 1 : " + dice1;
    document.getElementById("dice-img1").src = "./images/dice_" + dice1 + ".png";
    document.getElementById("diceVal2").innerHTML = "Dice 2 : " + dice2;
    document.getElementById("dice-img2").src = "./images/dice_" + dice2 + ".png";

    /* add score to the right player */
    if (flag) {
        score1 = score1 + dice1 + dice2;

    } else {
        score2 = score2 + dice1 + dice2;
    }

    /* add rules to the game */
    if (dice1 != dice2 || (dice1 == dice2 && dice1 == 1)) {
        if (dice1 == dice2 && dice1 == 1) {
            if (flag) {
                score1 = 0;
            } else {
                score2 = 0;
            }
        }
        flag = (flag + 1) % 2;
    }

    /* call for the other functions */
    checkWinner();
    setFinalScore();
    checkPlayer();
}

/* first player to pass 100 is winner */
function checkWinner() {
    if (score1 >= 100) {
        alert(newName1 + " Won!");
        restart();
    } else if (score2 >= 100) {
        alert(newName2 + " Won!");
        restart();
    }
}

/* display final score after each round */
function setFinalScore() {
    document.getElementById("score1").innerHTML = "Score : " + score1;
    document.getElementById("score2").innerHTML = "Score : " + score2;
}

/* check whoes playing now and display */
function checkPlayer() {
    if (flag) {
        document.getElementById("turn").innerHTML = newName1;
    } else {
        document.getElementById("turn").innerHTML = newName2;
    }
}

/* add restart button to the game */
function addReset() {
    var btn2 = document.createElement("button");
    document.getElementById("div2").appendChild(btn2);
    btn2.innerText = "Restart Game";
    btn2.id = "btn2";
    btn2.addEventListener("click", reset);
}

/* When game is over disable roll button */
function restart() {
    document.getElementById("btn1").disabled = true;
}

/* reset game */
function reset() {
    score1 = 0;
    score2 = 0;
    flag = 1;
    setFinalScore();
    checkPlayer();
    document.getElementById("btn1").disabled = false;
    setNames();
}