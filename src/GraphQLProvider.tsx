import {RelayEnvironmentProvider} from "react-relay/hooks"
import {Environment, Network, RecordSource, Store} from "relay-runtime"

import React from "react"

// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch("https://pzhvpnrz.api.sanity.io/v1/graphql/production/default/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: text,
            variables
        })
    })

    // Get the response as JSON
    return await response.json()
}

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params, variables) {
    console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)
    return fetchGraphQL(params.text, variables)
}

// Export a singleton instance of Relay Environment configured with our network function:
const RelayEnvironment = new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource())
})

const GraphQLProvider: React.SFC = ({children}: {children: React.ReactNode}) => (
    <RelayEnvironmentProvider environment={RelayEnvironment}> {children} </RelayEnvironmentProvider>
)

export default GraphQLProvider
