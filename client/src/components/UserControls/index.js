import React, { Component } from 'react';
import { Menu, MenuItem, ButtonGroup, HTMLSelect, Popover,
  Button, InputGroup, Intent, Position, } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import axios from 'axios';
import styled from 'styled-components';
import AddUserModal from './AddUserModal/index';
import AddExerciseModal from './AddExerciseModal/index';

class UserControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userModalOpen: false,
      exerciseModalOpen: false,
    };

    this.handleExerciseModal = this.handleExerciseModal.bind(this);
    this.handleUserModal = this.handleUserModal.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    const value = e.target.value === 'Select a user...' ? 'User' : e.target.value;
    this.props.setUser(value);
  }

  handleExerciseModal() {
    const exerciseModalOpen = !this.state.exerciseModalOpen;
    this.setState({ exerciseModalOpen });
  }

  handleUserModal() {
    const userModalOpen = !this.state.userModalOpen;
    this.setState({ userModalOpen });
  }

  render() {

    const style = {
      buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
      }
    }

    const menu = (
      <Menu>
        <MenuItem onClick={ this.handleExerciseModal } text='Add Exercise' />
        <MenuItem onClick={ this.handleUserModal } text='Create User' />
        <MenuItem text='Delete User' />
      </Menu>
    );

    const users = this.props.users.map(user => user.username);

    return (
      <ButtonGroup style={ style.buttonGroup }>
        <HTMLSelect options={ ['Select a user...', ...users] } onChange={ this.handleChange } />

        <Popover content={ menu } position={ Position.LEFT }>
          <Button minimal icon='cog' style={{ borderRadius: '50px', outline: 'none', }} />
        </Popover>
        <AddExerciseModal
          handleModal={ this.handleExerciseModal }
          modalOpen={ this.state.exerciseModalOpen }
         />
        <AddUserModal
          handleUserModal={ this.handleUserModal }
          modalOpen={ this.state.userModalOpen }
          addUser={ this.addUser }
          setUsers={ this.props.setUsers }
          username={ this.state.username }
          handleChange={ this.handleChange }
        />
      </ButtonGroup>
    );
  }

}

export default UserControls;
