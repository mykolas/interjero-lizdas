import React, {Suspense, lazy} from "react"
import styles from "./App.module.scss"
import {FlexRow, FlexCol} from "components/shared/Flex"
import Projects from "components/Projects/Projects"
import About from "components/About"
import Logo from "components/Logo"
import DelayedLoader from "components/shared/DelayedLoader"
import Contacts from "components/Contacts"

const Categories = lazy(() => import("components/Categories"))

const Layout: React.FC = () => (
    <FlexRow alignSelf="center" className={styles.app}>
        <FlexCol className={styles.menuContainer} justifyContent="space-between">
            {/* <LanguageSwitch /> */}
            <Logo />
            <About />
            <FlexCol className={styles.categories} flexGrow={1}>
                <Suspense fallback={<DelayedLoader delayInSeconds={1} />}>
                    <Categories />
                </Suspense>
            </FlexCol>
            <Contacts />
        </FlexCol>
        <FlexRow
            className={styles.contentContainer}
            flexGrow={1}
            alignContent="start"
            flexWrap="wrap"
        >
            <Suspense fallback={<DelayedLoader delayInSeconds={1} />}>
                <Projects />
            </Suspense>
        </FlexRow>
    </FlexRow>
)

export default Layout
