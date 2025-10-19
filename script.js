let timer;
let timeLeft = 25 * 60; 
const display = document.getElementById('pomodoro-time');
const startButton = document.getElementById('start');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                timer = null;
                timeLeft = 25 * 60; 
                updateDisplay();
                startButton.textContent = 'start'; 
            }
        }, 1000);
        startButton.textContent = 'stop'; 
    } else {
        clearInterval(timer);
        timer = null; 
        startButton.textContent = 'start'; 
    }
}

updateDisplay();

startButton.addEventListener('click', startTimer);