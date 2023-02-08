let hourInput;
let minuteInput;
let secondInput;
const start = document.querySelector(".start");
const stopTime = document.querySelector(".stop");
const reset = document.querySelector(".reset");
let interval;

function countdown() {
  if (secondInput > 0) {
    secondInput--;
    document.querySelector("#second-input").value--;
  }
  if (secondInput == 0 && minuteInput > 0) {
    minuteInput--;
    document.querySelector("#minute-input").value--;
    secondInput = 59;
    document.querySelector("#second-input").value = 59;
  }
  if (secondInput == 0 && minuteInput == 0 && hourInput > 0) {
    hourInput--;
    document.querySelector("#hour-input").value--;
    minuteInput = 59;
    document.querySelector("#minute-input").value = 59;
    secondInput = 59;
    document.querySelector("#second-input").value = 59;
  }
}

start.onclick = function getTime() {
  clearInterval(interval);
  hourInput = document.querySelector("#hour-input").value;
  minuteInput = document.querySelector("#minute-input").value;
  secondInput = document.querySelector("#second-input").value;
  interval = setInterval(countdown, 1000);
};

stopTime.onclick = function getTime() {
  clearInterval(interval);
};

reset.onclick = function getTime() {
  clearInterval(interval);
  document.querySelector("#hour-input").value = 0;
  document.querySelector("#minute-input").value = 0;
  document.querySelector("#second-input").value = 0;
};
