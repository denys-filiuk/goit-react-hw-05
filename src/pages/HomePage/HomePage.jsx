import { useEffect, useState } from "react";
import fetchTrendingMovies from "../../api/fetchTrendingMovies";
import MovieList from "../../components/MovieList/MovieList";

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
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
}
