/******************************************
 *  Author : Suraj Sharma
 *  Created On : Thu May 05 2022
 *  File : ContactService.jsx
 *******************************************/
import { apiEndPoints } from "config/constants/ApiServiceConstants";
import NetworkUtil from "utils/NetworkUtil";

class ContactService {
  constructor(appAPIServer) {
    this.appAPIServer = appAPIServer;
  }

  async contactUs(params) {
    let result = null;

    await this.appAPIServer
      .post(apiEndPoints.contactApi, {
        ...params,
      })
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

export default ContactService;
