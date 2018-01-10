import React from 'react';
import { Provider } from 'react-redux';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';


import SplashPage from './splash_page/splash_page';
import SignupContainer from './signup/signup_container';


import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path='/signup' component={SignupContainer} />
      <AuthRoute path='/' component={SplashPage} />
    </Switch>
  </div>
);

export default App;