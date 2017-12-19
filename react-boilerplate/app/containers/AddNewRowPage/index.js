/**
 *
 * AddNewRowPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import injectReducer from 'utils/injectReducer';
import makeSelectAddNewRowPage from './selectors';

import reducer from './reducer';
import messages from './messages';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { addRowAction } from '../DataTablePage/actions';
import {Meniu} from '../Meniu/index'
export class AddNewRowPage extends React.Component {
  componentWillMount(){
    
    if (this.props.addnewrowpage == null) {
      this.props.history.push('/home');
    }
    return false;
  }
  componentDidMount(){
    if (this.props.addnewrowpage != null) {
      if (Object.keys(this.props.addnewrowpage.row).length > 0){
        let form = document.getElementById('addRowFrom').elements;
        for (let i = 0; i < form.length; i++) {
          form.item(i).value = this.props.addnewrowpage.row[form.item(i).name]
        }
      }
    }
  }
  addNeworUpdateRow = (e) => {
    
    let elements = document.getElementById("addRowFrom").elements;
    let obj = {};
    for (let i = 0; i < elements.length; i++) {
      let item = elements.item(i);
      obj[item.name] = item.value;
    }
    let empty = false;
    Object.keys(obj).map(function (key, index) {
      if (obj[key] == "") {
        empty = true;
      }
    });

    if (!empty) {
      let newData = null;
      if (Object.keys(this.props.addnewrowpage.row).length > 0){
        this.props.addnewrowpage.data[this.props.addnewrowpage.row.id - 1] = obj;
        newData = this.props.addnewrowpage.data;
      } else {
        newData = this.props.addnewrowpage.data.concat([obj]);
      }
      this.props.addRowAction(newData);
      this.props.history.push('/home');

    } else {
      alert(" There is an empty fields");
    }

  }
  
  render() {
    return (
      <div> 
         <Paper elevation={4} className="paperForm">
           <Typography type="headline" component="h3" >

            {Object.keys(this.props.addnewrowpage.row).length > 0 ? <FormattedMessage {...messages.headerEdit} /> : <FormattedMessage {...messages.headernew} /> }
          </Typography>
          <br/>
           <form id="addRowFrom">
            {this.props.addnewrowpage != null ? (this.props.addnewrowpage.headers != "" ) ? this.props.addnewrowpage.headers.map((row, index) => (
               <TextField key={index}
                label={row.Header}
                className="inputClass"
                name={row.Header}
                value={this.props.addnewrowpage.row[row]}
                InputLabelProps={{
                   shrink: true,
                 }}
               /> 
             )) : "" : ""}
           </form>
          <Button raised onClick={this.addNeworUpdateRow} color="primary" className="buttonClass">
            {Object.keys(this.props.addnewrowpage.row).length > 0 ? <FormattedMessage {...messages.buttonUpdate} /> : <FormattedMessage {...messages.buttonNew} /> }
             </Button>
          <Link to="/home"><Button raised  color="primary" className="buttonClass">
            <FormattedMessage {...messages.buttonCancel} />
           </Button></Link>
         </Paper>
      </div>
    );
  }
}

AddNewRowPage.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  addnewrowpage: makeSelectAddNewRowPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    addRowAction: (data) => dispatch(addRowAction(data)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addNewRowPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(AddNewRowPage);
