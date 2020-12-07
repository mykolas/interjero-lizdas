import React, {useEffect} from "react"
import ReactDOM from "react-dom"

import Layout from "./Layout"
import {BrowserRouter} from "react-router-dom"
import debounce from "lodash.debounce"
import styles from "./App.module.scss"

const App = () => {
    useEffect(() => {
        const resizeListener = debounce(() => {
            const vh = window.innerHeight * 0.01
            const vw = window.innerWidth * 0.01
            window.document.documentElement.style.setProperty("--vh", `${vh}px`)
            window.document.documentElement.style.setProperty("--vw", `${vw}px`)
        }, 100)

        window.addEventListener("resize", resizeListener)

        return () => window.removeEventListener("resize", resizeListener)
    })

    useEffect(() => {
        const contentElement = window.document.getElementsByClassName(styles.contentContainer)[0]
        const maxMarginBottom = 345
        const originalLogoHeight = 50
        const maxLogoHeight = 100
        const logoDif = maxLogoHeight - originalLogoHeight

        const scrollListener = () => {
            const menuMarginBottom = Math.max(-maxMarginBottom, -contentElement.scrollTop)

            const logoHeight = originalLogoHeight + (-menuMarginBottom / maxMarginBottom) * logoDif

            window.document.documentElement.style.setProperty(
                "--menuMarginBottom",
                `${Math.floor(menuMarginBottom)}px`
            )
            window.document.documentElement.style.setProperty(
                "--logoHeight",
                `${Math.floor(logoHeight)}px`
            )
        }

        contentElement.addEventListener("scroll", scrollListener)

        return () => contentElement.removeEventListener("scroll", scrollListener)
    })

    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
