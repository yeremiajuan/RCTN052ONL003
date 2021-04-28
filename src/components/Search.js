import React, { useState } from 'react';

export const Search = ({ searchMovie }) => {

    const [searchValue, setSearchValue] = useState('')

    const handleInput = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }

    const handleSearchMovies = () => {
        searchMovie(searchValue)
        setSearchValue("");
    }

    return (
        <div>
            <input onChange={handleInput}
                placeholder='Search...'
            ></input>
            <button onClick={handleSearchMovies}>Search</button>
        </div>
    );
};

