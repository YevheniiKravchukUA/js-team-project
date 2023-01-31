import { Notify } from 'notiflix';
import { getDate, setDate, addEventListenerToChangeDate } from './calendar';
import { getNews } from '../requests/newsFetch';
import { renderMarkup } from '../markup/renderMarkup';
import { createMarkup } from '../markup/createMarkup';
import { showNoNewsSection } from '../requests/emptyFetch';

const refs = {
  newsList: document.querySelector('.news__list'),
};

addEventListenerToChangeDate(e => {
  const date = getDate('yyyymmdd');
  const chooseDate = new Date(getDate('yyyy-mm-dd'));
  const dateNow = Date.now();
  console.log(chooseDate);

  if (dateNow <= chooseDate.getTime()) {
    Notify.warning('You can`t see into the future, it`s a pity!');

    return;
  } else {
    getNews('articles', {
      begin_date: date,
      end_date: date,
    }).then(resp => {
      refs.newsList.innerHTML = '';
      renderMarkup(
        refs.newsList,
        createMarkup(resp.data.response.docs, 'inputsCards')
      );

      showNoNewsSection(resp.data.response.docs);

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
