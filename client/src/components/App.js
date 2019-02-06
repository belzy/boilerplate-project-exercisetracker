import React, { Component } from 'react';
import {
  Card, Button, Elevation, Icon, ButtonGroup, Menu,
  MenuDivider, MenuItem, Popover, Position, Overlay,
  InputGroup, Intent, HTMLTable, Checkbox, HTMLSelect,
} from '@blueprintjs/core';
import { Column, Table, SelectionModes } from '@blueprintjs/table';
import styled from 'styled-components';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';






const UserControls = (props) => {

  const style = {
    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
    }
  }

  const menu = (
    <Menu>
      <MenuItem onClick={ props.handleModalOpen } text='Add New User' />
      <MenuItem text='Delete User' />
    </Menu>
  );

  const AddUserModal = (props) => {

    const style = {
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '150px',
      }
    }

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

    return (
      <Overlay
        usePortal={ true }
        autoFocus={ true }
        enforceFocus={ true }
        hasBackDrop={ true }
        isOpen={ props.modalOpen }
      >
        <ModalContainer>
          <Card style={ style.card }>
            <ModalTitle>Add User</ModalTitle>
            <InputGroup type='text' placeholder='User Name'/>
            <ButtonContainer>
              <Button text='Cancel' intent={ Intent.DANGER } small={ true } onClick={ props.handleModalOpen } />
              <Button text='Add' intent={ Intent.SUCCESS } small={ true } />
            </ButtonContainer>
          </Card>
        </ModalContainer>

      </Overlay>
    );
  }

  return (
    <ButtonGroup style={ style.buttonGroup }>
      <HTMLSelect options={['Select a User...', 'User One', 'User Two', 'User Three', ]} />

      <Popover content={ menu } position={ Position.LEFT }>
        <Button minimal icon='cog' style={{ borderRadius: '50px', outline: 'none', }} />
      </Popover>
      <AddUserModal handleModalOpen={ props.handleModalOpen } modalOpen={ props.modalOpen } />
    </ButtonGroup>
  );
}

const ExerciseTable = (props) => {

  const testData = [
    {
      id: '',
      description: 'test-one',
      duration: 'test-one',
      date: 'test-one',
    }, {
      id: '',
      description: 'test-one',
      duration: 'test-one',
      date: 'test-one',
    }, {
      id: '',
      description: 'test-one',
      duration: 'test-one',
      date: 'test-one',
    },
  ];

  const TableContainer = styled.div`

    margin-top: 15px;

  `;

  const TableTitle = styled.h2`

    text-align: center;
    font-size: 24px;
    margin-bottom: 15px;


  `;

  const Row = (props) => {

    const { data } = props;


    return (
      <tr id={ props.id }>
        <td>{ props.index }</td>
        <td>{ data.description }</td>
        <td>{ data.duration }</td>
        <td>{ data.date }</td>
        <td>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '75px', }}>
            <Button minimal icon='edit' intent={ Intent.PRIMARY } />
            <Button minimal icon='trash' intent={ Intent.DANGER } />
          </div>
        </td>
      </tr>
    );
  }

  return (
    <TableContainer>
      <TableTitle>User's Exercises</TableTitle>
      <HTMLTable condensed={ true } bordered={ true } style={{ width: '100%' }}>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {
            testData.map((data, i) => {
              return <Row key={ i } index={ `${ i + 1 }.` } data={ data } />
            })
          }
        </tbody>
      </HTMLTable>
    </TableContainer>

  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);

  }

  handleModalOpen() {
    const modalOpen = !this.state.modalOpen;
    this.setState({ modalOpen });

  }

  render() {
    return (
      <AppContainer>
        <Card style={{ width: '500px' }} elevation={ Elevation.TWO }>
          <CardContainer>
            <UserControls handleModalOpen={ this.handleModalOpen } modalOpen={ this.state.modalOpen } />
            <ExerciseTable />

          </CardContainer>
        </Card>



      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;


`;

const CardContainer = styled.div`

  /* border: 1px solid black; */

`;

const ButtonContainer = styled.div`

  /* border: 1px solid black; */

`;
