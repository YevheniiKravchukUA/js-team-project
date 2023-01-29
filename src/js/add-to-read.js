const readLinkEl = document.querySelector('.news__readmore-link');
const newsItemEl = document.querySelector('.news__item');
const loverBoxEl = document.querySelector('.news__lower-box');

loverBoxEl.addEventListener('click', handleClickReadBtn);

function handleClickReadBtn(e) {
  e.preventDefault();

  console.log('e.target -->', e.target);
  console.log('123Y -->');

  if (e.target.classList.contains('news__readmore-link')) {
    console.log('contains -->');

    currentTarget.setAttribute('in-read');
  }
}
