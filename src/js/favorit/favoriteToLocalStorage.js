// const newsListElements = document.querySelector('.news__list')
// const favoriteListEl = document.querySelector('.favorite-list')
// // console.log(favoriteListEl)



// let arrayOfFavoriteNews =[]


// function addRemoveToLocalStore(event) {


//     arrayOfFavoriteNews.push({
//         image: event.target.parentNode.firstElementChild.src,
//         title: event.target.parentNode.parentNode.children[2].textContent,
//         text: event.target.parentNode.parentNode.children[3].textContent,
//         href: event.target.parentNode.parentNode.lastElementChild.lastElementChild.href,
//         date: event.target.parentNode.parentNode.lastElementChild.firstElementChild.textContent,
//         id:event.target.dataset
        
//     })
//     localStorage.setItem('news-added-to-favorite', JSON.stringify(arrayOfFavoriteNews));
    

//     if (event.target.classList.contains('div')) {
//         const arrayWithremovedNew = JSON.parse(localStorage.getItem('news-added-to-favorite')).filter(
//       item => item.id !== e.target.dataset.id
//     );
//         localStorage.removeItem('news-added-to-favorite');
//         localStorage.setItem('news-added-to-favorite', JSON.stringify(arrayWithremovedNew));
//         arrayOfFavoriteNews=arrayWithremovedNew
// }

// }




// newsListElements.addEventListener('click', addRemoveToLocalStore)




