import { Notify } from 'notiflix';
import { getDate, setDate, addEventListenerToChangeDate } from './calendar';
import { getNews } from '../requests/newsFetch';
import { renderMarkup } from '../markup/renderMarkup';
import { createMarkup } from '../markup/createMarkup';

const refs = {
  newsList: document.querySelector('.news__list'),
};

addEventListenerToChangeDate(e => {
  const date = getDate();
  const chooseDate = new Date(date);
  const dateNow = Date.now();

  if (dateNow <= chooseDate.getTime()) {
    Notify.warning('You can`t see into the future, it`s a pity!');
    return;
  } else {
    console.log('else');
    getNews('articles', { fq: date }).then(resp => {
      refs.newsList.innerHTML = '';
      renderMarkup(
        refs.newsList,
        createMarkup(resp.data.response.docs, 'inputsCards')
      );

      window.localStorage.setItem(
        'lastFetchType',
        JSON.stringify({
          type: 'date',
          value: date,
        })
      );
    });
  }
});
