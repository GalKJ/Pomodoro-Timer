// Global variables.
const timeEl = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let seconds = 1500;

// Function to define hrs, mins, secs and centi, increment the centiseconds and render the variable values to the timeEl variables inner text.
function timer() {
  seconds--;

  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = '0' + secs;
  if (mins < 10) mins = '0' + mins;

  timeEl.innerText = `${mins}:${secs}`;
}

// Function to run the timer function at a set interval of 10 milliseconds (1 centisecond).
function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 10);
}

// Function to stop the timer function running by clearing the interval.
function stop() {
  clearInterval(interval);
  interval = null;
}

// Function to run the stop function, reset the centiseconds to 0, the timeEl inner text to the DOM value and the lapList inner HTML to an empty paragraph.
function reset() {
  stop();
  centiSeconds = 0;
  timeEl.innerText = '00:00:00:00';
}
