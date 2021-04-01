import React from 'react';

import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Entities" id="entity-menu" data-cy="todo.entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    {/* jhipster-needle-add-todo.entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
