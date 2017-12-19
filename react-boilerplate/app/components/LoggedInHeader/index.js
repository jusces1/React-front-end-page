
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import './LoggedIn.css';
import Meniu from 'containers/Meniu/index';
const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function LoggedIn(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex} >
            PcAcademyProject
          </Typography>
          <Button className="button" >{props.name}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}




LoggedIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoggedIn);