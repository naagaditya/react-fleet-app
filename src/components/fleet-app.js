
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

import {
  Text,
  View
} from 'react-native'

const DrawerContent = () => (
  <Text>
    DrawerContent
  </Text>
)

const drawerStyles = {
  drawer: { backgroundColor: '#cecece', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

class FleetApp extends Component {
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.openDrawer}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Zoom Fleet</Title>
          </Body>
          <Right />
        </Header>
        <Drawer
          ref={(ref) => this._drawer = ref}
          content={<DrawerContent />}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer 
          styles={drawerStyles}
          >
        </Drawer>
      </Container>
    );
  }
}

export default FleetApp;