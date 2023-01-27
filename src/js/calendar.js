import { Datepicker } from 'vanillajs-datepicker';

const calendar = document.querySelector('.calendar__btn');

const datepicker = new Datepicker(calendar, {
  weekStart: 1,
  todayHighlight: true,
});
datepicker.setDate(Date.now());

function getSelectedDate() {
  const date = datepicker.getDate();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}