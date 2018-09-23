/**
 * @flow
 * @relayHash 42760e75a64c98a7d0da2aee18dd81d9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserLoginWithEmailInput = {
  email: string,
  password: string,
  clientMutationId?: ?string,
};
export type UserLoginWithEmailMutationVariables = {|
  input: UserLoginWithEmailInput
|};
export type UserLoginWithEmailMutationResponse = {|
  +UserLoginWithEmail: ?{|
    +error: ?string,
    +token: ?string,
    +clientMutationId: ?string,
  |}
|};
export type UserLoginWithEmailMutation = {|
  variables: UserLoginWithEmailMutationVariables,
  response: UserLoginWithEmailMutationResponse,
|};
*/


/*
mutation UserLoginWithEmailMutation(
  $input: UserLoginWithEmailInput!
) {
  UserLoginWithEmail(input: $input) {
    error
    token
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserLoginWithEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserLoginWithEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UserLoginWithEmailInput!"
      }
    ],
    "concreteType": "UserLoginWithEmailPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UserLoginWithEmailMutation",
  "id": null,
  "text": "mutation UserLoginWithEmailMutation(\n  $input: UserLoginWithEmailInput!\n) {\n  UserLoginWithEmail(input: $input) {\n    error\n    token\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserLoginWithEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UserLoginWithEmailMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cf8baacda9302091218329edad6c4b56';
module.exports = node;
