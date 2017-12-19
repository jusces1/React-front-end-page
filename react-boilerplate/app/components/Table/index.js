import React from 'react';

import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Tooltip from 'material-ui/Tooltip';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ReactTable from 'react-table'
import "react-table/react-table.css";
import { render } from "react-dom";

function Tabledata(props) {

  const renderDoubleClick = (rowInfo) => {

    props.table.updateRowAction(rowInfo.original);
    props.table.history.push('/row');  
  }
  const addNewRow = () => {
    props.table.updateRowAction({});
    props.table.history.push('/row');  
  }
  return (
    <div>
      
      <ReactTable
        previousText={<FormattedMessage {...messages.previousText} />}
        nextText={<FormattedMessage {...messages.nextText} />}
        loadingText={<FormattedMessage {...messages.loadingText} />}
        noDataText={<FormattedMessage {...messages.noDataText} />}
        pageText={<FormattedMessage {...messages.pageText} />}
        ofText={<FormattedMessage {...messages.ofText} />}
        rowsText={<FormattedMessage {...messages.rowsText} />}
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onDoubleClick: (e, handleOriginal) => {
              renderDoubleClick(rowInfo)
            }
          }
        }}
        filterable
        defaultFilterMethod={(filter, row) =>{
          return String(row[filter.id]).indexOf(filter.value) != -1 ? String(row[filter.id]) : "";
          }
        }
         pageSizeOptions = {[5, 10]}
        data={props.table.data != null ? props.table.data : []}
        columns={props.table.headers != null ? props.table.headers : []}
        defaultPageSize={10}
        className="-striped -highlight"
      />
      <Button raised onClick={addNewRow} color="primary" className="buttonClass">
        <FormattedMessage {...messages.buttonAddnew} />
      </Button>
    </div>
  );
}

Tabledata.propTypes = {

};

export default Tabledata;
