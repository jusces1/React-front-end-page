
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectMainContent from './selectors';
import reducer from './reducer';

import Meniu from 'containers/Meniu/index';
import DataTable from 'containers/DataTablePage/index';

import { loadTableAction } from './actions';


export class MainContent extends React.Component { 
  render() {
    return (
      <div>
        <Meniu />
        <DataTable  />
      </div>
    );
  }
}

MainContent.propTypes = {

};

const mapStateToProps = makeSelectMainContent();

function mapDispatchToProps(dispatch) {
  return {
    loadTableAction: (data) => dispatch(loadTableAction(data))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mainContent', reducer });

export default compose(
  withReducer,
  withConnect,
)(MainContent);
