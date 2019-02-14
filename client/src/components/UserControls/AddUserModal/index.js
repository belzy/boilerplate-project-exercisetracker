import React, { Component } from 'react';
import { Button, Overlay, Card, InputGroup, Intent, } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import axios from 'axios';
import styled from 'styled-components';


class AddUserModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addUser() {
    const url = 'http://localhost:8080/api/exercises/new-user';
    const data = { username: this.state.username };
    axios.post(url, data)
         .then(res => {
           const users = res.data;
           this.props.setUsers(users);
           console.log(users);
         })
         .catch(err => {
           console.log(err);
         })
  }

  render() {

    const style = {
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '150px',
      }
    }

    return (
      <Overlay
        usePortal={ true }
        autoFocus={ true }
        enforceFocus={ true }
        hasBackDrop={ true }
        isOpen={ this.props.modalOpen }
      >
        <ModalContainer>
          <Card style={ style.card }>
            <ModalTitle>Create User</ModalTitle>
            <InputGroup type='text' name='username' placeholder='User Name' value={ this.state.username } onChange={ this.handleChange }  />
            <ButtonContainer>
              <Button text='Cancel' intent={ Intent.DANGER } small={ true } onClick={ this.props.handleUserModal } />
              <Button text='Submit' intent={ Intent.SUCCESS } small={ true } onClick={ (e) => {
                  this.addUser();
                  this.props.handleUserModal(e);
                  this.setState({ username: '', })
              }} />
            </ButtonContainer>
          </Card>
        </ModalContainer>

      </Overlay>
    );
  }

}

export default AddUserModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalTitle = styled.h1`

  text-align: center;
  font-size: 20px;

`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
