import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createDeliveryPost } from '../../thunk/createDeliveryPost';
import { removeRental } from '../../actions';
import loadingGif from '../../images/loadingGif.gif';
import './styles.css';

export class RentalConfirmation extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  handleOrder() {
    const { activeUser, selectedItem, createDeliveryPost, removeRental } = this.props;
    const orderInfo = {
      manifest: selectedItem.description,
      'manifest_items[].name': selectedItem.name,
      'manifest_items[].size': selectedItem.itemSize,
      pickup_address: selectedItem.itemLocation,
      pickup_name: selectedItem.rentersName,
      pickup_phone_number: selectedItem.phoneNumber,
      dropoff_address: activeUser.userLocation,
      dropoff_name: activeUser.userName,
      dropoff_phone_number: activeUser.phoneNumber,
      dropoff_notes: activeUser.email
    };
    createDeliveryPost(orderInfo);
    removeRental(selectedItem);
    this.setState({ redirect: true });
  }

  render() {
    const { id, fee, expires, dropoff_eta, duration } = this.props.quote;
    const { name, description, rentalPrice, image } = this.props.selectedItem;
    const { userName } = this.props.activeUser;
    const cleanedPrice = ((rentalPrice * 100) + fee)/100;
    const displayQuote = () => {
      if (id) {
        return (
          <div className='confirmation-container'>
            <img className='confirmation-rental-image' alt='rental item' src={image}/>
            <div className='confirmation-info'>
              <h1 className='confirmation-title'>{name}</h1>
              <p className='details'>Item Info: {description}</p>
              <p className='details'>Estimated Arrival: {dropoff_eta}</p>
              <p className='details'>Offer Expires At: {expires}</p>
              <p className='details'>Delivery Duration: {duration} minutes</p>
              <h1 className='rental-price'>Rental Cost: ${cleanedPrice}</h1>
              <button 
                className='rental-button'
                onClick={() => this.handleOrder()}>Place Order
              </button>
            </div>
            {this.state.redirect && (
              <Redirect to={`/${userName}`} />
            )}
          </div>
        );
      } else {
        return (
          <img className='loading-gif' alt='loading animation' src={loadingGif}/>
        );
      }
    };

    return (
      <div>
        {displayQuote()}
      </div>
    );
  }
}

RentalConfirmation.propTypes = {
  quote: PropTypes.object,
  activeUser: PropTypes.object,
  selectedItem: PropTypes.object,
  createDeliveryPost: PropTypes.func,
  removeRental: PropTypes.func
};

export const mapStateToProps = (state) => ({
  quote: state.quote,
  activeUser: state.activeUser,
  selectedItem: state.selectedItem
});

export const mapDispatchToProps = (dispatch) => ({
  createDeliveryPost: (orderInfo) => dispatch(createDeliveryPost(orderInfo)),
  removeRental: (item) => dispatch(removeRental(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalConfirmation);
