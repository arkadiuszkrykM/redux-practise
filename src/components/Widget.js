import React from 'react';

const Widget = props => {
    const { list, data } = props;
    console.log(data);
    return (
        <React.Fragment>
        <ul>
            <li>this month</li>
            <li>today</li>
            <li>in 5 days</li>
            <li>in 2 weeks</li>
        </ul>
        <ul className="movie">
            {list}
        </ul>
        </React.Fragment>
    );
}

export default Widget;
