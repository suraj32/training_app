import { render, fireEvent, waitFor, screen, waitForElement } from '@testing-library/react'
import LoginContainer from '../LoginContainer'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { loginDetailsReducer } from '../../reducers/loginDetailsReducer'
import projectsReducer from '../../reducers/projectsReducer'
import React from 'react';

describe("LoginContainer", () => {
  it("Must return Login component", () => {
    const { asFragment } = render(
      <Provider store={createStore(combineReducers({loginDetailsReducer, projectsReducer}))}>
        <LoginContainer />
      </Provider>
    )
    console.log(asFragment())
    expect(asFragment()).toMatchSnapshot();
  })

  it("Must validate email/password field", async () => {
    const { queryByText } = render(
      <Provider store={createStore(combineReducers({loginDetailsReducer, projectsReducer}))}>
        <LoginContainer />
      </Provider>
    )

    // fireEvent.click(queryByText("Submit"))
    // let emailError = await waitForElement(() => queryByText('email is a required field'))
    // expect(emailError).toBeDefined();
    // const passwordError = await waitForElement(() => queryByText('password is a required field'))
    // expect(passwordError).toBeDefined();

    fireEvent.change(screen.getByLabelText(/email/i), { taregt: { value: 'test' } })
    fireEvent.click(queryByText("Submit"))
    emailError = await waitForElement(() => queryByText('email must be a valid email'))

    expect(asFragment()).toMatchSnapshot();
    expect(emailError).toBeDefined();
  })
})
