import { Datepicker } from 'vanillajs-datepicker';

const calendar = document.querySelector('.calendar__btn');
const datepicker = new Datepicker(calendar, {
  weekStart: 1,
  defaultViewDate: new Date(),
  format: 'dd/mm/yyyy',
});
setDate(new Date());

function setDate(timestamp) {
  datepicker.setDate(timestamp);
}

function getDate() {
  return datepicker.getDate('yyyymmdd');
}

function addEventListenerToChangeDate(callback) {
  calendar.addEventListener('changeDate', e => {
    datepicker.hide();
    callback(e);
  });
}

export { getDate, setDate, addEventListenerToChangeDate };
