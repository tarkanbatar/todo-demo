import React from 'react';

import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConfig from 'app/config/constants';

export const BrandIcon = props => (
  <div {...props} className="brand-icon" style={{ backgroundColor: '#004225' }}>
    <img src="content/images/logo-jhipster.png" alt="Logo" />
  </div>
);

export const Brand = props => (
  <NavbarBrand tag={Link} to="/" className="brand-logo" style={{ backgroundColor: '#004225' }}>
    <BrandIcon />
    <span className="brand-title" style={{ marginLeft: '12px' }}>
      Todo List Demo
    </span>
  </NavbarBrand>
);

export const Home = props => (
  <NavItem style={{ backgroundColor: '#004225' }}>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>Home</span>
    </NavLink>
  </NavItem>
);
