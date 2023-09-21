
//  first image/first player
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//  Second image/second player

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomeDiceImage = "dice" + randomNumber2 + ".png";

var randomeImageSource2 = "images/" + randomeDiceImage;

document.querySelectorAll("img")[1].setAttribute("src", randomeImageSource2);

// If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);