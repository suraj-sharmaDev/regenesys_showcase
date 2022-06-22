/******************************************
 *  Author : Suraj Sharma
 *  Created On : Thu Jan 07 2021
 *  File : GeolocationUtil.js
 *******************************************/

// eslint-disable-next-line no-extend-native
Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

class GeolocationUtil {
  constructor() {
    if (typeof window === "undefined") return;
    const isExpired = this.isCacheDataExpired();
    if (isExpired) {
      this.getGeolocationBasedOnIp()
        .then((res) => {
          const { country_name } = res;
          if (!country_name) return;
          this.setGeoInfo(country_name);
        })
        .catch((err) => console.log("err"));

      return;
    }

    this.state = this.getCachedData();
  }

  getGeolocation() {
    // this function when called will provide lat and long
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getGeolocationBasedOnIp = async () => {
    // this function when called will provide location data
    // based on ip
    try {
      const response = await fetch("https://geolocation-db.com/json/");
      const result = await response.json();
      console.log("Refreshing geolocation info");
      return result;
    } catch (error) {
      return error;
    }
  };

  getGeoInfo() {
    return this.state;
  }

  setGeoInfo(country) {
    if (typeof window === "undefined") return;
    if (country == null || country.length === 0 || typeof country !== "string")
      return;

    const today = new Date();
    today.addHours(2);
    this.state = {
      country,
      timestamp: today,
    };
    window.localStorage.setItem("savedGeoInfo", JSON.stringify(this.state));
  }

  getCachedData() {
    if (typeof window === "undefined") return;
    const savedGeoInfo = window.localStorage.getItem("savedGeoInfo");
    if (savedGeoInfo)
      return {
        country: JSON.parse(savedGeoInfo).country,
        timestamp: new Date(JSON.parse(savedGeoInfo).timestamp),
      };
    return {
      country: null,
      timestamp: null,
    };
  }

  isCacheDataExpired() {
    const cachedData = this.getCachedData();
    const today = new Date();
    if (cachedData.country == null) return true;
    return today > cachedData.timestamp;
  }
}

export default GeolocationUtil;
