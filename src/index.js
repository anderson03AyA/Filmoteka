const searchInput = document.querySelector('.search');
let id = searchInput.value;
const send = document.querySelector('.send');
const div = document.querySelector('.movies-container');

const API_KEY = '9aaec7b70164094369485674dba76f62';
let API_URL = `https://api.themoviedb.org/3/movie/${id}`;

const CATEGORIES = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  genre: '/genre/movie/list',
  basic: '&language=en-US&include_adult=false',
};

const baseImageUrl = 'https://image.tmdb.org/t/p/';

const TITLE = document.getElementById('titulo-pelicula');
const OVERVIEW = document.getElementById('descripcion-pelicula');
const LANZAMIENTO = document.getElementById('ano-lanzamiento');
const POSTER_PELICULA = document.getElementById('poster-pelicula');

let currentPage = 1;
let totalPages = 1;
const resultsPerPage = 20;

async function getDate(page) {
  try {
    const response = await fetch(API_URL + `&page=${page}`);
    const data = await response.json();

    console.log(data);

    // Verificar si se encontraron resultados de búsqueda
    if (data.results && data.results.length > 0) {
      // Obtener los resultados de la página actual
      const movies = data.results;

      const movieCards = movies.map((movie) => {
        const title = movie.title;
        const description = movie.overview;
        const releaseYear = movie.release_date;
        const moviePoster = `${baseImageUrl}w500${movie.poster_path}`;

        return `<div class="photo-card">
          <div class="info">
            <p class="info-item">
              <strong>${title}</strong>
            </p>
            <p class="info-item">
              <strong>${description}</strong>
            </p>
            <p class="info-item">
              <strong>${releaseYear}</strong>
            </p>
            <a href="${moviePoster}" class="gallery">
              <img src="${moviePoster}" alt="" loading="lazy" width="100px" height="100px" />
            </a>
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

function updatePagination() {
  // Actualizar estado de la paginación
  document.getElementById('current-page').textContent = currentPage;
  document.getElementById('total-pages').textContent = totalPages;
}

send.addEventListener('click', async (e) => {
  e.preventDefault();
  if (searchInput.value === '') {
    Notify.warning('input invalid');
  } else {
    id = searchInput.value;
    API_URL = `https://api.themoviedb.org/3${CATEGORIES.querySearch}?api_key=${API_KEY}&query=${id}${CATEGORIES.basic}`;
    currentPage = 1;
    await getDate(currentPage);
    updatePagination();
    console.log(e);
  }
});

document.getElementById('prev-page').addEventListener('click', async () => {
  if (currentPage > 1) {
    currentPage--;
    await getDate(currentPage);
    updatePagination();
  }
});
document.getElementById('next-page').addEventListener('click', async () => {
  if (currentPage < totalPages) {
    currentPage++;
    await getDate(currentPage);
    updatePagination();
  }
});
