import React, { Component } from 'react';
import {
  Container,
  Button,
  Text
} from 'native-base';

class DrawerContent extends Component {
  render () {
    return (
      <Container>
        <Button full light>
          <Text>Summary</Text>
        </Button>
        <Button full light>
          <Text>Bookings</Text>
        </Button>
        <Button full light>
          <Text>Carblock</Text>
        </Button>
        <Button full light>
          <Text>Cars</Text>
        </Button>
      </Container>
    );
  }
};

export default DrawerContent;