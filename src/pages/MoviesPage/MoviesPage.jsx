import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./MoviePage.module.css";
import fetchSearchMovies from "../../api/fetchSearchMovies";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setSearchParams({ query: inputValue.trim() });
    setInputValue("");
  };

  useEffect(() => {
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
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={css.input}
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading movies...</p>}

      <MovieList movies={movies} />
    </div>
  );
}
