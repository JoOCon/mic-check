import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import RentalCard from '../RentalCard';
import './styles.css';

export class RentalsContainer extends Component {
  render() {
    return (
      <div>
        RentalsContainer
        <Route path='/' component={RentalCard} />
      </div>
    );
  }
}

RentalsContainer.propTypes = {

};

export default connect()(RentalsContainer);
