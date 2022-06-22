/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Apr 26 2021
 *  File : GetTypeOfDevice.js
 *******************************************/

 export default function GetTypeOfDevice() {
    const isMobile = {
        Android() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // if device is a mobile it will return array of details
    // if it returns null then device is desktop

    return isMobile.any() === null ? 'desktop' : 'mobile';
}