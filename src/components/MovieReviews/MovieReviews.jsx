import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieReviews from "../../api/fetchMovieReviews";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then((data) => setReviews(data.results || []))
      .catch((err) => console.error(err));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>No reviews found.</p>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <strong>Author:</strong> {author}
            </p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
