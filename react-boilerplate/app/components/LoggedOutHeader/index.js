import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
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

function LoggedOut(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex} >
            PcAcademyProjecte
          </Typography>
          <Link to="/login"><Button color="contrast">{<FormattedMessage {...messages.Login} />}</Button></Link>
          <Link to="/registration"><Button color="contrast">{<FormattedMessage {...messages.Register} />}</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

LoggedOut.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoggedOut);