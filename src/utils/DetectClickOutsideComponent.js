/******************************************
 *  Author : Suraj Sharma
 *  Created On : Wed Apr 06 2022
 *  File : DetectClickOutsideComponent.js
 *******************************************/
import {useEffect} from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, callback, refresh = false) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, refresh]);
}

export default useOutsideAlerter;
