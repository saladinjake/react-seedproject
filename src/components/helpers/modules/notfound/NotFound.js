import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const styles ={

};

const NoMatchPage = ({ classes }) => (
  <div className={`container ${classes.wrapper}`}>
    <div className="row">
      <div className="col-md-8">
        <img className={classes.logo} src="/dist/images/logo.svg" alt="careem-logo" />
        <div>
          404
        </div>
        <div>
          This is an error.
        </div>
     

       
      </div>
      <div className="col-md-4">
        <img src="/dist/images/sad-face.svg" className={classes.sadFaceIcon} alt="sad-face" />
      </div>
    </div>
  </div>
);

NoMatchPage.propTypes = {

};

export {NoMatchPage};