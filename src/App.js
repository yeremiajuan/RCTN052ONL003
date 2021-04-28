import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchMoviesBySearch } from "./store/actions/movieActions";
import Movie from './components/Movie';
import Search from './components/Search';


const App = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("man")
  const state = useSelector((state) => {
    return state;
  })

  useEffect(() => {
    dispatch(fetchMoviesBySearch(searchValue));
  }, [])

  return (
    <div>
      <div className='row'>
        <Movie movies={state.movies} />
        <Search />
      </div>
    </div >
  )
}

export default App;