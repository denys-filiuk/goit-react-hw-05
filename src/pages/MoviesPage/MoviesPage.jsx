import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import css from "./MoviePage.module.css";
import fetchSearchMovies from "../../api/fetchSearchMovies";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const changeSearchQuery = (e) => {
    const newQuery = e.target.value;
    const nextSearchParams = new URLSearchParams(searchParams);

    if (newQuery !== "") {
      nextSearchParams.set("query", newQuery);
    } else {
      nextSearchParams.delete("query");
    }
    setSearchParams(nextSearchParams);
  };

  const handleSearch = () => {
    if (!query) return;

    setLoading(true);
    fetchSearchMovies(query)
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        className={css.input}
        onChange={changeSearchQuery}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      {loading && <p>Loading movies...</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title} ({movie.release_date?.slice(0, 4)})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
