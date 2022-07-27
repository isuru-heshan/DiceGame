let score1 = 0;
let score2 = 0;
let flag = 1;

function rollDice(i = 6) {

    let btnChk = document.querySelector('#btn2');
    if (!btnChk){
        addReset();
    }

    if (i == 0) {
        getDiceVal();
        return;
    }
    document.getElementById("dice-img2").src = "images/dice_" + i + ".png";
    document.getElementById("dice-img1").src = "images/dice_" + i + ".png";
    setTimeout(rollDice, 100, i - 1);
}

function getDiceVal() {
    let dice1 = 0;
    let dice2 = 0;

    dice1 = Math.round(Math.random() * 5) + 1;
    dice2 = Math.round(Math.random() * 5) + 1;

    document.getElementById("diceVal1").innerHTML = "Dice 1 : " + dice1;
    document.getElementById("dice-img1").src = "images/dice_" + dice1 + ".png";
    document.getElementById("diceVal2").innerHTML = "Dice 2 : " + dice2;
    document.getElementById("dice-img2").src = "images/dice_" + dice2 + ".png";

    if (flag) {
        score1 = score1 + dice1 + dice2;

    } else {
        score2 = score2 + dice1 + dice2;
    }

    if (dice1 != dice2 || (dice1 == dice2 && dice1 == 1)) {
        if(dice1 == dice2 && dice1 == 1){
            if (flag) {
                score1 = 0;
            }else{
                score2 = 0;
            }
        }
        flag = (flag + 1) % 2;
    }

    checkWinner();
    setFinalScore();
    checkPlayer();
}

function checkWinner(){
    if (score1 >= 100) {
        alert("Player 1 Has Won!");
        restart();
    } else if (score2 >= 100) {
        alert("Player 2 Has Won!");
        restart();
    }
}

function setFinalScore()
{
    document.getElementById("score1").innerHTML = "Score : " + score1;
    document.getElementById("score2").innerHTML = "Score : " + score2;
}

function checkPlayer()
{
    if (flag) {
        document.getElementById("turn").innerHTML = "Player 1";
    } else {
        document.getElementById("turn").innerHTML = "Player 2";
    }
}

function addReset(){
    var btn2 = document.createElement("button");
    document.getElementById("div2").appendChild(btn2);
    btn2.innerText = "Restart Game";
    btn2.id = "btn2";
    btn2.addEventListener("click", reset);
}

function restart() {
    document.getElementById("btn1").disabled = true;
}

function reset() {
    score1 = 0;
    score2 = 0;
    flag = 1;
    setFinalScore();
    checkPlayer()
    document.getElementById("btn1").disabled = false;
}