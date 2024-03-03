import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const refs = {
    datetimePicker: document.querySelector('input#datetime-picker'),
    startButton: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]')
    hours: document.querySelector('span[data-hours]')
    minutes: document.querySelector('span[data-minutes]')
    seconds: document.querySelector('span[data-seconds]')
};

refs.startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);