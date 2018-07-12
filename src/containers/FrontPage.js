import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../store/actions/Fetch_Movies';

class FrontPage extends Component {

    componentDidMount(){
        this.props.fetchMovies();
    }

    render() {
      const { movies } = this.props;
      console.log(movies);
      const moviesList = movies.map((movie) => {
          return (
            <li key={movie.id}>
            {movie.title}
            </li>
          );
      })
        return (
            <div>
                The list of most popular movies:
                <ul>
                {moviesList}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
