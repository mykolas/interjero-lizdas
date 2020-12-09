import React from "react"
import styles from "./App.module.scss"
import {FlexRow, FlexCol} from "components/shared/Flex"
import Projects from "components/Projects/Projects"
import About from "components/About"
import Logo from "components/Logo"
import Contacts from "components/Contacts"
import Categories from "components/Categories"

const Layout: React.FC = () => {
    return (
        <FlexRow alignSelf="center" className={styles.app}>
            <FlexCol className={styles.menuContainer} justifyContent="space-between">
                <Logo />
                <About />
                <Categories />
                <Contacts />
            </FlexCol>
            <FlexRow
                className={styles.contentContainer}
                flexGrow={1}
                alignContent="start"
                flexWrap="wrap"
            >
                <Projects />
            </FlexRow>
        </FlexRow>
    )
}

export default Layout
