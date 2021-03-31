import React from 'react';

import { Alert, Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';

export interface IRegisterModalProps {
  showModal: boolean;
  loginError: boolean;
  handleRegister: (username: string, password: string, passwordConfirm: string) => void;
  handleClose: () => void;
}

class RegisterModal extends React.Component<IRegisterModalProps> {
  handleSubmit = (event, errors, { username, password, passwordConfirm }) => {
    const { handleRegister } = this.props;
    handleRegister(username, password, passwordConfirm);
  };

  render() {
    const { loginError, handleClose } = this.props;

    return (
      <Modal isOpen={this.props.showModal} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false}>
        <AvForm onSubmit={this.handleSubmit}>
          <ModalHeader id="login-title" data-cy="loginTitle" toggle={handleClose}>
            Sign Up
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                {loginError ? (
                  <Alert color="danger" data-cy="loginError">
                    <strong>Failed to sign in!</strong> Please check your credentials and try again.
                  </Alert>
                ) : null}
              </Col>
              <Col md="12">
                <AvField
                  name="username"
                  label="Username"
                  placeholder="Your username"
                  required
                  errorMessage="Username cannot be empty!"
                  autoFocus
                  data-cy="username"
                />
                <AvField
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Your password"
                  required
                  errorMessage="Password cannot be empty!"
                  data-cy="password"
                />
                <AvField
                  name="passwordConfirm"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  required
                  errorMessage="Password cannot be empty!"
                  data-cy="passwordConfirm"
                />
              </Col>
            </Row>
            <div className="mt-1">&nbsp;</div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={handleClose} tabIndex={1}>
              Cancel
            </Button>{' '}
            <Button color="primary" type="submit" data-cy="submit">
              Sign in
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

export default RegisterModal;
