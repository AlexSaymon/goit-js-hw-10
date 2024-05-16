import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  startBtn: document.querySelector(`[data-start]`),
  datePicker: document.querySelector(`#datetime-picker`),
  clockface: {
    days: document.querySelector(`[data-days]`),
    hours: document.querySelector(`[data-hours]`),
    minutes: document.querySelector(`[data-minutes]`),
    seconds: document.querySelector(`[data-seconds]`),
  },
};

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() <= Date.now()) {
      iziToast.show({
        title: 'Alert',
        message: 'Please choose a date in the future',
      });
      refs.startBtn.disabled = true;
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.datePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
}

let countdownInterval;

function startBtnClick() {
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = Date.now();
    const diff = userSelectedDate.getTime() - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      return;
    }

    const timer = convertMs(diff);
    refs.clockface.days.textContent = addLeadingZero(timer.days);
    refs.clockface.hours.textContent = addLeadingZero(timer.hours);
    refs.clockface.minutes.textContent = addLeadingZero(timer.minutes);
    refs.clockface.seconds.textContent = addLeadingZero(timer.seconds);
  }, 1000);
}

refs.startBtn.addEventListener(`click`, startBtnClick);
