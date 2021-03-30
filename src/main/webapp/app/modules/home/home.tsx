import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, Col, Row } from 'reactstrap';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        <h2>Welcome to Demo Project for Appcent Job Interview.</h2>
        <p className="lead">Simple To-Do List Application</p>
        {account && account.login ? (
          <div>
            <Alert color="success">You are logged in as user {account.login}.</Alert>
          </div>
        ) : (
          <div>
            It is a list application where you can write and save your daily work or information you do not want to lose. You can log in to
            your account in the upper right corner and start using this application!
            <br></br>
            <br></br>
          </div>
        )}
        <a rel="noopener noreferrer">
          <p>
            {' '}
            • If you do not have account, <a href={'/signup'}>sign up here.</a>
          </p>
        </a>

        <p>
          <a href="https://www.tarkanbatar.com/" target="_blank" rel="noopener noreferrer">
            <img src={'../../../content/images/portfolio.svg'} style={{ marginRight: '4px' }} />
            Portfolio
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/tarkanbatar" target="_blank" rel="noopener noreferrer">
            <img src={'../../../content/images/linkedin-logo.svg'} style={{ marginRight: '4px' }} />
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://www.github.com/tarkanbatar" target="_blank" rel="noopener noreferrer">
            <img src={'../../../content/images/github.svg'} style={{ marginRight: '4px' }} />
            GitHub
          </a>
        </p>
        <p>
          <a href="http://www.twitter.com/tarkanbatar" target="_blank" rel="noopener noreferrer">
            <img src={'../../../content/images/twitter-sign.svg'} style={{ marginRight: '4px' }} />
            Twitter
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/tarkanbatar" target="_blank" rel="noopener noreferrer">
            <img src={'../../../content/images/instagram-logo.svg'} style={{ marginRight: '4px' }} />
            Instagram
          </a>
        </p>
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
