import { createMarkup } from '../markup/createMarkup';
import { renderMarkup } from '../markup/renderMarkup';
import { showNoNewsSection } from '../requests/emptyFetch';
import { getNews } from '../requests/newsFetch';
import { addFetchedToLocalStorage } from '../fromFetchToLocalStorage';
import { haveRead } from '../haveReadOnHome';

const refs = {
  form: document.querySelector('.header-form'),
  input: document.querySelector('.header-input'),
  newsList: document.querySelector('.news__list'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  if (refs.input.value.trim() === '') {
    return;
  }

  const oprions = {
    q: refs.input.value.trim(),
  };

  getNews('articles', oprions)
    .then(resp => {
      refs.newsList.innerHTML = '';
      renderMarkup(
        refs.newsList,
        createMarkup(resp.data.response.docs, 'inputsCards')
      );

      showNoNewsSection(resp.data.response.docs);

      window.localStorage.setItem(
        'lastFetchType',
        JSON.stringify({
          type: 'input',
          value: refs.input.value,
        })
      );
      return resp.data.response.docs;
    })
    .then(results => {
      console.log('resCat -->', results);

      addFetchedToLocalStorage(results);
      haveRead.checkFetchedNewsByID(results);
    });

  refs.input.value = '';
});
