var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);const a=document.querySelector(".favorite-list");function r(){if(1===localStorage.length)return void console.log("NONE");const e=JSON.parse(localStorage.getItem("news-added-to-favorite")).map((e=>`\n    <li class="news__item-fav" data-id="${e.id}">\n    <div class="news__image-box">\n    <img class="news__image" src="${e.image}" alt="" />\n    <div class="div">\n    <button class="btn-width " data-value="4" type="button">Remove from favorite</button>\n    <svg class="favorite-btn__icon-remove" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n    <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n    </div>\n    <h3 class="news__image-heading">${e.h3}</h3>\n    </div>\n    <h2 class="news__title">${e.title}</h2>\n        <p class="news__text">${e.text}</p>\n        <div class="news__lower-box">\n        <p class="news__date">${e.date}</p>\n        <a class="news__readmore-link" target="_blank"\n        rel="noopener noreferrer" href="${e.href}">Read more</a>\n        </div>\n        </li>\n        `)).join("");a.innerHTML=e}r(),a.addEventListener("click",(function(e){if("DIV"!==e.target.nodeName)return;const t=JSON.parse(localStorage.getItem("news-added-to-favorite")).filter((t=>t.id!==e.target.parentNode.parentNode.dataset.id));localStorage.removeItem("news-added-to-favorite"),localStorage.setItem("news-added-to-favorite",JSON.stringify(t)),r()})),o("eg88A"),o("X4ZWf");
//# sourceMappingURL=favorite.4330ddf3.js.map
