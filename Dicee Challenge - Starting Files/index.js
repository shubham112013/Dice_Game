var num = Math.random();
var num1 = Math.floor((num * 6) + 1);

var randomImage = "images/dice" + num1 + ".png";

//first image random number//

var num2 = Math.random();
var num3 = Math.floor((num2 * 6)+ 1);

var randomImage1 = "images/dice" + num3 +".png";

//second image random number//

document.querySelector(".img1").setAttribute("src", randomImage);

document.querySelector(".img2").setAttribute("src", randomImage1);


//conditions for the winner

if(num1 > num3){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(num3 > num1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
