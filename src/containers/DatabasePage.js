import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../store/actions/Fetch_SearchData';
import _ from 'lodash';

class DatabaseSearch extends Component {
    constructor(props) {
        super(props);
        this.query = _.debounce(() => this.props.fetchSearch(this.props.data), 2000);
    }

    componentDidUpdate(){
        console.log('it mounted', this.props);
        this.query();
        setTimeout(() => {
            console.log('now')
            this.query.cancel();
        }, 4000);

    }

    render(){
        const { searchData } = this.props;
        const listData = searchData.map(result => (
            <li>
                {result.title}, {result.vote_average === 0 ? 'No info' : result.vote_average}
            </li>
        ));
        console.log(listData);
        return (
            <div>
                <ul>
                    {listData.length === 0 ? 'NO DATA' : listData}
                </ul>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    searchData: state.searchData
});

const mapDispatchToProps = {
    fetchSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(DatabaseSearch);
