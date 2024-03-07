//generate random antara 1- 6 for player 1
let randomNum1 = Math.floor(Math.random() * 6) + 1;

//mengambil image based on hasil generate randomNum
var randomDiceImg1 = "dice" + randomNum1 + ".png";

//set random img source based on random number
const randomImgSource1 = "images/" + randomDiceImg1;

//cari selectore all image dengan array 0
let img1 = document.querySelectorAll("img")[0];

//set Attribute src dengan randomImgSource
img1.setAttribute("src", randomImgSource1);

//generate random antara 1- 6 for player 2
let randomNum2 = Math.floor(Math.random() * 6) + 1;

//mengambil image based on hasil generate randomNum
var randomDiceImg2 = "dice" + randomNum2 + ".png";

//set random img source based on random number
const randomImgSource2 = "images/" + randomDiceImg2;

//cari selectore all image dengan array 1
let img2 = document.querySelectorAll("img")[1];

//set Attribute src dengan randomImgSource
img2.setAttribute("src", randomImgSource2);

//set selectore h1 dan ganti isinya
if (randomDiceImg1 > randomDiceImg2) {
    document.querySelector("h1").innerHTML = "Player 1 Win!"
}
else if (randomDiceImg2 > randomDiceImg1) {
    document.querySelector("h1").innerHTML = "Player 2 Win!"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}