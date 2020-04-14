const timeControlBtns = document.querySelectorAll('.timecontrol');
const sessionTime = document.querySelector('.session-time')
const breakTime = document.querySelector('.break-time')
const timer = document.querySelector('.timer')

const controlBtn = document.querySelectorAll('.controls')

const upBtn = document.querySelector('.up-session');
const downBtn = document.querySelector('.down-session'); 

const upBtnBreak = document.querySelector('.up-break');
const downBtnBreak = document.querySelector('.down-break'); 

const startBtn = document.getElementById('start');

//function to increment session minutes
let count = parseInt(sessionTime.value)
upBtn.addEventListener('click', addMinute);
downBtn.addEventListener('click', subtractMinute);

function updateDisplay(){
    timer.innerHTML = sessionTime.value;
}
function addMinute(e){
    count++;
    sessionTime.value = count;
    updateDisplay();
}

function subtractMinute(e){
    count--;
    sessionTime.value = count;
    updateDisplay();
}

//function to increment break minutes
let countBreak = parseInt(breakTime.value)

upBtnBreak.addEventListener('click', addMinuteBreak);
downBtnBreak.addEventListener('click', subtractMinuteBreak);

function addMinuteBreak(e){
    countBreak++;
    breakTime.value = countBreak;
}

function subtractMinuteBreak(e){
    countBreak--;
    breakTime.value = countBreak;
}


let d = new Date()

//function to start timer countdown
function startTimer(duration, timer) {
    let actualMinutes = duration * 60;
    var countdown = actualMinutes, minutes, seconds;
    setInterval(function () {
        minutes = pconst timeControlBtns = document.querySelectorAll(".time-control");
const sessionTime = document.querySelector(".session-time");
const breakTime = document.querySelector(".break-time");
const timer = document.querySelector(".timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// initialize
let inSession = true;
let paused = false;
let sessionMinutes = sessionTime.value;
let sessionSeconds = 0;
let breakMinutes = breakTime.value;
let breakSeconds = 0;

function updateDisplay(minutes, seconds) {
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.textContent = `${minutes}:${seconds}`;
}

function addMinute(element) {
  let count = parseInt(element.value);
  count++;
  element.value = count;
  element === sessionTime ? (sessionMinutes = count) : (breakMinutes = count);
}

function subtractMinute(element) {
  let count = parseInt(element.value);
  count--;
  element.value = count;
  element === sessionTime ? (sessionMinutes = count) : (breakMinutes = count);
}

function controlTime(e) {
  if (e.target.classList.contains("up-session")) {
    addMinute(sessionTime);
    updateDisplay(sessionMinutes, sessionSeconds);
  } else if (e.target.classList.contains("down-session")) {
    subtractMinute(sessionTime);
    updateDisplay(sessionMinutes, sessionSeconds);
  } else if (e.target.classList.contains("up-break")) {
    addMinute(breakTime);
  } else {
    subtractMinute(breakTime);
  }
}
// add/remove event listener for control btns
function manageControlBtns(enabled) {
  timeControlBtns.forEach((controlBtn) => {
    if (enabled) {
      controlBtn.addEventListener("click", controlTime);
    } else {
      controlBtn.removeEventListener("click", controlTime);
    }
  });
}

// function to start timer countdown
function startTimer(duration) {
  let countdown = duration * 60;

  setInterval(function () {
    updateDisplay(parseInt(countdown / 60, 10), parseInt(countdown % 60, 10));
    if (paused) {
      return;
    }

    if (--countdown < 0) {
      if (inSession) {
        countdown = breakMinutes * 60;
        inSession = false;
      } else {
        countdown = duration;
        inSession = true;
      }
    }
  }, 1000);
}

function timeIt() {
  manageControlBtns(false);
  sessionMinutes = sessionTime.value;
  startBtn.removeEventListener("click", timeIt);
  startTimer(sessionMinutes);
}

startBtn.addEventListener("click", timeIt);

resetBtn.addEventListener("click", function () {
  manageControlBtns(true);
});

pauseBtn.addEventListener("click", function () {
  if(paused === true){
    paused = false;
  }
  else (paused === false){
    paused = true;
  }
});

manageControlBtns(true);

updateDisplay(sessionMinutes, sessionSeconds);
arseInt(countdown / 60, 10)
        seconds = parseInt(countdown % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timer.textContent = minutes + ":" + seconds;

        if (--countdown < 0) {
            countdown = duration; //this is where we add the break time after 0
        }
    }, 1000);
}

startBtn.addEventListener('click', function(){
    startTimer(count, timer)
})


updateDisplay()