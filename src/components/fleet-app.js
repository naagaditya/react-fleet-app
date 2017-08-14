
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

import { Router, Scene } from 'react-native-router-flux';

const drawerStyles = {
  drawer: { backgroundColor: '#cecece', shadowOpacity: 0.8, shadowRadius: 3},
}

const Home = () => (
  <Text style={{backgroundColor: '#000000'}}>
    Home
  </Text>
)

const About = () => (
  <Text style={{backgroundColor: '#cecece'}}>
    About
  </Text>
)

const Topics = () => (
  <Text style={{backgroundColor: '#ffffff'}}>
    topics
  </Text>
)


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
        <Drawer
          content={<DrawerContent />}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer 
          styles={drawerStyles}
          open={this.state.isDrawerOpen}
          >
          <Router>
            <Scene key="root">
              <Scene key="home"
                component={Home}
                title="Home"
                initial
              />
              <Scene
                key="about"
                component={About}
                title="About"
              />
              <Scene
                key="topics"
                component={Topics}
                title="Topics"
              />
            </Scene>
          </Router>
        </Drawer>
      </Container>
    );
  }
}

export default FleetApp;