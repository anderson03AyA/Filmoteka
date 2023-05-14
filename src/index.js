import { getGenres } from './genres';

const ulPages = document.querySelector('.pagination__page');
const searchInput = document.querySelector('.search');
let id = searchInput.value;
const send = document.querySelector('.send');
const div = document.querySelector('.movies-container');

const API_KEY = '9aaec7b70164094369485674dba76f62';
let API_URL = '';

const CATEGORIES = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  genre: '/genre/movie/list',
  basic: '&language=en-US&include_adult=false',
};

const baseImageUrl = 'https://image.tmdb.org/t/p/';

let currentPage = 1;
let totalPages = 1;
let resultsGenre = [];

const listGenres = getGenres();
listGenres.then(results => {
  resultsGenre = results.genres;
  console.log(resultsGenre);
});

async function getDate(page) {
  try {
    const response = await fetch(`${API_URL} &page=${page}`);
    const data = await response.json();

    console.log(data);

    // Verificar si se encontraron resultados de búsqueda
    if (data.results && data.results.length > 0) {
      // Obtener los resultados de la página actual
      const movies = data.results;
      let indice = 0;
      totalPages = data.total_pages;
      let li = ``;
      //pages style with dots
      if (totalPages < 10) {
        for (let i = 0; i < totalPages; i++) {
          li += `<li> ${i + 1}</li>`;
        }
      } else {
        //for handle dots
        if (currentPage > 4) {
          //page start
          li += `<li>1</li>`;
          li += `<li>...</li>`;
          //2 antes del page
          li += `<li>${currentPage - 2}</li>`;
          li += `<li>${currentPage - 1}</li>`;
          //page current
          li += `<li  class="currentPage">${currentPage}</li>`;
          //next2 page
          li += `<li>${currentPage + 1}</li>`;
          li += `<li>${currentPage + 2}</li>`;
          li += `<li>...</li>`;
          //page end
          li += `<li>${totalPages}</li>`;
        } else if (currentPage == 4) {
          li += `<li>${currentPage - 3}</li>`;
          li += `<li>${currentPage - 2}</li>`;
          li += `<li>${currentPage - 1}</li>`;
          for (let i = currentPage; i < currentPage + 5; i++) {
            if (i === currentPage) {
              li += `<li class="currentPage">${i}</li>`;
            } else {
              li += `<li>${i}</li>`;
            }
          }
          li += `<li>...</li>`;
          //page end
          li += `<li>${totalPages}</li>`;
        } else if (currentPage == 3) {
          li += `<li>${currentPage - 2}</li>`;
          li += `<li>${currentPage - 1}</li>`;
          for (let i = currentPage; i < currentPage + 5; i++) {
            if (i === currentPage) {
              li += `<li class="currentPage">${i}</li>`;
            } else {
              li += `<li>${i}</li>`;
            }
          }
          li += `<li>...</li>`;
          //page end
          li += `<li>${totalPages}</li>`;
        } else if (currentPage == 2) {
          li += `<li>${currentPage - 1}</li>`;
          for (let i = currentPage; i < currentPage + 6; i++) {
            if (i === currentPage) {
              li += `<li class="currentPage">${i}</li>`;
            } else {
              li += `<li>${i}</li>`;
            }
          }
          li += `<li>...</li>`;
          //page end
          li += `<li>${totalPages}</li>`;
        } else if (currentPage == 1) {
          for (let i = currentPage; i < currentPage + 7; i++) {
            if (i === currentPage) {
              li += `<li class="currentPage">${i}</li>`;
            } else {
              li += `<li>${i}</li>`;
            }
          }
          li += `<li>...</li>`;
          //page end
          li += `<li>${totalPages}</li>`;
        }
      }
      //page Styles dots End
      if (currentPage + 4 > totalPages) {
        li += `<li>1</li>`;
        li += `<li>...</li>`;

        if (currentPage === totalPages - 3) {
          li += `<li>${currentPage - 3}</li>`;
          li += `<li>${currentPage - 2}</li>`;
          li += `<li>${currentPage - 1}</li>`;

          li += `<li class="currentPage">${currentPage}</li>`;

          for (i = 1; i < 4; i++) {
            li += `<li>${currentPage + i}</li>`;
          }
        } else if (currentPage === totalPages - 2) {
          li += `<li>${currentPage - 4}</li>`;
          li += `<li>${currentPage - 3}</li>`;
          li += `<li>${currentPage - 2}</li>`;
          li += `<li>${currentPage - 1}</li>`;

          li += `<li class="currentPage">${currentPage}</li>`;

          for (i = 1; i < 3; i++) {
            li += `<li>${currentPage + i}</li>`;
          }
        } else if (currentPage === totalPages - 1) {
          li += `<li>${currentPage - 5}</li>`;
          li += `<li>${currentPage - 4}</li>`;
          li += `<li>${currentPage - 3}</li>`;
          li += `<li>${currentPage - 2}</li>`;
          li += `<li>${currentPage - 1}</li>`;

          li += `<li class="currentPage">${currentPage}</li>`;

          for (i = 1; i < 2; i++) {
            li += `<li>${currentPage + i}</li>`;
          }
        } else if (currentPage === totalPages) {
          li += `<li>${currentPage - 6}</li>`;
          li += `<li>${currentPage - 5}</li>`;
          li += `<li>${currentPage - 4}</li>`;
          li += `<li>${currentPage - 3}</li>`;
          li += `<li>${currentPage - 2}</li>`;
          li += `<li>${currentPage - 1}</li>`;

          li += `<li class="currentPage">${currentPage}</li>`;

          for (i = 1; i < 1; i++) {
            li += `<li>${currentPage + i}</li>`;
          }
        }
      }

      ulPages.innerHTML = li;

      const movieCards = movies.map(movie => {
        const idGenres = data.results[indice].genre_ids;

        let result = resultsGenre.filter(filtro =>
          idGenres.includes(filtro.id)
        );
        console.log(result);

        const title = movie.title;
        const releaseYear = movie.release_date;
        const moviePoster = `${baseImageUrl}w500${movie.poster_path}`;

        indice++;
        let resultGenre = result.map(genre => genre.name);
        return `<div class="photo-card">
          <div class="info">
            <a href="${moviePoster}" class="info__poster">
              <img class="info__poster--img" src="${moviePoster}" alt="" loading="lazy" width="100px" height="100px" />
            </a>
              <h3 class="info__title">
              <strong class="title">${title}</strong>
            </h3>
            <p class="info__genre">
              ${resultGenre}
               |
               ${releaseYear}
            </p>
            <p class="info-item">
             
            </p>
          
          </div>
        </div>`;
      });

      div.innerHTML = movieCards.join('');

      totalPages = data.total_pages;
    } else {
      // No se encontraron resultados de búsqueda
      console.log('No se encontraron resultados de búsqueda.');
    }
  } catch (error) {
    console.log('Ha ocurrido un error:', error);
  }
}


send.addEventListener('click', async e => {
  e.preventDefault();
  if (searchInput.value === '') {
  } else {
    ulPages.value=""
    li = ""
    id = searchInput.value;
    API_URL = `https://api.themoviedb.org/3${CATEGORIES.querySearch}?api_key=${API_KEY}&query=${id}${CATEGORIES.basic}`;
    currentPage = 1;
    await getDate(currentPage);
  }
});

document
  .getElementById('pagination__prev-page')
  .addEventListener('click', async () => {
    if (currentPage > 1) {
      currentPage--;
      await getDate(currentPage);
    }
  });
document
  .getElementById('pagination__next-page')
  .addEventListener('click', async () => {
    if (currentPage < totalPages) {
      currentPage++;
      await getDate(currentPage);
    }
  });
