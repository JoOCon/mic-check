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
        <div>
          <h1>{`Hello, ${userName}`}</h1>
          <Link to={`/${userName}/Orders`}><button className='orders'>Your Orders</button></Link>
          <Link to='/'>
            <button onClick={this.props.logoutActiveUser} className='logout'>Logout</button>
          </Link>
          <Link to={`/${userName}/AddRental`}><button className='add-rental'>Add Rental</button></Link>
        </div>
      );
    };

    const ordersPage = () => {
      return (
        <div>
          <Link to={`/${userName}`}><button className='home'>Home</button></Link>
          <Link to='/'>
            <button onClick={this.props.logoutActiveUser} className='logout'>Logout</button>
          </Link>
        </div>
      );
    };

    const mainNav = () => {
      return (
        <div>
          <Link to='/login'><button className='login'>Login</button></Link>
          <Link to='/signup'><button className='signup'>SignUp</button></Link>
        </div>
      );
    };

    return (
      <div>
        <Route exact path={`/${userName}`} component={loggedIn}></Route>
        <Route exact path={`/${userName}/orders`} component={ordersPage}></Route>
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
