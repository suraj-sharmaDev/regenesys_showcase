/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Dec 22 2020
 *  File : index.js
 *******************************************/
import axios from 'axios';
import {ApiServiceConstants} from '../../config/constants';

import AxiosInterceptors from './AxiosInterceptors';

import AuthenticationService from './AuthenticationService';
import FormService from './FormService';
import ContactService from './ContactService';

// creating an axios api server instance with apiServerConfig.
const appAPIServer = axios.create(ApiServiceConstants.apiServerConfig);

// instantiating individual-api services with appAPIServer.
/* NOTE: all individual-api  service instantiation should be here. */
const authenticationService = new AuthenticationService(appAPIServer);
const formService = new FormService(appAPIServer);
const contactService = new ContactService(appAPIServer);

// instantiating axios interceptors.
const axiosInterceptors = new AxiosInterceptors(appAPIServer);

// extracting request-interceptors defined in AxiosInterceptors and applying
// them to appAPIServer axios instance.
Object.values(axiosInterceptors.requestInterceptors).forEach((requestInterceptor) => {
	appAPIServer.interceptors.request.use(requestInterceptor);
});

// extracting response-interceptors defined in AxiosInterceptors and applying
// them to appAPIServer axios instance.
Object.values(axiosInterceptors.responseInterceptors).forEach((responseInterceptor) => {
	appAPIServer.interceptors.response.use(
		responseInterceptor.onFullFilled,
		responseInterceptor.onRejected,
	);
});

// console.log(appAPIServer.interceptors.request);

export {
	appAPIServer,
	authenticationService,
	formService,
	contactService
};
