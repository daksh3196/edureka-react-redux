import React from 'react';
import Cookies from 'js-cookie';
import Enquiries from '../Pages/Enquiries';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const accessToken = Cookies.get('token');
    const isAuthenticated = !!accessToken;

    if(isAuthenticated){
        return <Route {...props}/>
    }
    else{
        return <Redirect to="/" />
    }
}

export default PrivateRoute;