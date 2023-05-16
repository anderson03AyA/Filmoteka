import { API_KEY, API_URL, CATEGORIES } from './config';
import { getGenres } from './genres';
import { generatePages } from './pages';
import { MovieCard } from './movieCard';

const ulPages = document.querySelector('.pagination__page');
const searchInput = document.querySelector('.search');
const send = document.querySelector('.send');
const div = document.querySelector('.movies-container');

let currentPage = 1;
let totalPages = 1;
let resultsGenre = [];

const listGenres = getGenres();
listGenres.then(results => {
  resultsGenre = results.genres;
});

async function getMovies(page) {
  const response = await fetch(`${API_URL}${CATEGORIES.querySearch}?api_key=${API_KEY}&query=${searchInput.value}${CATEGORIES.basic}&page=${page}`);
  const data = await response.json();
  return data;
}

function showMovies(data) {
  if (data.results && data.results.length > 0) {
    const movies = data.results;
    totalPages = data.total_pages;
    const li = generatePages(currentPage, totalPages);
    ulPages.innerHTML = li;
    const movieCards = movies.map((movie) => {
      const idGenres = movie.genre_ids;
      const genres = resultsGenre.filter((genre) =>
        idGenres.includes(genre.id)
      );
      return MovieCard({
        id: movie.id,
        title: movie.title,
        releaseYear: movie.release_date,
        posterPath: movie.poster_path,
        genres: genres,
      });
    });
    div.innerHTML = movieCards.join('');
    totalPages = data.total_pages;
  } else {
    console.log('No se encontraron resultados de búsqueda.');
  }
}

async function showMoviesByPage(page) {
  const data = await getMovies(page);
  showMovies(data);
}

send.addEventListener('click', async e => {
  e.preventDefault();
  if (searchInput.value === '') {
    return;
  }
  currentPage = 1;
  await showMoviesByPage(currentPage);
});

document
  .getElementById('pagination__prev-page')
  .addEventListener('click', async () => {
    if (currentPage > 1) {
      currentPage--;
      await showMoviesByPage(currentPage);
    }
  });

document
  .getElementById('pagination__next-page')
  .addEventListener('click', async () => {
    if (currentPage < totalPages) {
      currentPage++;
      await showMoviesByPage(currentPage);
    }
  });

// Definir una función separada para manejar el evento de clic
function handlePageClick(event) {
  if (event.target.tagName === 'LI') {
    const clickedValue = parseInt(event.target.innerText);
    currentPage = clickedValue;
    if (currentPage !== '...') {
      event.stopPropagation();
       showMoviesByPage(currentPage);
    }
  }
}

ulPages.addEventListener('click', handlePageClick); // Agregar el evento de clic actualizado