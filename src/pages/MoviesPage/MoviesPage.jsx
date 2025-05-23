import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./MoviePage.module.css";
import fetchSearchMovies from "../../api/fetchSearchMovies";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
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
        setMovie(data.results || []);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={css.container}>
      <input type="text" value={query} onChange={changeSearchQuery} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      {loading && <p>Loading movies...</p>}
      <ul>
        {movie.map((m) => (
          <li key={m.id}>
            {m.title} ({m.release_date?.slice(0, 4)})
          </li>
        ))}
      </ul>
    </div>
  );
}
