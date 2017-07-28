var computerChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);

var userGuesses = [];

var wins = 0;

var losses = 0;

var guessesRemaining = 4;

document.querySelector("#wins").innerHTML = "Wins = " + wins;

document.querySelector("#losses").innerHTML = "Losses = " + losses;

document.querySelector("#guessesRemaining").innerHTML = "Number of Guesses Remaining = " + guessesRemaining;

document.querySelector("#alreadyGuessed").innerHTML = "Incorrectly Guessed Letters " + userGuesses;

function startGame() {

	alert("Guess the letter (a-z) in 10 tries or less! Type your guesses on the keyboard.");

	var guessesRemaining = 4;

	var userGuesses = [" "];

}

var reset = startGame();

document.onkeyup = function(event) {

	var userGuess = event.key;

	userGuesses.push(userGuess);

	document.querySelector("#alreadyGuessed").innerHTML = "Incorrectly Guessed Numbers " + userGuesses;

	if (userGuess >= 1 && userGuess <= 9) { 
	if (userGuess == computerGuess) {
		alert("You Win!");
		wins ++;
		document.querySelector("#wins").innerHTML = "Wins = " + wins;
		
		reset;

		return;

	}
	else { 
		guessesRemaining--;
		document.querySelector("#guessesRemaining").innerHTML = "Number of Guesses Remaining = " + guessesRemaining;
		return guessesRemaining;
	}
	}

	else {
		alert("Guess a number (1-9)!")
	}


	return userGuesses.join(", ");

}
function losing() {
	if (guessesRemaining == 0) {
		losses ++;
	document.querySelector("#losses").innerHTML = "Losses = " + losses;
	}
}
losing();


	
