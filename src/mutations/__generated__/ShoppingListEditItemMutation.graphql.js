/**
 * @flow
 * @relayHash 1166b5fbfcd703affafd3c1ca31ebed5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShoppingListEditItemInput = {
  _id: string,
  productId: number,
  quantity: number,
  clientMutationId?: ?string,
};
export type ShoppingListEditItemMutationVariables = {|
  input: ShoppingListEditItemInput
|};
export type ShoppingListEditItemMutationResponse = {|
  +ShoppingListEditItem: ?{|
    +error: ?string
  |}
|};
export type ShoppingListEditItemMutation = {|
  variables: ShoppingListEditItemMutationVariables,
  response: ShoppingListEditItemMutationResponse,
|};
*/


/*
mutation ShoppingListEditItemMutation(
  $input: ShoppingListEditItemInput!
) {
  ShoppingListEditItem(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ShoppingListEditItemInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ShoppingListEditItem",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ShoppingListEditItemInput!"
      }
    ],
    "concreteType": "ShoppingListEditItemPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ShoppingListEditItemMutation",
  "id": null,
  "text": "mutation ShoppingListEditItemMutation(\n  $input: ShoppingListEditItemInput!\n) {\n  ShoppingListEditItem(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ShoppingListEditItemMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListEditItemMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6004f939f6e71f77b8127906a711c22b';
module.exports = node;
