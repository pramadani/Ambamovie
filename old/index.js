const apiKey = '599fc20e9cec3e0900ad833ae5ea5ec4';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Daftar Film Populer:");
    data.results.forEach(film => {
      console.log(`Judul: ${film.title}, Tanggal Rilis: ${film.release_date}`);
      console.log(film)
    });
  })
  .catch(error => console.error('Error:', error));
