var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire709e;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequire709e=n);var l=n("4ukh0");const i=document.getElementById("add-to-watched--btn"),a=document.getElementById("add-to-queue--btn");i.addEventListener("click",(()=>{!function(){const e=JSON.parse(localStorage.getItem("watchedList"))||[];if(e){e.includes(i.value)||(e.push(i.value),localStorage.setItem("watchedList",JSON.stringify(e)))}else e=JSON.stringify([i.value]);console.log("Lista de peliculas vistas: "+e),console.log("valor:  "+i.value)}()})),a.addEventListener("click",(()=>{!function(){const e=JSON.parse(localStorage.getItem("queueList"))||[];if(e){e.includes(a.value)||(e.push(a.value),localStorage.setItem("queueList",JSON.stringify(e)))}else e=JSON.stringify([a.value]);console.log("Lista de peliculas por ver: "+e),console.log("valor:  "+a.value)}()}));const d=document.getElementById("movie-modal--close-btn"),s=document.getElementById("movie-modal");d.addEventListener("click",(()=>{s.style.display="none"})),window.openModal=function(e){document.getElementById("movie-modal").style.display="flex",function(e){const t="https://image.tmdb.org/t/p/",o=e,n="en",d=document.getElementById("movie-modal--image"),s=document.getElementById("movie-modal-title"),r=document.getElementById("movie-modal-votes"),u=document.getElementById("movie-modal-popularity"),c=document.getElementById("movie-modal-original-title"),m=document.getElementById("movie-modal-genre"),g=document.getElementById("movie-modal-about");fetch(`https://api.themoviedb.org/3/movie/${o}?api_key=${l.API_KEY}&language=${n}`).then((e=>e.json())).then((e=>{d.src=`${t}w500${e.poster_path}`,s.textContent=e.title,r.textContent=e.vote_average+" / "+e.vote_count,u.textContent=e.popularity,c.textContent=e.original_title,m.textContent=e.genres,g.textContent=e.overview,i.value=e.id,a.value=e.id})).catch((e=>console.error(e)))}(e)};
//# sourceMappingURL=index.7a9eba5f.js.map
