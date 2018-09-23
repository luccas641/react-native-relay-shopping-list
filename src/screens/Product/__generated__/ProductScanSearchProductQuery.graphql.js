/**
 * @flow
 * @relayHash 521024b3f981895e707954366026b543
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductScanSearchProductQueryVariables = {|
  ean: string
|};
export type ProductScanSearchProductQueryResponse = {|
  +product: ?{|
    +name: ?string,
    +id: string,
    +_id: ?number,
  |}
|};
export type ProductScanSearchProductQuery = {|
  variables: ProductScanSearchProductQueryVariables,
  response: ProductScanSearchProductQueryResponse,
|};
*/


/*
query ProductScanSearchProductQuery(
  $ean: String!
) {
  product(ean: $ean) {
    name
    id
    _id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "ean",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "product",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ean",
        "variableName": "ean",
        "type": "String"
      }
    ],
    "concreteType": "Product",
    "plural": false,
    "selections": [
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
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProductScanSearchProductQuery",
  "id": null,
  "text": "query ProductScanSearchProductQuery(\n  $ean: String!\n) {\n  product(ean: $ean) {\n    name\n    id\n    _id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductScanSearchProductQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductScanSearchProductQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c438a6c81ebd23d28461fe9185f8406';
module.exports = node;
