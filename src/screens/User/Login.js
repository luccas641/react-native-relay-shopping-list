// @flow

import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {Constants} from 'expo'
import { AsyncStorage } from "react-native"
import UserLoginWithEmailMutation from '../../mutations/UserLoginWithEmail';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

type State = {
  email: string,
  password: string,
};

@withNavigation
export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };
    
  handleLogin = () => {
    const { email, password } = this.state;

    const input = {
      email,
      password,
    }

    const onCompleted = (res) => {
      const { navigate } = this.props.navigation;
      AsyncStorage.setItem("TOKEN", res.UserLoginWithEmail.token);
      navigate('ShoppingLists'); 
    }

    const onError = (err) => {
      console.log('onError', err);
    }

    UserLoginWithEmailMutation.commit(input, onCompleted, onError);
  }

  componentWillMount = async () => {
    const { navigate } = this.props.navigation;
    let token = await AsyncStorage.getItem("TOKEN")
    if(token !== null) {
      navigate('ShoppingLists'); 
    }
  }

  state = {
    email: '',
    password: '',
  };
  render() {
    const { email, password } = this.state;
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input value={email}
              onChangeText={value => this.setState({ email: value })}/>
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} value={password}
              onChangeText={value => this.setState({ password: value })}  />
          </FormItem>

          <Button 
            onPress={() => this.handleLogin()}
            full primary style={{ paddingBottom: 4 }}>
            <Text> Login </Text>
          </Button>
          <Button full light default><Text> Sign Up </Text></Button>
        </Form>
      </Container>
    );
  }
}