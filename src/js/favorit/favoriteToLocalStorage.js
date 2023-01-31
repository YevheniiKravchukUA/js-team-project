const newsListElements = document.querySelector('.news__list');

setTimeout(() => {
  const btnlistELements = document.querySelectorAll('.news__item');
  btnlistELements.forEach(item => {
    JSON.parse(localStorage.getItem('news-added-to-favorite')).find(elem => {
      if (item.dataset.id === elem.id) {
        item.firstElementChild.children[1].firstElementChild.textContent =
          'Remove from favorite';
        item.firstElementChild.children[1].firstElementChild.classList.remove(
          'news__favorite-btn'
        );
        item.firstElementChild.children[1].firstElementChild.classList.add(
          'btn-width'
        );
        item.firstElementChild.children[1].lastElementChild.classList.remove(
          'favorite-btn__icon-add'
        );
        item.firstElementChild.children[1].lastElementChild.classList.add(
          'favorite-btn__icon-remove'
        );
      }
    });
  });
}, 700);

let arrayOfFavoriteNews = [];

if (localStorage.getItem('news-added-to-favorite')) {
  JSON.parse(localStorage.getItem('news-added-to-favorite')).map(item => {
    arrayOfFavoriteNews.push(item);
  });
}

function addRemoveToLocalStore(event) {
  if (event.target.nodeName !== 'DIV') {
    return
  }
  arrayOfFavoriteNews.push({
    image: event.target.parentNode.firstElementChild.src,
    title: event.target.parentNode.parentNode.children[1].textContent,
    text: event.target.parentNode.parentNode.children[2].textContent,
    href: event.target.parentNode.parentNode.lastElementChild.lastElementChild
      .href,
    date: event.target.parentNode.parentNode.lastElementChild.firstElementChild
      .textContent,
    id: event.target.parentNode.parentNode.dataset.id,
    h3: event.target.parentNode.lastElementChild.textContent,
  });
  localStorage.setItem(
    'news-added-to-favorite',
    JSON.stringify(arrayOfFavoriteNews)
  );

  if (event.target.classList.contains('div')) {
    const arrayWithremovedNew = JSON.parse(
      localStorage.getItem('news-added-to-favorite')
    ).filter(item => item.id !== event.target.parentNode.parentNode.dataset.id);
    localStorage.removeItem('news-added-to-favorite');
    localStorage.setItem(
      'news-added-to-favorite',
      JSON.stringify(arrayWithremovedNew)
    );
    arrayOfFavoriteNews = arrayWithremovedNew;
  }
}

newsListElements.addEventListener('click', addRemoveToLocalStore);
