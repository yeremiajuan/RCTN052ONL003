import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMoviesBySearch } from '../store/actions/movieActions';
import { useSelector, useDispatch } from 'react-redux';


const Search = (props) => {

    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return state;
    })

    const handleInput = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }

    console.log(fetchMoviesBySearch(searchValue));

    const handleSearchMovies = () => {
        fetchMoviesBySearch(searchValue)
    }

    return (
        <div>
            <form >
                <input onChange={handleInput}
                    placeholder='Search...'
                ></input>
                <button onClick={handleSearchMovies}>Search</button>
            </form>
        </div>
    );
};

export default Search;
