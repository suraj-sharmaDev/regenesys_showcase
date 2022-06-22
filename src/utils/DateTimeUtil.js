/******************************************
 *  Author : Suraj Sharma
 *  Created On : Thu May 06 2021
 *  File : DateTimeUtil.js
 *******************************************/

 export default function dateTimeUtil(timestamp) {
    try {
        const year = timestamp.getFullYear();

        const monthA = timestamp.getMonth() + 1;
        const month = monthA < 10 ? `0${monthA}` : monthA;

        const dayA = timestamp.getDate();
        const day = dayA < 10 ? `0${dayA}` : dayA;

        const hoursA = timestamp.getHours();
        const hours = hoursA < 10 ? `0${hoursA}` : hoursA;

        const minutesA = timestamp.getMinutes();
        const minutes = minutesA < 10 ? `0${minutesA}` : minutesA;

        const dateValue = `${year}-${month}-${day}`;
        const timeValue = `${hours}:${minutes}`;

        return {
            error: false,
            dateValue,
            timeValue
        }
    } catch (error) {

        return {
            error: true,
            message: error
        }
    }
}