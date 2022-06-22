/******************************************
 *  Author : Suraj Sharma
 *  Created On : Thu Mar 04 2021
 *  File : UseStateWithCallback.js
 *******************************************/
import {useState, useRef, useCallback, useEffect} from 'react';

const useStateCallback = (initialState) => {
    const [state, setState] = useState(initialState);
    const cbRef = useRef(null); // mutable ref to store current callback
  
    const setStateCallback = useCallback((state, cb) => {
      cbRef.current = cb; // store passed callback to ref
      setState(state);
    }, []);
  
    useEffect(() => {
      // cb.current is `null` on initial render, so we only execute cb on state *updates*
      if (cbRef.current) {
        cbRef.current(state);
        cbRef.current = null; // reset callback after execution
      }
    }, [state]);
  
    return [state, setStateCallback];
}

export default useStateCallback;