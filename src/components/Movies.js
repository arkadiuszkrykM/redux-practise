import React from 'react';

const Movie = props => {
    const { movie: { title, release_date, vote_average, poster_path } } = props;
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} width="120" height="170" />
        </li>
    )};

export default Movie;
