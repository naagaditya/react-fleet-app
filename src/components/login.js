
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
  Text,
  Content,
  Form,
  Item,
  Input
} from 'native-base';

class Login extends Component {
  constructor(props) {
    super(props);
  };

  login = () => {
    this.props.onLogin && this.props.onLogin();
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Zoom Fleet</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button onPress={this.login} block>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;