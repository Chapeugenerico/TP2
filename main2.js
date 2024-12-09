const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWUzNmJiY2UxZjIxMTAwODM2ZWVjZDVjMTc0N2ViMiIsIm5iZiI6MTczMzU5MTA1OS40NDcsInN1YiI6IjY3NTQ4MDEzYWI2Y2MzYTRjOGZjYjFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5DBa7FQ7Mun-B1dgxuJrp1F06d6pOn7TZ0onx_svbzc'
    }
  };

  document.getElementById("pesquisa").addEventListener("submit", function(event) {
    event.preventDefault();

    const query = document.getElementById("query").value.replace(/\s+/g, '%20');
    let html;

    fetch('https://api.themoviedb.org/3/search/tv?query='+ query +'&include_adult=true&language=pt-BR&page=1', options)
        .then(res => res.json())
        .then(res => {
            for (let i=0; i<3; i++){
                document.getElementById('card'+i).innerHTML = 
                '<img src="http://image.tmdb.org/t/p/original/'+ res.results[i].backdrop_path +'" class="card-img-top mx-auto " alt="...">'+
                ' <div class="card-body">'+
                    '<h5 class="card-title">'+ res.results[i].name +'</h5>'+
                    '<p class="card-text">'+ res.results[i].overview +'</p>'+
                    '</div>'
            };
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
});