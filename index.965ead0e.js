!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,i,o,c){try{var a=t[o](c),l=a.value}catch(t){return void n(t)}a.done?e(l):Promise.resolve(l).then(r,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var c=t.apply(e,r);function a(t){n(c,i,o,a,l,"next",t)}function l(t){n(c,i,o,a,l,"throw",t)}a(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),c=new P(r||[]);return o._invoke=function(t,e,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return I()}for(n.method=i,n.arg=o;;){var c=n.delegate;if(c){var a=k(c,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=s(t,e,n);if("normal"===l.type){if(r=n.done?d:h,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}(t,n,c),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function g(){}function y(){}function m(){}var w={};l(w,o,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(O([])));b&&b!==n&&r.call(b,o)&&(w=b);var _=m.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,o,c,a){var l=s(t[i],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,a)}))}a(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=s(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,c=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=m,l(_,"constructor",m),l(m,"constructor",y),y.displayName=l(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(E.prototype),l(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var c=new E(u(e,n,r,i),o);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},L(_),l(_,a,"Generator"),l(_,o,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return i("end");if(c.tryLoc<=this.prev){var l=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(l&&u){if(this.prev<c.catchLoc)return i(c.catchLoc,!0);if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return i(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return i(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var c,a=(c=t(e)(t(r).mark((function e(){var n,i,o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWFlYzdiNzAxNjQwOTQzNjk0ODU2NzRkYmE3NmY2MiIsInN1YiI6IjY0NTlhOWEyNzdkMjNiMDEzNjVkZDJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KhcKUdwkddD7iZWM02lRSUXeaIlmMwnz5XvQav89l20"}},t.prev=2,t.next=5,fetch("https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=".concat("9aaec7b70164094369485674dba76f62"),n);case 5:return i=t.sent,t.next=8,i.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:t.prev=12,t.t0=t.catch(2),console.error(t.t0);case 15:case"end":return t.stop()}}),e,null,[[2,12]])}))),function(){return c.apply(this,arguments)}),l=document.querySelector(".pagination__page"),u=document.querySelector(".search"),s=u.value,f=document.querySelector(".send"),h=document.querySelector(".movies-container"),p="",d="/search/movie",v="&language=en-US&include_adult=false",g="https://image.tmdb.org/t/p/",y=1,m=1,w=[];function x(t){return b.apply(this,arguments)}function b(){return(b=t(e)(t(r).mark((function e(n){var o,c,a,u,s,f,d,v,x,b,_;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(p," &page=").concat(n));case 3:return o=t.sent,t.next=6,o.json();case 6:if(c=t.sent,console.log(c),c.results&&c.results.length>0){if(a=c.results,u=0,m=c.total_pages,s="",m<10)for(f=0;f<m;f++)s+=f+1===y?'<li class="currentPage"> '.concat(f+1,"</li>"):"<li> ".concat(f+1,"</li>");else if(y>4&&y<=m-4)s+="<li>1</li>",s+="<li>...</li>",s+="<li>".concat(y-2,"</li>"),s+="<li>".concat(y-1,"</li>"),s+='<li  class="currentPage">'.concat(y,"</li>"),s+="<li>".concat(y+1,"</li>"),s+="<li>".concat(y+2,"</li>"),s+="<li>...</li>",s+="<li>".concat(m,"</li>");else if(4==y){for(s+="<li>".concat(y-3,"</li>"),s+="<li>".concat(y-2,"</li>"),s+="<li>".concat(y-1,"</li>"),d=y;d<y+5;d++)s+=d===y?'<li class="currentPage">'.concat(d,"</li>"):"<li>".concat(d,"</li>");s+="<li>...</li>",s+="<li>".concat(m,"</li>")}else if(3==y){for(s+="<li>".concat(y-2,"</li>"),s+="<li>".concat(y-1,"</li>"),v=y;v<y+5;v++)s+=v===y?'<li class="currentPage">'.concat(v,"</li>"):"<li>".concat(v,"</li>");s+="<li>...</li>",s+="<li>".concat(m,"</li>")}else if(2==y){for(s+="<li>".concat(y-1,"</li>"),x=y;x<y+6;x++)s+=x===y?'<li class="currentPage">'.concat(x,"</li>"):"<li>".concat(x,"</li>");s+="<li>...</li>",s+="<li>".concat(m,"</li>")}else if(1==y){for(b=y;b<y+7;b++)s+=b===y?'<li class="currentPage">'.concat(b,"</li>"):"<li>".concat(b,"</li>");s+="<li>...</li>",s+="<li>".concat(m,"</li>")}else if(y+4>m)if(s+="<li>1</li>",s+="<li>...</li>",y===m-3)for(s+="<li>".concat(y-3,"</li>"),s+="<li>".concat(y-2,"</li>"),s+="<li>".concat(y-1,"</li>"),s+='<li class="currentPage">'.concat(y,"</li>"),i=1;i<4;i++)s+="<li>".concat(y+i,"</li>");else if(y===m-2)for(s+="<li>".concat(y-4,"</li>"),s+="<li>".concat(y-3,"</li>"),s+="<li>".concat(y-2,"</li>"),s+="<li>".concat(y-1,"</li>"),s+='<li class="currentPage">'.concat(y,"</li>"),i=1;i<3;i++)s+="<li>".concat(y+i,"</li>");else if(y===m-1)for(s+="<li>".concat(y-5,"</li>"),s+="<li>".concat(y-4,"</li>"),s+="<li>".concat(y-3,"</li>"),s+="<li>".concat(y-2,"</li>"),s+="<li>".concat(y-1,"</li>"),s+='<li class="currentPage">'.concat(y,"</li>"),i=1;i<2;i++)s+="<li>".concat(y+i,"</li>");else if(y===m)for(s+="<li>".concat(y-6,"</li>"),s+="<li>".concat(y-5,"</li>"),s+="<li>".concat(y-4,"</li>"),s+="<li>".concat(y-3,"</li>"),s+="<li>".concat(y-2,"</li>"),s+="<li>".concat(y-1,"</li>"),s+='<li class="currentPage">'.concat(y,"</li>"),i=1;i<1;i++)s+="<li>".concat(y+i,"</li>");l.innerHTML=s,_=a.map((function(t){var e=c.results[u].genre_ids,n=w.filter((function(t){return e.includes(t.id)}));console.log(n);var r=t.title,i=t.release_date,o="".concat(g,"w500").concat(t.poster_path);u++;var a=n.map((function(t){return t.name}));return'<div class="photo-card">\n          <div class="info">\n            <a href="'.concat(o,'" class="info__poster">\n              <img class="info__poster--img" src="').concat(o,'" alt="" loading="lazy" width="100px" height="100px" />\n            </a>\n              <h3 class="info__title">\n              <strong class="title">').concat(r,'</strong>\n            </h3>\n            <p class="info__genre">\n              ').concat(a,"\n               |\n               ").concat(i,'\n            </p>\n            <p class="info-item">\n             \n            </p>\n          \n          </div>\n        </div>')})),h.innerHTML=_.join(""),m=c.total_pages}else console.log("No se encontraron resultados de búsqueda.");t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Ha ocurrido un error:",t.t0);case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}a().then((function(t){w=t.genres,console.log(w)})),f.addEventListener("click",function(){var n=t(e)(t(r).mark((function e(n){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==u.value){t.next=5;break}t.next=12;break;case 5:return l.value="",li="",s=u.value,p="https://api.themoviedb.org/3".concat(d,"?api_key=").concat("9aaec7b70164094369485674dba76f62","&query=").concat(s).concat(v),y=1,t.next=12,x(y);case 12:case"end":return t.stop()}}),e)})));return function(t){return n.apply(this,arguments)}}()),document.getElementById("pagination__prev-page").addEventListener("click",t(e)(t(r).mark((function e(){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(y>1)){t.next=4;break}return y--,t.next=4,x(y);case 4:case"end":return t.stop()}}),e)})))),document.getElementById("pagination__next-page").addEventListener("click",t(e)(t(r).mark((function e(){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(y<m)){t.next=4;break}return y++,t.next=4,x(y);case 4:case"end":return t.stop()}}),e)}))))}();
//# sourceMappingURL=index.965ead0e.js.map
