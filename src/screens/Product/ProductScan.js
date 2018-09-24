// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import environment from '../../createRelayEnvironment';
import { withNavigation } from 'react-navigation';
import hoistStatics from 'hoist-non-react-statics';
import {BarCodeScanner, Permissions} from 'expo'
import ShoppingListAddItemMutation from '../../mutations/ShoppingListAddItem';

import {
  createPaginationContainer,
  graphql,
  fetchQuery,
  QueryRenderer,
} from 'react-relay';

type Props = {
  query: ProductDetail_query,
};

type State = {
  hasCameraPermission: boolean,
};

@withNavigation
class ProductScan extends Component<any, Props, State> {
  static navigationOptions = {
    title: 'Scan Barcode',
  };

  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    if(this.state.scanned == true) return;
    this.setState({scanned: true})
    const query = graphql`
      query ProductScanSearchProductQuery($ean: String!) {
        product (ean: $ean) {
          name
          id
          _id
        }
      }
    `;
    const variables = {
      ean: data
    };
    const onCompleted = (res) => {
      console.log(res)    
      
    }

    const onError = () => {
      console.log('onError');
    }
    fetchQuery(environment, query, variables)
    .then(data => {
      if (data.product) {
        ShoppingListAddItemMutation.commit({
          _id: this.props.navigation.state.params.shoppingList._id, 
          productId: data.product._id, 
          quantity: 1}, onCompleted, onError)
      } else {
        alert("Product not found")
      }
    });
    this.props.navigation.goBack()
  }
  goToProductDetail = product => {
    const { navigate } = this.props.navigation;

    navigate('ProductDetail', { id: product.id });
  };
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
        </View>
    );
  }
}

export default ProductScan;