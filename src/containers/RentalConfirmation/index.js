import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RentalConfirmation extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  render(){
    return (
      <div>
        
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  quote: state.quote
});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect()(RentalConfirmation);