!function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],d=0,v=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);v.length;)v.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([122,1]),n()}({122:function(e,t,n){n(123),e.exports=n(311)},309:function(e,t,n){},310:function(e,t){var n=document.querySelectorAll(".app-tab"),r=document.querySelectorAll(".tab");function o(e){e.preventDefault(),n.forEach((function(e){return e.classList.remove("active-link")})),r.forEach((function(e){return e.classList.add("hide")})),this.classList.add("active-link"),document.querySelector(this.dataset.link).classList.remove("hide")}n.forEach((function(e){e.addEventListener("click",o)}))},311:function(e,t,n){"use strict";n.r(t);n(309);function r(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}var o={getList:function(e){return(t=regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://www.googleapis.com/books/v1/volumes","?q=").concat(e,"&key=").concat("AIzaSyAfrZf3W8jHHCbM2KXE6sa1E64_KJyF_xk"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(e){r(i,o,a,c,s,"next",e)}function s(e){r(i,o,a,c,s,"throw",e)}c(void 0)}))})();var t}},a=new(function(){var e;function t(){if(e)return e;e=this}return t.prototype.list=new Map,t.prototype.setStorage=function(){localStorage.setItem("book_storage",JSON.stringify({}))},t.prototype.get=function(e){var t=JSON.parse(localStorage.getItem("book_storage"));return e?Object.values(t).reverse():t},t.prototype.addToStorage=function(e){var t=JSON.parse(localStorage.getItem("book_storage"));t[e.id]=e,localStorage.setItem("book_storage",JSON.stringify(t))},t.prototype.removeFromStorage=function(e){var t=JSON.parse(localStorage.getItem("book_storage"));delete t[e.id],localStorage.setItem("book_storage",JSON.stringify(t))},t.prototype.isStorage=function(){return localStorage.getItem("book_storage")},t}());a.isStorage()||a.setStorage();var i=a;function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"template",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'\n            <div class="book-component flex wow" data-prefix="'.concat(t,"\" id='").concat(t).concat(e.id,"'>\n                <div class=\"book-thumb\">\n                    <img src='").concat(e.thumb,"' draggable='false' alt=''/>\n                    <div style='background: url(\"").concat(e.thumb,'")\' class=\'book-overlay\'></div>\n                </div>\n                <div class="book-info flex">\n                    <h2 class="book-name">').concat(e.title,'</h2>\n                    <p class="book-author">').concat(e.authors,'</p>\n                    <p class="book-description">').concat(e.description,'</p>\n                    <div class="search-block__container flex">\n                        <a href="').concat(e.link,'" target="_blank" class="search-block__link book-read-link">\n                            <span>Ознакомиться</span>\n                            <div class="search-block__border border-1"></div>\n                            <div class="search-block__border border-2"></div>\n                        </a>\n                        <a href="" class="flex book-btn ').concat(e.lib?"remove":"",'">\n                            <img src="icons/add.svg" draggable="false"/>\n                            <img src="icons/remove.svg" draggable="false"/>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        ')}},{key:"events",value:function(){function t(t){if(t.target.closest(".book-btn")){t.preventDefault();var n=t.target.closest(".book-component");e.addOrDelete(n)}}document.querySelectorAll(".books-container").forEach((function(e){e.addEventListener("click",t)}))}},{key:"addOrDelete",value:function(t){var n,r=new RegExp(t.dataset.prefix),o=t.id.replace(r,""),a=t.querySelector(".book-btn"),c=i.list.get(o);c||(c=i.get()[o]),c.lib=!c.lib,c.lib?(i.addToStorage(c),a.classList.add("remove")):(i.removeFromStorage(c),(n=document.getElementById(o))&&n.querySelector(".book-btn").classList.remove("remove")),e.renderLib()}},{key:"renderLib",value:function(){var t=i.get(1),n=document.querySelector(".lib-container"),r="";n.innerHTML="",t.forEach((function(t){r+=e.template(t,"lib-")})),n.insertAdjacentHTML("afterbegin",r)}}],(n=null)&&c(t.prototype,n),r&&c(t,r),e}();s.events();var l=s,u=(n(310),n(121));function d(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){d(a,r,o,i,c,"next",e)}function c(e){d(a,r,o,i,c,"throw",e)}i(void 0)}))}}(new(n.n(u).a)).init();var f=document.querySelector(".search"),p=f.elements["search-input"],b=document.querySelector(".search-container");function g(){return(g=v(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b.innerHTML="",i.list.clear(),'\n        <div class="search-block__loader loader">\n            <div class="search-block__dots flex">\n                <div class="search-block__dot"></div>\n                <div class="search-block__dot"></div>\n                <div class="search-block__dot"></div>\n            </div>\n        </div>\n    ',b.insertAdjacentHTML("afterbegin",'\n        <div class="search-block__loader loader">\n            <div class="search-block__dots flex">\n                <div class="search-block__dot"></div>\n                <div class="search-block__dot"></div>\n                <div class="search-block__dot"></div>\n            </div>\n        </div>\n    '),e.prev=5,e.next=8,o.getList(p.value);case 8:(n=e.sent).items&&0!==n.items.length?(r=h(n.items),b.insertAdjacentHTML("afterbegin",r)):("<h2>Ничего на найдено</h2>",b.insertAdjacentHTML("afterbegin","<h2>Ничего на найдено</h2>")),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0),"<h2>Что-то пошло не так!<br/>Попробуйте позже.</h2>",b.insertAdjacentHTML("afterbegin","<h2>Что-то пошло не так!<br/>Попробуйте позже.</h2>");case 17:b.querySelector(".loader").remove();case 18:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}function h(e){var t="";return e.forEach((function(e){var n=e.id,r=e.volumeInfo,o=r.title,a=r.authors,c=void 0===a?[]:a,s=r.description,u=r.previewLink,d=r.imageLinks,v=void 0===d?{}:d,f={id:n,title:m(o,3),authors:m(c[0]),description:m(s,40),link:u,thumb:v.thumbnail||"",lib:!!JSON.parse(localStorage.getItem("book_storage"))[n]};/[а-я]/gi.test(f.description)&&(t+=l.template(f),i.list.set(f.id,f))})),t}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Отсутствует",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;return(e=e.split(" ")).length>t?e.slice(0,t++).join(" ")+"...":e.join(" ")}l.renderLib(),f.addEventListener("submit",(function(e){return g.apply(this,arguments)}))}});
//# sourceMappingURL=script.js.map