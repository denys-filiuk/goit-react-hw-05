import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZThkMGI5MTI1MDRiZDVhNDE3NjFlNzFhN2JjOTFkMyIsIm5iZiI6MTc0Nzc2NDQ0OS45NDU5OTk5LCJzdWIiOiI2ODJjYzRlMTU1ZTczZDAzNTNlMjU0YWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.51LBFlBtzhAyoftJIwcZZpL_gemt4LX3Zd9y0DoEWgQ",
  },
};

export default function fetchTrendingMovies() {
  return axios.get(url, options).then((response) => response.data.results);
}

