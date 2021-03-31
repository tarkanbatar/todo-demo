import React, { Component } from 'react';
import './App.css';
import { FormControl, Row, Nav, NavItem, Tab, Col, Button } from 'react-bootstrap';
import Checkbox from 'react-bootstrap';

class CreateListText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      inputText: '',
      inputItemText: '',
      listEles: [],
      selectedTodo: '',
      listEleItems: [],
      model: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/board', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          data: data,
        });

        this._generateListEles(data);
        this._generateListEleItems(data);
      })
      .catch(error => console.error(error));
  }

  _generateListEles = data => {
    const listItems = data.map(item => {
      return (
        <NavItem key={item.id} onClick={this._todoClicked}>
          <Button size={'sm'} style={{ float: 'left' }} onClick={e => this._handleRemoveTODOList(item.name)}>
            x
          </Button>
          {item.name}
        </NavItem>
      );
    });

    this.setState({
      listEles: listItems,
    });
  };

  _generateListEleItems = data => {
    let listEleItemsTmp = data.map((item, i) => {
      return item.items.map((single, j) => {
        return (
          <div className="clearfix">
            <Tab.Pane className="clearfix" eventKey={item.name} style={{ overflow: 'hidden' }}>
              <Button size={'sm'} style={{ float: 'left' }} onClick={e => this._handleRemoveItem(i, j)}>
                X
              </Button>
              <Checkbox
                inline={true}
                checked={single.completed}
                className="clearfix"
                onChange={e => this._handleCheckboxChange(i, j)}
                name={single.text}
              >
                {single.text}
                {single.deadline}
              </Checkbox>
            </Tab.Pane>
          </div>
        );
      });
    });

    // listEleItemsTmp += this._addItemInputText;

    this.setState({
      listEleItems: listEleItemsTmp,
    });
  };

  _todoClicked = e => {
    let myText = '';
    if (e.target.text != null) myText = e.target.text.substring(1);
    this.setState({
      selectedTodo: myText,
    });
  };

  _handleKeyPress = e => {
    if (e.key === 'Enter') {
      console.log('do validate');

      fetch('http://localhost:9000/board?list_name=' + this.state.inputText, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          this.setState({
            data: data,
          });

          this._generateListEles(data);
          this._generateListEleItems(data);
          this.setState({ inputText: '' });
        })
        .catch(error => console.error(error));
    }
  };

  _handleItemInputKeyPress = e => {
    if (e.key === 'Enter') {
      fetch('http://localhost:8080/add_item_to_board?list_name=' + this.state.selectedTodo + '&item_text=' + this.state.inputItemText, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          this.setState({
            data: data,
          });

          this._generateListEles(data);
          this._generateListEleItems(data);
          this.setState({
            inputItemText: '',
          });
        })
        .catch(error => console.error(error));
    }
  };

  _handleChange = e => {
    this.setState({
      inputText: e.target.value,
    });
  };

  _handleItemInputChange = e => {
    this.setState({
      inputItemText: e.target.value,
    });
  };

  _handleCheckboxChange = (i, j) => {
    let temp = Object.assign({}, this.state.data);
    temp[i].items[j].completed = !temp[i].items[j].completed;
    console.log('degisti');
    console.log(temp[i].items[j].text);

    console.log(this.state.data);

    fetch('http://localhost:9000/change_item_status?list_name=' + this.state.selectedTodo + '&item_text=' + temp[i].items[j].text, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this._generateListEles(data);
        this._generateListEleItems(data);

        this.setState({
          data: temp,
        });
        console.log(this.state.listEleItems);
      })
      .catch(error => console.error(error));
  };

  _handleRemoveItem = (i, j) => {
    fetch(
      'http://localhost:9000/remove_todo_list_item?list_name=' + this.state.selectedTodo + '&item_text=' + this.state.data[i].items[j].text,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this._generateListEles(data);
        this._generateListEleItems(data);

        this.setState({
          data: data,
        });
        console.log(this.state.listEleItems);
      })
      .catch(error => console.error(error));
  };

  _handleRemoveTODOList = name => {
    console.log('todolist will be deleted');
    console.log(name);
    fetch('http://localhost:9000/remove_todo_list?list_name=' + name, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          data: data,
        });
        this._generateListEles(data);
        this._generateListEleItems(data);

        console.log(this.state.listEleItems);
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div>
        <Row style={{ marginTop: 30, marginBottom: 20 }}>
          <Col sm={2}></Col>
          <Col sm={4}>
            <FormControl
              id="addListTextbox"
              type="text"
              value={this.state.inputText}
              onChange={this._handleChange}
              onKeyPress={this._handleKeyPress}
              placeholder="Create your list here, then press enter"
            />
          </Col>
          <Col sm={4}>
            <FormControl
              id="addItemInputText"
              type="text"
              value={this.state.inputItemText}
              onChange={this._handleItemInputChange}
              onKeyPress={this._handleItemInputKeyPress}
              placeholder="Add your list item here, then press enter"
            />
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="clearfix">
              <Col sm={2}></Col>
              <Col sm={4}>
                <Nav>{this.state.listEles}</Nav>
              </Col>
              <Col sm={4} className="clearfix">
                <Tab.Content className="clearfix">{this.state.listEleItems}</Tab.Content>
              </Col>
              <Col sm={2}></Col>
            </Row>
          </Tab.Container>
        </Row>
      </div>
    );
  }
}

export default CreateListText;
