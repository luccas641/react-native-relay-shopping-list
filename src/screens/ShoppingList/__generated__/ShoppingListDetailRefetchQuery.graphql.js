/**
 * @flow
 * @relayHash a35212467afb5aff45d723334bc59ce1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ShoppingListDetail_query$ref = any;
export type ShoppingListDetailRefetchQueryVariables = {|
  id: string
|};
export type ShoppingListDetailRefetchQueryResponse = {|
  +$fragmentRefs: ShoppingListDetail_query$ref
|};
export type ShoppingListDetailRefetchQuery = {|
  variables: ShoppingListDetailRefetchQueryVariables,
  response: ShoppingListDetailRefetchQueryResponse,
|};
*/


/*
query ShoppingListDetailRefetchQuery(
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
  "name": "ShoppingListDetailRefetchQuery",
  "id": null,
  "text": "query ShoppingListDetailRefetchQuery(\n  $id: String!\n) {\n  ...ShoppingListDetail_query\n}\n\nfragment ShoppingListDetail_query on Query {\n  shoppingList(id: $id) {\n    _id\n    id\n    name\n    items {\n      quantity\n      product {\n        id\n        name\n      }\n    }\n    status\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ShoppingListDetailRefetchQuery",
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
    "name": "ShoppingListDetailRefetchQuery",
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
(node/*: any*/).hash = '0c21c6ea8870858ff20d21d7c4536e98';
module.exports = node;
