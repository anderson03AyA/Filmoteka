import { API_KEY } from './config';
import { generatePages } from './pagination';

const queueBtn = document.getElementById('queue-movies--btn');
const queueContainer = document.getElementById('movies-container');
const ulPages = document.querySelector('.pagination__page');
let currentPage = 1;
let totalPages = 1;

queueBtn.addEventListener('click', renderQueueMovies);

function renderQueueMovies() {
  const queueMoviesList = JSON.parse(localStorage.getItem('queueList'));
  let moviesHTML = '';

  const fetchPromises = queueMoviesList.map(movieID => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en`
    ).then(response => response.json());
  });

  const total_pages = queueMoviesListLenght => {
    return queueMoviesListLenght >= 20 ? Math.ceil(queueMoviesListLenght / 20) : 1;
  };

  Promise.all(fetchPromises)
    .then(moviesData => {
      const queueMoviesListLenght = queueMoviesList.length;
      const li = generatePages(currentPage, total_pages(queueMoviesListLenght));
      ulPages.innerHTML = li;


      moviesData.forEach(data => {
        if (data.release_date === '') {
          data.release_date = "Sin año registrado"
        }

        const baseImageUrl = 'https://image.tmdb.org/t/p/';
        const moviePoster = `${baseImageUrl}w500${data.poster_path}`;
        const genreNames = data.genres.map(genre => genre.name).join(' | ');
        const movieHTML = `
        
        <div class="photo-card">
        <div class="info">
        <a onclick="openModal('${data.id}')" class="info__poster">
            <img class="info__poster--img" src="${moviePoster}" alt="${data.title}" loading="lazy" width="100px" height="100px" id="info__poster--img" />
          </a>
          <h3 class="info__title">
            <strong class="title">${data.title}</strong>
          </h3>
          <p class="info__genre">
            ${genreNames} | ${data.release_date}
          </p>
          <p class="info-item"></p>
        </div>
      </div>
        `;
        moviesHTML += movieHTML;
      });

      queueContainer.innerHTML = moviesHTML;
    })
    .catch(error => console.error(error));

  ulPages.addEventListener('click', handlePageClick); // Agregar el evento de clic actualizado


  document
    .getElementById('library__prev-page')
    .addEventListener('click', async () => {
      if (currentPage > 1) {
        currentPage--;
        await fetchMovies(parseInt(currentPage));
        updateCurrentPageText(currentPage);
      }
    });

  document
    .getElementById('library__next-page')
    .addEventListener('click', async () => {
      if (currentPage < totalPages) {
        currentPage++;
        await fetchMovies(parseInt(currentPage));
        updateCurrentPageText(parseInt(currentPage));
      }
    });
  function handlePageClick(event) {
    if (event.target.tagName === 'LI') {
      const clickedValue = event.target.innerText;
      const clickedValueInt = parseInt(clickedValue);
      if (clickedValue === '...') {
      } else {
        currentPage = clickedValueInt;
        event.stopPropagation();
        fetchMovies(currentPage);
      }
    }
  }
  function fetchMovies(currentPage) {
    let moviesHTML = '';
    Promise.all(fetchPromises)
      .then(moviesData => {
        //get all for pagination---------------------
        const watchedMoviesLength = queueMoviesList.length;
        const li = generatePages(currentPage, total_pages(watchedMoviesLength));
        ulPages.innerHTML = li;

        const pageSize = 20; // Tamaño de cada página
        const startIndex = currentPage === 1 ? 0 : (currentPage - 1) * pageSize;
        const endIndex = Math.min(currentPage * pageSize, moviesData.length);

        for (let i = startIndex; i < endIndex; i++) {
          const data = moviesData[i];
          const baseImageUrl = 'https://image.tmdb.org/t/p/';
          const moviePoster = `${baseImageUrl}w500${data.posterPath}`;
          const genreNames = data.genres.map(genre => genre.name).join(' | ');
          const movieHTML = `
            <div class="photo-card">
              <div class="info">
                <a onclick="openModal('${data.id}')" class="info__poster">
                  <img class="info__poster--img" src="${moviePoster}" alt="${data.title}" loading="lazy" width="100px" height="100px" id="info__poster--img" />
                </a>
                <h3 class="info__title">
                  <strong class="title">${data.title}</strong>
                </h3>
                <p class="info__genre">
                  ${genreNames} | ${data.releaseYear}
                </p>
                <p class="info-item"></p>
              </div>
            </div>
          `;
          moviesHTML += movieHTML;
        }

        queueContainer.innerHTML = moviesHTML;
      })
      .catch(error => console.error(error));
  }

  function updateCurrentPageText() {
    const currentPageElement = document.getElementById('current-page');
    currentPageElement.innerText = currentPage;
  }

}
