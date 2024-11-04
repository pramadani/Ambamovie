const apiKey = '599fc20e9cec3e0900ad833ae5ea5ec4';
const movieId = 1079091; // ID film "It Ends with Us"
const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Daftar Review:");
    data.results.forEach(review => {
      console.log(`Judul: ${review.author}, Isi: ${review.content}`);
      console.log(review)
    });
  })
  .catch(error => console.error('Error:', error));
