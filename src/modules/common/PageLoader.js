import React from 'react';
import PropTypes from 'prop-types';

const PageLoader = ({ classes }) => {
  return (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
};

PageLoader.propTypes = {
  classes: PropTypes.object.isRequired, // Material UI Injected
};


export { PageLoader }