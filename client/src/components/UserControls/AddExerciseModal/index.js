import React, { Component } from 'react';
import { Button, Overlay, Card, InputGroup, Intent, } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import axios from 'axios';
import styled from 'styled-components';

class AddExerciseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      description: '',
      duration: '',
      date: '',
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {

    const style = {
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '300px',
      },
      form: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
            <form id='add-exercise-form' action='http://localhost:8080/api/exercise/add' method='post' style={ style.form }>
              <ModalTitle>Add Exercise</ModalTitle>
              <InputGroup type='text' name='userId' placeholder='User ID*' value={ this.state.userId } onChange={ this.handleChange } />
              <InputGroup type='text' name='description' placeholder='Description*' value={ this.state.description } onChange={ this.handleChange }  />
              <InputGroup type='text' name='duration' placeholder='Duration* (mins)' value={ this.state.description } onChange={ this.handleChange }  />
              <InputGroup type='text' name='date' placeholder='Date (yyyy-mm-dd)' value={ this.state.description } onChange={ this.handleChange }  />
              <ButtonContainer>
                <Button type='text' text='Cancel' intent={ Intent.DANGER } small={ true } onClick={ this.props.handleModal } />
                <Button type='submit' text='Submit' intent={ Intent.SUCCESS } small={ true } onClick={ (e) => {
                    this.props.handleModal(e);
                }} />
              </ButtonContainer>
            </form>
          </Card>
        </ModalContainer>
      </Overlay>
    );
  }

}

export default AddExerciseModal;

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
