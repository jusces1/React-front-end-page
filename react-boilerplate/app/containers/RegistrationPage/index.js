/**
 *
 * Registration
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import  RegistrationForm  from 'components/RegistrationForm/index';
import  ViewProfileForm  from 'components/ViewProfileForm/index';

import injectReducer from 'utils/injectReducer';
import makeSelectRegistration from './selectors';
import reducer from './reducer';
import {BUTTON_CLICK_ACTION} from './constants';
import { buttonClickAction } from './actions';


export class Registration extends Component {
  render() {
   
    return (
      <div>
        <RegistrationForm buttonClick={this.props.buttonClick} />
        <ViewProfileForm user={this.props}/>
      </div>
    );
  }
}

Registration.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  registration: makeSelectRegistration(),
});

function mapDispatchToProps(dispatch) {
  return {
    buttonClick: (name, password, age, img, hidden) => {
      dispatch(buttonClickAction(name, password, age, img, hidden))
    }
      
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registration', reducer });

export default compose(
  withReducer,
  withConnect,
)(Registration);
