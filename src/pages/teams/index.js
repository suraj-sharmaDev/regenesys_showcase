/******************************************
 *  Author : Suraj Sharma
 *  Created On : Sat May 14 2022
 *  File : index.js
 *******************************************/
import React from 'react';
import { useSelector } from "react-redux";

import authStatuses from 'config/constants/AuthConstants';
import Login from './login';
import Dashboard from './dashboard';

const Index = props => {
    const auth = useSelector((state) => state.authReducer);
    const {authStatus} = auth;
    const isAuthenticated = authStatus !== authStatuses.LOGGED_OUT;

    return isAuthenticated ? <Dashboard /> : <Login />;
}

export default Index;