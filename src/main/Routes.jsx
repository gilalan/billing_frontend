import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import AuthOrApp from './AuthOrApp';
import User from '../users/User';
import Dashboard from '../dashboard/Dashboard';
import BillingCycle from '../billingCycle/BillingCycle';

export default props => {

    //console.log("Routes.jsx...");
    return (
        <Router history={hashHistory}>
            <Route path="/" component={AuthOrApp}>
                <IndexRoute component={Dashboard} />
                <Route path="users" component={User}></Route>
                <Route path="billingCycles" component={BillingCycle}></Route>
            </Route>
            <Redirect from="*" to="/"/>
        </Router>
    )
}