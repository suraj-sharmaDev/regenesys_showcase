/******************************************
 *  Author : Suraj Sharma
 *  Created On : Fri May 13 2022
 *  File : DownloadFromBlob.js
 *******************************************/
export default function downloadFromBlob(blob, fileName) {
    try {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}