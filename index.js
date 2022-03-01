// the code below is used to create a variable for getting the random number using the Math.random() method
var randomDiceNumber1 = Math.random();
// the code below is used to multiply the value of randomDiceNumber1 with 6 for getting the random number from 
// 0 to 6 and then saving the value in the randomDiceNumber1 variable
randomDiceNumber1 = randomDiceNumber1 * 6;
// the code below is to add 1 to the value of the randomDiceNumber1 for getting the number between 1 and 6
// and then saving the value in the randomDiceNumber1
randomDiceNumber1 = randomDiceNumber1 + 1;
// the code below is to use the Math.floor() method for rounding the value stored in the randomDiceNumber1 
// for getting a whole number
randomDiceNumber1 = Math.floor(randomDiceNumber1);
// the below line of code is for debugging purpose for getting the value of randomDiceNumber1 to the console
console.log(randomDiceNumber1);

// the code below is to use the querySelector for getting access to the tag associated with the img1 class
// and then using the getAttribute() method to get access to the value of the source attribute by passing the 
// src attribute as input to the getAttribute() method
var diceImagePath = document.querySelector(".img1").getAttribute("src");

// the below line of code is used to print the data inside the diceImagePath to the console
console.log(diceImagePath);

// the code below is used to create a variable for getting the path of the random dice image for player 1 based
// on the value of the randomDiceNumber1
var dice1RandomImagePath = "images/dice" + randomDiceNumber1 + ".png";

// the code below is to use the querySelector() method to get access to the tag associated with the .img1 class
// by passing .img1 class as input and then using the setAttribute() method and passing the attribute name i.e src
// and the value for src as input for changing the value of src attribute of the img tag associated with 
// the .img1 class

// in the setAttribute() method below we are also passing the value of dice1RandomImagePath for getting the 
// path of the image that we want to show
document.querySelector(".img1").setAttribute("src", dice1RandomImagePath);


// the code below is used to create a variable for getting the random number using the Math.random() method
var randomDiceNumber2 = Math.random();
// the code below is used to multiply the value of randomDiceNumber1 with 6 for getting the random number from 
// 0 to 6 and then saving the value in the randomDiceNumber2 variable
randomDiceNumber2 = randomDiceNumber2 * 6;
// the code below is to add 1 to the value of the randomDiceNumber1 for getting the number between 1 and 6
// and then saving the value in the randomDiceNumber2
randomDiceNumber2 = randomDiceNumber2 + 1;
// the code below is to use the Math.floor() method for rounding the value stored in the randomDiceNumber2
// for getting a whole number
randomDiceNumber2 = Math.floor(randomDiceNumber2);
// the below line of code is for debugging purpose for getting the value of randomDiceNumber2 to the console
console.log(randomDiceNumber2);

// the code below is to use the querySelector for getting access to the tag associated with the img2 class
// and then using the getAttribute() method to get access to the value of the source attribute by passing the 
// src attribute as input to the getAttribute() method
var diceTwoImagePath = document.querySelector(".img2").getAttribute("src");

// the below line of code is used to print the data inside the diceTwoImagePath to the console
console.log(diceTwoImagePath);

// the code below is used to create a variable for getting the path of the random dice image for player 2 based
// on the value of the randomDiceNumber2
var dice2RandomImagePath = "images/dice" + randomDiceNumber2 + ".png";

// the code below is to use the querySelector() method to get access to the tag associated with the .img2 class
// by passing .img2 class as input and then using the setAttribute() method and passing the attribute name i.e src
// and the value for src as input for changing the value of src attribute of the img tag associated with 
// the .img1 class

// in the setAttribute() method below we are also passing the value of dice2RandomImagePath for getting the 
// path of the image that we want to show
document.querySelector(".img2").setAttribute("src", dice2RandomImagePath);

// the code below is used to check that if the value of randomDiceNumber1 is greater than the value of the 
// randomDiceNumber2 then showing Player 1 Wins in place of the Refresh me
if (randomDiceNumber1 > randomDiceNumber2) {
    // the code below is to use the getElementsByTagName() method for getting access to the h1 tags inside the 
    // index.html file then getting access to the h1 tag at the 0th position and then using the textContent property for getting access to the text associated with the
    // h1 tag and then setting this equal to the value "player 1 wins" to be shown in place of refresh me if the
    // value of randomDiceNumber1 is greater than randomDiceNumber2
    document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins !";
} else if (randomDiceNumber2 > randomDiceNumber1) {
    // the code below is to use the getElementsByTagName() method for getting access to the h1 tags inside the 
    // index.html file then getting access to the h1 tag at the 0th position and then using the textContent property for getting access to the text associated with the
    // h1 tag and then setting this equal to the value "player 2 wins" to be shown in place of refresh me if the
    // value of randomDiceNumber2 is greater than randomDiceNumber1
    document.getElementsByTagName("h1")[0].textContent = "Player 2 wins !";
} else if (randomDiceNumber1 === randomDiceNumber2) {
    // the code below is to use the getElementsByTagName() method for getting access to the h1 tags inside the 
    // index.html file then getting access to the h1 tag at the 0th position and then using the textContent property for getting access to the text associated with the
    // h1 tag and then setting this equal to the value "Draw" to be shown in place of refresh me if the
    // value of randomDiceNumber2 is equal to the value of randomDiceNumber1   
    document.getElementsByTagName("h1")[0].textContent = "Draw !";
} else {
    // if any other thing happens then using the getElementsByTagName() method for getting access to the h1 tags inside the 
    // index.html file then getting access to the h1 tag at the 0th position and then using the textContent property for getting access to the text associated with the
    // h1 tag and then setting this equal to the value "Refresh Me" 
    document.getElementsByTagName("h1")[0].textContent = "Refresh Me"; 
}