
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

import { Router, Scene } from 'react-native-router-flux';

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


class Main extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial />
          <Scene key="about" component={About} title="About"/>
          <Scene key="topics" component={Topics} title="Topics"/>
        </Scene>
      </Router>
    );
  }
}

export default Main;