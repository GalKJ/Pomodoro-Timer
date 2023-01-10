// Global variables.
const timeEl = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

// Event listeners.
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', reset);

let seconds = 1500;
let interval = null;

// Function to define mins, secs and render the variable values to the timeEl variables inner text.
function timer() {
  seconds--;

  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = `0${secs}`;
  if (mins < 10) mins = `0${mins}`;

  timeEl.innerText = `${mins}:${secs}`;

  if (seconds === 0) {
    stopTimer();
    restColourPalette();
    playSound();
    seconds = 300;
    interval = setInterval(rest, 1000);
  }
}

function rest() {
  seconds--;

  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = `0${secs}`;
  if (mins < 10) mins = `0${mins}`;

  timeEl.innerText = `${mins}:${secs}`;

  if (seconds === 0) {
    stopTimer();
    workColourPalette();
    playSound();
    seconds = 1500;
    interval = setInterval(timer, 1000);
  }
}

// Function to run the timer function at a set interval of 1000 milliseconds (1 second).
function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

// Function to stop the timer function running by clearing the interval.
function stopTimer() {
  clearInterval(interval);
  interval = null;
}

// Function to call the stopTimer function, reset the timer to 25:00.
function reset() {
  stop();
  seconds = 1500;
  timeEl.innerText = '25:00';
}

function restColourPalette() {
  document.body.classList.remove('work-body-bg');
  document.body.classList.add('rest-body-bg');
  timeEl.classList.remove('work-time');
  timeEl.classList.add('rest-time');
}

function workColourPalette() {
  document.body.classList.remove('rest-body-bg');
  document.body.classList.add('work-body-bg');
  timeEl.classList.remove('rest-time');
  timeEl.classList.add('work-time');
}

function playSound() {
  const audio = new Audio('audio/alarm.wav');
  audio.play();
}
