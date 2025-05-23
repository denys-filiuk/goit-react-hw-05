import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieCast from "../../api/fetchMovieCast";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then((data) => setCast(data.cast.slice(0, 10)))
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://via.placeholder.com/100x150?text=No+Image"
              }
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
