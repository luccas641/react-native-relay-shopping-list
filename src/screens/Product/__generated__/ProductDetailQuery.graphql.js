/**
 * @flow
 * @relayHash 852880723284217468be57380b51f962
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductDetail_query$ref = any;
export type ProductDetailQueryVariables = {|
  id?: ?number
|};
export type ProductDetailQueryResponse = {|
  +$fragmentRefs: ProductDetail_query$ref
|};
export type ProductDetailQuery = {|
  variables: ProductDetailQueryVariables,
  response: ProductDetailQueryResponse,
|};
*/


/*
query ProductDetailQuery(
  $id: Int
) {
  ...ProductDetail_query
}

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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProductDetailQuery",
  "id": null,
  "text": "query ProductDetailQuery(\n  $id: Int\n) {\n  ...ProductDetail_query\n}\n\nfragment ProductDetail_query on Query {\n  product(id: $id) {\n    id\n    name\n    brand\n    price\n    ean\n    image\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProductDetail_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "product",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "Int"
          }
        ],
        "concreteType": "Product",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "brand",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "ean",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "image",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c74f0f2e7a65ecf755959c7d79ec9558';
module.exports = node;
