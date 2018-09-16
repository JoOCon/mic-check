import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import RentalCard from '../RentalCard';
import PropTypes from 'prop-types';
import './styles.css';

export class RentalsContainer extends Component {
  render() {
    const uuidv1 = require('uuid/v1');
    const displayRentals = this.props.rentals.map(rental => ( 
      <RentalCard key={uuidv1()} {...rental} /> )
    );
    
    return (
      <div>
        {displayRentals}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  rentals: state.rentals
});

RentalsContainer.propTypes = {
  rentals: PropTypes.array
};

export default connect(mapStateToProps)(RentalsContainer);
