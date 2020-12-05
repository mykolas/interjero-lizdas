import React from "react"
import {FlexRow} from "./shared/Flex"
import styles from "../App.module.scss"

const LanguageSwitch: React.SFC = () => (
    <FlexRow justifyContent="flex-end" className={styles.languages}>
        LT | EN
    </FlexRow>
)
export default LanguageSwitch
