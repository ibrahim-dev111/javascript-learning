const Api_key = "api_key=1cf50e6248dc270629e802686245c2c8"
const base_url = "https://api.themoviedb.org/3"
const api_url = base_url + "/discover/movie?sort_by=popularity.desc&"+Api_key
const img_url = "https://image.tmdb.org/t/p/w500"
const search_url = base_url+"/search/movie?"+Api_key

let main = document.getElementById('main')
let formEL = document.getElementById("form")
let search = document.getElementById("search-input")


getmovies(api_url)
 function getmovies(url){
 
    fetch(url).then(response=>response.json()).then(data=>{
        // console.log(data.results);
        showmovies(data.results)
    })



 }



 function showmovies(data){
    main.innerHTML = ''

data.forEach(movie => {
    const  {title , vote_average , overview , poster_path}=movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML=`<div class="movie">
    <img src="${img_url+poster_path}" alt="${title}">

<div class="movie-info">
    <h3>${title}</h3>
    <span class="${getcolor(vote_average)}">${Math.floor(vote_average)}</span>
</div>

<div class="over-view">
    <h2>Over View</h2>
   ${overview}
</div>

</div>`

main.appendChild(movieEl)
    
});

 }




 function getcolor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
 }

 formEL.addEventListener('submit',(e)=>{
    e.preventDefault()
  
   let searchitem = search.value

    if(searchitem){
        getmovies(search_url+"&query="+searchitem)
    }

  
 })

 