import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchTrendingMovies from "../../api/fetchTrendingMovies";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.error(err))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Loading trending films</p>}
      <b>Trending today</b>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
