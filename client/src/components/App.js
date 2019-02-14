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
import axios from 'axios';
import UserControls from './UserControls/index';


const AddExerciseButton = (props) => {

  const Container = styled.div`

    border: 1px solid black;
    position: relative;
    width: 20px;

  `;

  return (
    <Container>

    </Container>
  );
}

const ExerciseTable = (props) => {

  const testData = [
    {
      id: '',
      description: 'Push ups and situps and 2-mile run',
      duration: '120 min(s)',
      date: '02/11/2019',
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
  const Number = styled.th`

    width: 30px;

  `;
  const Description = styled.th`

    width: 175px;

  `;
  const Duration = styled.th`

    width: 94px;

  `;
  const Date = styled.th`

    width: 80px;

  `;
  const Options = styled.th`


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
      <TableTitle>{`${ props.user }'s Exercises`}</TableTitle>
      <HTMLTable condensed={ true } bordered={ true }>
        <thead>
          <tr>
            <Number></Number>
            <Description>Description</Description>
            <Duration>Duration</Duration>
            <Date>Date</Date>
            <Options>Options</Options>
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
      user: 'User',
      users: [],
    }

    this.getUsers = this.getUsers.bind(this);
    this.setUsers = this.setUsers.bind(this);
    this.setUser = this.setUser.bind(this);

  }

  getUsers() {
    const url = 'http://localhost:8080/api/exercises/users';
    axios.get(url).then(res => {
           const users = res.data;
           this.setState({ users })
           console.log((users));
         }).catch( err => {
           console.log(err);
         });
  }

  setUsers(users) {
    this.setState({ users });
  }
  setUser(user) {
    this.setState({ user });
  }

  componentDidMount() {
    this.getUsers();
  }


  render() {
    return (
      <AppContainer>
        <Card elevation={ Elevation.TWO } style={{ width: '530px' }}>
          <CardContainer>
            <UserControls setUser={ this.setUser } setUsers= { this.setUsers } users={ this.state.users } />
            <ExerciseTable user={ this.state.user } />
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
