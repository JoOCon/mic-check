import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRental, removeRental } from '../../actions';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';

export class RentalForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
      description: '',
      image: '',
      redirect: false
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, location, description} = this.state;
    if (name.length && location.length && description.length) {
      this.props.addRental(this.state);
      this.setState({ name: '', location: '', description: '', image: '', redirect: true });
    } else {
      alert('Please complete rental information');
    }
  }

  render() {
    const { name, location, description, image } = this.state;
    return (
      <form className='rental-form' onSubmit={this.handleSubmit}>
        <h2 className='log-header'>Manage Rental</h2>
        <input
          className='input-field'
          name='name'
          placeholder='name'
          value={name}
          onChange={this.handleChange}
        />
        <input
          className='input-field'
          name='location'
          placeholder='location'
          value={location}
          onChange={this.handleChange}
        />
        <input
          className='input-field'
          name='description'
          placeholder='description'
          type='text'
          value={description}
          onChange={this.handleChange}
        />
        <input
          className='input-field'
          name='image'
          placeholder='image'
          type='url'
          value={image}
          onChange={this.handleChange}
        />
        <button className="submit">Submit</button>
      </form>
    );
  }
}

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => ({
  addRental: (item) => dispatch(addRental(item)),
  removeRental: (item) => dispatch(removeRental(item))
});

RentalForm.propTypes = {
  addRental: PropTypes.func,
  removeRental: PropTypes.func
};

export default connect(null, mapDispatchToProps)(RentalForm);
