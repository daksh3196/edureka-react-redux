import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import ErrorPage from '../Pages/ErrorPage';
import Layout from '../Layout';
import Enquiries from '../Pages/Enquiries';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} exact />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/enquiries" component={Enquiries} />
                    {/* <Route path="/dashboard/" component={Dashboard} /> */}
                    <PrivateRoute path="/course/:id" component={Dashboard} />
                    <PrivateRoute path="/courses" component={Profile} />
                    <PrivateRoute path="/home" component={Layout} />
                    <PrivateRoute component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;