import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getReviews } from 'services/apiMovie';

export default function FilmReviews({ movieId }) {
  const [reviews, setRevievs] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(res => {
      setRevievs(res.data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
}

FilmReviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
