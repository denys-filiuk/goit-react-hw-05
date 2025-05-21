import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZThkMGI5MTI1MDRiZDVhNDE3NjFlNzFhN2JjOTFkMyIsIm5iZiI6MTc0Nzc2NDQ0OS45NDU5OTk5LCJzdWIiOiI2ODJjYzRlMTU1ZTczZDAzNTNlMjU0YWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.51LBFlBtzhAyoftJIwcZZpL_gemt4LX3Zd9y0DoEWgQ",
    },
  };

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, options)
      .then((response) => setMovies(response.data.results))
      .catch((err) => console.error(err))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Loading trending films</p>}
      <b>Trending today</b>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
