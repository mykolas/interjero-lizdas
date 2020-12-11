import React, {useEffect} from "react"
import ReactDOM from "react-dom"

import Layout from "./Layout"
import {BrowserRouter} from "react-router-dom"
import debounce from "lodash.debounce"
import styles from "./App.module.scss"

const App = () => {
    useEffect(() => {
        const menuElement = window.document.getElementsByClassName(
            styles.menuContainer
        )[0] as HTMLElement
        window.document.documentElement.style.setProperty(
            "--menuHeight",
            `${Math.floor(menuElement.clientHeight)}px`
        )

        const resizeListener = debounce(() => {
            const vh = window.innerHeight * 0.01
            const vw = window.innerWidth * 0.01
            window.document.documentElement.style.setProperty("--vh", `${vh}px`)
            window.document.documentElement.style.setProperty("--vw", `${vw}px`)
        }, 100)

        window.addEventListener("resize", resizeListener)

        return () => window.removeEventListener("resize", resizeListener)
    })

    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
