import { SimpleCalendar } from '../simple-calendar/simple-calendar';

const calendarBtn = document.querySelector('.calendar__btn');
const simpleCalendar = new SimpleCalendar({
  fromYear: 1995,
  toYear: 2030,
  defaultDate: new Date(),
});

// function setDate(timestamp) {
//   simpleCalendar.setDate(timestamp);
// }

function getDate(dateType) {
  return simpleCalendar.getDate(dateType);
}

function addEventListenerToChangeDate(callback) {
  calendarBtn.addEventListener('changeDate', e => {
    callback(e);
  });
}

export { getDate, addEventListenerToChangeDate };
