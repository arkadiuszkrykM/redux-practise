import React from 'react';
import './MostPopular.css';
import Movie from './Movies';

const DataBox = props => {
    const { data } = props;
    const list = data.map((movie) => (
        <Movie
            movie={movie}
            key={movie.id}
        />
    ));
    return (
        <div className="box">
        tutaj bedzie widget
            <ul className="movie">
                {list}
            </ul>
        </div>
    );
}

export default DataBox;
