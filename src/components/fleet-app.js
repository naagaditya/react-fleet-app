
import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  View,
  Text
} from 'native-base';

import Drawer from 'react-native-drawer';

import DrawerContent from '../components/drawer-content';
import Main from '../components/main';
import Login from '../components/login';

const drawerStyles = {
  drawer: { backgroundColor: '#cecece', shadowOpacity: 0.8, shadowRadius: 3},
}

class FleetApp extends Component {
  constructor() {
    super();
    this.state = {
      isDrawerOpen: false,
      isUserLoggedIn: true
    };
  };

  closeDrawer = () => {
    this.setState({isDrawerOpen: false});
  };
  openDrawer = () => {
    this.setState({isDrawerOpen: true});
  };
  toggleDrawer = () => {
    this.setState({isDrawerOpen: !this.state.isDrawerOpen});
  };


  render() {
    const drawerContent = <DrawerContent onCloseDrawer={this.closeDrawer} />;
    const fleetAppContent = 
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.toggleDrawer}>
              <Icon name="menu"/>
            </Button>
          </Left>
          <Body>
            <Title>Zoom Fleet</Title>
          </Body>
          <Right />
        </Header>
        <Drawer
          content={drawerContent}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer 
          styles={drawerStyles}
          open={this.state.isDrawerOpen}
        >
          <Main/>
        </Drawer>
      </Container>;


    return (this.state.isUserLoggedIn ? fleetAppContent : <Login/>);
  }
}

export default FleetApp;