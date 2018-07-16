import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FrontPage from './FrontPage';
import LoginPage from './LoginPage';
import DatabaseSearch from './DatabasePage';
import { userAuth } from '../store/actions/Login_Auth';
import './FrontPage.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    submit = values => this.props.userAuth();

    handleSearch = event => {
        this.setState({ search: event.target.value })
    }

    render() {
        return (
        <div className="App">
            <div className="navbar">
                <input type="text" placeholder="Search for movies/TV shows" onChange={this.handleSearch} />
                <Link to="/database">SEARCH DATABASE</Link>
                <img className="logo" src="http://jiayuhk.com/sc/assets/img/sample/shortcode/logo/1.png" width="200" height="100" alt="logo" />
                <span><Link to="/login">Login/Register</Link></span>
            </div>
            {/* <Switch> */}
                {/* <Route exact path="/" render={()=> (
                    !this.props.auth ? (
                        <Redirect to="/login" />
                    ) : (
                        <Redirect to="/frontpage" />
                    )
                )} /> */}

                <Route path="/" exact render={() => ( !this.state.search ? <FrontPage /> : <DatabaseSearch data={this.state.search} /> )} />
                {/* <Route path="/database" component={DatabaseSearch} /> */}
                <Route path="/login" render={() => <LoginPage onSubmit={this.submit} /> } />
                {/* <Route path="/yo" render={()=><div>Yolo</div>} /> */}
            {/* </Switch> */}
        </div>
        );
  }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    userAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
