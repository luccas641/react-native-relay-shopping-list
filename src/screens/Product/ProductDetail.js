// @flow

import React, { Component } from 'react';
import { StyleSheet,Text, Image, View } from 'react-native';
import { Container, Content, Header} from 'native-base'

import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';
import environment from '../../createRelayEnvironment';

import { type ProductDetail_query } from './__generated__/ProductDetail_query.graphql';

type Props = {
  query: ProductDetail_query,
};

class ProductDetail extends Component<void, Props, any> {
  static navigationOptions = {
    title: 'ProductDetail',
  };

  render() {
    const { product } = this.props.query;

    return (
      <Container>
        <Content>
        <Image source={{uri: product.image}} style={{height: 200, width: null, flex: 1}}/>
        <Text>Name: {product.name}</Text>
        <Text>Brand: {product.brand}</Text>
        <Text>Price: R$ {product.price}</Text>
        <Text>EAN: {product.ean}</Text>
      </Content></Container>
    );
  }
}

// ProductDetailFragmentContainer
const ProductDetailFragmentContainer = createFragmentContainer(
  ProductDetail,
  graphql`
    fragment ProductDetail_query on Query {
      product(id: $id) {
        id
        name
        brand
        price
        ean
        image
      }
    }
  `,
);

// ProductDetailQueryRenderer
const ProductDetailQueryRenderer = ({ navigation }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
      query ProductDetailQuery($id: Int) {
        ...ProductDetail_query
      }
    `}
      variables={{id: navigation.state.params.id}}
      render={({error, props}) => {
        if (props) {
          return <ProductDetailFragmentContainer query={props} />;
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductDetailQueryRenderer;
