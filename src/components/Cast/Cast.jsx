import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCastById } from 'services/apiMovie';
import { StyledImg, StyledUl, StyledLi, StyledSpan } from './Cast.styled';

export default function Cast({ movieId, baseImg, noImg }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCastById(movieId).then(res => {
      setCast(res.data.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast && (
        <StyledUl>
          {cast.map(el => {
            return (
              <StyledLi key={el.id}>
                <StyledImg
                  src={
                    el.profile_path
                      ? `${baseImg}${el.profile_path}`
                      : `${noImg}`
                  }
                  alt={el.name}
                />
                <StyledSpan>{el.name}</StyledSpan>
              </StyledLi>
            );
          })}
        </StyledUl>
      )}
      {!cast && <h2>Not Cast</h2>}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
  baseImg: PropTypes.string.isRequired,
  noImg: PropTypes.string.isRequired,
};
