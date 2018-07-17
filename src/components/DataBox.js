import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MostPopular.css';
import Movie from './Movies';
import { renderField } from '../utils/validators';


class DataBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    handleClick = (e) => {
        console.dir(e.target.dataset.id)
        console.log(this.props)
        const filteredData = this.props.data.filter(movie => {
            const date = new Date(movie.release_date.replace(/-/g, ' '));
            return date > Date.now();
            // console.log(date);
        });
        this.setState({ data: [...filteredData] })
    }

    render(){
        const { data } = this.props;
        const list = data.map((movie) => (
            <Link to={this.props.type ? {pathname: `/${movie.id}`, state: { type: 'tv' }} : `/${movie.id}`}>
                <Movie
                    movie={movie}
                    key={movie.id}
                />
            </Link>
        ));
        console.log(this.props, this.state.data)
        return (
            <div className="box">
            <ul onClick={this.handleClick}>
                <li data-id="1">this month</li>
                <li data-id="2">today</li>
                <li data-id="3">in 5 days</li>
                <li data-id="4">in 2 weeks</li>
            </ul>
            <ul className="movie">
                {list}
            </ul>

            </div>
        );
    }
}

export default DataBox;
