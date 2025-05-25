import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </Link>
        </li>
      ))}
    </ul>
  );
}
