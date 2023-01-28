import { Datepicker } from 'vanillajs-datepicker';

const calendar = document.querySelector('.calendar__btn');
const datepicker = new Datepicker(calendar, {
  weekStart: 1,
  todayHighlight: true,
});
datepicker.setDate(Date.now());

function getSelectedDate() {
  return datepicker.getDate('yyyy-mm-dd');
}

function addEventListenerToChangeDate(callback) {
  calendar.addEventListener('changeDate', e => {
    datepicker.hide();
    callback(e);
  });
}

export { getSelectedDate, addEventListenerToChangeDate };
