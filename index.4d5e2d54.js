const e=document.querySelector(".ul-pages"),l=document.querySelector(".search");let t=l.value;const i=document.querySelector(".send"),n=document.querySelector(".movies-container");let a="";const s="/search/movie",o="&language=en-US&include_adult=false";let c=1,r=1;let d=[];async function g(l){try{const t=await fetch(`${a} &page=${l}`),i=await t.json();if(console.log(i),i.results&&i.results.length>0){const l=i.results;let t=0;r=i.total_pages;let a="";if(r<10)for(let e=0;e<r;e++)a+=`<li> ${e+1}</li>`;else if(c>=4)a+="<li>1</li>",a+="<li>...</li>",a+=`<li>${c-2}</li>`,a+=`<li>${c-1}</li>`,a+=`<li  class="currentPage">${c}</li>`,a+=`<li>${c+1}</li>`,a+=`<li>${c+2}</li>`,a+="<li>...</li>",a+=`<li>${r}</li>`;else if(3==c){a+=`<li>${c-2}</li>`,a+=`<li>${c-1}</li>`;for(let e=c;e<c+5;e++)a+=e===c?`<li class="currentPage">${e}</li>`:`<li>${e}</li>`;a+="<li>...</li>",a+=`<li>${r}</li>`}else if(2==c){a+=`<li>${c-1}</li>`;for(let e=c;e<c+6;e++)a+=e===c?`<li class="currentPage">${e}</li>`:`<li>${e}</li>`;a+="<li>...</li>",a+=`<li>${r}</li>`}else if(1==c){for(let e=c;e<c+7;e++)a+=e===c?`<li class="currentPage">${e}</li>`:`<li>${e}</li>`;a+="<li>...</li>",a+=`<li>${r}</li>`}e.innerHTML=a;const s=l.map((e=>{const l=i.results[t].genre_ids;let n=d.filter((e=>l.includes(e.id)));console.log(n);const a=e.title,s=e.release_date,o=`https://image.tmdb.org/t/p/w500${e.poster_path}`;return t++,`<div class="photo-card">\n          <div class="info">\n            <a href="${o}" class="info__poster">\n              <img class="info__poster--img" src="${o}" alt="" loading="lazy" width="100px" height="100px" />\n            </a>\n              <h3 class="info__title">\n              <strong class="title">${a}</strong>\n            </h3>\n            <p class="info__genre">\n              ${n.map((e=>e.name))}\n               |\n               ${s}\n            </p>\n            <p class="info-item">\n             \n            </p>\n          \n          </div>\n        </div>`}));n.innerHTML=s.join(""),r=i.total_pages}else console.log("No se encontraron resultados de búsqueda.")}catch(e){console.log("Ha ocurrido un error:",e)}}function u(){document.getElementById("current-page").textContent=c,document.getElementById("total-pages").textContent=r}(async()=>{const e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWFlYzdiNzAxNjQwOTQzNjk0ODU2NzRkYmE3NmY2MiIsInN1YiI6IjY0NTlhOWEyNzdkMjNiMDEzNjVkZDJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KhcKUdwkddD7iZWM02lRSUXeaIlmMwnz5XvQav89l20"}};try{const l=await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=9aaec7b70164094369485674dba76f62",e);return await l.json()}catch(e){console.error(e)}})().then((e=>{d=e.genres,console.log(d)})),i.addEventListener("click",(async e=>{e.preventDefault(),""===l.value||(t=l.value,a=`https://api.themoviedb.org/3${s}?api_key=9aaec7b70164094369485674dba76f62&query=${t}${o}`,c=1,await g(c),u())})),document.getElementById("pagination__prev-page").addEventListener("click",(async()=>{c>1&&(c--,await g(c),u())})),document.getElementById("pagination__next-page").addEventListener("click",(async()=>{c<r&&(c++,await g(c),u())}));
//# sourceMappingURL=index.4d5e2d54.js.map
