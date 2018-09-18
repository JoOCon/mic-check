import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, setActiveUser } from '../../actions';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      phoneNumber: '',
      password: '',
      street: '',
      city: '',
      state: '',
      redirect: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { userName, email, password, phoneNumber, street, city, state } = this.state;
    if (
      userName.length && 
      email.length && 
      password.length && 
      phoneNumber.length && 
      street.length && 
      city.length && 
      state.length
    ) {
      const foundUser = this.props.users.find(user => (
        (user.email === email && user.password === password) ? user : undefined
      ));
      if (foundUser) {
        alert('User already exists');
      } else {
        const user = {
          userName,
          password,
          email,
          phoneNumber,
          userLocation: `${street}, ${city}, ${state}`
        };
        this.props.addUser(user);
        this.props.setActiveUser({
          userName,
          email,
          phoneNumber,
          userLocation: `${street}, ${city}, ${state}`
        });
        this.setState({ redirect: true });
      }
      this.setState({
        userName: '',
        email: '',
        password: '',
        phoneNumber: '',
        street: '',
        city: '',
        state: ''
      });
    } else {
      alert('Please complete sign up information');
    }
  }

  render() {
    const { userName, email, password, phoneNumber, street, city, state, redirect } = this.state;
    return (
      <div>
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
            name='phoneNumber'
            placeholder='Phone Number'
            type='phoneNumber'
            value={phoneNumber}
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
            name='street'
            placeholder='street'
            value={street}
            onChange={this.handleChange}
          />
          <input
            className='input-field'
            name='city'
            placeholder='city'
            value={city}
            onChange={this.handleChange}
          />
          <input
            className='input-field'
            name='state'
            placeholder='state'
            value={state}
            onChange={this.handleChange}
          />
          <button className="signup-button">SignUp</button>
        </form>
        {redirect && (
          <Redirect to={`/${this.props.activeUser.userName}`} />
        )}
        <Link to='/Login'><button className='login'>Login</button></Link>
        <Link to='/'><button className='home'>Home</button></Link>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  users: state.users,
  activeUser: state.activeUser
});

export const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
  setActiveUser: (user) => dispatch(setActiveUser(user))
});

SignUp.propTypes = {
  users: PropTypes.array,
  activeUser: PropTypes.object,
  addUser: PropTypes.func,
  setActiveUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
