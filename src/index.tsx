import React from "react"
import ReactDOM from "react-dom"
import Layout from "./components/Layout/Layout"
import {BrowserRouter} from "react-router-dom"

import "./App.scss"

const App = () => (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById("root"))
