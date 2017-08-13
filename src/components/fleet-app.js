
import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base';

import Drawer from 'react-native-drawer';

import DrawerContent from '../components/drawer-content';

const drawerStyles = {
  drawer: { backgroundColor: '#cecece', shadowOpacity: 0.8, shadowRadius: 3},
}

class FleetApp extends Component {
  constructor(props) {
    super(props);
    this.state = {isDrawerOpen: false};
  }

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
    return (
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
        {this.isDrawerOpen}
        <Drawer
          content={<DrawerContent />}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer 
          styles={drawerStyles}
          open={this.state.isDrawerOpen}
          >
        </Drawer>
      </Container>
    );
  }
}

export default FleetApp;