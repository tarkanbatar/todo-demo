import React, { useState } from 'react';
import { RiCloseCircleLine, TiEdit } from 'react-icons/all';
import TodoForm from 'app/modules/board/TodoForm';
import { Col, Row } from 'react-bootstrap';

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  return todos.map((todo, index) => (
    <Row className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} style={{ marginTop: '12px' }}>
      <Col></Col>
      <Col>
        <Row>
          <div> {'•'}</div>
          <div style={{ marginLeft: '48px' }} key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" style={{ marginLeft: '8px' }} />
          </div>
        </Row>
      </Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row>
  ));
}

export default Todo;
