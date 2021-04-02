import './board.scss';

import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, Col, Row } from 'reactstrap';
import { Button, Form, FormText } from 'react-bootstrap';

export type IHomeProp = StateProps;

export const TodoForm = props => {
  const [inputData, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: inputData,
    });
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit} className="todo-form">
      <Row>
        <Col></Col>
        <Col md="9">
          <h2>To-Do Board</h2>
          <p className="lead">Add new items to your list from below:</p>
          <a rel="noopener noreferrer"></a>
          <br></br>
          <Button onClick={handleSubmit}>ADD</Button>
          <input type="text" value={inputData} style={{ marginLeft: '8px' }} onChange={handleChange} />
        </Col>
        <Col></Col>
      </Row>
    </Form>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(TodoForm);
