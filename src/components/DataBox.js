import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MostPopular.css';
import Movie from './Movies';
import Widget from './Widget';

import { renderField } from '../utils/validators';


class DataBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            votes: []
        }
    }


    handleClickTwo = (e) => {
        const mappedProperties = { '1': 30, '2': 0, '3': 5, '4': 14 }
        let addDaysValue = 0;
        const addDays = (date, days) => new Date(date.getTime() + days*24*60*50*1000);
        for(let prop in mappedProperties) {
            e.target.dataset.id === prop ? addDaysValue = mappedProperties[prop] : null
        }

        const filteredData = this.props.data.filter(movie => {
            const date = new Date(movie.release_date.replace(/-/g, ' '));
            return date >= addDays(new Date(), addDaysValue);
        });
        this.setState({ data: [...filteredData] })

        // debugger;
    }

    handleClick = (e) => {
        // const arr = this.props.data.sort((a, b) => b.vote_average - a.vote_average && b.vote_count - a.vote_count);

        // console.log(arr[0].vote_average, arr)
    }

    sortAverageVotes(arr) {
        const sortedData = this.props.data.sort((a,b) => b.vote_average - a.vote_average);
        arr.push(sortedData[0].vote_average, sortedData[5].vote_average, sortedData[10].vote_average, sortedData[15].vote_average, sortedData[19].vote_average)
    }

    render(){
        const { data } = this.props;
        const arr = [];
        if(data.length && this.props.children) {
            this.sortAverageVotes(arr);
        }
        const source = this.state.data.length ? this.state.data : data;
        const list = source.map((movie) => (
            <Link key={movie.id} to={this.props.type ? {pathname: `/${movie.id}`, state: { type: 'tv' }} : `/${movie.id}`}>
                <Movie movie={movie} />
            </Link>
        ));
        return (
            <div className="box">
            {/* <Widget handleClick={this.handleClick.bind(this)} list={list} /> */}
            {this.props.children && React.cloneElement(this.props.children, { handleClick: this.handleClick.bind(this), votes: arr }) }
            <ul className="movie">
                {list}
            </ul>

            </div>
        );
    }
}

export default DataBox;
