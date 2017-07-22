import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const NavBar = (props) => (
  <Menu id='nav-bar' pointing >
    <Menu.Item name='home'/>
    <Menu.Item name='messages' />
    <Menu.Item name='friends' />
    <Menu.Menu position='right'>
      <Menu.Item name='join video chat' />
      <Menu.Item>
        <Input icon='users' iconPosition='left' placeholder='Search users...' />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBar;
