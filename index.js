//Image 1
var randomnumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage1 = "dice" + randomnumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImageSource1);

//Image 2
var randomnumber2 = Math.floor(Math.random() * 6)+1;

var randomImageSource2 = "images/dice" + randomnumber2 + ".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


//IF PLAYER 1 wins
if (randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
