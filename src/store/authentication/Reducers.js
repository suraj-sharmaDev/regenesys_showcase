/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Dec 22 2020
 *  File : Reducers.js
 *******************************************/
import authStatuses from "config/constants/AuthConstants";
import { RESET_AUTH_STATE, UPDATE_CREDENTIALS } from "./Types";

const initialState = {
  authStatus: authStatuses.LOGGED_OUT,
  message: null,
  credentials: {
    email: "",
    phoneNumber: "",
    refreshToken: "",
    token: "",
    name: "",
    userId: "",
    profileImage: null,
    hasProfileImage: false,
    userType: null, // can be null or candidate or teams
  },
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_AUTH_STATE:
      return {
        authStatus: authStatuses.LOGGED_OUT,
        credentials: {
          email: action.email ?? "",
          phoneNumber: "",
          refreshToken: "",
          token: "",
          name: "",
          userId: "",
          profileImage: null,
          hasProfileImage: false,
          userType: null
        },
        message: action.message ?? null,
      };

    case UPDATE_CREDENTIALS:
      return {
        ...state,
        authStatus: authStatuses.AUTHENTICATED,
      };

    default:
      return state;
  }
}
