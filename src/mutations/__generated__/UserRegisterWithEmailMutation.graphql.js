/**
 * @flow
 * @relayHash 54268f1b4c63761e39b0c6488b54b85f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRegisterWithEmailInput = {
  name: string,
  email: string,
  password: string,
  clientMutationId?: ?string,
};
export type UserRegisterWithEmailMutationVariables = {|
  input: UserRegisterWithEmailInput
|};
export type UserRegisterWithEmailMutationResponse = {|
  +UserRegisterWithEmail: ?{|
    +error: ?string,
    +token: ?string,
    +clientMutationId: ?string,
  |}
|};
export type UserRegisterWithEmailMutation = {|
  variables: UserRegisterWithEmailMutationVariables,
  response: UserRegisterWithEmailMutationResponse,
|};
*/


/*
mutation UserRegisterWithEmailMutation(
  $input: UserRegisterWithEmailInput!
) {
  UserRegisterWithEmail(input: $input) {
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
    "type": "UserRegisterWithEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserRegisterWithEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UserRegisterWithEmailInput!"
      }
    ],
    "concreteType": "UserRegisterWithEmailPayload",
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
  "name": "UserRegisterWithEmailMutation",
  "id": null,
  "text": "mutation UserRegisterWithEmailMutation(\n  $input: UserRegisterWithEmailInput!\n) {\n  UserRegisterWithEmail(input: $input) {\n    error\n    token\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserRegisterWithEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UserRegisterWithEmailMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd0b6f7eab5ff7593c2fae98316468a18';
module.exports = node;
