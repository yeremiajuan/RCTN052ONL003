import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchMoviesBySearch } from "./store/actions/movieActions";
import Movie from './components/Movie';
import { Search } from './components/Search';
import Header from './components/Header';
import './App.css';


const App = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("man")
  const state = useSelector((state) => {
    return state;
  })

  const searchMovie = (x) => {
    dispatch(fetchMoviesBySearch(x));
    console.log("move")
  };

  useEffect(() => {
    dispatch(fetchMoviesBySearch(searchValue));
  }, [])

  return (
    <div className="App">
      <Header heading="FinProH8" searchMovie={searchMovie} />
      <Movie movies={state.movies} />
    </div >
  )
}

export default App;