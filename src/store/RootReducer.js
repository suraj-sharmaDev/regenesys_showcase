/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Dec 22 2020
 *  File : RootReducer.js
 *******************************************/
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import authReducer from './authentication/Reducers';

/**
 * For server side rendering storage option for persisting wont
 * be accessible
 */

const isClient = typeof window !== 'undefined';
let rootReducer;

if(!isClient) {
    rootReducer = combineReducers({
        authReducer,
    });
}else {
    /**
     * Codes from below this comment is for scenario when
     * app has reached the clients browser where storage is accessible
     */
    const storage = require('redux-persist/lib/storage').default;
    const rootPersistConfig = {
        key: 'primary',
        storage,
        // whitelist: ['authReducer'],
        whitelist: [],
        blacklist: []
    };

    rootReducer = persistReducer(rootPersistConfig, combineReducers({
        authReducer,
    }));
}

export default rootReducer;