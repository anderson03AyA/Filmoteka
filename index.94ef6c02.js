const e=document.querySelector(".search");let t=e.value;const n=document.querySelector(".send"),o=document.querySelector(".movies-container");let a=`https://api.themoviedb.org/3/movie/${t}`;const l="/search/movie",s="&language=en-US&include_adult=false";document.getElementById("titulo-pelicula"),document.getElementById("descripcion-pelicula"),document.getElementById("ano-lanzamiento"),document.getElementById("poster-pelicula");let c=1,i=1;async function r(e){try{const t=await fetch(a+`&page=${e}`),n=await t.json();if(console.log(n),n.results&&n.results.length>0){const e=n.results.map((e=>{const t=e.title,n=e.overview,o=e.release_date,a=`https://image.tmdb.org/t/p/w500${e.poster_path}`;return`<div class="photo-card">\n          <div class="info">\n            <p class="info-item">\n              <strong>${t}</strong>\n            </p>\n            <p class="info-item">\n              <strong>${n}</strong>\n            </p>\n            <p class="info-item">\n              <strong>${o}</strong>\n            </p>\n            <a href="${a}" class="gallery">\n              <img src="${a}" alt="" loading="lazy" width="100px" height="100px" />\n            </a>\n          </div>\n        </div>`}));o.innerHTML=e.join(""),i=n.total_pages}else console.log("No se encontraron resultados de búsqueda.")}catch(e){console.log("Ha ocurrido un error:",e)}}function d(){document.getElementById("current-page").textContent=c,document.getElementById("total-pages").textContent=i}n.addEventListener("click",(async n=>{n.preventDefault(),""===e.value?Notify.warning("input invalid"):(t=e.value,a=`https://api.themoviedb.org/3${l}?api_key=9aaec7b70164094369485674dba76f62&query=${t}${s}`,c=1,await r(c),d(),console.log(n))})),document.getElementById("prev-page").addEventListener("click",(async()=>{c>1&&(c--,await r(c),d())})),document.getElementById("next-page").addEventListener("click",(async()=>{c<i&&(c++,await r(c),d())}));
//# sourceMappingURL=index.94ef6c02.js.map
