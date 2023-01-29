// console.log(123)
const newsListEl = document.querySelector('.news__list');
const addBtnEl = document.querySelector('.news__favorite-btn-add');
const removeBtnEl = document.querySelector('.news__favorite-btn-remove');
const svgEl = document.querySelectorAll('.favorite-btn__icon-add');

function addRemoveHandler(event) {
  // console.log(event.target.textContent.length)
  //   console.log(event.target.nodeName)
  if (event.target.nodeName !== 'BUTTON') {
    return;
  } else if (event.target.textContent === 'Add to favorite') {
    // console.log(event.target.textContent.length)
    event.target.textContent = 'Remove from favorite';
    event.target.classList.add('news__favorite-btn-remove');
    let x = Object.values(svgEl);
    x.map(item => item.classList.add('aaa'));
    //   svgEl.style.fill ='#4440f7'
  } else if (event.target.textContent === 'Remove from favorite') {
    event.target.textContent = 'Add to favorite';
    event.target.classList.remove('news__favorite-btn-remove');
    //   svgEl.style.fill ='transparent'
  }
}
newsListEl.addEventListener('click', addRemoveHandler);
