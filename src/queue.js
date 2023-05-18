import { API_KEY } from './config';
const queueBtn = document.getElementById('queue-movies--btn');
const queueContainer = document.getElementById('movies-container');
queueBtn.addEventListener('click', renderQueueMovies);
function renderQueueMovies() {
  const queueMoviesList = JSON.parse(localStorage.getItem('queueList'));
  let moviesHTML = '';

  const fetchPromises = queueMoviesList.map(movieID => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en`
    ).then(response => response.json());
  });

  Promise.all(fetchPromises)
    .then(moviesData => {
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
}
