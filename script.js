let randomNumber = Math.floor(Math.random() * 100) + 1;
let noOfGuesses = 0;
let previousGuesses = [];

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const feedback = document.getElementById("feedback");
  const attempts = document.getElementById("attempts");
  const guessList = document.getElementById("guessList");
  const guessedNumber = parseInt(guessInput.value);

  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
    feedback.textContent = "⚠️ Please enter a number between 1 and 100.";
    return;
  }

  noOfGuesses++;
  previousGuesses.push(guessedNumber);
  guessList.textContent = previousGuesses.join(", ");

  if (guessedNumber > randomNumber) {
    feedback.textContent = "⬇️ Lower number please!";
  } else if (guessedNumber < randomNumber) {
    feedback.textContent = "⬆️ Higher number please!";
  } else {
    feedback.textContent = `🎉 Congrats! You guessed it right.`;
    attempts.textContent = `You guessed the number in ${noOfGuesses} attempts.`;
    guessInput.disabled = true;
  }

  guessInput.value = "";
  guessInput.focus();
}

// Allow Enter key to submit
document.getElementById("guessInput").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
