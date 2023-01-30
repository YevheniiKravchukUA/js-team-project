import Pagination from 'tui-pagination';

var pagination = new Pagination(document.getElementById('pagination2'), {
  totalItems: 50,
  itemsPerPage: 8,
  visiblePages: 3,
  centerAlign: false,
});

const prevBtn = document.querySelector('.tui-ico-prev');
const nextBtn = document.querySelector('.tui-ico-next');

prevBtn.textContent = '< Prew';
nextBtn.textContent = 'Next >';
