import React, {useEffect} from "react"
import debounce from "lodash.debounce"
import styles from "./Layout.modules.scss"
import {FlexRow, FlexCol} from "components/shared/Flex/Flex"
import Projects from "components/Projects/Projects"
import About from "components/About/About"
import Logo from "components/Logo/Logo"
import Contacts from "components/Contacts/Contacts"
import Categories from "components/Categories/Categories"
import {Route, Switch} from "react-router-dom"
import ServicesAndPrices from "components/ServicesAndPrices/ServicesAndPrices"

const trackMenuHeight = () => {
    const menuListener = () => {
        const menuElement = window.document.getElementsByClassName(
            styles.menuContainer
        )[0] as HTMLElement
        window.document.documentElement.style.setProperty(
            "--menuHeight",
            `${Math.floor(menuElement.clientHeight)}px`
        )
    }
    menuListener()

    window.addEventListener("resize", menuListener)

    return () => window.removeEventListener("resize", menuListener)
}

const trackWindowSize = () => {
    const resizeListener = debounce(() => {
        const vh = window.innerHeight * 0.01
        const vw = window.innerWidth * 0.01
        window.document.documentElement.style.setProperty("--vh", `${vh}px`)
        window.document.documentElement.style.setProperty("--vw", `${vw}px`)
    }, 100)
    resizeListener()

    window.addEventListener("resize", resizeListener)

    return () => window.removeEventListener("resize", resizeListener)
}

const Layout: React.FC = () => {
    useEffect(trackMenuHeight)
    useEffect(trackWindowSize)

    return (
        <FlexRow className={styles.app}>
            <FlexCol className={styles.menuContainer}>
                <Logo />
                <About />
                <Categories />
                <Contacts />
            </FlexCol>
            <FlexRow className={styles.contentContainer}>
                <Switch>
                    <Route path="/Paslaugos" component={ServicesAndPrices} />
                    <Route path="/" component={Projects} />
                </Switch>
            </FlexRow>
        </FlexRow>
    )
}

export default Layout
