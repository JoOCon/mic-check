import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';

export class RentalCard extends Component {
  render() {
    return (
      <div>
        RentalCard
      </div>
    );
  }
}

RentalCard.propTypes = {

};

export default connect()(RentalCard);
