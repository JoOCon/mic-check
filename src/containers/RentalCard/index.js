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

  componentDidMount() {
    this.props.getDeliveryQuote();
  }

  render() {
    const {name, location, description, image } = this.props;
    return (
      <div className='rental-card'>
        <img className='rental-image' src={image}/>
        <div className='card-info'>
          <h1 className='rental-title'>{name}</h1>
          <h2 className='rental-location'>Location: {location}</h2>
          <p className='rental-description'>Info: {description}</p>
          <button className='rental-button'>Rent</button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  activeUser: state.activeUser
});

export const mapDispatchToProps = (dispatch) => ({
  getDeliveryQuote: () => dispatch(getDeliveryQuote())
});

// build cards out to have a redirect to a rental confermation if they are logged in

RentalCard.propTypes = {
  getDeliveryQuote: PropTypes.func,
  activeUser: PropTypes.object,
  name: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalCard);
