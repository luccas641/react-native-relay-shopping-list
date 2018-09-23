// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import hoistStatics from 'hoist-non-react-statics';
import environment from '../../createRelayEnvironment';

import { Container, Header, Content, Button, Text } from 'native-base';

import {
  createPaginationContainer,
  graphql,
  QueryRenderer,
  requestSubscription
} from 'react-relay';

import { type ShoppingLists_query } from './__generated__/ShoppingLists_query.graphql';

type Props = {
  query: ShoppingListDetail_query,
};

type State = {
  isFetchingTop: boolean,
};

@withNavigation
class ShoppingLists extends Component<any, Props, State> {
  static navigationOptions = {
    title: 'ShoppingLists',
  };

  state = {
    isFetchingTop: false,

  };

  onRefresh = () => {
    const { shoppingLists } = this.props.query;

    if (this.props.relay.isLoading()) {
      return;
    }

    this.setState({
      isFetchingTop: true,
    })

    this.props.relay.refetchConnection(shoppingLists.edges.length, (err) => {
      this.setState({
        isFetchingTop: false,
      });
    });
  };

  onEndReached = () => {
    
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    // fetch more 2
    this.props.relay.loadMore(2, (err) => {
      console.log('loadMore: ', err);
    });
  };

  renderItem = ({ item }) => {
    const { node } = item;
    
    return (
      <TouchableHighlight
        onPress={() => this.goToShoppingListDetail(node)}
        underlayColor="whitesmoke"
      >
        <View style={styles.shoppingListContainer}>
          <Text>{node.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  goToShoppingListDetail = shoppingList => {
    const { navigate } = this.props.navigation;

    navigate('ShoppingListDetail', { id: shoppingList._id });
  };

  render() {
    const { shoppingLists } = this.props.query;

    return (
      <View>
        <Button block><Text>New List</Text></Button>
        <FlatList
          data={shoppingLists.edges}
          renderItem={this.renderItem}
          keyExtractor={item => item.node._id.toString()}
          onEndReached={this.onEndReached}
          onRefresh={this.onRefresh}
          refreshing={this.state.isFetchingTop}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={this.renderFooter}
        />
        </View>
    );
  }
}

const ShoppingListsPaginationContainer = createPaginationContainer(
  ShoppingLists,
  {
    query: graphql`
      fragment ShoppingLists_query on Query {
        shoppingLists(
          first: $count
          after: $cursor
        ) @connection(key: "ShoppingLists_shoppingLists") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              _id
              name
            }
          }
        }
      } 
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.query && props.query.shoppingLists;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
      };
    },
    variables: { cursor: null },
    query: graphql`
      query ShoppingListsPaginationQuery (
        $count: Int!,
        $cursor: String
      ) {
        ...ShoppingLists_query
      }
    `,
  },
);


const ShoppingListsQueryRenderer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
      query ShoppingListsQuery(
        $count: Int!,
        $cursor: String
      ) {
        ...ShoppingLists_query
      }
    `}
      variables={{cursor: null, count: 10}}
      render={({error, props}) => {
        if (props) {
          return <ShoppingListsPaginationContainer query={props} />;
        } else {
          return (
            <Text>Loading</Text>
          )
        }
      }}
    />
  )
};

export default hoistStatics(ShoppingListsQueryRenderer, ShoppingLists);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
  shoppingListContainer: {
    margin: 20,
  },
});
