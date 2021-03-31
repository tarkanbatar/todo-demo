import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { IRootState } from 'app/shared/reducers';
import { register } from 'app/shared/reducers/authentication';
import RegisterModal from './register-modal';

export interface IRegisterProps extends StateProps, DispatchProps, RouteComponentProps<any> {}

export const Register = (props: IRegisterProps) => {
  const [showModal, setShowModal] = useState(props.showModal);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleRegister = (username, password, passwordConfirm) => props.register(username, password, passwordConfirm);

  const handleClose = () => {
    setShowModal(false);
    props.history.push('/');
  };

  const { location, isAuthenticated } = props;
  const { from } = (location.state as any) || { from: { pathname: '/', search: location.search } };
  if (isAuthenticated) {
    return <Redirect to={from} />;
  }
  return <RegisterModal showModal={showModal} handleRegister={handleRegister} handleClose={handleClose} loginError={props.loginError} />;
};

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError,
  showModal: authentication.showModalLogin,
});

const mapDispatchToProps = { register };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Register);
