import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
// Utils
import PageLoader from './helpers/modules/common/PageLoader.js';
//import history
import { ThemeJacket } from '../components/ui/skins/';
const WebsiteEntryPoint = ({imageUrl}) => {
  return (
    <BrowserRouter>
       {/* {{nested routes goes here}} */}
       <ThemeJacket>
	         <Suspense fallback={<PageLoader />}>
		           <Switch>
		                <FrontEndRoutes/>
		                <BackEndRoutes/>
		                <DriverRoutes/>
		                <AuthRoutes/>
		                <UserRoutes/>
		           </Switch>
	         </Suspense>
       </ThemeJacket>
    </BrowserRouter>
  );
};


WebsiteEntryPoint.propTypes = {
  location: PropTypes.object, // React Router Passed Props
  imageUrl: propTypes.string
};


export { WebsiteEntryPoint } ;