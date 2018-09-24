// @flow

import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {Constants} from 'expo'
import { AsyncStorage, StyleSheet, View } from "react-native"
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
      const { replace } = this.props.navigation;
      if(res.UserLoginWithEmail.token) {
        AsyncStorage.setItem("TOKEN", res.UserLoginWithEmail.token);
        replace('ShoppingLists'); 
      }      
    }

    const onError = (err) => {
      console.log('onError', err);
    }

    UserLoginWithEmailMutation.commit(input, onCompleted, onError);
  }

  componentWillMount = async () => {
    const { replace } = this.props.navigation;
    let token = await AsyncStorage.getItem("TOKEN")
    if(token !== null) {
      replace('ShoppingLists'); 
    }
  }

  goToRegister = () => {
    const { navigate } = this.props.navigation;
    navigate('UserCreate');
  }

  state = {
    email: '',
    password: '',
  };
  render() {
    const { email, password } = this.state;
    return (
      <Container style={styles.container}>
        <Form style={styles.container}>
          <View>
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
          </View>
          <View>
          <Button 
            onPress={() => this.handleLogin()}
            full primary style={{ paddingBottom: 4 }}>
            <Text> Login </Text>
          </Button>
          <Button full light default onPress={() => this.goToRegister()}><Text> Sign Up </Text></Button>
          </View>
          
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
