
/* const randomNumber = Math.floor(Math.random() * 11) 
console.log('Random Number', randomNumber)  


function checkGuess() {
  let myGuess = guess.value
  if (myGuess === "7") {
    feedback.textContent = "Well done! That's Correct!!"
  } else if (myGuess > randomNumber) {
    feedback.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
  } else if (myGuess < randomNumber) {
   feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
 }
}
submitGuess.addEventListener('click', checkGuess)
*/


//var secret = 7;

var secret = Math.floor(math.random() = 10) +1;
var result = document.getElementById("feedback");
var active = true

function guessNumber() {
    var guess = document.getElementById("textbox").value;
    var convertedGuess = Number(guess);
    checkAnswer(convertedGuess);
}


function checkGuess(guess) {
        if (answer === secret) 
            result.textContent = "Well done! That's Correct!!";
        } else if (myGuess > secret) {
            result.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!";
            clearInput();
        } else if (myGuess < secret) {
            result.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!";
            clearInput();
        } else {
            result.innerHTML = "Invalid input! Please insert a vaild number.";
            clearInput();
        } 

//submitGuess.addEventListener('click', checkGuess)

function clearInput() {
    document.getElementById("textbox").value ="";
}