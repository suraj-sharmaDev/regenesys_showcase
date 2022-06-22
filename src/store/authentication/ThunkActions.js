/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Dec 22 2020
 *  File : ThunkActions.js
 *******************************************/

import {apiResponseStatuses} from 'config/constants/ApiServiceConstants';
import * as authActions from './Actions';
import { authenticationService } from 'services/api';

export const resetAuthState = () => async (dispatch) => {
	dispatch(authActions.resetAuthState(apiResponseStatuses.IDLE));
};

export const googleLogin = () => async (dispatch) => {
	authenticationService.googleLogin()
	.then((result)=> {
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	})
}

export const facebookLogin = () => async (dispatch) => {
	authenticationService.facebookLogin()
	.then((result)=> {
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	})
}

export const emailLogin = ({data}) => async (dispatch) => {
	dispatch(authActions.updateCredentials({data}));
}