/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Dec 28 2020
 *  File : AuthenticationService.js
 *******************************************/
import { apiEndPoints } from "config/constants/ApiServiceConstants";
import NetworkUtil from "utils/NetworkUtil";
import {GOOGLE_PROVIDER, FACEBOOK_PROVIDER, oauthLogin} from "../firebase";

class AuthenticationService {
  constructor(appAPIServer) {
    this.appAPIServer = appAPIServer;
  }

  async googleLogin() {
    let result = null;
    await oauthLogin(GOOGLE_PROVIDER)
      .then((res) => {
        result = res;
      })
      .catch((err) => {
        throw err;
      });
    return result;
  }

  async facebookLogin() {
    let result = null;
    await oauthLogin(FACEBOOK_PROVIDER)
      .then((res) => {
        result = res;
      })
      .catch((err) => {
        throw err;
      });
    return result;
  }

  async login() {
    let result = null;

    await this.appAPIServer
      .get(apiEndPoints.customerInfo.fetchOneTodo)
      .then(
        // onFullFilled
        (value) => {
          result = NetworkUtil.buildResult(
            null,
            value.status,
            null,
            value.data
          );
        },

        // onRejected
        (reason) => {
          const { response } = reason;

          result = NetworkUtil.buildResult(
            response?.data?.message,
            response?.status,
            response?.data.message,
            null
          );
        }
      )
      .catch((error) => {
        throw error;
      });

    return result;
  }
}

export default AuthenticationService;
