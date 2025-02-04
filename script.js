let timeLeft = 0;
let interval;
const countdownEl = document.getElementById("timer");

function startTimer(duration) {

    timeLeft = duration;

    clearInterval(interval);

    interval = setInterval(updateCountdown, 1000);
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