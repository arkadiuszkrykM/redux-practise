import React from 'react';

const Movies = props => {
    const { movies } = this.props;
    movies.map((movie) => {
        return (
            <li>
                {movie.detail}
            </li>
        );
    }
}

export default Movies;
