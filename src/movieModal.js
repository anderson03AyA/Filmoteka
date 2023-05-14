import { myValue } from "./key"; './key'

const addToWatchedBtn = document.getElementById('add-to-watched--btn');
const addToQueueBtn = document.getElementById('add-to-queue--btn');
addToWatchedBtn.addEventListener('click', ()=>{
    addToWatched()
})

addToQueueBtn.addEventListener('click', ()=>{
    addToQueue()
})
const btnCloseModal = document.getElementById('movie-modal--close-btn');
const modal = document.getElementById('movie-modal');
btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.openModal = function (movie) {
    
    const modal = document.getElementById('movie-modal');
    modal.style.display = 'flex';
    obtainMovieData(movie)
  
}

function obtainMovieData (movieID) {
    const baseImageUrl = 'https://image.tmdb.org/t/p/';
    const apiKey = myValue; 
    const movieId = movieID; // ID de la película que deseas buscar
    const language = 'en'; // Idioma en el que deseas recibir la respuesta

    const img = document.getElementById('movie-modal--image');
    const title = document.getElementById('movie-modal-title');
    const votes = document.getElementById('movie-modal-votes');
    const popularity = document.getElementById('movie-modal-popularity');
    const originalTitle = document.getElementById('movie-modal-original-title');
    const genre = document.getElementById('movie-modal-genre');
    const about = document.getElementById('movie-modal-about');


fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${language}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    img.src = `${baseImageUrl}w500${data.poster_path}`;
    title.textContent = data.title;
    votes.textContent = data.vote_average + ' / ' + data.vote_count;
    popularity.textContent = data.popularity;
    originalTitle.textContent = data.original_title;
    genre.textContent = data.genres;
    about.textContent = data.overview;
    addToWatchedBtn.value = data.id;
    addToQueueBtn.value = data.id;
  })
  .catch(error => console.error(error));
} 
function addToWatched(){
    const watchedList = JSON.parse(localStorage.getItem('watchedList')) || [];
    
    if(!watchedList){
        watchedList = JSON.stringify([addToWatchedBtn.value]);
    }else{
       const idExists = watchedList.includes(addToWatchedBtn.value)
       if (!idExists) {
        watchedList.push(addToWatchedBtn.value);
        localStorage.setItem('watchedList', JSON.stringify(watchedList));
      }
    }
    console.log('Lista de peliculas vistas: '+ watchedList)
    console.log('valor:  '+ addToWatchedBtn.value)
    // localStorage.clear()
   
}
function addToQueue(){
    const queueList = JSON.parse(localStorage.getItem('queueList')) || [];
    
    if(!queueList){
        queueList = JSON.stringify([addToQueueBtn.value]);
    }else{
       const idExists = queueList.includes(addToQueueBtn.value)
       if (!idExists) {
        queueList.push(addToQueueBtn.value);
        localStorage.setItem('queueList', JSON.stringify(queueList));
      }
    }
    console.log('Lista de peliculas por ver: '+ queueList)
    console.log('valor:  '+ addToQueueBtn.value)
    // localStorage.clear()
}





