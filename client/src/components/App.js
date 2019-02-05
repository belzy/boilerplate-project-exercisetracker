import React, { Component } from 'react';
import { Card, Button, Elevation, Icon, ButtonGroup, Menu, MenuDivider, MenuItem, Popover, Position } from '@blueprintjs/core';
import styled from 'styled-components';
import '@blueprintjs/core/lib/css/blueprint.css';


const menu = (
  <Menu>
    <MenuItem text='User One' />
    <MenuItem text='User Two' />
    <MenuItem text='User Three' />
  </Menu>
);

class App extends Component {
  render() {
    return (
      <AppContainer>
        <h1>Exercise Tracker</h1>

        <Card style={{ width: '300px' }} elevation={ Elevation.TWO }>

          <ButtonGroup>
            <Popover content={ menu } position={ Position.BOTTOM }>
              <Button rightIcon='caret-down' text='Select a User' />
            </Popover>
            <Button icon='plus' />
          </ButtonGroup>


        </Card>

      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`



`;
