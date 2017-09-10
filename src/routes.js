import React from 'react';
import { Route } from 'react-router';

import App from './App';
import AuthPage from '../src/components/Header/AuthPage';

export default (
    <Route component={App} path='/'>
        <Route component={AuthPage} path='auth' />
    </Route>        
);