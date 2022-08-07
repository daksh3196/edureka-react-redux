import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import ErrorPage from '../Pages/ErrorPage';
import Layout from '../Layout';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/home" component={Layout} />
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;