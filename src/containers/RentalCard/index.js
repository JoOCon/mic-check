import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeliveryQuote } from '../../thunk/getDeliveryQuote';
import PropTypes from 'prop-types';
import './styles.css';

export class RentalCard extends Component {

  componentDidMount() {
    this.props.getDeliveryQuote();
  }

  render() {
    return (
      <div>
        RentalCard
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getDeliveryQuote: () => dispatch(getDeliveryQuote())
});

RentalCard.propTypes = {
  getDeliveryQuote: PropTypes.func
};

export default connect(null, mapDispatchToProps)(RentalCard);
