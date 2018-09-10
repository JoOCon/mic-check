import React, { Component } from 'react';
import { Header } from '../../components/Header';
import { connect } from 'react-redux';
import { Route, withRouter} from 'react-router-dom';
import RentalsContainer from '../RentalsContainer';
import SignUp from '../SignUp';
import Login from '../Login';
import './styles.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route path='/' component={RentalsContainer} />
        <Route path='/' component={Login} />
        <Route path='/' component={SignUp} />
      </div>
    );
  }
}

export default withRouter(connect()(App));
