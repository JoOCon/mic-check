import React, { Component } from 'react';
import { Header } from '../../components/Header';
import { connect } from 'react-redux';
import { Route, withRouter} from 'react-router-dom';
import { getLocalStorageUsers } from '../../actions';
import RentalsContainer from '../RentalsContainer';
import SignUp from '../SignUp';
import Login from '../Login';
import RentalForm from '../RentalForm';
import PropTypes from 'prop-types';
import './styles.css';

export class App extends Component {
  componentDidMount() {
    const users = JSON.parse(localStorage.getItem('AllUsers'));
    this.props.getLocalStorageUsers(users);
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route path='/' component={RentalsContainer} />
        <Route path='/' component={Login} />
        <Route path='/' component={SignUp} />
        <Route path='/' component={RentalForm} />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getLocalStorageUsers: (users) => dispatch(getLocalStorageUsers(users))
});

App.propTypes = {
  getLocalStorageUsers: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(App));
