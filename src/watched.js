import { API_KEY } from "./config";
const watchedBtn = document.getElementById('watched-movies--btn');
const watchedContainer = document.getElementById('movies-container');
watchedBtn.addEventListener('click', renderWatchedMovies);
function renderWatchedMovies() {
  const watchedMoviesList = JSON.parse(localStorage.getItem('watchedList'));
  let moviesHTML = '';

  const fetchPromises = watchedMoviesList.map(movieID => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en`)
      .then(response => response.json());
  });

  Promise.all(fetchPromises)
    .then(moviesData => {
      moviesData.forEach(data => {
        const baseImageUrl = 'https://image.tmdb.org/t/p/';
        const moviePoster = `${baseImageUrl}w500${data.posterPath}`;
        const genreNames = data.genres.map((genre) => genre.name).join(' | ');
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
      });

      watchedContainer.innerHTML = moviesHTML;
    })
    .catch(error => console.error(error));
}