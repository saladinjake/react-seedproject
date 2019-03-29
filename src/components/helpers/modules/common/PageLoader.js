import React from 'react';
import PropTypes from 'prop-types';
// Material UI


const styles = {
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  
};


const PageLoader = ({ classes }) => {
  return (
    <div className={classes.progress}>
     
    </div>
  );
};

PageLoader.propTypes = {
  classes: PropTypes.object.isRequired, 
};

export default withStyles(styles)(PageLoader);