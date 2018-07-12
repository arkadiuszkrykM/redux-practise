import React from 'react';
import './MostPopular.css';

const DataBox = props => {
    console.log(props);
    return (
        <div className="box">
        tutaj bedzie widget
            <ul>
                {props.data}
            </ul>
        </div>
    );
}

export default DataBox;
