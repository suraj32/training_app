import React from "react";
import { Button, Form, FormGroup, Label, Input, Container,
  Card, CardBody, Row, Col, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const LoginComponent = ({ username, password, setUsername, setPassword, logValues }) => {
  const setUsernameWrapper = (e) => {
    setUsername(e.target.value);
  }
  const setPasswordWrapper = (e) => {
    setPassword(e.target.value);
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
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={username} onChange={setUsernameWrapper} />
                  <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" value={password} onChange={setPasswordWrapper} />
                  <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                </FormGroup>
                <Button onClick={logValues}>Submit</Button>
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
