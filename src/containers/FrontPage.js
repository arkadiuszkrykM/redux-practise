import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMostPopular } from '../store/actions/Fetch_MostPopular';
import { fetchUpcoming } from '../store/actions/Fetch_Upcoming';
import Movie from '../components/Movies';
import './FrontPage.css';
import DataBox from '../components/DataBox';

class FrontPage extends Component {

    componentDidMount(){
        this.props.fetchMostPopular();
        this.props.fetchUpcoming();
    }

    render() {
        const { mostPopular, upcoming } = this.props;
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

        return (
            <React.Fragment>
                <div className="navbar">
                    <span>Movies Database</span>
                    <img src="http://jiayuhk.com/sc/assets/img/sample/shortcode/logo/1.png" width="200" height="100" />

                </div>
                <div className="movies">
                    <div className="data-box">
                        The list of most popular movies:<br />
                        <DataBox data={mostPopularList} />
                    </div>
                    <div className="data-box">
                        The list of upcoming movies:<br />
                        <DataBox data={upcomingList} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    mostPopular: state.mostPopular,
    upcoming: state.upcoming

})

const mapDispatchToProps = {
    fetchMostPopular,
    fetchUpcoming
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
