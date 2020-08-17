import React, { useReducer } from "react";
import LoginComponent from "../components/LoginComponent";
import * as yup from 'yup';
import apiHelper from "../apis/apiHelper";
import ProductList from "../components/ProductList"

const LoginContainer = () => {

  const initialState = {
    username: "",
    password: "",
    usernameError: null,
    passwordError: null
  };

  function reducer(prevState, {value, key}) {
    return {...prevState, [key]: value};
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [usernameError, setUsernameError] = useState(null);
  // const [passwordError, setPasswordError] = useState(null);

  let schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const validateData = () => {
    // schema.validate({ username, password }).catch(function (err) {
    //   console.log(err.name);
    //   console.log(err.errors);
    // });
    schema.validate({ username: state.username, password: state.password }, { abortEarly: false })
    .then(() => {
      dispatch({value: null, key: 'usernameError'});
      dispatch({value: null, key: 'passwordError'});
      apiHelper('post', 'https://api.taiga.io/api/v1/auth',
        {username: state.username, password: state.password, type: 'normal'}).then((response) => {
        console.log(response)
      })
    })
    .catch((err) => {
      err.inner.forEach((ele) => {
        // dispatch({ type: `${ele.path}Error`, value: ele.message });
        // if (ele.path === 'username') setUsernameError(ele.message);
        // if (ele.path === 'password') setPasswordError(ele.message);
        if (ele.path === 'username') dispatch({value: ele.message, key: 'usernameError'});
        if (ele.path === 'password') dispatch({value: ele.message, key: 'passwordError'});
        // console.log(ele.path, ele.message);
      });
    });
  };

  return (
    // <LoginComponent username={username} password={password} setUsername={setUsername}
    //   setPassword={setPassword} validateData={validateData} usernameError={usernameError}
    //   passwordError={passwordError} />
    <LoginComponent state={state} dispatch={dispatch} validateData={validateData} />
  );
}

export default LoginContainer;
