import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/Dashboard';
import User from '../users/User';
import BillingCycle from '../billingCycle/BillingCycle';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard}></Route>
        <Route path="/users" component={User}></Route>
        <Route path="/billingCycles" component={BillingCycle}></Route>
        <Redirect from="*" to="/"/>
    </Router>
)