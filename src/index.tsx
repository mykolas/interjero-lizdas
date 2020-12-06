import React, {Suspense, useEffect} from "react"
import ReactDOM from "react-dom"

import Layout from "./Layout"
import GraphQLProvider from "./GraphQLProvider"
import {BrowserRouter} from "react-router-dom"

const App = () => {
    useEffect(() => {
        const vh = window.innerHeight * 0.01
        const vw = window.innerWidth * 0.01
        window.document.documentElement.style.setProperty("--vh", `${vh}px`)
        window.document.documentElement.style.setProperty("--vw", `${vw}px`)
    })

    return (
        <GraphQLProvider>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </GraphQLProvider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
