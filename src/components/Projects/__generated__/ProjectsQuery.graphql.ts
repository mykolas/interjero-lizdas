/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ProjectsQueryVariables = {};
export type ProjectsQueryResponse = {
    readonly allProject: ReadonlyArray<{
        readonly category: {
            readonly _id: string | null;
        } | null;
        readonly name_lt: string | null;
        readonly name_en: string | null;
        readonly images: ReadonlyArray<{
            readonly asset: {
                readonly url: string | null;
            } | null;
        } | null> | null;
    }>;
};
export type ProjectsQuery = {
    readonly response: ProjectsQueryResponse;
    readonly variables: ProjectsQueryVariables;
};



/*
query ProjectsQuery {
  allProject {
    category {
      _id
    }
    name_lt
    name_en
    images {
      asset {
        url
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Project",
    "kind": "LinkedField",
    "name": "allProject",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "_id",
            "storageKey": null
          }
        ],
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ProjectImages",
        "kind": "LinkedField",
        "name": "images",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SanityImageAsset",
            "kind": "LinkedField",
            "name": "asset",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
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
    "name": "ProjectsQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProjectsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d7143c90186615a16ca6b904cccf37a8",
    "id": null,
    "metadata": {},
    "name": "ProjectsQuery",
    "operationKind": "query",
    "text": "query ProjectsQuery {\n  allProject {\n    category {\n      _id\n    }\n    name_lt\n    name_en\n    images {\n      asset {\n        url\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3ec67f14cd103f1fe7ba33e5aa6fb58d';
export default node;
