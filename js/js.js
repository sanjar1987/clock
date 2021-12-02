const secElement = document.querySelector('.stopwatch__seconds'),
  minElement = document.querySelector('.stopwatch__minutes'),
  hourElement = document.querySelector('.stopwatch__hours'),
  btnStart = document.querySelector('.stopwatch__btn'),
  whiteCir = document.querySelector('.tabsLink__span')

let secondTay = 0,
  minuteTay = 0,
  hourTay = 0

function click() {
  btnStart.addEventListener('click', () => {
    btnStart.innerHTML = 'stop';
    btnStart.addEventListener('click', () => {
      btnStart.innerHTML = 'clear';
      btnStart.addEventListener('click', () => {
        btnStart.innerHTML = 'start';
      })
    })
  })
  setTimeout(() => {
    click()
  }, 4000);
} click()

function timer() {
  if (btnStart.innerHTML === 'stop') {
    secondTay++
    if (secondTay < 60) {
      secElement.innerHTML = secondTay;
    }
    else if (secondTay > 59) {
      secondTay = 0;
      secElement.innerHTML = secondTay;
      minuteTay++;
      minElement.innerHTML = minuteTay;
    }
    else if (minuteTay < 60) {
      minElement.innerHTML = minuteTay;
    }
    else if (minuteTay > 59) {
      minuteTay = 0;
      minElement.innerHTML = minuteTay;
      hourTay++;
      hourElement.innerHTML = hourTay;
    }
    else if (hourTay < 60) {
      hourElement.innerHTML = hourTay;
    }
    else if (hourTay > 59) {
      hourTay = 0;
    }
    else {
    }
    whiteCir.classList.add('active')
  }
  else if (btnStart.innerHTML === 'clear') {
    whiteCir.classList.add('active_clear')
  }
  else if (btnStart.innerHTML === 'start') {
    secondTay = 0;
    minuteTay = 0;
    hourTay = 0;
    secElement.innerHTML = secondTay;
    minElement.innerHTML = minuteTay;
    hourElement.innerHTML = hourTay;
    whiteCir.classList.remove('active_clear')
    whiteCir.classList.remove('active')
  }
  setTimeout(() => {
    timer()
  }, 1000);
}
timer()