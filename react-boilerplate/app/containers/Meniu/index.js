import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import makeSelectMeniu from './selectors';
import reducer from './reducer';
import { openCloseAction } from './actions';
import IconButton from 'material-ui/IconButton';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import './menu.css';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import { withRouter } from "react-router-dom";
import {updateRowAction}from '../DataTablePage/actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
export class Meniu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleToggle = () => {
    this.props.openCloseAction(!this.props.open);
  };
  LogOut(){
    let name="";
    localStorage.setItem('name', name);
  }
  GoToAddRow = () =>{

    this.props.updateRowAction({});
    this.props.history.push('/row');
  }
  render() {

    return (
      <div>

        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit" className="fullWidth">
              <Button onClick={this.handleToggle} ><FormattedMessage {...messages.MeniuButton} /></Button>
          </Typography>
            <Link to="/login" onClick={this.LogOut}><Button raised color="accent"  ><FormattedMessage {...messages.logOutButton} /></Button></Link>
          </Toolbar>
        </AppBar>
        <Drawer open={this.props.open} onRequestClose={this.handleToggle}>
          <div id="list"
            role="button"
            onClick={this.handleToggle}
            onKeyDown={this.handleToggle}
          >
            <AppBar position="static" >
              <Typography type="title" color="inherit"  >
                <FormattedMessage {...messages.MeniuButton} />
              </Typography>
            </AppBar>
            <List><Button raised color="primary" className="buttons"><FormattedMessage {...messages.HomeButton} /></Button></List>
            <List onClick={this.GoToAddRow}><Button raised color="primary" className="buttons"><FormattedMessage {...messages.addrowButton} /></Button></List>
            <Link to="/login" onClick={this.LogOut}><Button raised color="accent" className="buttons"><FormattedMessage {...messages.logOutButton} /></Button></Link>
          </div>
        </Drawer>
      </div>
    );
  }
}

Meniu.propTypes = {

};

const mapStateToProps = makeSelectMeniu();


function mapDispatchToProps(dispatch) {
  return {
    openCloseAction: (open) => dispatch(openCloseAction(open)),
    updateRowAction: (row) => dispatch(updateRowAction(row)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'meniu', reducer });

export default compose(
  withReducer,
  withConnect,
  withRouter,
)(Meniu);
