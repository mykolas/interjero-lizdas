import React from "react"
import {FlexCol} from "./shared/Flex"
import styles from "../App.module.scss"
import SocialMediaLinks from "./SocialMediaLinks"
import {
    trackPhoneClicked,
    trackEmailClicked,
    trackEmailCopied,
    trackPhoneCopied
} from "src/analytics-events/event"

const Contacts: React.SFC = () => (
    <FlexCol className={styles.contactInfo}>
        <a
            href="mailto:interjero.lizdas@gmail.com"
            onClick={() => trackEmailClicked()}
            onCopy={() => trackEmailCopied()}
        >
            interjero.lizdas@gmail.com
        </a>
        <a
            href="tel:+37066234974"
            onClick={() => trackPhoneClicked()}
            onCopy={() => trackPhoneCopied()}
        >
            +37066234974
        </a>
        <SocialMediaLinks />
    </FlexCol>
)

export default Contacts
