import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { logoutActiveUser } from '../../actions';
import PropTypes from 'prop-types';
import './styles.css';

export class NavBar extends Component {
  render() {
    const { userName } = this.props.activeUser;
    const loggedIn = () => {
      return (
        <div className='nav-container'>
          <h1>{`Hello, ${userName}`}</h1>
          <div className='button-container'>
            <Link to={`/${userName}/Orders`}>
              <button className='main-button'>Your Orders</button>
            </Link>
            <Link to={`/${userName}/AddRental`}>
              <button className='main-button'>Add Rental</button>
            </Link>
            <Link to='/'>
              <button onClick={this.props.logoutActiveUser} className='main-button'>Logout</button>
            </Link>
          </div>
        </div>
      );
    };

    const ordersPage = () => {
      return (
        <div className='nav-container'>
          <Link to={`/${userName}`}><button className='main-button'>Home</button></Link>
          <Link to='/'>
            <button onClick={this.props.logoutActiveUser} className='main-button'>Logout</button>
          </Link>
        </div>
      );
    };

    const mainNav = () => {
      return (
        <div className='nav-container'>
          <Link to='/Login'><button className='main-button'>Login</button></Link>
          <Link to='/SignUp'><button className='main-button'>SignUp</button></Link>
        </div>
      );
    };

    return (
      <div className='main-nav'>
        <Route exact path={`/${userName}`} component={loggedIn}></Route>
        <Route exact path={`/${userName}/Orders`} component={ordersPage}></Route>
        <Route exact path={`/${userName}/Confirmation`} component={ordersPage}></Route>
        <Route exact path='/' component={mainNav}></Route>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  activeUser: state.activeUser
});

export const mapDispatchToProps = (dispatch) => ({
  logoutActiveUser: () => dispatch(logoutActiveUser())
});

NavBar.propTypes = {
  activeUser: PropTypes.object,
  logoutActiveUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
