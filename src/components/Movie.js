import React from 'react'

//http://www.omdbapi.com/?i=tt3896198&apikey=85989b1b

const Movie = (props) => {
    return (
        <>
            <div className="movies">
                {props.movies.Search != undefined ? props.movies.Search.map((movie, index) => (
                    <>
                        <div className='movie'>
                            <p>{movie.Title}</p>
                            <div> <img src={movie.Poster} alt="No Image"></img></div>

                        </div>
                    </>
                )) : <div>{props.movies.Error}</div>}
            </div>
        </>
    )
}

export default Movie