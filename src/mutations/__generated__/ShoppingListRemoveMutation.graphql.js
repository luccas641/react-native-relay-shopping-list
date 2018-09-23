/**
 * @flow
 * @relayHash 989ed236c004e9cc5b8987a4d8a55d20
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShoppingListRemoveInput = {
  _id: string,
  clientMutationId?: ?string,
};
export type ShoppingListRemoveMutationVariables = {|
  input: ShoppingListRemoveInput
|};
export type ShoppingListRemoveMutationResponse = {|
  +ShoppingListRemove: ?{|
    +error: ?string
  |}
|};
export type ShoppingListRemoveMutation = {|
  variables: ShoppingListRemoveMutationVariables,
  response: ShoppingListRemoveMutationResponse,
|};
*/


/*
mutation ShoppingListRemoveMutation(
  $input: ShoppingListRemoveInput!
) {
  ShoppingListRemove(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ShoppingListRemoveInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ShoppingListRemove",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ShoppingListRemoveInput!"
      }
    ],
    "concreteType": "ShoppingListRemovePayload",
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
  "name": "ShoppingListRemoveMutation",
  "id": null,
  "text": "mutation ShoppingListRemoveMutation(\n  $input: ShoppingListRemoveInput!\n) {\n  ShoppingListRemove(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ShoppingListRemoveMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListRemoveMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1e2fcd69f067596c3e954c135d96c6d1';
module.exports = node;
