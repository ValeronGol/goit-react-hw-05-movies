import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { getMovieById } from 'services/apiMovie';
import { LoaderMore } from 'components/Loader/Loader';
import {
  MovieDetailes,
  StyledImg,
  StyledBtn,
  StyledP,
  StyledLi,
  StyledLink,
  StyledUl,
} from './FilmCard.styled';

const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName: "Cast" */),
);
const FilmReviews = lazy(() =>
  import(
    'components/FilmReviews/FilmReviews' /* webpackChunkName: "FilmReviews" */
  ),
);

export default function FilmCard() {
  const [film, setFilm] = useState(null);

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  const imgNotFound =
    'https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg';

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(res => setFilm(res.data));
  }, [movieId]);

  const onGoBackClick = () => {
    history.push(location.state?.from ? location.state.from : '/');
  };

  const dateNormalize = date => {
    return date.slice(0, -6);
  };

  const genresNormalize = genres => {
    return genres
      .map(genre => {
        return genre.name;
      })
      .join(', ');
  };

  return (
    <>
      {film && (
        <StyledBtn type="button" onClick={onGoBackClick}>
          Go Back
        </StyledBtn>
      )}
      {film && (
        <MovieDetailes>
          <StyledImg
            src={
              film.poster_path
                ? `${imgBaseUrl}${film.poster_path}`
                : imgNotFound
            }
            alt={film.original_title}
          />
          <div>
            <h1>
              {film.original_title} ({dateNormalize(film.release_date)})
            </h1>
            <StyledP>User Score: {film.vote_average}</StyledP>
            <h2>Overview</h2>
            <StyledP>{film.overview}</StyledP>
            {film.genres && (
              <>
                <h3>Genres</h3>
                <StyledP>{genresNormalize(film.genres)}</StyledP>
              </>
            )}
          </div>
        </MovieDetailes>
      )}

      <div>
        <h4>Additional informatiom</h4>
        <StyledUl>
          <StyledLi>
            <StyledLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from },
              }}
            >
              Cast
            </StyledLink>
          </StyledLi>
          <li>
            <StyledLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from },
              }}
            >
              Reviews
            </StyledLink>
          </li>
        </StyledUl>
      </div>
      <Suspense fallback={<LoaderMore />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} baseImg={imgBaseUrl} noImg={imgNotFound} />
          </Route>
          <Route path={`${path}/reviews`}>
            <FilmReviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
