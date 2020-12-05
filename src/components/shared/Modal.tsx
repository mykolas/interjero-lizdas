import React, {useCallback, useEffect} from "react"
import styles from "./Modal.module.scss"

interface IModal {
    onClose()
}

const Modal: React.FC<IModal> = ({children, onClose}) => {
    const escFunction = useCallback((event) => event.keyCode === 27 && onClose(), [onClose])

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false)

        return () => {
            document.removeEventListener("keydown", escFunction, false)
        }
    }, [escFunction])
    return (
        <div className={styles.modal}>
            <div className={styles.close} onClick={onClose}>
                ×
            </div>
            {children}
        </div>
    )
}

export default Modal
