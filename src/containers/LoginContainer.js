import React from "react";
import LoginComponent from "../components/LoginComponent";
import * as yup from 'yup';
import {Redirect} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword, setError, loginRequest } from "../actions/loginActions";

const LoginContainer = () => {

  const dispatch = useDispatch();
  const result = useSelector(state => state.loginDetailsReducer);

  const { email, password, emailErrorText, passwordErrorText, userDetails  } = result;
  const loginDetails = { email, password, emailErrorText, passwordErrorText  };

  const setUsernameWrapper = (e) => {
    dispatch(setEmail(e.target.value));
  }

  const setPasswordWrapper = (e) => {
    dispatch(setPassword(e.target.value));
  }

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const validateData = () => {
    schema.isValid(loginDetails).then(function (valid) {
      if (!valid) {
        schema.validate(loginDetails, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => { dispatch(setError(ele)); });
        });
      } else {
        dispatch(loginRequest({email, password}));
        // //Initiated Login Api call
        // login(loginDetails)
        //   .then(({ data }) => {
        //     // success
        //     // set state isLoggedIn as true
        //     dispatch(setUserDetails(data));
        //   })
        //   .catch((error) => {
        //     // TODO show error to user
        //     console.log(error);
        //   });
      }
    });
  };

  if (userDetails.auth_token) {
    return ( <Redirect to="/dashboard" /> );
  }

  return (
    <LoginComponent
      loginDetails={loginDetails}
      setUsernameWrapper={setUsernameWrapper}
      setPasswordWrapper={setPasswordWrapper}
      dispatch={dispatch}
      validateData={validateData}
    />
  );
}

export default LoginContainer;
