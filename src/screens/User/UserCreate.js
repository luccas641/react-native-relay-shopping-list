// @flow

import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components/native';

import { Container, Header, Content, Button, Text, Input } from 'native-base';
import UserRegisterWithEmailMutation from '../../mutations/UserRegisterWithEmail';

type State = {
  name: string,
  email: string,
  password: string,
};

@withNavigation
class UserCreate extends Component<any, Props, State> {
  static navigationOptions = {
    title: 'UserCreate',
  };

  handleRegister = () => {
    const { name, email, password } = this.state;

    const input = {
      name,
      email,
      password,
    }

    const onCompleted = (res) => {
      console.log(res)
      const { navigate } = this.props.navigation;
      navigate('UserList');
      
    }

    const onError = () => {
      console.log('onError');
    }

    UserRegisterWithEmailMutation.commit(input, onCompleted, onError);
  }

  state = {
    name: '',
    email: '',
    password: '',
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Container>
        <Content padder style={{ backgroundColor: "#FFF", padding: 20 }}>
        <Input
          name="name"
          placeholder="Name"
          value={name}
          onChangeText={value => this.setState({ name: value })}
        />
        <Input
          name="email"
          placeholder="Email"
          value={email}
          onChangeText={value => this.setState({ email: value })}
        />
        <Input
          name="password"
          placeholder="Password"
          value={password}
          onChangeText={value => this.setState({ password: value })}
          secureTextEntry
        />
        <Button block onPress={() => this.handleRegister()}>
          <Text>Register</Text>
        </Button>
      </Content>
      </Container>
    );
  }
}

export default  UserCreate;