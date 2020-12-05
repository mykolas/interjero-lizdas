import React, {useState, useEffect} from "react"
import styles from "./DelayedLoader.module.scss"

interface IDelayedLoader {
    delayInSeconds: number
}

const DelayedLoader: React.FC<IDelayedLoader> = ({delayInSeconds}) => {
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), delayInSeconds * 1000)
        return () => clearTimeout(timeout)
    })

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
