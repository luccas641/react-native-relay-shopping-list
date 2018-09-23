/**
 * @flow
 * @relayHash fe627936397f78e1ef452d916694f384
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShoppingListAddItemInput = {
  _id: string,
  productId: number,
  quantity: number,
  clientMutationId?: ?string,
};
export type ShoppingListAddItemMutationVariables = {|
  input: ShoppingListAddItemInput
|};
export type ShoppingListAddItemMutationResponse = {|
  +ShoppingListAddItem: ?{|
    +error: ?string
  |}
|};
export type ShoppingListAddItemMutation = {|
  variables: ShoppingListAddItemMutationVariables,
  response: ShoppingListAddItemMutationResponse,
|};
*/


/*
mutation ShoppingListAddItemMutation(
  $input: ShoppingListAddItemInput!
) {
  ShoppingListAddItem(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ShoppingListAddItemInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ShoppingListAddItem",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ShoppingListAddItemInput!"
      }
    ],
    "concreteType": "ShoppingListAddItemPayload",
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
  "name": "ShoppingListAddItemMutation",
  "id": null,
  "text": "mutation ShoppingListAddItemMutation(\n  $input: ShoppingListAddItemInput!\n) {\n  ShoppingListAddItem(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ShoppingListAddItemMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListAddItemMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ea717eee5154c05951dd737123649ef';
module.exports = node;
