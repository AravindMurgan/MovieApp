const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e815796d239f75cab847d11e2e0b469d&page=3';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500' + API.backdrop_path;

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=e815796d239f75cab847d11e2e0b469d&query="';

//form and search input//
const form = document.getElementById('form');
const search = document.getElementById('search');

///Get the initial movies
getData(API);

async function getData(url){

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

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




