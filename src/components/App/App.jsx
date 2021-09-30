import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation.jsx';
import { LoaderMore } from 'components/Loader/Loader';
import { ConteinerApp } from './App.styled';

const FilmCard = lazy(() =>
  import('components/FilmCard/FilmCard' /* webpackChunkName: "FilmCard" */),
);
const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPages = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "MoviesPages" */),
);
const NotFound = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
);

export default function App() {
  return (
    <ConteinerApp>
      <Navigation />
      <Suspense fallback={<LoaderMore />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPages />
          </Route>
          <Route path="/movies/:movieId">
            <FilmCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </ConteinerApp>
  );
}
