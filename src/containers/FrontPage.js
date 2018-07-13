import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMostPopular } from '../store/actions/Fetch_MostPopular';
import { fetchUpcoming } from '../store/actions/Fetch_Upcoming';
import { fetchPopularPeople } from '../store/actions/Fetch_PopularPeople';
import { withRouter } from 'react-router-dom';
import Movie from '../components/Movies';
import DataBox from '../components/DataBox';
import FeaturedActors from '../components/FeaturedActors';
import requireAuthentication from '../HOCs/requireAuthentication';

class FrontPage extends Component {
//TODO: ADD LOGIN/REGISTER REDUX FORM, AND SHOW COMPONENTS BASED ON LOGIN STATE
    componentDidMount(){
        this.props.fetchMostPopular();
        this.props.fetchUpcoming();
        this.props.fetchPopularPeople();
    }

    render() {
        const { mostPopular, upcoming, popularPeople } = this.props;
        console.log(this.props, mostPopular);
        const mostPopularList = mostPopular.map((movie) => {
            return (
                <Movie
                    movie={movie}
                    key={movie.id}
                />
            );
        });
        const upcomingList = upcoming.map((movie) => {
            return (
                <Movie
                    movie={movie}
                    key={movie.id}
                />
            );
        });

        const peopleList = popularPeople.map((person) => {
            return (
                <li>
                    {person.name}<br />
                    <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} width="120" height="170" alt={person.name} />
                </li>
            )
        })

        return (
            <React.Fragment>
                <div className="movies">
                    <div className="data-box">
                        The list of most popular movies:<br />
                        <DataBox data={mostPopularList} />
                    </div>
                    <div className="data-box">
                        The list of upcoming movies:<br />
                        <DataBox data={upcomingList} />
                    </div>
                    <div className="featured-actors">
                        Featured actors data here
                        <FeaturedActors data={peopleList} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    mostPopular: state.mostPopular,
    upcoming: state.upcoming,
    popularPeople: state.popularPeople

})

const mapDispatchToProps = {
    fetchMostPopular,
    fetchUpcoming,
    fetchPopularPeople
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
