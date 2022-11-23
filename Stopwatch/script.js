// https://codepen.io/cathydutton/pen/xxpOOw

window.onload = function () {
  let startbtn = document.getElementById("start");
  let stopbtn = document.getElementById("stop");
  let resetbtn = document.getElementById("reset");

  let seconds = 00;
  let tens = 00;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");

  let Interval;

  startbtn.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  stopbtn.onclick = function () {
    clearInterval(Interval);
  };

  resetbtn.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
