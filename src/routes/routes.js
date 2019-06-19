import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

//import template ui
import ThemeJacket from '../components/generic/frontend/ui/skins/layouts/template.js';

// Utils
import PageLoader from '../components/helpers/modules/common/PageLoader.js';
import ErrorBoundary from '../components/helpers/modules/error_boundary/ErrorBoundary.js';

//routes
// import FrontEndRoutes from './frontend_routes.js';



// Routes
const FrontEndRoutes = lazy(() => import('./frontend_routes.js'));
const DriverRoutes = lazy(() => import('./driver_routes.js'));
const BackEndRoutes = lazy(() => import('./admin_routes.js'));
const AuthRoutes = lazy(() => import('./auth_routes.js'));
const UserRoutes = lazy(() => import('./user_routes.js'));


const WebsiteEntryPoint = () => {
  return (
    <Suspense fallback={<PageLoader />}>
              <BrowserRouter>
                <ThemeJacket>
                    <Switch>
                      <ErrorBoundary>
                        <FrontEndRoutes />
                        <BackEndRoutes />
                        <DriverRoutes />
                        <AuthRoutes />
                        <UserRoutes />
                      </ErrorBoundary>
                    </Switch>
                </ThemeJacket>
              </BrowserRouter>
      </Suspense>
  );
};

WebsiteEntryPoint.propTypes = {};

export default WebsiteEntryPoint;
