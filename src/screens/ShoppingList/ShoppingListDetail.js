// @flow

import React, { Component } from 'react';
import { withNavigation, NavigationEvents } from 'react-navigation';
import { StyleSheet,Text, Image, View,
  FlatList, TouchableHighlight } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Icon, Title, Button} from 'native-base'

import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
  requestSubscription
} from 'react-relay';
import environment from '../../createRelayEnvironment';

import { type ShoppingListDetail_query } from './__generated__/ShoppingListDetail_query.graphql';

type Props = {
  query: ShoppingListDetail_query,
};

type State = {
  isFetchingTop: boolean,
};

@withNavigation
class ShoppingListDetail extends Component<void, Props, any> {
  static navigationOptions = {
    title: 'Detail',
  };
  state = {
    isFetchingTop: false,

  };

  renderItem = ({item}) => {
    return (
      <TouchableHighlight
        underlayColor="white"
      >
        <View style={styles.shoppingListContainer}>
          <Text>{item.quantity}x</Text>
          <Text>{item.product.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  onRefresh = () => {
    if (this.state.isFetchingTop) {
      return;
    }

    this.setState({
      isFetchingTop: true,
    })

    this.props.relay.refetch({id: this.props.navigation.state.params.id}, null, (err) => {
      this.setState({
        isFetchingTop: false,
      });
    });
  };


  goToScanProduct = user => {
    const { navigate } = this.props.navigation;
    navigate('ProductScan', {shoppingList: this.props.query.shoppingList});
  };

  render() {
    const { shoppingList } = this.props.query;
    return (
      <View style={styles.container}>
       <NavigationEvents
          onWillFocus={this.onRefresh}
        />
        {shoppingList ? <FlatList
          data={shoppingList.items}
          renderItem={this.renderItem}
          onRefresh={this.onRefresh}
          refreshing={this.state.isFetchingTop}
          keyExtractor={item => item.product.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={this.renderFooter}
        /> : <View></View>}
        
        <Button full primary onPress={() => this.goToScanProduct()}>
          <Icon name='search' />
        </Button>
      </View>
    );
  }
}

// ShoppingListDetailFragmentContainer
const ShoppingListDetailFragmentContainer = createRefetchContainer(
  ShoppingListDetail,
  graphql`
    fragment ShoppingListDetail_query on Query {
      shoppingList(id: $id) {
        _id
        id
        name
        items {
          quantity
          product {
            id
            name
          }
        }
        status
      }
    }
  `,
  graphql`
    query ShoppingListDetailRefetchQuery($id: String!) {
        ...ShoppingListDetail_query
    }
  `
);

// ShoppingListDetailQueryRenderer
const ShoppingListDetailQueryRenderer = ({ navigation }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
      query ShoppingListDetailQuery($id: String!) {
        ...ShoppingListDetail_query
      }
    `}
      variables={{id: navigation.state.params.id}}
      render={({error, props}) => {
        if (props) {
          return <ShoppingListDetailFragmentContainer query={props} />;
        } else {
          return (
            <Text>Loading</Text>
          )
        }
      }}
    />
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
  shoppingListContainer: {
    margin: 20,
  },  
});

export default ShoppingListDetailQueryRenderer;
