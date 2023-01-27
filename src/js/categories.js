// const mobile = document.querySelector('.mobile');
// const tablet = document.querySelector('.tablet');
// const desktop = document.querySelector('.desktop');
// const mobileMurkup = ``;
// const tabletMurkup = ``;
// const desktopMurkup = ``;
const activeBtn = document.querySelector('.categories_btn')
const showMore = document.querySelector('.categories_btn');
const modal = document.querySelector('.btn_group_list');
showMore.addEventListener("click", () => {
    if (modal.classList.contains('visible')) {
        modal.classList.remove('visible');
          activeBtn.classList.remove('categories_btn_active');
    } else {
        modal.classList.add('visible');
    activeBtn.classList.add('categories_btn_active');
    }

})
