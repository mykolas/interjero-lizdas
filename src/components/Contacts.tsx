import React from "react"
import {FlexRow, FlexCol} from "./shared/Flex"
import styles from "../App.module.scss"
import SocialMediaLinks from "./SocialMediaLinks"

const Contacts: React.SFC = () => (
    <FlexCol className={styles.contactInfo}>
        <FlexCol>
            Susisiekite:
            <a href="tel:+3706624974">+3706624974</a>
            <a href="mailto:interjero.lizdas@gmail.com">interjero.lizdas@gmail.com</a>
        </FlexCol>
        <SocialMediaLinks />
    </FlexCol>
)

export default Contacts
