import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

//import template ui
import ThemeJacket from '../components/generic/frontend/ui/skins/layouts/template.js';

// Utils
import PageLoader from '../components/helpers/modules/common/PageLoader.js';
import ErrorBoundary from '../components/helpers/modules/error_boundary/ErrorBoundary.js';
//routes
import FrontEndRoutes from './frontend_routes.js';
import DriverRoutes from './driver_routes.js';
import BackEndRoutes from './admin_routes.js';
import AuthRoutes from './auth_routes.js';
import UserRoutes from './user_routes.js';

const WebsiteEntryPoint = () => {
  return (
    <BrowserRouter>
      <ThemeJacket>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <ErrorBoundary>
              <FrontEndRoutes />
              <BackEndRoutes />
              <DriverRoutes />
              <AuthRoutes />
              <UserRoutes />
            </ErrorBoundary>
          </Switch>
        </Suspense>
      </ThemeJacket>
    </BrowserRouter>
  );
};

WebsiteEntryPoint.propTypes = {};

export default WebsiteEntryPoint;
