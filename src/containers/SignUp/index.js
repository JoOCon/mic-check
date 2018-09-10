import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, activeUser } from '../../actions';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
      location: '',
      redirect: false
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { userName, email, password, location } = this.state;
    if (userName.length && email.length && password.length && location.length) {
      this.props.addUser(this.state);
      this.props.activeUser(this.state);
      this.setState({ userName: '', email: '', password: '', location: '', redirect: true });
    } else {
      alert('Please complete sign up information');
    }
  }

  render() {
    const { userName, email, password, location } = this.state;
    return (
      <form className='user-signup' onSubmit={this.handleSubmit}>
        <h2 className='log-header'>Sign Up</h2>
        <input
          className='input-field'
          name='userName'
          placeholder='username'
          value={userName}
          onChange={this.handleChange}
        />
        <input
          className='input-field'
          name='email'
          placeholder='email'
          type='email'
          value={email}
          onChange={this.handleChange}
        />
        <input
          className='input-field'
          name='password'
          placeholder='password'
          type='password'
          value={password}
          onChange={this.handleChange}
        />
        <input
          className='input-field'
          name='location'
          placeholder='location'
          type='location'
          value={location}
          onChange={this.handleChange}
        />
        <button className="signup-button">SignUp</button>
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
  activeUser: (user) => dispatch(activeUser(user))
});

SignUp.propTypes = {
  addUser: PropTypes.func,
  activeUser: PropTypes.func
};

export default connect(null, mapDispatchToProps)(SignUp);
