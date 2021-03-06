import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'services/apiMovie';
import FilmList from '../components/FilmList/FilmList';

export default function HomePage() {
  const [trendFilms, setTrendFilms] = useState([]);
  useEffect(() => {
    getTrendingMovie().then(res => {
      setTrendFilms(res.data.results);
    });
  }, []);
  return (
    <>
      <h1>Trends of the week</h1>
      <FilmList content={trendFilms} path="/movies" />
    </>
  );
}
