// create a var holding an object with our crystals inside
var crystals = {
    green: {
        name: "Green",
        value: 0
    },
    blue: {
        name: "Blue",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    
    };

// creating another var holding your wins, losses, score, target score
//set variables to 0
var wins = 0;
var losses = 0;
var currentScore = 0;
var targetScore = 0;

//create a function to get a random number (Math.floor. Math.random)
var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//create a function to start the game
var startGame = function(){
currentScore = 0;

//call the random function and set it to target score
//call random function to set values to crystals
//use jquery to display your current score and target score to the page (.text)
targetScore = getRandom(19, 120);

crystals.green.value    = getRandom(1, 12);
crystals.blue.value     = getRandom(1, 12);
crystals.yellow.value   = getRandom(1, 12);
crystals.red.value      = getRandom(1, 12);

$("#current-Score").text(currentScore);
$("#target-Score").text(targetScore);

console.log("------------------------");
console.log("Target Score: " + targetScore);
console.log("Yellow: " + crystals.yellow.value);
console.log("Green: " + crystals.green.value);
console.log("Blue: " + crystals.blue.value);
console.log("Red: " + crystals.red.value);
console.log("------------------------");

}


//create a function that will check if the user has won or lost the game
var values = function(crystals){
    currentScore = currentScore + crystals.value;
$("#current-Score").text(currentScore);
checkScore();
console.log("your score: " + currentScore);
}



//see if current score is larger than your target score(random number being generated)
var checkScore = function(){
    if (currentScore > targetScore){
        alert("you lost");
        losses++;
        $("#losses").text("Losses: " + losses);
        startGame();
    }
    else if (currentScore === targetScore){
        alert("you win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        startGame();
    }
    
}

//add losses to user score using ++
//use jquery to display change in loss count 
//call the start game function to reset the game
//write an else if statement to see if the user score is equal to the target score
//add wins to the wins variable using ++
//create a function that is going to grab the value of the crystal and add it to current score
//our first step is to make our current score += to the clicked crystals value
//apply changes to current score based on crystals clicked by user using .text
//call check wins function
$("#current-score").text(currentScore);
$("#target-score").text(targetScore);


startGame();
//create .clicks for each crystal in your object 
$("#green").on("click", function(){
    values(crystals.green);

});
$("#blue").on("click", function(){
    values(crystals.blue);

});
$("#yellow").on("click", function(){
    values(crystals.yellow);

});
$("#red").on("click", function(){
    values(crystals.red);

});


