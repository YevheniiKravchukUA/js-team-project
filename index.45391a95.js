function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("fKrXO",(function(t,r){e(t.exports,"alreadyRead",(function(){return o})),e(t.exports,"handleReadMoreBtnClick",(function(){return n}));const o=new class{getJsonFromLocalStorage(e){return localStorage.getItem(e)}dataFromLocalStorage(e){try{return JSON.parse(e)}catch(e){console.log(e.name),console.log(e.message)}}findCheckedNew(e){let t;return console.log("id --\x3e",e),this.newsArr.forEach((r=>{(r.hasOwnProperty("_id")&&r._id===e||r.hasOwnProperty("id")&&r.id===Number(e)||r.hasOwnProperty("slug_name")&&r.slug_name===e)&&(t=r)})),console.log("🆑selectedNews",t),t}getCurrentDate(){const e=new Date;return`${String(e.getDate())}/${String(e.getMonth()+1)}/${String(e.getFullYear())}`}saveToLocalStorage(){localStorage.setItem("alreadyReadNews",JSON.stringify(this.readNews))}leaveUniqueNews(){}constructor(){this.jsonReadNews=localStorage.getItem("alreadyReadNews"),this.readNews=this.dataFromLocalStorage(this.jsonReadNews)||[],this.newsArr=[],this.checkedNew=null,this.currentItemID=null}};function n(e){const t=String(e.target.parentNode.parentNode.getAttribute("data-id"));console.log("🆑  currentItemID",t);const r=o.getJsonFromLocalStorage("NewsFromHome"),n=o.dataFromLocalStorage(r);if(o.newsArr=n,o.checkedNew=o.findCheckedNew(t),0===o.readNews.length){const e={date:`${o.getCurrentDate()}`,news:[o.checkedNew]};o.readNews.push(e)}else o.readNews[o.readNews.length-1].news.push(o.checkedNew);o.saveToLocalStorage()}}));
//# sourceMappingURL=index.45391a95.js.map