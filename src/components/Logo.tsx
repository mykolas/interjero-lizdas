import React, {useCallback} from "react"
import styles from "../App.module.scss"
import {useHistory} from "react-router-dom"

const Logo: React.SFC = () => {
    const history = useHistory()
    const handleOnClick = useCallback(() => history.push("/", {}), [history])

    return (
        <img
            height={50}
            width={310}
            className={styles.logo}
            onClick={handleOnClick}
            src="https://cdn.sanity.io/images/pzhvpnrz/production/8dc618a42ad6db4c3b1d283b52781b4d8c6711df-1080x372.png?h=160&fm=webp"
        />
    )
}

export default Logo
