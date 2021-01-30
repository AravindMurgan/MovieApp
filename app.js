const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e815796d239f75cab847d11e2e0b469d&page=3';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=e815796d239f75cab847d11e2e0b469d&query="';

//form and search input//
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
///Get the initial movies
getData(API);

async function getData(url){

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    showMovies(data.results);
}

function showMovies(movies){

    movies.forEach((movie)=>{
        //data from API//
        const {backdrop_path,title,overview,release_date,vote_average,original_language} = movie

        //movie div//
        let movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            
                    <img src="${IMG_PATH + backdrop_path}" alt="">
                    <div class="movie-info">
                        <div class="title">${title}</div>
                        <span class="${getRatingColor(vote_average)}">${vote_average}</span>
                    </div>
                    <div class="overview">
                        <h3>overview</h3>
                        <p>Release Date : ${release_date}</p>
                        <p>Language : ${original_language}</p>
                        ${overview}
                    </div>`
              main.insertAdjacentElement("afterbegin",movieEl)     
       })
      

}    

function getRatingColor(vote){

    if(vote >= 8){
        return 'green'
    }
    if(vote >=5){
        return 'orange'
    }else{
        return 'red'
    }
}
    

///Form Event Listener//
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let searchItem = search.value;

   if(searchItem && searchItem.value !==''){

    getData(SEARCH_URL + searchItem);
   }else{
       window.location.reload();
   }
})




