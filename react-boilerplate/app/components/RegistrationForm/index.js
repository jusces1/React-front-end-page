/**
*
* RegistrationForm
*
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './registration.css';
const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

function RegistrationForm(props) {

  const tst = () =>{
    let elements = document.getElementById("myForm").elements;
    let obj ={};
    for(let i = 0 ; i < elements.length ; i++){
        let item = elements.item(i);     
          obj[item.name] = item.value;    
    }
    let reader = new FileReader();
    let file =  elements[3].files[0];
    if (obj.username && obj.password && obj.age){
      reader.onloadend = () => {
        props.buttonClick(obj.username, obj.password, obj.age, reader.result, false);
      }
    } else {
      alert("Sorry but there is an empty fields");
    }
    
    if(file){
      reader.readAsDataURL(file)
    } else {
      alert("Sorry but there is an empty fields");
    }
    
  }

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    var elements = document.getElementById("myForm").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
      var item = elements.item(i);
      obj[item.name] = item.value;
    }

    reader.onloadend = () => {
      //props.buttonClick(obj.username, obj.password, obj.age, reader.result, false); 
    }

    reader.readAsDataURL(file)
  }

  
  return (
    <div>
      <Paper elevation={5} className="register">
    <form id="myForm">

      <TextField
        label={<FormattedMessage {...messages.username} />}
        name="username"
      /><br/>
      <TextField
        label={<FormattedMessage {...messages.password} />}
        name="password"
      /><br/>
      <TextField
        label={<FormattedMessage {...messages.age} />}
        name="age"
      /><br/>
      <input
        accept="image/*"
        id="raised-button-file"
        type="file"
        onChange={(e) => handleImageChange(e)}
        name="img"
      />

      
      
    </form>
    <br/>
        <Button onClick={tst} color="primary" raised><FormattedMessage {...messages.viewprofile} /></Button>
    </Paper>
    </div>
  );
}

RegistrationForm.propTypes = {

};

export default RegistrationForm;
