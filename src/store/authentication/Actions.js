/* eslint-disable no-unused-vars */
/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Dec 22 2020
 *  File : Actions.js
 *******************************************/
import {
    RESET_AUTH_STATE,
    UPDATE_CREDENTIALS
} from './Types';

export function resetAuthState() {
    return {
        type: RESET_AUTH_STATE,
        payload: null,
    };
}

export function updateCredentials({
    data
}) {
    return {
        type: UPDATE_CREDENTIALS,
        payload: data,
    };
}