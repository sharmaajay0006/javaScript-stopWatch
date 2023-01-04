var sec = 0;
var min = 0;
var interVal;

const resetTimer = () => {
  stopTimer();
  sec = 0;
  min = 0;
  document.getElementById("mins").innerHTML = `0${min}`;
  document.getElementById("sec").innerHTML = `0${sec}`;
};

const timer = () => {
  sec += 1;
  document.getElementById("sec").innerHTML =
    sec === 60 ? "00" : sec < 10 ? "0" + sec : sec;

  if (sec === 60) {
    sec = 0;
    min += 1;
  }

  document.getElementById("mins").innerHTML = min < 10 ? "0" + min : min;
};

const start = () => {
  interVal = setInterval(timer, 1000);
};
const stopTimer = () => clearInterval(interVal);
