import React from "react"
import styles from "../App.module.scss"

const Logo: React.SFC = () => (
    <img
        height={50}
        width={310}
        className={styles.logo}
        src="https://cdn.sanity.io/images/pzhvpnrz/production/8dc618a42ad6db4c3b1d283b52781b4d8c6711df-1080x372.png?h=160&fm=webp"
    />
)

export default Logo
