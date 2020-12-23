import React from "react"
import {FlexRow} from "../shared/Flex/Flex"
import styles from "./About.modules.scss"

const About: React.SFC = () => (
    <FlexRow className={styles.about}>
        {
            "JAUKUMAS ESTETIKA UNIKALUMAS\nTai vieni iš kriterijų, kuriais remiamės\nkurdami idealius namus Jums."
        }
    </FlexRow>
)

export default About
