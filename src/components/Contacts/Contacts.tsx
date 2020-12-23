import React from "react"
import {FlexCol} from "../shared/Flex"
import styles from "./Contacts.modules.scss"
import SocialMediaLinks from "../SocialLinks/SocialLinks"
import {
    trackPhoneClicked,
    trackEmailClicked,
    trackEmailCopied,
    trackPhoneCopied
} from "src/analytics-events/event"

const Contacts: React.SFC = () => (
    <FlexCol className={styles.contacts}>
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
            +370 662 34974
        </a>
        <SocialMediaLinks />
    </FlexCol>
)

export default Contacts
