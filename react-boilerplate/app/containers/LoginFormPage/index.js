import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectLoginForm from './selectors';
import reducer from './reducer';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

import './loginForm.css';
import { loginClickAction } from './actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class LoginForm extends React.Component { 
  componentWillMount(){
    if (localStorage.getItem("name") != "" && localStorage.getItem("name")){
      localStorage.setItem('name', "");
      location.reload();
    }
  }
  tryLogin(e) {
    let elements = document.getElementById("loginForm").elements;
    let obj = {};
    for (let i = 0; i < elements.length; i++) {
      let item = elements.item(i);
      obj[item.name] = item.value;
    }
    if (obj.name === "") {
      alert('you need to fill username');
      e.preventDefault();
    } else if (obj.password === "") {
      alert('you need to fill password');
      e.preventDefault();
    } else {
      localStorage.setItem('name', obj.name);
      this.props.buttonClick(obj.name, obj.password); 
    }
  }
 
  render() {
    
    return (
      <form id="loginForm">
        <Paper elevation={4} className="paperForm">
          <div >
            <h1 className="headTextClass"><FormattedMessage {...messages.HeaderLogin} /></h1>
            <TextField
              label={<FormattedMessage {...messages.fieldUsername} />}
              name="name"
              className="inputClass"
              type="text"
            />
            <br />
            <TextField 
              label={<FormattedMessage {...messages.fieldPassword} />}
              type="password"
              name="password"
              className="inputClass"
            />
            <br />
            <Link to="/home" onClick={this.tryLogin}><Button raised color="primary" className="buttonClass"><FormattedMessage {...messages.buttonLogin} /></Button></Link>
          </div>
        </Paper >
      </form>
    );
  }
}

LoginForm.propTypes = {

};

const mapStateToProps =  makeSelectLoginForm();


function mapDispatchToProps(dispatch) {
  return {
    buttonClick: (name, password) => dispatch(loginClickAction(name, password))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginForm', reducer });

export default compose(
  withReducer,
  withConnect,
)(LoginForm);
