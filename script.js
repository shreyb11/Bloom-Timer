let timeLeft = 0;
let interval;
let isPaused = false;
const countdownEl = document.getElementById("timer");
const alert = new Audio("Bell-Alert.mp3");

function startTimer(duration) {

    timeLeft = duration;
    clearInterval(interval);
    interval = setInterval(updateCountdown, 1000);

    isPaused = false;

}

function continueTimer() {
    if (isPaused != false && timeLeft > 0) {
        clearInterval(interval);
        interval = setInterval(updateCountdown, 1000);
        isPaused = false;
    }
}

function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Add leading zero for single-digit seconds
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the timer display
    countdownEl.innerHTML = `${minutes}:${seconds}`;

    // Stop countdown when time reaches zero
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(interval);
        countdownEl.innerHTML = "🌱 Time's up! 🌱";
        alert.play();
    }
}

// Event listeners for the buttons
document.getElementById("start1").addEventListener("click", function() {
    startTimer(60);  // 5 minutes (300 seconds)
});

document.getElementById("start5").addEventListener("click", function() {
    startTimer(300);  // 5 minutes (300 seconds)
});

document.getElementById("start25").addEventListener("click", function() {
    startTimer(1500);  // 25 minutes (1500 seconds)
});

document.getElementById("pause").addEventListener("click", function() {
    clearInterval(interval);
    isPaused = true;
});

document.getElementById("continue").addEventListener("click", function () {
    continueTimer();
});

document.getElementById("reset").addEventListener("click", function() {
    clearInterval(interval);
    timeLeft = 0;
    countdownEl.innerHTML = "00:00";
    isPaused = false;
});
