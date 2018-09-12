import React, { Component } from 'react';
import { Header } from '../../components/Header';
import { connect } from 'react-redux';
import { Route, withRouter} from 'react-router-dom';
import { getLocalStorageUsers, getLocalStorageRentals } from '../../actions';
import RentalsContainer from '../RentalsContainer';
import UserAccountDisplay from '../UserAccountDisplay';
import SignUp from '../SignUp';
import Login from '../Login';
import RentalForm from '../RentalForm';
import PropTypes from 'prop-types';
import './styles.css';

export class App extends Component {
  componentDidMount() {
    const { getLocalStorageUsers, getLocalStorageRentals } = this.props;
    const users = JSON.parse(localStorage.getItem('AllUsers'));
    const rentals = JSON.parse(localStorage.getItem('AllRentals'));
    getLocalStorageUsers(users);
    getLocalStorageRentals(rentals);
  }

  render() {
    const { userName } = this.props.activeUser;
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path={`/${userName}/AddRental`} component={RentalForm} />
        <Route exact path='/' component={RentalsContainer} />
        <Route exact path={`/${userName}`} component={RentalsContainer} />
        <Route exact path={`/${userName}/Orders`} component={UserAccountDisplay} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  activeUser: state.activeUser
});

export const mapDispatchToProps = (dispatch) => ({
  getLocalStorageUsers: (users) => dispatch(getLocalStorageUsers(users)),
  getLocalStorageRentals: (rentals) => dispatch(getLocalStorageRentals(rentals))
});

App.propTypes = {
  activeUser: PropTypes.object,
  getLocalStorageUsers: PropTypes.func,
  getLocalStorageRentals: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
