import React from "react"
import {FlexRow} from "./shared/Flex"
import styles from "../App.module.scss"

const About: React.SFC = () => (
    <FlexRow className={styles.contactInfo}>
        {
            "JAUKUMAS ESTETIKA UNIKALUMAS\nTai vieni iš kriterijų, kuriais remiamės\nkurdami idealius namus Jums."
        }
    </FlexRow>
)

export default About
