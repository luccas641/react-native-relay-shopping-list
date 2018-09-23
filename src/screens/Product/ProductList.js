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
} from 'react-relay';

import { type ProductList_query } from './__generated__/ProductList_query.graphql';

type Props = {
  query: ProductDetail_query,
};

type State = {
  isFetchingTop: boolean,
};

@withNavigation
class ProductList extends Component<any, Props, State> {
  static navigationOptions = {
    title: 'ProductList',
  };

  state = {
    isFetchingTop: false,

  };

  onRefresh = () => {
    const { products } = this.props.query;

    if (this.props.relay.isLoading()) {
      return;
    }

    this.setState({
      isFetchingTop: true,
    })

    this.props.relay.refetchConnection(products.edges.length, (err) => {
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
        onPress={() => this.goToProductDetail(node)}
        underlayColor="whitesmoke"
      >
        <View style={styles.productContainer}>
          <Text>{node.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  goToProductDetail = product => {
    const { navigate } = this.props.navigation;

    navigate('ProductDetail', { id: product._id });
  };

  render() {
    const { products } = this.props.query;

    return (
      <View>
        <FlatList
          data={products.edges}
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

const ProductListPaginationContainer = createPaginationContainer(
  ProductList,
  {
    query: graphql`
      fragment ProductList_query on Query {
        products(
          first: $count
          after: $cursor
        ) @connection(key: "ProductList_products") {
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
      return props.query && props.query.products;
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
      query ProductListPaginationQuery (
        $count: Int!,
        $cursor: String
      ) {
        ...ProductList_query
      }
    `,
  },
);


const ProductListQueryRenderer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
      query ProductListQuery(
        $count: Int!,
        $cursor: String
      ) {
        ...ProductList_query
      }
    `}
      variables={{cursor: null, count: 10}}
      render={({error, props}) => {
        if (props) {
          return <ProductListPaginationContainer query={props} />;
        } else {
          return (
            <Text>Loading</Text>
          )
        }
      }}
    />
  )
};

export default hoistStatics(ProductListQueryRenderer, ProductList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
  productContainer: {
    margin: 20,
  },
});
