const activeBtn = document.querySelector('.categories_btn');
const showMore = document.querySelector('.categories_btn');
const modal = document.querySelector('.btn_group_list');
const elements = document.getElementsByClassName('categories_btn_link');
// console.log(elements);

const btnActive = document.querySelector('.btn_group');
const click = document.querySelector('.categories_list');
click.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } else if (e.target.classList.contains('categories_link_btn')) {
    return;
  } else if (e.target.classList.contains('categories_btn')) {
    e.target.classList.toggle('categories_btn_active');
    modal.classList.toggle('visible');
  } else {
    e.target.classList.toggle('is_active');
    console.log(e.target.textContent);
  }
});
