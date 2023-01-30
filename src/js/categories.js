import { getNews } from './requests/newsFetch.js';
import { createMarkup } from './markup/createMarkup.js';
import { renderMarkup } from './markup/renderMarkup.js';
const showMore = document.querySelector('.categories_btn');
const modal = document.querySelector('.btn_group_list');
const othersBtn = document.querySelector('.js_others_btn');
const click = document.querySelector('.categories_list');
const newsListRef = document.querySelector('.news__list');

getNews('allCategories').then(resp => {
  renderMarkup(modal, createMarkup(resp.data.results, 'categoriesFull'));
  renderMarkup(
    click,
    createMarkup(resp.data.results, 'categoriesForDesktop'),
    'afterbegin'
  );
});
click.addEventListener('click', e => {
  const activeBtnLine = document.querySelector('.active_underline');
  const activeBtn = document.querySelector('.is_active');
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } else if (e.target.classList.contains('categories_btn')) {
    e.target.classList.toggle('categories_btn_active');
    modal.classList.toggle('visible');
  } else if (e.target.classList.contains('btn_group')) {
    if (activeBtn) {
      activeBtn.classList.remove('is_active');
    } else if (activeBtnLine) {
      activeBtnLine.classList.remove('active_underline');
    }
    e.target.classList.add('is_active');
    modal.classList.remove('visible');
    showMore.classList.remove('categories_btn_active');
    othersBtn.classList.remove('categories_btn_active');
    getNews('category', {}, e.target.textContent.toLowerCase()).then(resp => {
      newsListRef.innerHTML = '';
      renderMarkup(
        newsListRef,
        createMarkup(resp.data.results, 'categoryCards')
      );
    });
  } else {
    if (activeBtnLine) {
      activeBtnLine.classList.remove('active_underline');
    } else if (activeBtn) {
      activeBtn.classList.remove('is_active');
    }
    e.target.classList.add('active_underline');
    modal.classList.remove('visible');
    showMore.classList.remove('categories_btn_active');
    othersBtn.classList.remove('categories_btn_active');
    getNews('category', {}, e.target.textContent.toLowerCase()).then(resp => {
      newsListRef.innerHTML = '';
      renderMarkup(
        newsListRef,
        createMarkup(resp.data.results, 'categoryCards')
      );
    });
  }
});
