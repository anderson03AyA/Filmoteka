import { API_KEY } from "./config";
const watchedBtn = document.getElementById('watched-movies--btn');
const div = document.querySelector('.movies-container');

watchedBtn.addEventListener('click', async e => {
    const watchedMoviesList = JSON.parse(localStorage.getItem('watchedList'));
    console.log(watchedMoviesList)
    const movie = watchedMoviesList.forEach(movieID => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=${'en'}`)
            .then(response => response.json())
            .then(data => {
                // img.src = `${baseImageUrl}w500${data.poster_path}`;
                // title.textContent = data.title;
                // votes.textContent = data.vote_average + ' / ' + data.vote_count;
                // popularity.textContent = data.popularity;
                // originalTitle.textContent = data.original_title;
                // genre.textContent = data.genres;
                // about.textContent = data.overview;
                // addToWatchedBtn.value = data.id;
                // addToQueueBtn.value = data.id
                return `
                <div class="photo-card">
                  <div class="info">
                  <a onclick="openModal('${data.id}')" class="info__poster">
                      <img class="info__poster--img" src="${data.moviePoster}" alt="${data.title}" loading="lazy" width="100px" height="100px" id="info__poster--img" />
                    </a>
                    <h3 class="info__title">
                      <strong class="title">${data.title}</strong>
                    </h3>
                    <p class="info__genre">
                      ${data.genreNames} | ${data.releaseYear}
                    </p>
                    <p class="info-item"></p>
                  </div>
                </div>
              `;
              movie += movie;
            })
            .catch(error => console.error(error));
    });
    div.innerHTML = movie;
});