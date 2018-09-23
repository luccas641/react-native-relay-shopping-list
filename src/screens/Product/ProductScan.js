// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import hoistStatics from 'hoist-non-react-statics';
import {BarCodeScanner, Permissions} from 'expo'

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
  hasCameraPermission: boolean,
};

@withNavigation
class ProductList extends Component<any, Props, State> {
  static navigationOptions = {
    title: 'ProductList',
  };

  state = {
    hasCameraPermission: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }
  goToProductDetail = product => {
    const { navigate } = this.props.navigation;

    navigate('ProductDetail', { id: product.id });
  };

  render() {
    const { products } = this.props.query;

    return (
      <View>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
        </View>
    );
  }
}

export default hoistStatics(ProductListQueryRenderer, ProductList);