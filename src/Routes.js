import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_TOKEN } from './services/_api/Constants';
// Utils
import PageLoader from './modules/common/PageLoader';

// Routes
//const AuthLayout = lazy(() => import('./modules/auth/layout/MainLayout'));
//const LoginPage = lazy(() => import('./modules/public/login/LoginPage'));
//const NoMatchPage = lazy(() => import('./modules/not-found/NoMatchPage'));

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        
        <Route component={NoMatchPage} />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
