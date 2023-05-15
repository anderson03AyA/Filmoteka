import { event } from 'jquery';
import { getGenres } from './genres';
import { openModal, closeModal } from './movieModal.js';
import { generatePages } from './pages'
import Swal from 'sweetalert2';

const ulPages = document.querySelector('.pagination__page');
const searchInput = document.querySelector('.search');

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
    Swal.fire('Felicidades!', `Se han encontrado ${data.total_results} peliculas`, 'success');

    // Verificar si se encontraron resultados de búsqueda
    if (data.results && data.results.length > 0) {
      // Obtener los resultados de la página actual
      const movies = data.results;
      let indice = 0;
      totalPages = data.total_pages;
      
      //pages style with dots
      const li = generatePages(currentPage, totalPages)
      ulPages.innerHTML = li;

      const movieCards = movies.map(movie => {
        const idGenres = data.results[indice].genre_ids;

        let result = resultsGenre.filter(filtro =>
          idGenres.includes(filtro.id)
        );
        const title = movie.title;
        const releaseYear = movie.release_date;
        const moviePoster = `${baseImageUrl}w500${movie.poster_path}`;

        indice++;
        let resultGenre = result.map(genre => genre.name);
        return `<div class="photo-card">
          <div class="info">
            <a onclick="openModal('${movie.id}')" class="info__poster">
              <img class="info__poster--img" src="${moviePoster}" alt="" loading="lazy" width="100px" height="100px" id= "info__poster--img"/>
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
      Swal.fire(
        'Cuidado!',
        'No se encontraron resultados de búsqueda.',
        'question'
      );
      
    }
  } catch (error) {
    //console.log('Ha ocurrido un error:', error);
    Swal.fire(
      'Cuidado!',
      'Ha ocurrido un error',
      'error'
    );
  }
}

send.addEventListener('click', async e => {
  e.preventDefault();
  if (searchInput.value === '') {
  } else {
    let id = searchInput.value;
    ulPages.value = '';
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
ulPages.removeEventListener('click', handlePageClick); // Remover el evento de clic existente

// Definir una función separada para manejar el evento de clic
function handlePageClick(event) {
  if (event.target.tagName === 'LI') {
    const clickedValue = parseInt(event.target.innerText);
    currentPage = clickedValue;
    console.log(currentPage);
    if (currentPage !== '...') {
      event.stopPropagation();
      getDate(currentPage);
    }
  }
}

ulPages.addEventListener('click', handlePageClick); // Agregar el evento de clic actualizado
