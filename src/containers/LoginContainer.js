import React, { useReducer } from "react";
import LoginComponent from "../components/LoginComponent";
import * as yup from 'yup';
import login from "../apis/loginApi";
import ProductList from "../components/ProductList"
import { loginDetailsReducer, initialState } from "../reducers/loginDetailsReducer"
import { LOGIN_REDUCER } from "../shared/actionConstants";
import DashboardContainer from "./DashboardContainer";
import {Redirect} from "react-router-dom";

const LoginContainer = () => {

  const [loginDetails, dispatch] = useReducer(loginDetailsReducer, initialState);

  const { userDetails } = loginDetails;

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const validateData = () => {
    schema.isValid(loginDetails).then(function (valid) {
      if (!valid) {
        schema.validate(loginDetails, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => {
            dispatch({
              type: `SET_${ele.path.toUpperCase()}_ERROR`,
              value: ele.message,
            });
          });
        });
      } else {
        //Initiated Login Api call
        login(loginDetails)
          .then(({ data }) => {
            // success
            // set state isLoggedIn as true
            dispatch({ type: LOGIN_REDUCER.SET_USER_DETAILS, value: data });
          })
          .catch((error) => {
            // TODO show error to user
            console.log(error);
          });
      }
    });
  };

  if (userDetails.auth_token) {
    return ( <Redirect to="/dashboard" /> );
  }

  return (
    <LoginComponent loginDetails={loginDetails} dispatch={dispatch} validateData={validateData}/>
  );
}

export default LoginContainer;
