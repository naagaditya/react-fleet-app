import React, { Component } from 'react';
import {
  Container,
  Button,
  Text,
  View
} from 'native-base';

import { Actions } from 'react-native-router-flux';

class DrawerContent extends Component {
  render () {
    return (
      <Container>
        <Button full light onPress={() => Actions.home()}>
          <Text>Home</Text>
        </Button>
        <Button full light onPress={() => Actions.about()}>
          <Text>About</Text>
        </Button>
        <Button full light onPress={() => Actions.topics()}>
          <Text>Topics</Text>
        </Button>
      </Container>
    );
  }
};

export default DrawerContent;