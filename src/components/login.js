
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
  Input,
  Spinner
} from 'native-base';
import {postData} from '../api';
import Toast from 'react-native-simple-toast';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: false,
      employee_id: null,
      password: null
    };
  };


  login = () => {
    postData('fleet_users/login', {employee_id:this.state.employee_id, password: this.state.password}).then(data => {
      this.props.onLogin && this.props.onLogin();
    }).catch(errorPromise => {
      errorPromise.then(error => {
        Toast.show(error.errorCode);
      });
    });
  };

  render() {
    let spinner = this.state.showSpinner ? <Spinner /> : null;
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
              <Input placeholder="Username" onChangeText={(text) => this.setState({employee_id:text})}/>
            </Item>
            <Item last>
              <Input secureTextEntry={true} placeholder="Password" onChangeText={(text) => this.setState({password:text})}/>
            </Item>
          </Form>
          <Button onPress={this.login} block>
            <Text>Login</Text>
          </Button>
          {spinner}
        </Content>
      </Container>
    );
  }
}

export default Login;