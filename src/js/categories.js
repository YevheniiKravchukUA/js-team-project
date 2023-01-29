import { getNews } from './requests/newsFetch.js'
import { createMarkup } from './markup/createMarkup.js'
import { renderMarkup } from './markup/renderMarkup.js';
const showMore = document.querySelector('.categories_btn');
const modal = document.querySelector('.btn_group_list');
const othersBtn = document.querySelector('.js_others_btn')
const click = document.querySelector('.categories_list');
const newsListRef = document.querySelector('.news__list')
click.addEventListener('click', (e) => {
   
    console.log(e.currentTarget.children)
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
 
     else if (e.target.classList.contains('categories_btn')) {
        e.target.classList.toggle('categories_btn_active')
        modal.classList.toggle('visible')
    } else {
        const activeBtn = document.querySelector('.is_active')
        if (activeBtn) {
            activeBtn.classList.remove('is_active')
        }
        e.target.classList.add('is_active')
        modal.classList.remove('visible')
        console.log(showMore)
        showMore.classList.remove('categories_btn_active')
        othersBtn.classList.remove('categories_btn_active')
        console.log(e.target.textContent)
        getNews("category", {}, e.target.textContent.toLowerCase()).then(resp => { console.log(resp)
            renderMarkup(newsListRef, createMarkup(resp.data.results, 'categoryCards'))
            
        })
    }
    
})