import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fetchTrendingMovies from "../../api/fetchTrendingMovies";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

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
      <h2>Trending today</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
