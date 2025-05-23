import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./MoviePage.module.css";

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

  useEffect(() => {
    console.log({ query });
  }, [query]);

  return (
    <div className={css.container}>
      <input type="text" value={query} onChange={changeSearchQuery} />
      <button type="submit">Search</button>
      {loading && <p>Loading movies</p>}
    </div>
  );
}
