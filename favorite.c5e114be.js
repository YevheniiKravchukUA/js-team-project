function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"kHKil":"favorite.c5e114be.js","jsjoe":"no-news-tab@2x.667257e0.png","8pSep":"favorite.6b6b2bd9.js"}'));var i;i=new URL(a("kyEFX").resolve("jsjoe"),import.meta.url).toString();const s=document.querySelector(".favorite-list");function l(){if(1===localStorage.length)return s.innerHTML=`<div class="no-news__box"><p class="no-news__text">Nothing to read in this section</p>\n  <img class="no-news__image" src="${t(i)}" alt="no-news" width="400px"/></div>`;if(localStorage.getItem("news-added-to-favorite")){const e=JSON.parse(localStorage.getItem("news-added-to-favorite")).map((e=>`\n    <li class="news__item-fav" data-id="${e.id}">\n    <div class="news__image-box">\n    <img class="news__image" src="${e.image}" alt="" />\n    <div class="div">\n    <button class="btn-width " data-value="4" type="button">Remove from favorite</button>\n    <svg class="favorite-btn__icon-remove" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n    <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n    </div>\n    <h3 class="news__image-heading">${e.h3}</h3>\n    </div>\n    <h2 class="news__title">${e.title}</h2>\n        <p class="news__text">${e.text}</p>\n        <div class="news__lower-box">\n        <p class="news__date">${e.date}</p>\n        <a class="news__readmore-link" target="_blank"\n        rel="noopener noreferrer" href="${e.href}">Read more</a>\n        </div>\n        </li>\n        `)).join("");s.innerHTML=e}}l(),s.addEventListener("click",(function(e){if("DIV"===e.target.nodeName){if(localStorage.getItem("news-added-to-favorite")){const t=JSON.parse(localStorage.getItem("news-added-to-favorite")).filter((t=>t.id!==e.target.parentNode.parentNode.dataset.id));localStorage.removeItem("news-added-to-favorite"),localStorage.setItem("news-added-to-favorite",JSON.stringify(t))}l()}})),a("eg88A"),a("X4ZWf");
//# sourceMappingURL=favorite.c5e114be.js.map
