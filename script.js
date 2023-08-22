
    var targetNumber = Math.floor(Math.random() * 100) + 1;
    var guessInput = document.getElementById('guessInput');
    var resultMessage = document.querySelector('.result-message');
    var playAgainBtn = document.querySelector('.play-again');
    
    function checkGuess() {
      var userGuess = parseInt(guessInput.value);
      
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Please enter a valid number between 1 and 100.';
        resultMessage.style.color = 'red';
      } else if (userGuess === targetNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the correct number!';
        resultMessage.style.color = 'cyan';
        playAgainBtn.style.display = 'inline-block';
        guessInput.disabled = true;
      } else if (userGuess < targetNumber) {
        resultMessage.textContent = 'Try a higher number.';
        resultMessage.style.color = 'blue';
      } else {
        resultMessage.textContent = 'Try a lower number.';
        resultMessage.style.color = 'blue';
      }
      
      guessInput.value = '';
    }
    
    function resetGame() {
      targetNumber = Math.floor(Math.random() * 100) + 1;
      resultMessage.textContent = '';
      playAgainBtn.style.display = 'none';
      guessInput.disabled = false;
    }
