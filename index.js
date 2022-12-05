var randomNum1 = Math.ceil(Math.random()*6);
var randomNum2 = Math.ceil(Math.random()*6);



var randomDiceImg1 = "images/dice"+ randomNum1 + ".png";
var randomDiceImg2 = "images/dice" + randomNum2 + ".png";


var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);
var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if(randomNum1>randomNum2){
    document.querySelector("h1").textContent="Player 1 Won🎉";
}
else if(randomNum1===randomNum2){
    document.querySelector("h1").textContent="Draw!";
}
else{
    document.querySelector("h1").textContent="Player 2 Won🎉";
}
