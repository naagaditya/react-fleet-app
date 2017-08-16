import React, { Component } from 'react';
import {
  Container,
  Button,
  Text,
  View
} from 'native-base';

import { Actions } from 'react-native-router-flux';

class DrawerContent extends Component {

  constructor(props) {
    super(props);
  }

  changeScene = (sceneName) => {
    Actions[sceneName]();
    this.props.onCloseDrawer && this.props.onCloseDrawer();
  };

  render () {
    return (
      <Container>
        <Button full light onPress={() => this.changeScene('home')}>
          <Text>Home</Text>
        </Button>
        <Button full light onPress={() => this.changeScene('about')}>
          <Text>About</Text>
        </Button>
        <Button full light onPress={() => this.changeScene('topics')}>
          <Text>Topics</Text>
        </Button>
      </Container>
    );
  }
};

export default DrawerContent;
