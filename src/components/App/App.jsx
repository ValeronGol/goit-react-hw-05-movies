import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation.jsx';
import { LoaderMore } from 'components/Loader/Loader';
import { ConteinerApp } from './App.styled';

const AsyncFilmCard = lazy(() =>
  import('components/FilmCard/FilmCard' /* webpackChunkName: "FilmCard" */),
);
const AsyncHomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const AsyncMoviesPages = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "MoviesPages" */),
);
const AsyncNotFound = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
);

export default function App() {
  return (
    <ConteinerApp>
      <Navigation />
      <Suspense fallback={<LoaderMore />}>
        <Switch>
          <Route exact path="/" component={AsyncHomePage} />
          <Route exact path="/movies" component={AsyncMoviesPages} />
          <Route path="/movies/:movieId" component={AsyncFilmCard} />
          <Route component={AsyncNotFound} />
        </Switch>
      </Suspense>
    </ConteinerApp>
  );
}
