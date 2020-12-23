import React from "react"
import styles from "./DelayedLoader.module.scss"
import {useDelayedVisibility} from "../hooks/useDelayedVisibility"

interface IDelayedLoader {
    delayInMilliseconds: number
}

const DelayedLoader: React.FC<IDelayedLoader> = ({delayInMilliseconds}) => {
    const isVisible = useDelayedVisibility(delayInMilliseconds)

    return (
        <>
            {isVisible && (
                <div className={styles.loader}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </>
    )
}

export default DelayedLoader
