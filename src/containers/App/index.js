import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
  getLocalStorageUsers, 
  getLocalStorageRentals, 
  getLocalStorageOrders 
} from '../../actions';
import { Header } from '../../components/Header';
import Login from '../Login';
import SignUp from '../SignUp';
import RentalForm from '../RentalForm';
import RentalsContainer from '../RentalsContainer';
import UserAccountDisplay from '../UserAccountDisplay';
import RentalConfirmation from '../RentalConfirmation';
import './styles.css';

export class App extends Component {
  componentDidMount() {
    const {
      getLocalStorageUsers,
      getLocalStorageRentals,
      getLocalStorageOrders
    } = this.props;
    const users = JSON.parse(localStorage.getItem('AllUsers'));
    const rentals = JSON.parse(localStorage.getItem('AllRentals'));
    const orders = JSON.parse(localStorage.getItem('AllCompletedOrders'));
    getLocalStorageUsers(users);
    getLocalStorageRentals(rentals);
    getLocalStorageOrders(orders);
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
        <Route exact path={`/${userName}/Confirmation`} component={RentalConfirmation} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  activeUser: state.activeUser
});

export const mapDispatchToProps = (dispatch) => ({
  getLocalStorageUsers: (users) => dispatch(getLocalStorageUsers(users)),
  getLocalStorageRentals: (rentals) => dispatch(getLocalStorageRentals(rentals)),
  getLocalStorageOrders: (orders) => dispatch(getLocalStorageOrders(orders))
});

App.propTypes = {
  activeUser: PropTypes.object,
  getLocalStorageUsers: PropTypes.func,
  getLocalStorageRentals: PropTypes.func,
  getLocalStorageOrders: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
