/**
*
* ViewProfileForm
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './viewProfileForm.css';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
function ViewProfileForm(props) {
  return (
    <div hidden={props.user.registration.obj.hidden}>
      <Paper elevation={4} className="Form">
      <img src={(props.user.registration.obj.img)} width="150px" height="200px"></img>
      <br/>
        <TextField
          label={<FormattedMessage {...messages.username} />}
          name="name"
          value={props.user.registration.obj.name} 
          />
        <TextField
          label={<FormattedMessage {...messages.password} />}
          name="password"
          value={props.user.registration.obj.password}
        />
        <TextField
          label={<FormattedMessage {...messages.age} />}
          name="age"
          value={props.user.registration.obj.age}
        />
      </Paper>
    </div>
  );
}

ViewProfileForm.propTypes = {

};

export default ViewProfileForm;
