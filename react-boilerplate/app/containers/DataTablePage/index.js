import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDataTable from './selectors';
import reducer from './reducer';
import { addRowAction, requestData, updateRowAction} from './actions';
import saga from './saga';
import Tabledata from '../../components/Table';
import { TableData } from '../../API/endPoints';
import { withRouter } from "react-router-dom";

export class DataTable extends React.Component {
  componentDidMount () {
    if(this.props.data == null){
      this.props.requestData()
    }
  }
  render() {
    return (
      <div>
        <Tabledata table={this.props}/>
      </div>
    );
  }
}

DataTable.propTypes = {

};

const mapStateToProps = makeSelectDataTable();


function mapDispatchToProps(dispatch) {
  return {
    addRowAction: (data) => dispatch(addRowAction(data)),
    updateRowAction: (row) => dispatch(updateRowAction(row)),
    requestData: () => dispatch(requestData()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dataTable', reducer });
const withSaga = injectSaga({ key: 'dataTable', saga });
export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter,
)(DataTable);
