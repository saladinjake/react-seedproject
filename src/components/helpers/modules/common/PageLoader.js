import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './PageLoader.scss';
const styles = theme => ({
  progress: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: theme.spacing.unit * 5,
  },
});

const PageLoader = ({ classes }) => {
  return (
    <div className={classes.progress}>
              <CircularProgress />
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <p>~</p>
              <p>~</p>
              <p>Loading...</p> 
    </div>
  );
};

PageLoader.propTypes = {
  classes: PropTypes.object.isRequired, // Material UI Injected
};

export default withStyles(styles)(PageLoader);
