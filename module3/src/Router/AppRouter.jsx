import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import ErrorPage from '../Pages/ErrorPage';
import Layout from '../Layout';
import Enquiries from '../Pages/Enquiries';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Profile} exact />
                    <Route path="/enquiries" component={Enquiries} />
                    {/* <Route path="/dashboard/" component={Dashboard} /> */}
                    <Route path="/course/:id" component={Dashboard} />
                    <Route path="/courses" component={Profile} />
                    <Route path="/home" component={Layout} />
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;