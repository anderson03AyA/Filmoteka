(async()=>{const e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWFlYzdiNzAxNjQwOTQzNjk0ODU2NzRkYmE3NmY2MiIsInN1YiI6IjY0NTlhOWEyNzdkMjNiMDEzNjVkZDJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KhcKUdwkddD7iZWM02lRSUXeaIlmMwnz5XvQav89l20"}};try{const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",e);return await t.json()}catch(e){console.error(e)}})().then((e=>{resultsGenre=e.genres,console.log(resultsGenre)}));const e=document.querySelector(".search");let t=e.value;const n=document.querySelector(".send"),a=document.querySelector(".movies-container"),s="/search/movie",o="&language=en-US&include_adult=false";let l=1,i=1;async function r(e){try{const t=await fetch(`${API_URL} &page=${e}`),n=await t.json();if(console.log(n),n.results&&n.results.length>0){const e=n.results;let t=0;const s=e.map((e=>{const a=n.results[t].genre_ids;let s=resultsGenre.filter((e=>a.includes(e.id)));console.log(s);const o=e.title,l=e.release_date,i=`https://image.tmdb.org/t/p/w500${e.poster_path}`;return t++,`<div class="photo-card">\n          <div class="info">\n            <p class="info-item">\n              <strong>${o}</strong>\n            </p>\n              <p class="info-item">\n              <strong>${o}</strong>\n            </p>\n            <p class="info-item">\n              <strong>${s.map((e=>e.name))}</strong>\n            </p>\n            <p class="info-item">\n              <strong>${l}</strong>\n            </p>\n            <a href="${i}" class="gallery">\n              <img src="${i}" alt="" loading="lazy" width="100px" height="100px" />\n            </a>\n          </div>\n        </div>`}));a.innerHTML=s.join(""),i=n.total_pages}else console.log("No se encontraron resultados de búsqueda.")}catch(e){console.log("Ha ocurrido un error:",e)}}function c(){document.getElementById("current-page").textContent=l,document.getElementById("total-pages").textContent=i}n.addEventListener("click",(async n=>{n.preventDefault(),""===e.value?Notify.warning("input invalid"):(t=e.value,API_URL=`https://api.themoviedb.org/3${s}?api_key=9aaec7b70164094369485674dba76f62&query=${t}${o}`,l=1,await r(l),c())})),document.getElementById("prev-page").addEventListener("click",(async()=>{l>1&&(l--,await r(l),c())})),document.getElementById("next-page").addEventListener("click",(async()=>{l<i&&(l++,await r(l),c())}));
//# sourceMappingURL=index.d1c15fae.js.map
