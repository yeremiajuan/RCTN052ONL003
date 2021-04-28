import React from 'react'

//http://www.omdbapi.com/?i=tt3896198&apikey=85989b1b

const Movie = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className=''>
                    <img src={movie.Poster} alt="movie"></img>
                </div>
            ))}
        </>
    )
}

export default Movie