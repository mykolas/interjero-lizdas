import React from "react"
import {FlexRow, FlexCol} from "./shared/Flex"
import styles from "../App.module.scss"

const Contacts: React.SFC = () => (
    <FlexCol className={styles.contactInfo}>
        Susisiekite:
        <a href="tel:+3706624974">+3706624974</a>
        <a href="mailto:interjero.lizdas@gmail.com">interjero.lizdas@gmail.com</a>
    </FlexCol>
)

export default Contacts
