import { LOGIN_REDUCER } from "../shared/actionConstants"

export const setEmail = email => {
  return {
    type: LOGIN_REDUCER.SET_EMAIL,
    value: email
  }
}

export const setPassword = password => {
  return {
    type: LOGIN_REDUCER.SET_PASSWORD,
    value: password
  }
}

export const setError = (ele) => {
  return {
    type: `SET_${ele.path.toUpperCase()}_ERROR`,
    value: ele.message
  }
}

export const resetError = type => {
  return {
    type,
    value: ''
  }
}

export const loginRequest = data => {
  return {
    type: LOGIN_REDUCER.LOGIN_REQUEST,
    value: data
  }
}

export const setUserDetails = data => {
  return {
    type: LOGIN_REDUCER.SET_USER_DETAILS,
    value: data
  }
}

export const loginFailed = error => {
  return {
    type: LOGIN_REDUCER.LOGIN_FAILED,
    value: error
  }
}
