/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import {FlexRow} from "../shared/Flex/Flex"
import styles from "./SocialLinks.modules.scss"
import {trackSocialLink} from "src/analytics-events/event"

const Instagram = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
            fill="currentColor"
        />
        <path
            d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            fill="currentColor"
        />
    </svg>
)

const Facebook = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
            fill="currentColor"
        />
    </svg>
)

const SocialMediaLinks: React.SFC = () => (
    <FlexRow className={styles.socialLinks}>
        <a
            href="https://www.facebook.com/interjerolizdas/"
            target="_blank"
            onClick={() => trackSocialLink("facebook")}
        >
            <Facebook />
        </a>
        <a
            href="https://www.instagram.com/interjerolizdas/"
            target="_blank"
            onClick={() => trackSocialLink("instagram")}
        >
            <Instagram />
        </a>
    </FlexRow>
)

export default SocialMediaLinks
