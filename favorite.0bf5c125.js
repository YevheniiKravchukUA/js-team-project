function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r.register("eg88A",(function(e,t){const o=document.querySelector(".js-toggle"),n=document.body,r=document.querySelector(".js-toggle-t"),i=document.querySelector(".js-toggle-m");function d(e){const t=e.target.checked;t?n.classList.add("dark-theme"):n.classList.remove("dark-theme"),window.localStorage.setItem("theme",t)}JSON.parse(window.localStorage.getItem("theme"))&&(n.classList.add("dark-theme"),o.checked=!0,r.checked=!0,i.checked=!0),console.log(i),r.addEventListener("input",d),o.addEventListener("input",d),i.addEventListener("input",d)})),r.register("X4ZWf",(function(e,t){var o=r("jQ7WT");const n=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),l=()=>{const e="true"===i.getAttribute("aria-expanded")||!1;i.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");o[e?"enableBodyScroll":"disableBodyScroll"](document.body)};i.addEventListener("click",l),d.addEventListener("click",l)})),r.register("jQ7WT",(function(t,o){e(t.exports,"disableBodyScroll",(function(){return y})),e(t.exports,"clearAllBodyScrollLocks",(function(){return p})),e(t.exports,"enableBodyScroll",(function(){return w}));var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),d=[],l=!1,c=-1,u=void 0,s=void 0,a=void 0,f=function(e){return d.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},v=function(){void 0!==a&&(document.body.style.paddingRight=a,a=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)},g=function(){if(void 0!==s){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(t,e),s=void 0}},y=function(e,t){if(e){if(!d.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};d=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(d),[o]),i?window.requestAnimationFrame((function(){if(void 0===s){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===a){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);a=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-c;!f(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?m(e):e.stopPropagation())}(t,e)},l||(document.addEventListener("touchmove",m,n?{passive:!1}:void 0),l=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},p=function(){i&&(d.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),l=!1),c=-1),i?g():v(),d=[]},w=function(e){e?(d=d.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,l&&0===d.length&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),l=!1)),i?g():v()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}}));
//# sourceMappingURL=favorite.0bf5c125.js.map
