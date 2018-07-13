import React from 'react';

const Upcoming = props => {
    return (
        <div className="box">
            <ul className="movies">
            {props.data}
            </ul>
        </div>
    );
}

export default Upcoming;
