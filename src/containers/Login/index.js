import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeUser } from '../../actions';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

  handleUser = (foundUser) => {
    const { userName, email, location } = foundUser;
    this.props.activeUser({ userName, email, location });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email.length && password.length) {
      const foundUser = this.props.users.find(user => (
        (user.email === email && user.password === password) ? user : undefined
      ));
      (foundUser) ? this.handleUser(foundUser) : alert('Login Information Incorrect');
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

export const mapStateToProps = (state) => ({
  users: state.users
});

export const mapDispatchToProps = (dispatch) => ({
  activeUser: (user) => dispatch(activeUser(user))
});

Login.propTypes = {
  users: PropTypes.array,
  activeUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
