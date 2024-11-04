const apiKey = '599fc20e9cec3e0900ad833ae5ea5ec4';
const movieId = 1079091; // ID film "It Ends with Us"
const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Detail Film:");
    console.log(`Judul: ${data.title}`);
    console.log(`Tanggal Rilis: ${data.release_date}`);
    console.log(`Rating: ${data.vote_average}`);
    console.log(`Overview: ${data.overview}`);
    console.log(`Poster: https://image.tmdb.org/t/p/w500${data.poster_path}`);
    console.log(data)
  })
  .catch(error => console.error('Error:', error));
