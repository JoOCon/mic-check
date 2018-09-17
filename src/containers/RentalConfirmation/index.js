import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

export class RentalConfirmation extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  render() {
    const { id, fee, expires, dropoff_eta, duration } = this.props.quote;
    return (
      <div>
        <h1>Rental Details</h1>
        <h1>item name</h1>
        <h1>Estimated Arrival: {dropoff_eta}</h1>
        <h1>Delivery Duration: {duration}</h1>
        <h1>Rental Cost: {fee}</h1>
        <h1>Offer Expires At: {expires}</h1>
        <button>Accept Order</button>
      </div>
    );
  }
}

RentalConfirmation.propTypes = {
  quote: PropTypes.object,
  activeUser: PropTypes.object
};

export const mapStateToProps = (state) => ({
  quote: state.quote,
  activeUser: state.activeUser,
  selectedItem: state.selectedItem
});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps)(RentalConfirmation);