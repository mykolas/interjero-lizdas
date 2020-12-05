import React, {Suspense} from "react"
import styles from "./App.module.scss"
import {FlexRow, FlexCol} from "components/shared/Flex"
import Projects from "components/Projects/Projects"
import SocialMediaLinks from "components/SocialMediaLinks"
import About from "components/About"
import Logo from "components/Logo"
import Categories from "components/Categories"
import DelayedLoader from "components/shared/DelayedLoader"
import Contacts from "components/Contacts"

const Layout: React.FC = () => (
    <FlexRow alignSelf="center" className={styles.app}>
        <FlexCol className={styles.menuContainer} justifyContent="space-between">
            {/* <LanguageSwitch /> */}
            <Logo />
            <About />
            <Categories />
            <Contacts />
            <SocialMediaLinks />
        </FlexCol>
        <FlexCol className={styles.contentContainer} flexGrow={1}>
            <FlexRow flexWrap="wrap">
                <Suspense fallback={<DelayedLoader delayInSeconds={1} />}>
                    <Projects />
                </Suspense>
            </FlexRow>
        </FlexCol>
    </FlexRow>
)

export default Layout
