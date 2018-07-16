import React from 'react';
import './FeaturedActors.css';

const FeaturedActors = props => {
    const { data } = props;
    const list = data.map((person) => (
            <li key={person.id}>
                {person.name}<br />
                <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} width="120" height="170" alt={person.name} />
            </li>
        ));

    return (
        <div>
            <ul className="actors">
                {list}
            </ul>
        </div>
    );
}

export default FeaturedActors;
