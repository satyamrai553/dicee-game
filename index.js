var randomNumber1 = Math.floor(Math.random()*6 +1);
// console.log(randomNumber1);
var image1 = "images/dice"+randomNumber1+".png";
// console.log(image1);
document.querySelectorAll("img")[0].src=image1;
var randomNumber2 = Math.floor(Math.random()*6 +1);
var image2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].src=image2;


if(randomNumber1>randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins 🏆";
}
else if(randomNumber2>randomNumber1){
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins 🏆";
}
else{
  document.querySelectorAll("h1")[0].innerHTML = "Match Tie";
}




