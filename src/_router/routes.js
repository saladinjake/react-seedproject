import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
// Utils
import PageLoader from './helpers/modules/common/PageLoader.js';
//import history
import { ThemeJacket } from '../components/ui/skins/';
const WebsiteEntryPoint = ({imageUrl}) => {
  return (
    <BrowserRouter>

        
       {/* {{nested routes goes here}} */}
       <div>

        <Suspense fallback={<PageLoader />}>
           <ThemeJacket>
	           <Switch>
	                <FrontEndRoutes/>
	                <BackendRoutes/>
	                <DriverRoutes/>
	                <AuthRoutes/>
	                <UserRoutes/>

	                

	           </Switch>
	       </ThemeJacket>
         </Suspense>
       </div>
    </BrowserRouter>
  );
};


WebsiteEntryPoint.propTypes = {
  location: PropTypes.object, // React Router Passed Props
  imageUrl: propTypes.string
};


export { WebsiteEntryPoint } ;