import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMostPopular } from '../store/actions/Fetch_MostPopular';
import { fetchUpcoming } from '../store/actions/Fetch_Upcoming';
import { fetchPopularPeople } from '../store/actions/Fetch_PopularPeople';
import { fetchMostPopularTvShows } from '../store/actions/Fetch_MostPopularTvShows';
import { fetchCurrentTvShows } from '../store/actions/Fetch_CurrentTvShows';
import DataBox from '../components/DataBox';
import FeaturedActors from '../components/FeaturedActors';
// import requireAuthentication from '../HOCs/requireAuthentication';

class FrontPage extends Component {
//TODO: ADD LOGIN/REGISTER REDUX FORM, AND SHOW COMPONENTS BASED ON LOGIN STATE
    componentDidMount(){
        this.props.fetchMostPopular();
        this.props.fetchUpcoming();
        this.props.fetchPopularPeople();
        this.props.fetchMostPopularTvShows();
        this.props.fetchCurrentTvShows();
    }

    checkScroll() {
        const el = document.querySelector('.data-box');
        console.log(el);
    }

    render() {
        const { mostPopular, upcoming, popularPeople, popularTvShows, currentTvShows } = this.props;

        return (
            <React.Fragment>
                <section>
                    <div className="data-boxes">
                        <div className="movies">
                            <div className="data-box">
                                The list of most popular movies:<br />
                                <DataBox data={mostPopular} />
                            </div>
                            <div className="data-box">
                                The list of upcoming movies:<br />
                                <DataBox data={upcoming} />
                            </div>
                        </div>
                        <div className="tv-shows">
                            <div className="data-box">
                                The list of most popular tv shows:<br />
                                <DataBox data={popularTvShows} type="tv" />
                            </div>
                            <div className="data-box">
                                The list of tv shows on air:<br />
                                <DataBox data={currentTvShows} type="tv" />
                            </div>
                        </div>
                    </div>
                    <div className="featured-actors">
                        Featured actors data here
                        <FeaturedActors data={popularPeople} />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    mostPopular: state.mostPopular,
    upcoming: state.upcoming,
    popularPeople: state.popularPeople,
    popularTvShows: state.popularTvShows,
    currentTvShows: state.currentTvShows
})

const mapDispatchToProps = {
    fetchMostPopular,
    fetchUpcoming,
    fetchPopularPeople,
    fetchMostPopularTvShows,
    fetchCurrentTvShows
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
