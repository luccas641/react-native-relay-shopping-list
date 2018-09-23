/**
 * @flow
 * @relayHash 81621aba5740083287b17b0748edf121
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShoppingListNewInput = {
  name: string,
  clientMutationId?: ?string,
};
export type ShoppingListNewMutationVariables = {|
  input: ShoppingListNewInput
|};
export type ShoppingListNewMutationResponse = {|
  +ShoppingListNew: ?{|
    +error: ?string
  |}
|};
export type ShoppingListNewMutation = {|
  variables: ShoppingListNewMutationVariables,
  response: ShoppingListNewMutationResponse,
|};
*/


/*
mutation ShoppingListNewMutation(
  $input: ShoppingListNewInput!
) {
  ShoppingListNew(input: $input) {
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ShoppingListNewInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ShoppingListNew",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ShoppingListNewInput!"
      }
    ],
    "concreteType": "ShoppingListNewPayload",
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
  "name": "ShoppingListNewMutation",
  "id": null,
  "text": "mutation ShoppingListNewMutation(\n  $input: ShoppingListNewInput!\n) {\n  ShoppingListNew(input: $input) {\n    error\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ShoppingListNewMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingListNewMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d929f932b3b4fec52500998261654e6';
module.exports = node;
