import React, { useReducer } from "react";
import LoginComponent from "../components/LoginComponent";
import * as yup from 'yup';
import apiHelper from "../apis/apiHelper";
import ProductList from "../components/ProductList"
import loginDetailsReducer from "../reducers/loginDetailsReducer"
import { LOGIN_REDUCER } from "../shared/actionConstants";

const LoginContainer = () => {
  const initialState = {
    email: "",
    password: "",
    emailErrorText: "",
    passwordErrorText: "",
    userDetails: {},
  };

  const [loginDetails, dispatch] = useReducer(loginDetailsReducer, initialState);

  const { email, password, userDetails  } = loginDetails

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const validateData = () => {
    schema.validate({ email: email, password: password }, { abortEarly: false })
    .then(() => {
      apiHelper('post', 'https://api.taiga.io/api/v1/auth',
        {username: email, password: password, type: 'normal'}).then((data) => {
        dispatch({ type: LOGIN_REDUCER.SET_USER_DETAILS, value: data });
        console.log(userDetails)
      })
    })
    .catch((err) => {
      err.inner.forEach((ele) => {
        dispatch({ type: `SET_${ele.path.toUpperCase()}_ERROR`, value: ele.message });
      });
    });
  };

  return (
    <LoginComponent loginDetails={loginDetails} dispatch={dispatch} validateData={validateData} />
  );
}

export default LoginContainer;
