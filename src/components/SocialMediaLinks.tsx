import React from "react"
import {FlexRow} from "./shared/Flex"
import styles from "../App.module.scss"

const SocialMediaLinks: React.SFC = () => (
    <FlexRow className={styles.socialLinks} justifyContent="center">
        <a href="https://www.facebook.com/interjerolizdas/" className="fa fa-facebook"></a>
        <a href="https://www.instagram.com/interjerolizdas/" className="fa fa-instagram"></a>
    </FlexRow>
)

export default SocialMediaLinks
