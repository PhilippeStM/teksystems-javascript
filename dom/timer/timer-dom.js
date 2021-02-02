console.log("time to start the timer!");

const stopwatch = document.getElementById("stopwatch");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let seconds = 0;
let minutes = 0;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
        }
    }
    stopwatch.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "0") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

start.onclick = timer;

stop.onclick = function() {
    clearTimeout(t);
}

reset.onclick = function() {
    stopwatch.textContent = "0:00";
    seconds = 0; minutes = 0; hours = 0;
    clearTimeout(t);
}