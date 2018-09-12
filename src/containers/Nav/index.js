import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to='/login'><button className='login'>Login</button></Link>
        <Link to='/signup'><button className='signup'>SignUp</button></Link>
      </div>
    );
  }
}

NavBar.propTypes = {

};

export default connect()(NavBar);
