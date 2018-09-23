/**
 * @flow
 * @relayHash e3e7b52898982c76ac2876c2cf126efa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ShoppingListDetail_query$ref = any;
export type ShoppingListDetailQueryVariables = {|
  id: string
|};
export type ShoppingListDetailQueryResponse = {|
  +$fragmentRefs: ShoppingListDetail_query$ref
|};
export type ShoppingListDetailQuery = {|
  variables: ShoppingListDetailQueryVariables,
  response: ShoppingListDetailQueryResponse,
|};
*/


/*
query ShoppingListDetailQuery(
  $id: String!
) {
  ...ShoppingListDetail_query
}

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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ShoppingListDetailQuery",
  "id": null,
  "text": "query ShoppingListDetailQuery(\n  $id: String!\n) {\n  ...ShoppingListDetail_query\n}\n\nfragment ShoppingListDetail_query on Query {\n  shoppingList(id: $id) {\n    _id\n    id\n    name\n    items {\n      quantity\n      product {\n        id\n        name\n      }\n    }\n    status\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ShoppingListDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ShoppingListDetail_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "shoppingList",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "String!"
          }
        ],
        "concreteType": "ShoppingList",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "_id",
            "args": null,
            "storageKey": null
          },
          v1,
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": "ShopppingItem",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "quantity",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "product",
                "storageKey": null,
                "args": null,
                "concreteType": "Product",
                "plural": false,
                "selections": [
                  v1,
                  v2
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "status",
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
(node/*: any*/).hash = 'fbc05992b927dd65115d0f721ee9c7a9';
module.exports = node;
