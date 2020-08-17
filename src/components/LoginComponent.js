import React from "react";
import { Button, Form, FormGroup, Label, Input, Container,
  Card, CardBody, Row, Col, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const LoginComponent = ({ state, dispatch, validateData }) => {
  let { username, password, usernameError, passwordError } = state;
  const setUsernameWrapper = (e) => {
    dispatch({value: e.target.value, key: 'username'});
  }
  const setPasswordWrapper = (e) => {
    dispatch({value: e.target.value, key: 'password'});
  }
  return (
    <Container>
      <Row className="align-items-center">
        <Col sm={{size: 6, offset: 3}} className="mt-5">
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail"
                    placeholder="with a placeholder" value={username}
                    onChange={setUsernameWrapper} invalid={(usernameError !== null)} />
                  <FormFeedback>{usernameError}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword"
                    placeholder="password placeholder" value={password}
                    onChange={setPasswordWrapper} invalid={(passwordError !== null)} />
                  <FormFeedback>{passwordError}</FormFeedback>
                </FormGroup>
                <Button onClick={validateData}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginComponent;

LoginComponent.prototype = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  logValues: PropTypes.func.isRequired
}

// LoginComponent.defaultProps = {
//   username: 'test'
// }
