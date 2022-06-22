/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Apr 26 2022
 *  File : FormService.js
 *******************************************/
 import { apiEndPoints } from "config/constants/ApiServiceConstants";
 import {NetworkUtil, GeolocationUtil} from "utils";

 const geoInfo = new GeolocationUtil();
 
 class FormService {
   constructor(appAPIServer) {
     this.appAPIServer = appAPIServer;
   }

   async requestCall(params) {
    let result = null;
    const {country} = geoInfo.getGeoInfo();

    await this.appAPIServer
      .post(apiEndPoints.formsApi.callRequest, {
          ...params,
          country: country
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

  async downloadBrochure(params) {
    let result = null;
    const {country} = geoInfo.getGeoInfo();

    await this.appAPIServer
      .post(apiEndPoints.formsApi.brochure, {
          ...params,
          country: country
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

export default FormService;