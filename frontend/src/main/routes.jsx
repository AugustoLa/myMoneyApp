import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path='billingCycles' component={BillingCycle}></Route>
        </Route>
        <Redirect from='*' to='/'></Redirect>
    </Router>
)