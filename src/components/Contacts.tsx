import React from "react"
import {FlexRow, FlexCol} from "./shared/Flex"
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
        <FlexCol>
            Susisiekite:
            <a
                href="tel:+37066234974"
                onClick={() => trackPhoneClicked()}
                onCopy={() => trackPhoneCopied()}
            >
                +37066234974
            </a>
            <a
                href="mailto:interjero.lizdas@gmail.com"
                onClick={() => trackEmailClicked()}
                onCopy={() => trackEmailCopied()}
            >
                interjero.lizdas@gmail.com
            </a>
        </FlexCol>
        <SocialMediaLinks />
    </FlexCol>
)

export default Contacts
