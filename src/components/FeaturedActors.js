import React from 'react';
import './FeaturedActors.css';

const FeaturedActors = props => {
    console.log(props);
    return (
        <div>
            <ul className="actors">
                {props.data}
            </ul>
        </div>
    );
}

export default FeaturedActors;
