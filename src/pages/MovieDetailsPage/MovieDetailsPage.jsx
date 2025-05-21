import { useEffect, useState } from "react";
import fetchMovieDetails from "../../api/fetchMovieDetails";
import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMovieDetails(movieId)
      .then((data) => setMovie(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (!movie) {
    return <p>No movie details found.</p>;
  }

  return (
    <div className={css.container}>
      <img
        className={css.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`poster ${movie.title}`}
      />
      <div className={css.textBlock}>
        <h2>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h2>
        <p>User score: {Math.round(movie.vote_average * 10)}%</p>
        <div>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(" ")}</p>
        </div>
      </div>
    </div>
  );
}
