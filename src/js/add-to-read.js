// getNews('mostPopular').then(resp => {
//   const readMoreLinkEl = document.querySelector('.news__readmore-link');
//   readMoreLinkEl.addEventListener('click', handleReadMoreBtnClick);

//   function handleReadMoreBtnClick(e) {
//     console.log('e.t -->', e.target);
//   }
// });

export function addToread() {
  console.log('read -->');
  const readMoreLinkEl = document.querySelector('.news__readmore-link');
  readMoreLinkEl.addEventListener('click', handleReadMoreBtnClick);

  function handleReadMoreBtnClick(e) {
    console.log('e.t -->', e.target);
  }
}
