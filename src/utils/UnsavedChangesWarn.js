/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Mar 02 2021
 *  File : UnsavedChangesWarn.js
 *******************************************/

import { useEffect } from 'react';
import Router from 'next/router';

const useWarnIfUnsavedChanges = (unsavedChanges) => {

    const message = 'Do you want to leave?';

    useEffect(() => {
        const routeChangeStart = url => {
            /**
             * Check if the url is just the same url with query parameters added
             * If its the same url then router change has not occurred yet!
             */
            const oldUrl = Router.asPath.split('?')[0];
            const newUrl = url.split('?')[0]; 
            if (oldUrl !== newUrl && unsavedChanges && !confirm(message)) {
                // console.log(url.split("?")[0])
                console.log(Router.asPath, url);
                Router.events.emit('routeChangeError');
                Router.replace(Router, Router.asPath);
                throw 'Abort route change. Please ignore this error.';
            }
        };

        const beforeunload = e => {
            if (unsavedChanges) {
                e.preventDefault();
                e.returnValue = message;
                return message;
            }
        };

        window.addEventListener('beforeunload', beforeunload);
        Router.events.on('routeChangeStart', routeChangeStart);

        return () => {
            window.removeEventListener('beforeunload', beforeunload);
            Router.events.off('routeChangeStart', routeChangeStart);
        };
    }, [unsavedChanges]);
};

export default useWarnIfUnsavedChanges;