/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CategoriesQueryVariables = {};
export type CategoriesQueryResponse = {
    readonly allCategory: ReadonlyArray<{
        readonly _id: string | null;
        readonly name_lt: string | null;
        readonly name_en: string | null;
    }>;
};
export type CategoriesQuery = {
    readonly response: CategoriesQueryResponse;
    readonly variables: CategoriesQueryVariables;
};



/*
query CategoriesQuery {
  allCategory {
    _id
    name_lt
    name_en
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "allCategory",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name_lt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name_en",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoriesQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CategoriesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ca1749dda5db9e535b2973afd62ec2ae",
    "id": null,
    "metadata": {},
    "name": "CategoriesQuery",
    "operationKind": "query",
    "text": "query CategoriesQuery {\n  allCategory {\n    _id\n    name_lt\n    name_en\n  }\n}\n"
  }
};
})();
(node as any).hash = '2cfebd62d5be8e56a66874585128487d';
export default node;
