let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let timerInput = document.querySelector(".timerInput");
let startTimer = document.querySelector("#startTimer");
let pauseTimer = document.querySelector("#pauseTimer");
let resetTimer = document.querySelector("#resetTimer");

let timerSeconds = 0;
let timerInterval = null;

// Function to display timer in mm:ss format
function displayOutput() {
  let min = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
  let sec = (timerSeconds % 60).toString().padStart(2, "0");
  minutes.innerText = min;
  seconds.innerText = sec;
}

// Start button
startTimer.addEventListener("click", () => {
  // Prevent multiple intervals
  if (!timerInterval) {
    // If timer is not started yet
    if (timerSeconds === 0) {
      let inputValue = parseInt(timerInput.value) || 0;
      if (inputValue <= 0) {
        alert("Please enter a valid number!");
        return;
      }
      timerSeconds = inputValue;
      displayOutput();
    }

    // Start countdown
    timerInterval = setInterval(() => {
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerInput.value=0;
        alert("Time’s up!");
      } else {
        timerSeconds--;
        displayOutput();
      }
    }, 1000);
  }
});

// Pause button
pauseTimer.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  alert("Timer paused!");
});

// Reset button
resetTimer.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 0;
  timerInput.value=0
  displayOutput();
  alert("Timer reset!");
});
