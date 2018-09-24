// @flow

import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components/native';

import { Container, Header, Content, Button, Text, Input } from 'native-base';
import ShoppingListNew from '../../mutations/ShoppingListNew';

type State = {
  name: string
};

@withNavigation
class UserCreate extends Component<any, Props, State> {
  static navigationOptions = {
    title: 'New Shopping List',
  };

  handleRegister = () => {
    const { name } = this.state;

    const input = {
      name
    }

    const onCompleted = (res) => {
      const { navigate } = this.props.navigation;
      navigate('ShoppingLists');
      
    }

    const onError = () => {
      console.log('onError');
    }

    ShoppingListNew.commit(input, onCompleted, onError);
  }

  state = {
    name: '',
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
      
        <Button block onPress={() => this.handleRegister()}>
          <Text>Add</Text>
        </Button>
      </Content>
      </Container>
    );
  }
}

export default  UserCreate;