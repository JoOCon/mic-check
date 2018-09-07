import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    if (email.length && password.length) {
      this.setState({ email: '', password: '', redirect: true });
    } else {
      alert('Please complete login information');
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form className='user-login' onSubmit={this.handleSubmit}>
          <h2 className='log-header'>Login</h2>
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
          <button className="Login-button">Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {

};

export default connect()(Login);
