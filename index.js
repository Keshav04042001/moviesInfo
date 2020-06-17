//const axios = require('axios');
//const fs = require('fs');
//const path = require('path')
const link = ' https://www.omdbapi.com/?i=tt3896198&apikey=e602044f&r=json&s=';
const link1 = 'https://www.omdbapi.com/?i=';
const link2 = '&apikey=e602044f&r=json';
function Search() {
  let search = document.getElementById('search').value;
  movies(search);
}

function movies(search) {
  document.getElementById('desc').innerHTML="";
  axios
    .get(link + search)
    .then((res) => {
      console.log(res);
      //let movieitem= res;
      if(res.data.Response=="True"){
      let movies = res.data.Search;
      movies.forEach(movieitem => {

        document.getElementById('desc').innerHTML += `<div class="lister"><li><strong>Title</strong>: ${movieitem.Title}<br>Year: ${movieitem.Year}<br>IMDb ID:${movieitem.imdbID}<br><button type="button" id=${movieitem.imdbID} onClick=Click(id)>View More</button><hr></li></div>`;
      });}
      else{
        document.getElementById('desc').innerHTML=`<p style:"text-align"="center">Oops!! Movie not found. Search for English movies and try checking the spelling...</p>`
      }
      
      //document.getElementById('desc').innerHTML=`<p>Title: ${movieitem.data.Title}<br>Actors: ${movieitem.data.Actors}<br>IMDb Rating: ${movieitem.data.Ratings[0].Value}<br>Year of release: ${movieitem.data.Year}<br>Genre: ${movieitem.data.Genre}</p`;
    })
    .catch((err) => {
      console.log(err);
    });

}

function Click(imdb){
  document.getElementById('desc').innerHTML="";
  axios
    .get(link1 + imdb+link2)
    .then((res) => {
      console.log(res);
      let movieitem= res;
      //let movieitem = res.data.Search;
     // movies.forEach(movieitem => {
        document.getElementById('desc').innerHTML += `<form class="clicker"><image src="${movieitem.data.Poster} alt="Poster of the Movie"" height=350px style="align-content: center;"><li><br><strong>Title</strong>: ${movieitem.data.Title}<br><strong>Actors</strong>: ${movieitem.data.Actors}<br><strong>Director</strong>:${movieitem.data.Director}<br><strong>Plot</strong>: ${movieitem.data.Plot}<br><strong>IMDb Rating</strong>: ${movieitem.data.Ratings[0].Value}<br><strong>Awards</strong>:${movieitem.data.Awards}<br><strong>Year of release</strong>: ${movieitem.data.Year}<br><strong>Date of Release</strong>:${movieitem.data.Released}<br><strong>Genre</strong>: ${movieitem.data.Genre}<br><br><br></li></form>`;

      
    })
      .catch((err) => {
        console.log(err);
      });
}
/* To get a table of details when view more is clicked
function Click(imdb){
  document.getElementById('desc').innerHTML="";
  axios
    .get(link1 + imdb+link2)
    .then((res) => {
      console.log(res);
      let movieitem= res;
      //let movieitem = res.data.Search;
     // movies.forEach(movieitem => {
        document.getElementById('desc').innerHTML += `<form class="clicker"><image src="${movieitem.data.Poster}" height=350px style="align-content: center;"><br><table style:"width:80%"><tr><td><strong>Title</strong></td> <td>${movieitem.data.Title}</td></tr><tr><td>Actors</td> <td>${movieitem.data.Actors}</td></tr><tr><td>Director</td><td>${movieitem.data.Director}</td></tr><tr><td>Plot</td> <td>${movieitem.data.Plot}</td></tr><tr><td>IMDb Rating</td> <td>${movieitem.data.Ratings[0].Value}</td></tr><tr><td>Awards</td><td>${movieitem.data.Awards}</td></tr><tr><td>Year of release</td> <td>${movieitem.data.Year}</td></tr><tr><td>Date of Release</td><td>${movieitem.data.Released}</td><tr><td>Genre</td> <td>${movieitem.data.Genre}</td></table><br><br><br></form>`;

      
    })
      .catch((err) => {
        console.log(err);
      });
}*/