import './board.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, Col, Row } from 'reactstrap';
import { FormControl } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Checkbox from 'react-bootstrap';

export type IHomeProp = StateProps;

export const Board = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Col md="9">
        {account && account.login ? (
          <div>
            <Alert color="success">You are logged in as user {account.login}.</Alert>
          </div>
        ) : (
          <div>
            <br></br>
          </div>
        )}
        <h2>To-Do Board</h2>
        <p className="lead">Add new items to your list from below:</p>
        <a rel="noopener noreferrer"></a>
        <br></br>
        <br></br>
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Board);
