import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeliveryQuote } from '../../thunk/getDeliveryQuote';
import PropTypes from 'prop-types';
import './styles.css';

export class RentalCard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  handleQuote() {
    const { userLocation } = this.props.activeUser;
    const { itemLocation } = this.props;
    this.props.getDeliveryQuote(userLocation, itemLocation);
  }

  render() {
    const {name, itemLocation, description, image } = this.props;
    return (
      <div className='rental-card'>
        <img className='rental-image' src={image}/>
        <div className='card-info'>
          <h1 className='rental-title'>{name}</h1>
          <h2 className='rental-location'>Location: {itemLocation}</h2>
          <p className='rental-description'>Info: {description}</p>
          <button className='rental-button' onClick={() => this.handleQuote()}>Rent</button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  activeUser: state.activeUser
});

export const mapDispatchToProps = (dispatch) => ({
  getDeliveryQuote: (fromAddress, toAddress) => dispatch(getDeliveryQuote(fromAddress, toAddress))
});

// build cards out to have a redirect to a rental confermation if they are logged in

RentalCard.propTypes = {
  getDeliveryQuote: PropTypes.func,
  activeUser: PropTypes.object,
  name: PropTypes.string,
  itemLocation: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalCard);
