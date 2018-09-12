import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveUser } from '../../actions';
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
    this.props.setActiveUser({ userName, email, location });
    this.setState({redirect: true});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email.length && password.length) {
      const foundUser = this.props.users.find(user => (
        (user.email === email && user.password === password) ? user : undefined
      ));
      (foundUser) ? 
        this.handleUser(foundUser) 
        : alert('Login Information Incorrect or does not exist');
      this.setState({ email: '', password: '' });
    } else {
      alert('Please complete login information');
    }
  }

  render() {
    const { email, password, redirect } = this.state;
    const { userName } = this.props.activeUser;
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
        {redirect && (
          <Redirect to={`/${userName}`} />
        )}
        <Link to='/SignUp'><button className='sign-up'>Sign Up</button></Link>
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
  setActiveUser: (user) => dispatch(setActiveUser(user))
});

Login.propTypes = {
  users: PropTypes.array,
  activeUser: PropTypes.object,
  setActiveUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
