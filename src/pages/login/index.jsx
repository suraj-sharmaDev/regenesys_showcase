/******************************************
 *  Author : Suraj Sharma
 *  Created On : Tue Apr 05 2022
 *  File : index.jsx
 *******************************************/
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoginBody } from "components/login";
import { EMAIL_REGEX } from "config/constants/InputValidationConstants";
import {googleLogin, facebookLogin, emailLogin} from 'store/authentication/ThunkActions';
import { GenMetaInformation } from 'components/commons';

const LoginPage = (props) => {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState({
    email: false,
    password: false,
  });

  const validateFormData = (type, data) => {
    if (type === "password") {
      return !(data.length > 8);
    }
    if (type === "email") {
      return !EMAIL_REGEX.test(data);
    }
  };

  const inputHandler = (e, type) => {
    const newState = { ...state };
    const newError = { ...error };
    newState[type] = e.target.value;
    newError[type] = validateFormData(type, e.target.value);
    setState(newState);
    setError(newError);
  };

  const loginHandler = (e, type) => {
    e.preventDefault();
    switch(type) {
        case 'EMAIL_PASSWORD': {
            const newError = {...error};
            Object.keys(newError).map((d)=>{
              newError[d] = validateFormData(d, state[d])
            });
            
            if(newError.email || newError.password) {
              setError(newError);
              return;
            }
            alert('Submitted');
            return;
        }
        case 'GOOGLE': {
          dispatch(googleLogin());
          return;
        }
        case 'FACEBOOK': {
          dispatch(facebookLogin());
          return;
        }
        case 'LINKEDIN': {
          return;
        }
        case 'APPLE': {
          return;
        }
        default:
            break;
    }
    alert(type);
  };

  return (
    <>
      <GenMetaInformation pageName={"login"} />
      <LoginBody
        error={error}
        inputHandler={inputHandler}
        loginHandler={loginHandler}
      />
    </>
  );
};

export default LoginPage;
