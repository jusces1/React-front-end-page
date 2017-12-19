import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import LoggedOut  from '../LoggedOutHeader/index';
import LoggedIn  from '../LoggedInHeader/index';


function Header() {
  return (
    <div>
      {(localStorage.getItem("name") != "" && localStorage.getItem("name")) ? <LoggedIn name={localStorage.getItem("name")} /> : 
        <LoggedOut />
      }
    </div>
  );
}

Header.propTypes = {

};

export default Header;
