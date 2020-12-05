import React, {Suspense} from "react"
import ReactDOM from "react-dom"

import Layout from "./Layout"
import GraphQLProvider from "./GraphQLProvider"
import {BrowserRouter} from "react-router-dom"

const App = () => (
    <GraphQLProvider>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </GraphQLProvider>
)

ReactDOM.render(<App />, document.getElementById("root"))
