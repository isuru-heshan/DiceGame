let score1 = 0;
let score2 = 0;
let flag = 1;


function rollDice() {
    let dice1 = 0;
    let dice2 = 0;

    dice1 = Math.round(Math.random() * 5) + 1;
    dice2 = Math.round(Math.random() * 5) + 1;

    document.getElementById("diceVal1").innerHTML = "Dice 1 :" + dice1;
    document.getElementById("dice-img1").src = "images/dice_"+dice1+".png";
    document.getElementById("diceVal2").innerHTML = "Dice 2 :" + dice2;
    document.getElementById("dice-img2").src = "images/dice_"+dice2+".png";


    if (flag) {
        score1 = score1 + dice1 + dice2;

    } else {
        score2 = score2 + dice1 + dice2;
    }

    if (dice1 != dice2 || (dice1 == dice2 && dice1 == 1)) {
        flag = (flag + 1) % 2
    }
    
if (flag) {
    document.getElementById("turn").innerHTML = "Player 1";
} else {
    document.getElementById("turn").innerHTML = "Player 2";
}

if (score1>=100){
alert("Player 1 Has Won!");
score1 = 0;
score2 = 0;
flag = 1;
}else if (score2 >= 100){
alert("Player 2 Has Won!");
score1 = 0;
score2 = 0;
flag = 1;
}


document.getElementById("score1").innerHTML = "Score :" + score1;
document.getElementById("score2").innerHTML = "Score :" + score2;
    //alert(dice1);
    //alert(dice2);
}